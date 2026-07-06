<template>
  <div class="gallery-container">
    <!-- Search Bar -->
    <div class="search-container">
      <input v-model="searchQuery" type="text" placeholder="Search gallery by title..." class="search-bar" />
    </div>

    <!-- Category Tabs -->
    <div class="tabs">
      <button v-for="cat in categoriesList" :key="cat" :class="{ active: selectedCategory === cat }"
        @click="selectedCategory = cat">
        {{ cat }}
      </button>
    </div>

    <!-- Media Grid -->
    <div class="photo-grid">
      <div v-for="item in filteredPhotos" :key="item.id" class="photo-item" @click="openModal(item)">
        <div class="image-wrapper">
          <!-- Local Image Display -->
          <img v-if="item.type === 'image'" :src="item.url" :alt="item.title" />

          <!-- Local Video Thumbnail with Play Overlay -->
          <template v-else-if="item.type === 'video'">
            <video :src="item.url" muted preload="metadata" />
            <div class="play-overlay">
              <span class="play-icon">▶</span>
            </div>
          </template>

          <!-- YouTube Video Thumbnail with Play Overlay -->
          <template v-else-if="item.type === 'youtube'">
            <img :src="getYoutubeThumbnail(item.url)" :alt="item.title" />
            <div class="play-overlay">
              <span class="play-icon">▶</span>
            </div>
          </template>
        </div>

        <div class="photo-info">
          <h3>{{ item.title }}</h3>
          <!-- Category Tags -->
          <div class="tags-container">
            <span v-for="tag in item.categories" :key="tag" class="tag-badge">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Full-Screen Lightbox Modal -->
    <div v-if="activePhoto" class="modal-overlay" @click="closeModal">
      <button class="nav-btn prev-btn" @click.stop="navigatePhoto(-1)">‹</button>

      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">×</button>

        <!-- Large Image -->
        <img v-if="activePhoto.type === 'image'" :src="activePhoto.url" :alt="activePhoto.title" />

        <!-- Large Local Video Player -->
        <video v-else-if="activePhoto.type === 'video'" :src="activePhoto.url" controls autoplay
          class="modal-media-player"></video>

        <!-- Large Responsive YouTube Embed -->
        <div v-else-if="activePhoto.type === 'youtube'" class="youtube-embed-wrapper">
          <iframe :src="getEmbedUrl(activePhoto.url)" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="modal-media-player"></iframe>
        </div>

        <h2>{{ activePhoto.title }}</h2>
        <div class="modal-tags">
          <span v-for="tag in activePhoto.categories" :key="tag" class="tag-badge">
            {{ tag }}
          </span>
        </div>
      </div>

      <button class="nav-btn next-btn" @click.stop="navigatePhoto(1)">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Reactive state
const selectedCategory = ref('All');
const searchQuery = ref('');
const activePhoto = ref(null);

// THE MASTER MEDIA LIST
// You can now mix images, videos, and YouTube URLs seamlessly!
const photos = ref([
  {
    id: 1,
    type: 'image',
    url: '/My%20Art/Artwork%20-%20copyright/phone%20on%20a%20desk.webp',
    categories: ['Nature', 'Minimalist'],
    title: 'Mountain View'
  },
  {
    id: 2,
    type: 'video',
    url: '/My%20Art/Artwork%20-%20copyright/my-art-timelapse.mp4',
    categories: ['City', 'Tech'],
    title: 'Digital Painting Timelapse'
  },
  {
    id: 3,
    type: 'youtube',
    url: 'https://youtube.com', // Standard YT link
    categories: ['Nature', 'Tech'],
    title: 'Speedart Showcase Video'
  },
  {
    id: 4,
    type: 'youtube',
    url: 'https://youtu.be', // Shortened YT share link
    categories: ['Portraits'],
    title: 'Behind the Scenes Vlog'
  }
]);

// Track randomized display order
const randomizedPhotos = ref([]);

// True Fisher-Yates Random Shuffle algorithm
const shufflePhotos = () => {
  const arr = [...photos.value];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  randomizedPhotos.value = arr;
};

// Extract video ID from any style of YouTube URL
const getYoutubeId = (url) => {
  if (!url) return '';
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
};

// Generate YouTube high-quality thumbnail image automatically
const getYoutubeThumbnail = (url) => {
  const videoId = getYoutubeId(url);
  return videoId ? `https://youtube.com{videoId}/hqdefault.jpg` : '';
};

// Transform standard links into embed URLs for iframes
const getEmbedUrl = (url) => {
  const videoId = getYoutubeId(url);
  // adding ?autoplay=1 lets it play instantly when lightbox opens
  return videoId ? `https://youtube.com{videoId}?autoplay=1` : '';
};

// Dynamic Tabs Setup
const categoriesList = computed(() => {
  const allCats = photos.value.flatMap(p => p.categories || []);
  return ['All', ...new Set(allCats)];
});

// Filter Process applied directly onto the randomized array list
const filteredPhotos = computed(() => {
  return randomizedPhotos.value.filter(photo => {
    const matchesCategory = selectedCategory.value === 'All' ||
      (photo.categories && photo.categories.includes(selectedCategory.value));

    const matchesSearch = photo.title.toLowerCase().includes(searchQuery.value.toLowerCase());

    return matchesCategory && matchesSearch;
  });
});

// Lightbox mechanics
const openModal = (photo) => { activePhoto.value = photo; };
const closeModal = () => { activePhoto.value = null; };

const navigatePhoto = (direction) => {
  if (!activePhoto.value) return;
  const currentIndex = filteredPhotos.value.findIndex(p => p.id === activePhoto.value.id);
  let nextIndex = currentIndex + direction;

  if (nextIndex >= filteredPhotos.value.length) nextIndex = 0;
  if (nextIndex < 0) nextIndex = filteredPhotos.value.length - 1;

  activePhoto.value = filteredPhotos.value[nextIndex];
};

const handleKeyDown = (e) => {
  if (!activePhoto.value) return;
  if (e.key === 'ArrowRight') navigatePhoto(1);
  if (e.key === 'ArrowLeft') navigatePhoto(-1);
  if (e.key === 'Escape') closeModal();
};

onMounted(() => {
  shufflePhotos();
  window.addEventListener('keydown', handleKeyDown);
});
onUnmounted(() => window.removeEventListener('keydown', handleKeyDown));
</script>

<style scoped>
.gallery-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
}

.search-container {
  margin-bottom: 20px;
}

.search-bar {
  width: 100%;
  max-width: 400px;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
}

.tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.tabs button {
  padding: 10px 20px;
  border: 1px solid #ddd;
  background: #f9f9f9;
  cursor: pointer;
  border-radius: 20px;
  transition: 0.2s;
  font-weight: bold;
}

.tabs button.active {
  background: #42b883;
  color: white;
  border-color: #42b883;
}

/* Grid Layout */
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.photo-item {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.photo-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

/* Play Icon Overlay Layer */
.image-wrapper {
  position: relative;
  width: 100%;
  height: 220px;
  background: #222;
  overflow: hidden;
}

.image-wrapper img,
.image-wrapper video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}

.photo-item:hover .play-overlay {
  background: rgba(0, 0, 0, 0.4);
}

.play-icon {
  background: rgba(255, 255, 255, 0.9);
  color: #222;
  font-size: 20px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding-left: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.2s;
}

.photo-item:hover .play-icon {
  transform: scale(1.1);
  background: #42b883;
  color: white;
}

/* Text Cards info */
.photo-info {
  padding: 15px;
}

.photo-info h3 {
  margin: 0 0 10px 0;
  font-size: 18px;
  color: #333;
}

.tags-container,
.modal-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag-badge {
  background: #eef2f3;
  color: #64748b;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
}

/* Lightbox Layout styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  padding: 25px;
  border-radius: 12px;
  width: 85%;
  max-width: 800px;
  max-height: 85%;
  position: relative;
  text-align: center;
}

.modal-content img {
  max-width: 100%;
  max-height: 60vh;
  object-fit: contain;
  border-radius: 6px;
}

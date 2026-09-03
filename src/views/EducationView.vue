<script setup>
import { ref, computed } from 'vue';

const categoriesTab = ref(false)

const education = ref([
    {
        id: 1,
        course: 'Complete Web Development',
        type: 'Course',
        school: 'Programming Hero',
        duration: 'March 2022',
        category: 'Software Development',
        icon: 'fa-code',
    },
    {
        id: 2,
        course: 'Python Course',
        type: 'Course',
        school: 'Programming Hero',
        duration: 'April 2022',
        category: 'Software Development',
        icon: 'fa-code',
    },
    {
        id: 3,
        course: 'Fashion Design',
        type: 'Diploma',
        school: 'Alison',
        duration: '2023',
        category: 'Fashion Design',
        icon: 'fa-people-arrows',
    },
    {
        id: 4,
        course: 'Business Administration',
        type: 'Diploma',
        school: 'Alison',
        duration: '2023',
        category: 'Business',
        icon: 'fa-people-arrows',
    },
    {
        id: 5,
        course: 'Blockchain & Crypto',
        type: 'Course',
        school: 'Programming Hero',
        duration: '2023',
        category: 'Software Development',
        icon: 'fa-code',
    },
    {
        id: 6,
        course: 'Technical Writing Essentials',
        type: 'Course',
        school: 'Alison',
        duration: 'June 2023',
        category: 'Writing',
        icon: 'fa-keyboard',
    },
    {
        id: 7,
        course: 'Start Writing Fiction',
        type: 'Certificate',
        school: 'The Open University',
        duration: 'Nov. 2023',
        category: 'Writing',
        icon: 'fa-keyboard',
    },
    {
        id: 8,
        course: 'Backend Development with Django',
        type: 'Course',
        school: 'Programming Hero',
        duration: '',
        category: 'Software Development',
        icon: 'fa-code',
    },
    {
        id: 9,
        course: 'Business Management',
        type: 'Course',
        school: 'Oxford Home Study Center (OHSC)',
        duration: 'March 2023',
        category: 'Business',
        icon: 'fa-people-arrows',
    },
    {
        id: 10,
        course: 'Introduction to Web Development',
        type: 'Certificate',
        school: 'Distinction',
        duration: 'Feb. 2026',
        category: 'Software Development',
        icon: 'fa-code',
    },
    {
        id: 11,
        course: 'Mastering Productivity, Collaboration & Problem Solving for High-Performers',
        type: 'Certificate',
        school: 'Distinction',
        duration: 'Feb. 2026',
        category: 'Others',
        icon: 'fa-code',
    },
    {
        id: 12,
        course: 'Nursing',
        type: 'Registered Nursing',
        school: 'FCT college of Nursing Sciences',
        duration: 'May 2023 - May 2026',
        category: 'Nursing',
        icon: 'fa-stethoscope',
    },
    {
        id: 13,
        course: 'Infinite Realms - Creative (Art x Tech) Workshop',
        type: 'Diploma',
        school: 'ACERCA and CAVIC',
        duration: 'June 2026',
        category: 'Workshop',
        icon: 'fa-palette',
    },
    {
        id: 14,
        course: 'K-pop Dance Class',
        type: '',
        school: 'The Korean Cultural Center Nigeria',
        duration: 'July 2026',
        category: 'Dance',
        icon: 'fa-music',
    },
]);

const categories = ['All', 'Business', 'Dance', 'Fashion Design', 'Nursing', 'Others', 'Software Development', 'Workshop', 'Writing'];
const selectedCategory = ref('All');

const filteredEdu = computed(() => {
    const reversedList = [...education.value].reverse();

    if (selectedCategory.value === 'All') {
        return reversedList;
    }
    return reversedList.filter(education => education.category === selectedCategory.value);
});
</script>

<template>
    <div class="experience-page">
        <div id="categories-div-arrow">
            <p>Categories</p>

            <button id="button-open-close" @click="categoriesTab = !categoriesTab" type="button">
                <i :class="['fas', categoriesTab ? 'fa-chevron-up' : 'fa-chevron-down']"></i>
            </button>
        </div>

        <!-- Category Tags Navigation -->
        <div class="categories" v-if="categoriesTab">
            <button v-for="category in categories" :key="category"
                :class="['tag', { active: selectedCategory === category }]" @click="selectedCategory = category">
                {{ category }}
            </button>
        </div>

        <!-- Timeline Wrapper -->
        <div class="timeline">
            <!-- TransitionGroup enables fluid shuffling/filtering animations -->
            <TransitionGroup name="timeline-list">
                <div v-for="(education) in filteredEdu" :key="education.id" class="timeline-item">
                    <!-- Dynamic Font Awesome Icon replaces standard dot -->
                    <div class="timeline-dot-icon">
                        <i :class="['fas', education.icon]"></i>
                    </div>

                    <div class="timeline-content">
                        <h3>{{ education.course }}</h3>
                        <h4>{{ education.school }}</h4>
                        <p class="description">{{ education.type }}</p>
                        <p class="date">{{ education.duration }}</p>
                    </div>
                </div>
            </TransitionGroup>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.experience-page {
    max-width: 600px;

    .timeline-content {

        h3,
        h4,
        p {
            text-align: center;
        }
    }
}
</style>
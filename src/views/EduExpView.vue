<script>
import { ref, computed } from 'vue';

import Education from './EducationView.vue'
import Experience from './ExperienceView.vue'

export default {
  setup() {
    const tabs = ['Education', 'Experience']
    const currentTab = ref('Education')

    // Find index to multiply position for the purple sliding indicator
    const currentTabIndex = computed(() => tabs.indexOf(currentTab.value))

    const tabMap = { Education, Experience }
    const currentTabComponent = computed(() => tabMap[currentTab.value])

    return {
        tabs,
        currentTab,
        currentTabIndex,
        currentTabComponent
    }
  }
}
</script>

<template>
    <div class="tab-wrapper">
        <!-- TAB HEADERS -->
        <div class="tabs-header">
            <!-- Purple sliding pill background -->
            <div 
                class="slider-indicator" 
                :style="{ transform: `translateX(${currentTabIndex * 100}%)` }"
            ></div>
            
            <button
                v-for="tab in tabs"
                :key="tab"
                :class="['tab-btn', { active: currentTab === tab }]"
                @click="currentTab = tab"
            >
                {{ tab }}
            </button>
        </div>
        
        <!-- PAGE CONTENT AREA -->
        <div class="tab-body">
            <Transition name="slide-fade" mode="out-in">
                <component :is="currentTabComponent" />
            </Transition>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.tab-wrapper {
    max-width: 600px;
    margin: 0vh auto 20vh auto;

    // SLIDER CONTAINER
    .tabs-header {
        //background-color: #f3f4f6;
        color: var(--text-color) !important;
        background-color: var(--dark-color);

        width: 500px;
        border-radius: 30;
        border: 1px solid var(--pastel-color-2);

        .tab-btn {
            color: var(--text-color);
            //color: #4b5563;
            background-color: transparent;
        }
    }
}

@media screen and (max-width: 600px) {
    .tab-wrapper {
        .tabs-header {
            width: 450px !important;
        }
    }
}

@media screen and (max-width: 470px) {
    .tab-wrapper {
        .tabs-header {
            width: 350px !important;
        }
    }
}

@media screen and (max-width: 400px) {
    .tab-wrapper {
        .tabs-header {
            width: 270px !important;
        }
    }
}
</style>

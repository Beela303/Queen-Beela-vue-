<script>
import { ref, computed } from 'vue';

import Work from './WorkView.vue'
import Experience from './ExperienceView.vue'

export default {
  setup() {
    const tabs = ['Work', 'Experience']
    const currentTab = ref('Work')

    // Find index to multiply position for the purple sliding indicator
    const currentTabIndex = computed(() => tabs.indexOf(currentTab.value))

    const tabMap = { Work, Experience }
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

<style lang="scss">
.tab-wrapper {
    max-width: 600px;
    margin: 10vh auto 20vh auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    // SLIDER CONTAINER
    .tabs-header {
        background-color: #f3f4f6;

        width: 320px;
        padding: 6px;

        border-radius: 99px;

        position: relative;

        display: flex;
        overflow: hidden;

        // PURPLE SLIDING BACKGROUND PILL
        .slider-indicator {
            background-color: var(--main-color);
            //background-color: #8b5cf6;

            top: 6px;
            bottom: 6px;
            left: 6px;

            width: calc(50% - 6px); // Half container width minus track padding
            border-radius: 99px; // Fully circular pill ends
            
            position: absolute;

            transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1;
        }

        .tab-btn {
            color: #4b5563;
            background-color: transparent;

            padding: 12px 0;
            font-weight: 600;

            border: none;

            flex: 1;
            position: relative;

            transition: color 0.3s ease;

            z-index: 2; // Sits above purple slider
            cursor: pointer;

            &.active {
                color: var(--text-color);
            }
        }
    }

    .tab-body {
        width: 90vw;
        margin-top: 30px;

        display: flex;
        justify-content: center;

        // SLIDE TRANSITION ANIMATION
        .slide-fade-enter-active,
        .slide-fade-leave-active {
            transition: all 0.3s ease-out;
        }
        
        .slide-fade-enter-from {
            transform: translateX(20px);
            opacity: 0;
        }
        
        .slide-fade-leave-to {
            transform: translateX(-20px);
            opacity: 0;
        }
    }
}

@media screen and (max-width: 600px) {
    .tab-wrapper {
        .tabs-header {
            width: 300px !important;
        }
    }
}

@media screen and (max-width: 400px) {
    .tab-wrapper {
        .tabs-header {
            width: 200px !important;
        }
    }
}
</style>

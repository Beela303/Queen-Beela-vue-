<script>
import { ref, computed } from 'vue';

import Work from './WorkView.vue'
import EduxExp from './eduexpView.vue'
//import Experience from './ExperienceView.vue'

export default {
  setup() {
    const tabs = ['Work', 'EduxExp']
    const currentTab = ref('Work')

    // Find index to multiply position for the purple sliding indicator
    const currentTabIndex = computed(() => tabs.indexOf(currentTab.value))

    const tabMap = { Work, EduxExp }
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

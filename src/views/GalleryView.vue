<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Reactive state
const selectedCategory = ref('All');
const searchQuery = ref('');
const activePhoto = ref(null);

//148
const photos = ref([
    {
        id: 1,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/phone_on_a_desk.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Phone on a Desk'
    },
    {
        id: 2,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/silver_haired_lady_without_stars.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'silver haired lady without stars'
    },
    {
        id: 3,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/silver_haired_lady_with_stars.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'silver haired lady with stars'
    },
    {
        id: 4,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/fashionista_in_a_museum_pink_frame_black_bg.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Fashionista in a museum (Pink frame, Black BG)'
    },
    {
        id: 5,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/fashionista_in_a_museum_pink_frame_white_bg.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Fashionista in a museum (Pink frame, White BG)'
    },
    {
        id: 6,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/fashionista_in_a_museum_blue_frame_black_bg.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Fashionista in a museum (Blue frame, Black BG)'
    },
    {
        id: 7,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/fashionista_in_a_museum_blue_frame_white_bg.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Fashionista in a museum (Blue frame, White BG)'
    },
    {
        id: 8,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/fashionista_in_a_museum_white_bg.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Fashionista in a museum (White BG)'
    },
    {
        id: 9,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/brown_aesthetic.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Brown Aesthetic'
    },
    {
        id: 10,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/into_the_illusion_of_the_mirror.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Into the illusion of the mirror'
    },
    {
        id: 11,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/seeking_through_the_abyss.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Seeking through the abyss'
    },
    {
        id: 12,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/below_the_ocean_1.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Below the ocean'
    },
    {
        id: 13,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/archer_in_the_forest.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Archer in the forest'
    },
    {
        id: 14,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/into_the_illusion_of_the_mirror.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Into the illusion of the mirror'
    },
    {
        id: 15,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/below_the_interspace_of_stars_and_clouds.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Below the interspace of stars and clouds'
    },
    {
        id: 16,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/calm_ambience.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Calm ambience'
    },
    {
        id: 17,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/galactic_ocean_of_dreams.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Galactic ocean of dreams'
    },
    {
        id: 18,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/hall_of_mirage_border.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Hall of mirage (border)'
    },
    {
        id: 19,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/hall_of_mirage.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Hall of mirage'
    },
    {
        id: 20,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/the_city_starry_sky_night.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: "The city's starry sky (night)"
    },
    {
        id: 21,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/the_city_starry_sky_day.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: "The city's starry sky (day)"
    },
    {
        id: 22,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/lady_in_an_illusion_1.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Lady in an illusion 1'
    },
    {
        id: 23,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/lady_in_an_illusion_2.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Lady in an illusion 2'
    },
    {
        id: 24,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_05.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 25,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_06.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 26,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_07.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 27,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_08.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 28,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_09.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 29,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_10.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 30,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_11.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 31,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_12.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 32,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_13.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 33,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_14.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 34,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_15.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 35,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_16.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 36,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_16.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 37,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_16.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 38,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_17.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 39,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_18.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 40,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_19.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 41,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_20.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 42,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_21.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 43,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_22.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 44,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_23.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 45,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_24.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Traditional art'
    },
    {
        id: 103,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_25.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Cherries (sketch)'
    },
    {
        id: 104,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_26.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Cherries'
    },
    {
        id: 105,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_26.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Basket of Fruits'
    },
    {
        id: 106,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_27.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Basket of Fruits'
    },
    {
        id: 107,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/trad_28.webp', import.meta.url).href,
        categories: ['Traditional Art', 'Art'],
        title: 'Basket of Fruits'
    },
    {
        id: 148,
        type: 'image',
        url: new URL('../assets/My Art/artwork_copyright/amulet_of_avalor.webp', import.meta.url).href,
        categories: ['Digital Art', 'Art'],
        title: 'Amulet of Avalor'
    },

    // MY PICTURES

    {
        id: 46,
        type: 'image',
        url: new URL('../assets/My pictures/2.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2024)'
    },
    {
        id: 47,
        type: 'image',
        url: new URL('../assets/My pictures/3.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2024)'
    },
    {
        id: 48,
        type: 'image',
        url: new URL('../assets/My pictures/8.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2024)'
    },
    {
        id: 49,
        type: 'image',
        url: new URL('../assets/My pictures/9.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2024)'
    },
    {
        id: 50,
        type: 'image',
        url: new URL('../assets/My pictures/10.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2024)'
    },
    {
        id: 51,
        type: 'image',
        url: new URL('../assets/My pictures/11.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2024)'
    },
    {
        id: 52,
        type: 'image',
        url: new URL('../assets/My pictures/12.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2024)'
    },
    {
        id: 53,
        type: 'image',
        url: new URL('../assets/My pictures/13.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2025)'
    },
    {
        id: 54,
        type: 'image',
        url: new URL('../assets/My pictures/14.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2025)'
    },
    {
        id: 55,
        type: 'image',
        url: new URL('../assets/My pictures/15.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2025)'
    },
    {
        id: 56,
        type: 'image',
        url: new URL('../assets/My pictures/16.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2025)'
    },
    {
        id: 57,
        type: 'image',
        url: new URL('../assets/My pictures/17.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2025)'
    },
    /*{
        id: 58,
        type: 'image',
        url: new URL('../assets/My pictures/18.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2025)'
    },*/
    {
        id: 59,
        type: 'image',
        url: new URL('../assets/My pictures/19.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2025)'
    },
    {
        id: 60,
        type: 'image',
        url: new URL('../assets/My pictures/20.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2025)'
    },
    {
        id: 61,
        type: 'image',
        url: new URL('../assets/My pictures/21.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2025)'
    },
    {
        id: 62,
        type: 'image',
        url: new URL('../assets/My pictures/22.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2025)'
    },
    {
        id: 63,
        type: 'image',
        url: new URL('../assets/My pictures/23.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2025)'
    },
    {
        id: 64,
        type: 'image',
        url: new URL('../assets/My pictures/24.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 65,
        type: 'image',
        url: new URL('../assets/My pictures/25.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 66,
        type: 'image',
        url: new URL('../assets/My pictures/26.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 67,
        type: 'image',
        url: new URL('../assets/My pictures/27.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 68,
        type: 'image',
        url: new URL('../assets/My pictures/28.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 69,
        type: 'image',
        url: new URL('../assets/My pictures/29.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 70,
        type: 'image',
        url: new URL('../assets/My pictures/30.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 71,
        type: 'image',
        url: new URL('../assets/My pictures/31.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 72,
        type: 'image',
        url: new URL('../assets/My pictures/32.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },

    {
        id: 73,
        type: 'image',
        url: new URL('../assets/My pictures/33.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 74,
        type: 'image',
        url: new URL('../assets/My pictures/34.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 75,
        type: 'image',
        url: new URL('../assets/My pictures/35.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 76,
        type: 'image',
        url: new URL('../assets/My pictures/36.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 77,
        type: 'image',
        url: new URL('../assets/My pictures/37.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 78,
        type: 'image',
        url: new URL('../assets/My pictures/38.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture'
    },
    {
        id: 108,
        type: 'image',
        url: new URL('../assets/My pictures/39.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 109,
        type: 'image',
        url: new URL('../assets/My pictures/40.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 110,
        type: 'image',
        url: new URL('../assets/My pictures/41.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 111,
        type: 'image',
        url: new URL('../assets/My pictures/42.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 112,
        type: 'image',
        url: new URL('../assets/My pictures/43.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    /*{
        id: 113,
        type: 'image',
        url: new URL('../assets/My pictures/44.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 114,
        type: 'image',
        url: new URL('../assets/My pictures/45.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 115,
        type: 'image',
        url: new URL('../assets/My pictures/46.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 116,
        type: 'image',
        url: new URL('../assets/My pictures/47.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 117,
        type: 'image',
        url: new URL('../assets/My pictures/48.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 118,
        type: 'image',
        url: new URL('../assets/My pictures/49.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 119,
        type: 'image',
        url: new URL('../assets/My pictures/50.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 120,
        type: 'image',
        url: new URL('../assets/My pictures/51.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 121,
        type: 'image',
        url: new URL('../assets/My pictures/52.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 122,
        type: 'image',
        url: new URL('../assets/My pictures/53.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 123,
        type: 'image',
        url: new URL('../assets/My pictures/54.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 124,
        type: 'image',
        url: new URL('../assets/My pictures/55.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 125,
        type: 'image',
        url: new URL('../assets/My pictures/56.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 126,
        type: 'image',
        url: new URL('../assets/My pictures/57.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 127,
        type: 'image',
        url: new URL('../assets/My pictures/58.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 128,
        type: 'image',
        url: new URL('../assets/My pictures/59.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },*/
    {
        id: 129,
        type: 'image',
        url: new URL('../assets/My pictures/60.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 130,
        type: 'image',
        url: new URL('../assets/My pictures/61.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 131,
        type: 'image',
        url: new URL('../assets/My pictures/62.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 132,
        type: 'image',
        url: new URL('../assets/My pictures/63.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 133,
        type: 'image',
        url: new URL('../assets/My pictures/64.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 134,
        type: 'image',
        url: new URL('../assets/My pictures/65.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 135,
        type: 'image',
        url: new URL('../assets/My pictures/66.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 136,
        type: 'image',
        url: new URL('../assets/My pictures/67.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 137,
        type: 'image',
        url: new URL('../assets/My pictures/68.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 138,
        type: 'image',
        url: new URL('../assets/My pictures/69.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 139,
        type: 'image',
        url: new URL('../assets/My pictures/70.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 140,
        type: 'image',
        url: new URL('../assets/My pictures/71.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 141,
        type: 'image',
        url: new URL('../assets/My pictures/72.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 142,
        type: 'image',
        url: new URL('../assets/My pictures/73.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },
    {
        id: 143,
        type: 'image',
        url: new URL('../assets/My pictures/74.webp', import.meta.url).href,
        categories: 'Me',
        title: 'My Picture (2026)'
    },

    // PODCAST

    {
        id: 79,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/undiscussed_with_nabila.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila'
    },
    {
        id: 80,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_card_playing.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila playing card'
    },
    {
        id: 81,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/undiscussed_with_nabila.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila'
    },
    {
        id: 82,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_card1.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Card'
    },
    {
        id: 83,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep1.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 1'
    },
    {
        id: 84,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep2.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 2'
    },
    {
        id: 85,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep3.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 2'
    },
    {
        id: 86,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep3.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 3'
    },
    {
        id: 87,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep4.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 4'
    },
    {
        id: 88,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep5.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 5'
    },
    {
        id: 89,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep6.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 6'
    },
    {
        id: 90,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep7.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 7'
    },
    {
        id: 91,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep8.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 8'
    },
    {
        id: 92,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep9.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 9'
    },
    {
        id: 93,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep10.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 10'
    },
    {
        id: 94,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep11.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 11'
    },
    {
        id: 95,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep12.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 12'
    },
    {
        id: 96,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep13.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 13'
    },
    {
        id: 97,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep14.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 14'
    },
    {
        id: 98,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep15.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 15'
    },
    {
        id: 99,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep16.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 16'
    },
    {
        id: 100,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep17.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 17'
    },
    {
        id: 101,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep18.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 18'
    },
    {
        id: 102,
        type: 'image',
        url: new URL('../assets/Undiscussed With Nabila/uwn_ep19.webp', import.meta.url).href,
        categories: 'Podcast',
        title: 'Undiscussed With Nabila Episode 19'
    },

    //MY POEMS
    {
        id: 144,
        type: 'image',
        url: new URL('../assets/My poems/poem_1.webp', import.meta.url).href,
        categories: 'Poems',
        title: 'The veil sought'
    },
    {
        id: 145,
        type: 'image',
        url: new URL('../assets/My poems/poem_2.webp', import.meta.url).href,
        categories: 'Poems',
        title: 'Parallel Forces Within'
    },
    {
        id: 147,
        type: 'video',
        url: new URL('../assets/Undiscussed With Nabila/uwn_trailer.mp4', import.meta.url).href,
        categories: ['video', 'Podcast'],
        title: 'video'
    },
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

// Modal and Navigation Logic
const openModal = (photo) => {
    activePhoto.value = photo;
};

const closeModal = () => {
    activePhoto.value = null;
};

const navigatePhoto = (direction) => {
    if (!activePhoto.value) return;

    const currentIndex = filteredPhotos.value.findIndex(p => p.id === activePhoto.value.id);
    let nextIndex = currentIndex + direction;
    // Infinite carousel wrap-around rules
    if (nextIndex >= filteredPhotos.value.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = filteredPhotos.value.length - 1;

    activePhoto.value = filteredPhotos.value[nextIndex];
};

// Keyboard Accessibility listener (Arrow keys left/right & Escape key close)
const handleKeyDown = (e) => {
    if (!activePhoto.value) return;
    if (e.key === 'ArrowRight') navigatePhoto(1);
    if (e.key === 'ArrowLeft') navigatePhoto(-1);
    if (e.key === 'Escape') closeModal();
};

// Shuffle arrays right when the component loads onto screen
onMounted(() => {
    shufflePhotos();
    window.addEventListener('keydown', handleKeyDown);
});
onUnmounted(() => window.removeEventListener('keydown', handleKeyDown));
</script>

<template>
    <h1 id="gallery-title">Gallery</h1>

    <div class="gallery-container">
        <!-- Search Bar -->
        <div class="search-container">
            <input v-model="searchQuery" type="text" placeholder="Search photos or videos by title..."
                class="search-bar" />
        </div>

        <!-- Category Tabs -->
        <div class="tabs">
            <button v-for="cat in categoriesList" :key="cat" :class="{ active: selectedCategory === cat }"
                @click="selectedCategory = cat">
                {{ cat }}
            </button>
        </div>

        <!-- Full-Screen Modal with Navigation -->
        <div v-if="activePhoto" class="modal-overlay" @click="closeModal">
            <button class="nav-btn prev-btn" @click.stop="navigatePhoto(-1)">‹</button>

            <div class="modal-content" @click.stop>
                <button class="close-btn" @click="closeModal">×</button>

                <!-- Large Image Mode -->
                <img v-if="activePhoto.type === 'image'" :src="activePhoto.url" :alt="activePhoto.title" />

                <!-- Large Video Player Mode -->
                <video v-else-if="activePhoto.type === 'video'" :src="activePhoto.url" controls autoplay
                    class="modal-video-player">
                    <div class="play-overlay">
                        <span class="play-icon">▶</span>
                    </div>
                </video>

                <h2>{{ activePhoto.title }}</h2>
                <div class="modal-tags">
                    <span v-for="tag in activePhoto.categories" :key="tag" class="tag-badge">
                        {{ tag }}
                    </span>
                </div>
            </div>

            <button class="nav-btn next-btn" @click.stop="navigatePhoto(1)">›</button>
        </div>

        <div class="photo-grid box">
            <div v-for="photo in filteredPhotos" :key="photo.id" class="photo-item" @click="openModal(photo)">
                <div class="image-wrapper">
                    <!-- Render Image if type is image -->
                    <img v-if="photo.type === 'image'" :src="photo.url" :alt="photo.title" />

                    <!-- Render Video Thumbnail if type is video -->
                    <div v-else-if="photo.type === 'video'">
                        <video :src="photo.url" muted preload="metadata" />
                        <div class="play-overlay">
                            <span class="play-icon">▶</span>
                        </div>
                    </div>
                    <!--<video v-else-if="photo.type === 'video'" :src="photo.url" muted preload="metadata" />-->
                </div>

                <div class="photo-info">
                    <h3>{{ photo.title }}</h3>
                    <div class="tags-container">
                        <span v-for="tag in photo.categories" :key="tag" class="tag-badge">
                            {{ tag }}
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div id="gallery">
        <!--<div class="box" data-item="all">
                <img src="../assets/Images/1.webp" onclick="openModal('../assets/Images/1.webp')" alt="" class="photo">
                <iframe width="100%" height="315" name="" src="../assets/Videos/2.mp4" title="Video Title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loop muted></iframe>
                <video src="../assets/Videos/2.mp4" class="photo" autoplay loop></video>
                <iframe height="400" src="../assets/Videos/1.mp4" frameborder="0"></iframe>
                <video src="../assets/Videos/1.mp4" autoplay loop muted></video>
                <p class="comment">On IG</p>
            </div>-->

        <!--<div class="box">
            <img src="../assets/My Art/artwork_copyright/silver haired lady without stars.webp"
                alt="silver haired lady without stars" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/silver haired lady with stars.webp"
                alt="silver haired lady with stars" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/fashionista in a museum (pink frame-black bg).webp"
                alt="Fashionista in a museum" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/fashionista in a museum (pink frame, white bg).webp"
                alt="Fashionista in a museum" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/brown aesthetic.webp" alt="Brown aesthetic" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/Into the illusion of the mirror.webp"
                alt="Into the illusion of the mirror" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/Seeking through the abyss.webp" alt="Seeking through the abyss"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/Fashionista in a museum (blue frame, black bg).webp"
                alt="Fashionista in a museum" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/fashionista in a museum (blue frame, white bg).webp"
                alt="Fashionista in a museum" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/Fashionista in a museum (white bg).webp"
                alt="Fashionista in a museum" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/below the ocean (1).webp" alt="Below the ocean"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/archer in the forest.webp" alt="Archer in the forest"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/below the interspace of stars and clouds.webp"
                alt="Below the interspace of stars and clouds" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/calm ambience.webp" alt="calm ambience" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/galactic ocean of dreams.webp" alt="Galactic ocean of dreams"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/hall of mirage (border).webp" alt="Hall of mirage (border)"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/hall of mirage.webp" alt="Hall of mirage" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/the city starry sky-night.webp"
                alt="The city's starry sky(night)" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/the city starry sky-day.webp"
                alt="The city's starry sky (day)" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 05.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 06.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 07.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 08.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 09.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 10.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 11.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 12.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 13.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 14.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 15.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 16.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/lady in an illusion 1.webp" alt="lady in an illusion 1"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/lady in an illusion 2.webp" alt="lady in an illusion 2"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 17.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 18.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 19.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 20.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 21.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 22.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 23.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My Art/artwork_copyright/trad 24.webp" alt="Traditional art" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/2.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/3.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/8.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/9.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/10.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/11.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/12.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/13.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/14.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/15.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/16.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/17.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/19.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/20.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/21.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/22.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/23.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/25.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/27.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/28.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/29.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/30.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/32.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/33.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/34.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/35.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/36.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/37.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/My pictures/38.webp" alt="My Picture" class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/undiscussed with nabila.webp" alt="Undiscussed With Nabila"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn card-playing.webp"
                alt="Undiscussed With Nabila playing card" class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn card1.webp" alt="Undiscussed With Nabila card"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep1.webp" alt="Undiscussed With Nabila Episode 1"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep2.webp" alt="Undiscussed With Nabila Episode 2"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep3.webp" alt="Undiscussed With Nabila Episode 3"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep4.webp" alt="Undiscussed With Nabila Episode 4"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep5.webp" alt="Undiscussed With Nabila Episode 5"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep6.webp" alt="Undiscussed With Nabila Episode 6"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep7.webp" alt="Undiscussed With Nabila Episode 7"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep8.webp" alt="Undiscussed With Nabila Episode 8"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep9.webp" alt="Undiscussed With Nabila Episode 9"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep10.webp" alt="Undiscussed With Nabila Episode 10"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep11.webp" alt="Undiscussed With Nabila Episode 11"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep12.webp" alt="Undiscussed With Nabila Episode 12"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep13.webp" alt="Undiscussed With Nabila Episode 13"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep14.webp" alt="Undiscussed With Nabila Episode 14"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep15.webp" alt="Undiscussed With Nabila Episode 15"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep16.webp" alt="Undiscussed With Nabila Episode 16"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep17.webp" alt="Undiscussed With Nabila Episode 17"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep18.webp" alt="Undiscussed With Nabila Episode 18"
                class="photo">
        </div>

        <div class="box">
            <img src="../assets/Undiscussed With Nabila/uwn ep19.webp" alt="Undiscussed With Nabila Episode 19"
                class="photo">
        </div>-->
    </div>

</template>

<style lang="scss">
#gallery-title {
    margin-top: 5%;
}

#gallery {
    columns: 4;

    .box {
        //background: var(--gallery-bg);

        /*width: 300px;*/
        width: 100%;
        margin: 2%;

        border-radius: 25px;
        //transition: var(--transition);

        /*&:hover {
            transform: var(--transform);
        }*/

        img,
        iframe,
        video {
            width: 95%;

            margin: 2% 2.5%;

            border-radius: 25px;

            //transition: var(--transition);
            //cursor: pointer;

            /*&:hover {
                transform: var(--transform);
            }*/
        }

        .comment {
            color: var(--pastel-color-2);

            font-size: 30px;
            font-weight: 450;

            text-align: center;
            text-decoration: none !important;
        }
    }
}

.gallery-container {
    max-width: 1200px;

    margin: 0 auto;
    padding: 20px;

    /* Search Bar */
    .search-container {
        margin-bottom: 20px;

        justify-content: center;
        text-align: center;
        justify-self: center;

        .search-bar {
            width: 50vw;
            //max-width: 400px;

            padding: 12px;

            border: 2px solid var(--main-color);
            border-radius: 25px;

            font-size: 16px;
        }
    }

    /* Tabs */
    .tabs {
        margin-bottom: 30px;
        gap: 10px;

        display: flex;
        flex-wrap: wrap;

        button {
            background: var(--text-color);

            padding: 10px 20px;
            border: 1px solid var(--main-color);

            border-radius: 20px;
            font-weight: bold;

            transition: var(--transition);
            cursor: pointer;

            &:hover {
                color: var(--text-color);
                background: var(--main-color);
            }

            &.active {
                color: var(--text-color);
                background: var(--main-color);

                border-color: var(--main-color);
            }
        }
    }

    /* Card Grid Layout */
    .photo-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 20px;

        .photo-item {
            background: var(--dark-color);

            border-radius: 12px;
            border: 1px solid var(--pastel-color-2);

            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);

            transition: transform var(--transition), box-shadow 0.2s;

            cursor: pointer;
            overflow: hidden;

            &:hover {
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
                transform: translateY(-5px);

                /*.play-overlay {
                    background: rgba(0, 0, 0, 0.4);
                }*/

                .play-icon {
                    color: var(--text-color);
                    background: var(--main-color);
                    //background: #42b883;

                    transform: scale(1.1);
                    transition: var(--transition);
                }
            }

            .image-wrapper {
                background: #222;

                width: 100%;
                height: 220px;

                position: relative;
                overflow: hidden;

                img,
                video {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                /*img {
                    width: 100%;
                    height: 35vh;
                    object-fit: cover;
                    display: block;
                }

                video {
                    width: 100%;
                    height: 220px;

                    object-fit: cover;

                    display: block;
                }*/
            }

            .photo-info {
                padding: 15px;

                h3 {
                    color: var(--white-color);

                    margin: 0 0 10px 0;
                    font-size: 18px;
                }
            }
        }
    }

    /* Small Category Badge Tags */
    .tags-container,
    .modal-tags {
        gap: 6px;

        display: flex;
        flex-wrap: wrap;
    }

    .tag-badge {
        color: var(--text-color);
        background: var(--main-color);

        padding: 4px 10px;
        border-radius: 12px;

        font-size: 12px;
        font-weight: 500;

        text-transform: uppercase;
    }

    /* Modal */
    .modal-overlay {
        background: rgba(0, 0, 0, 0.9);

        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        position: fixed;

        z-index: 1000;

        /* Navigation buttons */
        .nav-btn {
            color: var(--text-color);
            background: rgba(255, 255, 255, 0.15);

            top: 50%;

            width: 60px;
            height: 60px;
            border-radius: 50%;

            font-size: 48px;

            border: none;
            position: absolute;

            display: flex;
            align-items: center;
            justify-content: center;

            transition: var(--transition);
            transform: translateY(-50%);

            cursor: pointer;
            user-select: none;

            &:hover {
                background: rgba(255, 255, 255, 0.3);
            }
        }

        .prev-btn {
            left: 40px;
        }

        .next-btn {
            right: 40px;
        }

        .modal-content {
            background: var(--dark-color);

            max-width: 80%;
            max-height: 85%;

            padding: 25px;
            border-radius: 12px;

            text-align: center;

            position: relative;

            img {
                max-width: 100%;
                max-height: 65vh;

                object-fit: contain;

                border-radius: 15px;
            }

            h2 {
                color: var(--text-color);

                margin: 15px 0 10px 0;
                font-size: 22px;
            }


            .close-btn {
                color: var(--text-color);
                background: transparent;

                top: 2.5px;
                right: 3.5px;

                font-size: 50px;

                position: absolute;

                border: none;
                cursor: pointer;
            }

            .modal-video-player {
                background: #000;

                max-width: 100%;
                max-height: 65vh;

                border-radius: 6px;
                outline: none;

            }

        }
    }

}

.play-overlay {
    //background: rgba(0, 0, 0, 0.25);

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    justify-self: center;

    position: absolute;
    transition: background 0.2s;

    .play-icon {
        color: #222;
        background: var(--text-color);

        width: 50px;
        height: 50px;

        //padding-left: 4px;
        border-radius: 50%;

        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

        font-size: 2rem;
        //font-size: 50px;

        display: flex;
        align-items: center;
        justify-content: center;

        transition: var(--transition);
        //transition: transform 0.2s;
    }
}

@media (max-width: 600px) {
    .photo-grid {
        grid-template-columns: 1fr 1fr !important;
    }

    .nav-btn {
        width: 45px;
        height: 45px;
        font-size: 32px;
    }

    .prev-btn {
        left: 10px;
    }

    .next-btn {
        right: 10px;
    }

    .gallery-container {
        .search-container {
            .search-bar {
                width: 90vw !important;
            }
        }
    }
}

@media (max-width: 400px) {
    .photo-grid {
        grid-template-columns: 1fr !important;
    }
}
</style>
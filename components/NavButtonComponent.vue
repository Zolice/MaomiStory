<template>
    <NuxtLink :to=link>
        <button class="btn rounded-full btn-ghost hover:text-primary drop-shadow-[0_10px_25px_rgba(246,211,123,1)]">
            <span class="material-symbols-outlined " :class="shouldHighlight ? 'text-primary' : ''">{{ symbol }}</span>
        </button>
    </NuxtLink>
</template>

<script setup lang="ts">

//define props for link and symbol to use
const props = defineProps({
    link: {
        type: String,
        default: ""
    },
    symbol: {
        type: String,
        default: "spa"
    }
})

const shouldHighlight = ref(false)

const route = useRoute()

watch(()=> route.path, (route, prevRoute) => {
    if (route == props.link) {
        shouldHighlight.value = true
    } else {
        shouldHighlight.value = false
    }
},{immediate: true, deep: true})

//page change


</script>
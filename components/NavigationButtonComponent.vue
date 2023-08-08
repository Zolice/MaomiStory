<template>
    <button @mouseover="mousingOver = true" @mouseleave="mousingOver = false" :title="props.name" @click="link"
        class="btn btn-ghost h-auto w-full transition ease-linear hover:scale-110">
        <NuxtImg :src="mousingOver ? navigationButtonMouseover : navigationButton" class="h-8 w-8" />
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    name: String,
    link: String
})
var mousingOver = ref(false)

// const navigationButton = "/spa.png"
const navigationButton = props.name == "Home" ? "/Maomi.png" : "/spa.png"
const navigationButtonMouseover = "/sample/sample_logo_256x256.png"

const link = () => {
    if (props.link) {
        navigateTo(props.link)
    }
}

onMounted(async () => {

})

</script>
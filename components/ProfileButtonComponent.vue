<template>
    <button class="h-auto w-full my-8" @click="onclick">
        <NuxtImg :src='photoURL' class="h-8 w-8 mx-8 rounded-full" />
        <p class="text-sm text-white text-ellipsis overflow-hidden w-16 mx-auto mt-2">{{ displayName }}</p>
    </button>
</template>

<script setup lang="ts">
const user = useCurrentUser()
const photoURL = user.value?.photoURL ?? "/sample/sample_profile_picture.png"
const displayName = user.value?.displayName ?? "Login"

onMounted(async () => {
})

const login = () => {
    navigateTo("/login")
};

const logout = () => {
    navigateTo("/logout")
};

const onclick = user?.value ? logout : login

</script>

<template>
  <div class="flex flex-col min-h-screen">
    <NuxtPage />
    <NavigationComponent/>
  </div>
</template>

<script setup lang="ts">

const router = useRouter()
const route = useRoute()
const user = useCurrentUser()

// we don't need this watcher on server
onMounted(() => {
  watch(user, (user, prevUser) => {
    if (prevUser && !user) {
      // user logged out
      router.push('/login')
    } else if (user && typeof route.query.redirect === 'string') {
      // user logged in
      router.push(route.query.redirect)
    }
  })
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.6s;
}
.page-enter-from {
  opacity: 0;
  transform: translate(0, 100%);

}
.page-leave-to {
  opacity: 0;
  transform: translate(0, -100%);

}
</style>

<template>
  <div class="flex flex-col min-h-screen place-content-between">
    <NuxtPage />
    <NavigationComponent/>
    <TitleComponent/>
  </div>
</template>

<script setup lang="ts">

const router = useRouter()
const route = useRoute()
// const user = useCurrentUser()

// // we don't need this watcher on server
// onMounted(() => {
//   watch(user, (user, prevUser) => {
//     if (prevUser && !user) {
//       // user logged out
//       router.push('/login')
//     } else if (user && typeof route.query.redirect === 'string') {
//       // user logged in
//       router.push(route.query.redirect)
//     }
//   })
// })
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from {
  opacity: 0;
  transform: translate(10%, 0);

}
.page-leave-to {
  opacity: 0;
  transform: translate(10%, 0);

}
</style>
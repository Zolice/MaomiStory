<template>
  <!-- Whole Screen -->
  <div class="flex flex-nowrap h-screen">
    <!-- Left Header/Sidebar -->
    <div class="h-screen w-auto mx-0 flex-none bg-gray-900 flex flex-col">
      <!-- Navigation on Sidebar -->
      <div class="flex flex-col my-auto">
        <button class="h-auto w-full">
          <img src="~/public/sample/sample_logo_256x256.png" class="h-8 w-8 mx-8 my-4 rounded-full" />
        </button>
        <button class="h-auto w-full">
          <img :src="navigationButton" @on-mouseover="navigationButtonMouseover"
            class="h-8 w-8 mx-8 my-4 rounded-full transition ease-linear hover:scale-110" />
        </button>
        <button class="h-auto w-full">
          <img :src="navigationButton" class="h-8 w-8 mx-8 my-4 rounded-full transition ease-linear hover:scale-110" />
        </button>
        <button class="h-auto w-full">
          <img :src="navigationButton" class="h-8 w-8 mx-8 my-4 rounded-full transition ease-linear hover:scale-110" />
        </button>
        <button class="h-auto w-full">
          <img :src="navigationButton" class="h-8 w-8 mx-8 my-4 rounded-full transition ease-linear hover:scale-110" />
        </button>

      </div>

      <!-- Login/User/Profile Button -->
      <button class="h-auto w-full">
        <img src="~/public/sample/sample_profile_picture.png" class="h-8 w-8 m-8 rounded-full" />
      </button>
    </div>

    <!-- Right Content -->
    <div class="w-auto overflow-y-auto overflow-x-hidden">
      <NuxtPage />
    </div>
  </div>

  <div></div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const user = useCurrentUser();

const navigationButton = "/public/spa.png"
const navigationButtonMouseover = "/public/sample/sample_logo_256x256.png"

// we don't need this watcher on server
onMounted(() => {
  watch(user, (user, prevUser) => {
    if (prevUser && !user) {
      // user logged out
      router.push("/login");
    } else if (user && typeof route.query.redirect === "string") {
      // user logged in
      router.push(route.query.redirect);
    }
  });
});
</script>=
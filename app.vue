<template>
    <!-- Whole Screen -->
    <div class="flex flex-nowrap h-screen">
        <!-- Left Header/Sidebar -->
        <div class="h-screen w-auto mx-0 flex-none bg-gray-900 flex flex-col">
            <!-- Navigation on Sidebar -->
            <div class="flex flex-col my-auto gap-2">
                <!-- Old Home Button -->
                <!-- <button class="btn btn-ghost h-auto w-full">
                    <img src="~/public/sample/sample_logo_256x256.png" class="h-8 w-8 rounded-full" />
                </button> -->

                <!-- Old Navigation Button -->
                <!-- <button @mouseover="mousingOver = true" @mouseleave="mousingOver = false"
                    class="btn btn-ghost h-auto w-full transition ease-linear hover:scale-110">

                    <img :src="mousingOver ? navigationButtonMouseover : navigationButton" class="h-8 w-8" />

                </button> -->

                <NavigationButtonComponent name="Home" link="/"/>
                <NavigationButtonComponent name="Sophia's Calculator" link="/calculator" />
                <NavigationButtonComponent name="Navigation Type C" />
                <NavigationButtonComponent name="Navigation Type D" />
            </div>

            <!-- Login/User/Profile Button -->
            <!-- Old Login/User/Profile -->
            <!-- <button class="h-auto w-full">
                <img src="~/public/sample/sample_profile_picture.png" class="h-8 w-8 m-8 rounded-full" />
            </button> -->

            <ProfileButtonComponent />
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

const logtest = () => {
    console.log("test")
}

</script>
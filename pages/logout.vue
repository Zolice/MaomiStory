<template>
    <div>
        <h1>Test</h1>
        <button class="btn bg-primary">ok</button>
    </div>
</template>

<script setup lang="ts">
//logout and redirect on mounte
import { getAuth, signOut } from "firebase/auth";

onMounted(() => {
    console.log("mounted")

    //logout
    const auth = getAuth();
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("sign out successful")
        //redirect to login
        navigateTo("/login")
    }).catch((error) => {
        // An error happened.
        console.log("sign out error", error)
    });
})
</script>
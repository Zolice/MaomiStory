<template>
    <div>
        <h1>Test</h1>
        <button class="btn" @click="logout">logout</button>
    </div>
</template>

<script setup lang="ts">

onMounted(() => {
    console.log("mounted")

    //check if user already logged in
    const user = useCurrentUser()
    if (user.value) {
        console.log("user already logged in")
        //log user name and email
        console.log(user.value?.displayName, user.value?.email)
        //redirect to index
        return
    }
})

const logout = () => {
    console.log("logout");
    //logout
    navigateTo("/logout")    
};
</script>
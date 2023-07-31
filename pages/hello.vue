<template>
  <div>
    <p>save me i want to play games</p>
    <p>"but maplestory savior"</p>
    <img :src="source" />
    <input
      class="input"
      type="text"
      v-model="nameRef"
      placeholder="your name"
    />
    <p>Your input was {{ nameRef }}</p>
    <p>Your input is {{ nameRef.length > 10 ? "long enough" : "not enough" }} </p>
    <p class="font-bold text-[300px]">the input was {{ itWasNull ?? "yes null" }} </p>
    <button class="btn rounded-full btn-primary btn-wide" @click="clickButton">its a very nice looking button</button>

    <template v-if="shouldRender">
      <p class="text-primary">then i should be primary</p>
    </template>
    <template v-else>
      <p class="text-red-500">then i should be red</p>
    </template>
    
    <NuxtLink to="/login">
        <button class="btn rounded-full">Click me to run from inferno</button>
    </NuxtLink>

    <button @click="changePage">Click me for js navigation</button>

    <p>From my api: {{ apiResult }}</p>
    <NameComponent :title="'hello some1'" />
  </div>
</template>

<script setup lang="ts">
    const nameRef = ref("");
    const source = "https://media.playpark.net/pp/savior/images/savior_logo.png";
    const shouldRender = true;

    const apiResult = ref("")

    const itWasNull = ref<any>(null)

    const changePage = () => {
        navigateTo("/login")
    };

    const clickButton = async () => {
        itWasNull.value = "not null"
    };

    onMounted(async () => {
        console.log("mounted");

        //get data from api savior.post
        const res: any = await $fetch("/api/savior", {
            method: "POST",
        })
        console.log(res)
        apiResult.value = res.message
    });

</script>
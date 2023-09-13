<template>
    <div class="bg-black/25 backdrop-blur-sm w-[400px] border-primary border p-4">
        <div class="flex">
            <NuxtImg src="/logo.png" class="w-[48px] h-[48px] object-contain mr-2" />
            <div>
                <div class="flex gap-1">
            <span class="material-symbols-outlined text-primary text-[22px] place-self-center">monetization_on</span>
            <p class="font-outfit font-bold">9999</p>
        </div>
        <div class="flex gap-1">
            <span class="material-symbols-outlined text-success text-[22px] place-self-center">package_2</span>
            <p class="font-outfit text-success font-light">999</p>
        </div>
            </div>
        </div>
        <p class="m-2 font-outfit font-light text-white w-full line-clamp-2">Legendary Arcaneshade Weapon Box</p>
        
        <div class="divider m-0 mb-1">
        </div>

        <div class="grid grid-cols-3 place-items-center">
            <div class=" col-span-2">
                <p class="text-gray-500 text-sm">Item is 
                    <span class="text-error">Untradeable</span>
                    on purchase.
                </p>
                <p class="text-gray-500 text-sm">
                    <span class="text-primary">700000</span>
                    Coins Required.
                </p>
            </div>
            <div class="justify-center place-items-center flex flex-col">
                <input type="number" class=" bg-transparent text-white text-center" value="1" />
                <button class="btn btn-ghost btn-sm">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

//setup firebase
import { collection, getDocs } from "firebase/firestore"; 

onMounted(async () => {
    //use nuxt app
    const { $db } = useNuxtApp()

    console.log("l;oaded")
    const querySnapshot = await getDocs(collection($db, "shopdata"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });
})

</script>
<template>
    <div class="h-screen">
        <NuxtImg src="/shopbg.png" class="h-screen w-screen object-cover fixed -z-10" />
        <!-- Title bar -->
        <div class="p-4 sticky top-0 z-10 backdrop-blur-sm">
            <div class="flex gap-2 p-4 place-items-center justify-between">
                <div class="flex gap-2 p-4 place-items-center">
                    <span class="material-symbols-outlined text-[48px]">spa</span>
                        <p class="text-[42px] font-inter uppercase font-bold tracking-wider leading-[48px] mr-4">Savior</p>
                        <div class="tooltip tooltip-bottom btn btn-ghost flex" data-tip="Coin Shop">
                            <NuxtImg src="logo.png" class=" h-[32px] w-[32px] object-contain" />
                        </div>
                        <div class="tooltip tooltip-bottom btn btn-ghost flex" data-tip="Coin Shop">
                            <NuxtImg src="logo.png" class=" h-[32px] w-[32px] object-contain" />
                        </div>
                        <div class="tooltip tooltip-bottom btn btn-ghost flex" data-tip="Coin Shop">
                            <NuxtImg src="logo.png" class=" h-[32px] w-[32px] object-contain" />
                        </div>
                </div>
                
                <!-- Filter and Shopping Cart -->
                <div class="flex">
                    <div class="tooltip tooltip-bottom btn btn-ghost flex" data-tip="Filter">
                        <span class="material-symbols-outlined">filter_list</span>
                    </div>
                    <div class="tooltip tooltip-bottom btn btn-ghost flex indicator" data-tip="View Cart">
                        <span class="indicator-item badge badge-primary badge-xs mt-1 mr-1">100</span>
                        <span class="material-symbols-outlined">shopping_cart</span>
                    </div>
                </div>
            </div>
            <p class="pl-4 font-outfit font-light text-gray-400">
                SAVIOR: Wongstaurant runs from 11/11/1970 to 11/11/2032. 
                <span class="text-primary">
                    Coin Shop Selected.
                </span>
            </p>
        </div>

        <!-- Shop Content -->
        <div class="p-8">
            <template v-for="k,v in shopList" :key="v">
                <ShopAccordionComponent :data="k" :name="v" :shopBoxCallback="shopBoxCallback"/>

            </template>
           
        </div>

        <div class="toast z-[52] mb-20">
            <ShopCartBoxComponent/>
        </div>

        
    </div>
</template>

<script setup lang="ts">

//setup firebase
import { collection, getDocs } from "firebase/firestore"; 

const shopList = ref<any>({})

onMounted(async () => {
    //use nuxt app
    const { $db } = useNuxtApp()

    console.log("loaded")
    const querySnapshot = await getDocs(collection($db, "shopdata"));
    querySnapshot.forEach((doc) => {
        let data = doc.data()
        if (data.category in shopList.value) {
            shopList.value[data.category].push(data)
        } else {
            shopList.value[data.category] = [data]
        }
    });
    console.log(shopList.value)
})

const shopBoxCallback = (data: any) => {
    console.log(data)
    console.log("got callback, show the popup for add to cart")
}

</script>
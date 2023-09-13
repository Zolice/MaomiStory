<template>
    <button @click="openBox" class="btn btn-ghost bg-black/25 flex flex-col justify-evenly place-items-center w-[200px] h-[210px] p-2 text-center rounded-lg">
        <NuxtImg src="/logo.png" class="w-[48px] h-[48px] object-contain" />
        <p class="text-white font-light font-outfit w-full line-clamp-2 mb-2">
            {{ data.name }}
        </p>
        <div class="flex gap-1 place-items-center">
            <span class="material-symbols-outlined text-primary text-[22px] place-self-center">monetization_on</span>
            <p class="font-outfit font-bold"> {{ data.price }}</p>
        </div>
        <div class="flex gap-1 place-items-center">
            <span class="material-symbols-outlined text-success text-[22px] place-self-center">package_2</span>
            <p class="font-outfit text-success font-light">{{ data.quantity }}</p>
        </div>
        <template v-if="data.interAccount">
            <p class="text-primary text-sm">Inter-Account</p>
        </template>
        <template v-else>
            <p class="text-error text-sm">Untradeable</p>
        </template>
    </button>
</template>

<script setup lang="ts">
    //setup emits with define
    const emits = defineEmits(['openBox'])

    //setup a prop json data to show the details of the box
    const props = defineProps({
        data: {
            type: Object,
            default: () => {
                return {
                    image: "/logo.png",
                    name: "Legendary Arcaneshade Weapon Box",
                    price: 9999,
                    quantity: 999,
                    interAccount: false,
                    perWorld: false,
                    shopId: 0
                }
            }
        }
    })

    //on click emit openBox
    const openBox = () => {
        emits('openBox', props.data)
    }


</script>
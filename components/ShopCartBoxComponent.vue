<template>
    <div class="bg-black/25 backdrop-blur-sm w-[400px] border-primary border p-4">
        <div class="flex">
            <NuxtImg src="/logo.png" class="w-[48px] h-[48px] object-contain mr-2" />
            <div>
                <div class="flex gap-1">
            <span class="material-symbols-outlined text-primary text-[22px] place-self-center">monetization_on</span>
            <p class="font-outfit font-bold">{{ data.price }}</p>
        </div>
        <div class="flex gap-1">
            <span class="material-symbols-outlined text-success text-[22px] place-self-center">package_2</span>
            <p class="font-outfit text-success font-light">{{ data.quantity }}</p>
        </div>
            </div>
        </div>
        <p class="m-2 font-outfit font-light text-white w-full line-clamp-2">{{ data.name }}</p>
        
        <div class="divider m-0 mb-1">
        </div>

        <div class="grid grid-cols-3 place-items-center">
            <div class=" col-span-2">
                <p class="text-gray-500 text-sm">Item is 
                    <template v-if="data.interAccount">
                        <span class="text-primary">Inter-Account</span>
                    </template>
                    <template v-else>
                        <span class="text-error">Untradeable</span>
                    </template>
                    on purchase.
                </p>
                <p class="text-gray-500 text-sm">
                    <span class="text-primary">{{data.price * purchaseAmount}}</span>
                    Coins Required.
                </p>
            </div>
            <div class="justify-center place-items-center flex flex-col">
                <input type="number" class=" bg-transparent text-white text-center input input-sm" v-model="purchaseAmount" :max="data.quantity" />
                <button class="btn btn-ghost btn-sm" @click="addToCart">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps(['data'])
const emit = defineEmits(['cartUpdate'])
const purchaseAmount = ref(1)

const addToCart = () => {
    console.log('add to cart')
    //add the entire item, and the quantity selected to the cart
    var finalQuantity = (purchaseAmount.value >= props.data.quantity) ? props.data.quantity : purchaseAmount.value
    console.log(finalQuantity)
    var cart = localStorage.getItem('cart')
    if (cart) {
        let cart2 = JSON.parse(cart)
        //check if cart contains the same item by comparing to props.data.name
        let index = cart2.findIndex((item: any) => {
            return (item.item.name == props.data.name) && (item.item.coinType == props.data.coinType)
        })
        //if exists, update the quantity instead of pushing a new one
        if (index != -1) {
            cart2[index].quantity += finalQuantity
        } else {
            cart2.push({
                item: props.data,
                quantity: finalQuantity
            })
        }

        localStorage.setItem('cart', JSON.stringify(cart2))
    } else {
        localStorage.setItem('cart', JSON.stringify([{
            item: props.data,
            quantity: finalQuantity
        }]))
    }
    emit('cartUpdate')  
}

onMounted(() => {
    
})

</script>
<template>
    <dialog id="cartModal" class="modal">
        <div class="modal-box max-w-[80%]">
            <p class="font-inter font-bold text-lg">Your Cart</p>
            <p class="font-outfit font-light">You have {{ cartData.length }} items in your cart</p>
            <br>
            <p class="font-outfit font-light flex gap-2">
                Total Price:
                <template v-for="priceData,v in finalPrices" :key="v" >
                    <div class="tooltip flex" :data-tip="v + ' coin'">
                        <span>[</span>
                        <span>
                            <NuxtImg src="/logo.png" class="w-[24px] h-[24px]"/>
                        </span>
                        <span>
                            {{priceData}}]
                        </span>
                    </div>
                </template>
            </p>
            <div class="overflow-y-auto">
                <table class="table table-pin-rows table-xs">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th>Icon</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-for="cartItem in cartData" :key="cartItem.item.id">
                            <CartRowComponent :cartItem="cartItem" @cart-update="cartDeleted"/>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>

<script setup lang="ts">

const props = defineProps({
    cartData: {
        type: Array,
        required: true
    }
})

const emits = defineEmits(['cartUpdate'])

const finalPrices = ref<any>({})
onMounted(() => {
    calculateFinalPrices()
})


const calculateFinalPrices = () => {
    //get coin data from cart
    let cart = localStorage.getItem('cart')
    let tempPrices: any = {}
    if (cart) {
        let cart2 = JSON.parse(cart)
        console.log(cart2)
        cart2.forEach((itemdata: any) => {
            if (itemdata.item.coinType in tempPrices) {
                tempPrices[itemdata.item.coinType] += itemdata.quantity * itemdata.item.price
            } else {
                tempPrices[itemdata.item.coinType] = itemdata.quantity * itemdata.item.price
            }
        });
    }
    finalPrices.value = tempPrices
    
}

const cartDeleted = () => {
    calculateFinalPrices()
    emits('cartUpdate')
}

defineExpose({
    calculateFinalPrices
})
</script>
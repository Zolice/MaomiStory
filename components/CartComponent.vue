<template>
    <dialog id="cartModal" class="modal">
        <div class="modal-box">
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
            <div class="overflow-x-auto">
                <table class="table">
                    <!-- head -->
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        <!-- row 1 -->
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                        <!-- row 2 -->
                        <tr class="hover">
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td>Purple</td>
                        </tr>
                        <!-- row 3 -->
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td>Red</td>
                        </tr>
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
import { on } from "events"


const props = defineProps({
    cartData: {
        type: Array,
        required: true
    }
})
const finalPrices = ref<any>({})
onMounted(() => {
    calculateFinalPrices()
})

onUpdated(() => {
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
</script>
<template>
    <tr class="hover">
        <td>
            <img :src="cartItem.item.image" alt="image" class="w-[24px] h-[24px] rounded-full">
        </td>

        <td>
            <p>{{cartItem.item.name}}</p>
        </td>

        <td>
            <p>{{cartItem.item.price * cartItem.quantity}} ({{ cartItem.item.price }} ea.)</p>
        </td>

        <td>
            <p>{{cartItem.quantity}}</p>
        </td>

        <td>
            <button class="btn btn-sm btn-ghost hover:text-primary drop-shadow-[0_10px_25px_rgba(246,211,123,1)]" @click="deleteFromCart">
                <span class="material-symbols-outlined text-error">delete</span>
            </button>
        </td>
    </tr>
</template>

<script setup lang="ts">

const props = defineProps(['cartItem'])
const emits = defineEmits(['cartUpdate'])

onMounted(() => {
    console.log(props.cartItem)
})

const deleteFromCart = () => {
    console.log('delete from cart')
    let cart = localStorage.getItem('cart')
    if (cart) {
        let cart2 = JSON.parse(cart)
        //check if cart contains the same item by comparing to props.data.name
        let index = cart2.findIndex((item: any) => {
            return (item.item.name == props.cartItem.item.name) && (item.item.coinType == props.cartItem.item.coinType)
        })
        console.log(index)
        //if exists, update the quantity instead of pushing a new one
        if (index != -1) {
            cart2.splice(index, 1)
        }
        localStorage.setItem('cart', JSON.stringify(cart2))
        emits('cartUpdate')
    }    
}

</script>
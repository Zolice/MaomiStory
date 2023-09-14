<template>
    <dialog id="cartModal" class="modal">
        <div class="modal-box">
            <h3 class="font-bold text-lg">cart</h3>
            <p class="py-4">you have {{ cartData.length }} things in cart</p>
        </div>
        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>
    </dialog>
</template>

<script setup lang="ts">

    const cartData = ref<any>([])
    onMounted(() => {
        //get cart from localstorage
        let cart = localStorage.getItem('cart')
        if (cart) {
            cartData.value = JSON.parse(cart)
        }
    })
</script>
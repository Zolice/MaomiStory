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
            <button class="btn btn-sm btn-ghost hover:text-primary drop-shadow-[0_10px_25px_rgba(246,211,123,1)]">
                <span class="material-symbols-outlined text-error">delete</span>
            </button>
        </td>
    </tr>
</template>

<script setup lang="ts">

const props = defineProps(['cartItem'])

onMounted(() => {
    console.log(props.cartItem)
})


</script>
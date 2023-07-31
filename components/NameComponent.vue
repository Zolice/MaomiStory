<template>
    <p>component from parent is {{ props.title }}</p>
    <div class="grid grid-cols-2 gap-4 place-items-center">
        <template v-for="name in names" :key="name">
            <div class="text-center bg-slate-500 rounded-lg p-4 mx-2 my-4 min-w-[300px]">
                <h3 class="text-red-400 font-bold">{{ name.name }}</h3>
                <p class="text-white">
                    id is {{ name.id }}, phone
                    {{ name.phone }}
                </p>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
const names = ref<any[]>([]);
const props = defineProps({ title: String });

onMounted(async () => {
    console.log("loaded");
    const res: any = await $fetch("https://jsonplaceholder.typicode.com/users");
    console.log(res);
    names.value = res;
});
</script>
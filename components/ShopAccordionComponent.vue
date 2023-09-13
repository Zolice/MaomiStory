<template>
    <div class="collapse mb-1 bg-black/25">
        <input type="radio" name="my-accordion-1" />
        <div class="collapse-title text-xl font-medium ">
            <p class="font-outfit"> {{ name }}<span class="ml-2 text-gray-400 text-sm">{{ data.length }} item(s) available</span></p>
        </div>
        <div class="collapse-content">
            <div class="p-8 flex flex-wrap gap-3 w-full max-h-[450px] overflow-auto">
                <template v-for="shopBox, v in data" :key="v">
                    <ShopBoxComponent :data="shopBox" @open-box="shopBoxCallback"/>
                </template> 
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    //define props data
    const props = defineProps(['data', 'name', 'shopBoxCallback'])
    console.log(props.data)


</script>
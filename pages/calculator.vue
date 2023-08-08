<template>
    <!-- spacing away from margins-->
    <div class="h-auto w-auto px-4 my-4">
        <p>Header thing to enter class specification</p>
        <!-- container thing -->
        <div class="container px-4 my-4 bg-black max-h-fit w-400">
            <input
                class="input"
                type="text"
                v-model="charclass" 
                placeholder="Character Class"
                
             />

        </div>
    </div>
</template>

<script setup lang="ts">
    const charclass = ref("");

</script>
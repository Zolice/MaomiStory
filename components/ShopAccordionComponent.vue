<template>
    <div class="collapse mb-1 bg-black/25">
        <input type="radio" name="my-accordion-1" />
        <div class="collapse-title text-xl font-medium ">
            <p class="font-outfit">Enhancements <span class="ml-2 text-gray-400 text-sm">999 items available</span></p>
        </div>
        <div class="collapse-content">
            <div class="p-8 flex flex-wrap gap-3 w-full max-h-[450px] overflow-auto">
                <ShopBoxComponent />
                <ShopBoxComponent />
                <ShopBoxComponent />
                <ShopBoxComponent />
                <ShopBoxComponent />
                <ShopBoxComponent />
                <ShopBoxComponent />
                <ShopBoxComponent />
                <ShopBoxComponent />
                <ShopBoxComponent />
            </div>
        </div>
    </div>
</template>
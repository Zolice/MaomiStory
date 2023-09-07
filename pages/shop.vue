<template>
    <div class="h-screen">
        <NuxtImg src="/shopbg.png" class="h-screen w-screen object-cover fixed -z-10" />
        <!-- Title bar -->
        <div class="p-4 sticky top-0 z-10 backdrop-blur-sm">
            <div class="flex gap-2 p-4 place-items-center">
                <span class="material-symbols-outlined text-[48px]">spa</span>
                <p class="text-[42px] font-inter uppercase font-bold tracking-wider leading-[48px] mr-4">Savior</p>
                <div class="tooltip tooltip-bottom btn btn-ghost flex" data-tip="Coin Shop">
                    <NuxtImg src="logo.png" class=" h-[32px] w-[32px] object-contain" />
                </div>
                <div class="tooltip tooltip-bottom btn btn-ghost flex" data-tip="Coin Shop">
                    <NuxtImg src="logo.png" class=" h-[32px] w-[32px] object-contain" />
                </div>
                <div class="tooltip tooltip-bottom btn btn-ghost flex" data-tip="Coin Shop">
                    <NuxtImg src="logo.png" class=" h-[32px] w-[32px] object-contain" />
                </div>
                
            </div>
            <p class="pl-4 font-outfit font-light text-gray-400">
                SAVIOR: Wongstaurant runs from 11/11/1970 to 11/11/2032. 
                <span class="text-primary">
                    Coin Shop Selected.
                </span>
            </p>
        </div>

        <!-- Shop Content -->
        <div class="p-8">
            <ShopAccordionComponent/>
            <ShopAccordionComponent/>
            <ShopAccordionComponent/>
        </div>

        <!-- extra space -->
        <div class="h-[75px]">
        </div>
        
       

    </div>
</template>
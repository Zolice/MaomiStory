<template>
    <div class="backdrop-blur-sm fixed bottom-0 z-50  h-24 w-full pl-8 p-4 flex gap-10 place-items-center">
        <NuxtLink to="/">
            <button class="btn rounded-full btn-ghost ">
                <span class="material-symbols-outlined text-primary drop-shadow-[0_1px_10px_rgba(246,211,123,1)]">home</span>
            </button>
        </NuxtLink>
        <NavButtonComponent link="/shop" symbol="monetization_on" />
        <NavButtonComponent link="/shop" symbol="spa" />
        <NavButtonComponent link="/shop" symbol="spa" />
        <NavButtonComponent link="/shop" symbol="spa" />
        <NavButtonComponent link="/shop" symbol="spa" />
        
    </div>
</template>
<template>
    <button class="btn btn-ghost bg-black/25 flex flex-col justify-evenly place-items-center w-[200px] h-[210px] p-2 text-center rounded-lg">
        <NuxtImg src="/logo.png" class="w-[48px] h-[48px] object-contain" />
        <p class="text-white font-light font-outfit w-full line-clamp-2 mb-2">
            Legendary Arcaneshade Weapon Box with long name
        </p>
        <div class="flex gap-1 place-items-center">
            <span class="material-symbols-outlined text-primary text-[22px] place-self-center">monetization_on</span>
            <p class="font-outfit font-bold">9999</p>
        </div>
        <div class="flex gap-1 place-items-center">
            <span class="material-symbols-outlined text-success text-[22px] place-self-center">package_2</span>
            <p class="font-outfit text-success font-light">999</p>
        </div>
        <p class="text-error text-sm">Untradeable</p>
    </button>
</template>
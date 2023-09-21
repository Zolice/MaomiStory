<template>
    <div class="h-auto">
        <NuxtImg src="/shopbg.png" class="h-screen w-screen object-cover fixed -z-10" />
        <!-- Title bar -->
        <div class="p-4 sticky top-0 z-10 backdrop-blur-sm">
            <div class="flex gap-2 p-4 place-items-center justify-between">
                <div class="flex gap-2 p-4 place-items-center">
                    <span class="material-symbols-outlined text-[48px]">spa</span>
                    <div class="dropdown btn btn-ghost">
                        <label tabindex="0" class="text-[42px] font-inter uppercase font-bold tracking-wider leading-[48px]">{{ currentSelectedShop.name }}</label>
                        <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                            
                            <li><a>Item 1</a></li>
                            <li><a>Item 2</a></li>
                        </ul>
                    </div>
                        
                    <template v-for="shop in currentSelectedShop.shopTypes" :key="shop">
                        <div class="tooltip tooltip-bottom btn btn-ghost flex" :data-tip="shop + ' Shop'" @click="()=> selectShop(shop)">
                            <NuxtImg src="logo.png" class=" h-[32px] w-[32px] object-contain" />
                        </div>
                    </template>
                    
                </div>
                
                <!-- Filter and Shopping Cart -->
                <div class="flex">
                    <div class="tooltip tooltip-bottom btn btn-ghost flex" data-tip="Filter">
                        <span class="material-symbols-outlined">filter_list</span>
                    </div>
                    <div class="tooltip tooltip-bottom btn btn-ghost flex indicator" data-tip="View Cart" @click="openCart">
                        <span v-if="cartTotal > 0" class="indicator-item badge badge-primary badge-xs mt-1 mr-1">{{ cartTotal }}</span>
                        <span class="material-symbols-outlined">shopping_cart</span>
                    </div>
                </div>
            </div>
            <p class="pl-4 font-outfit font-light text-gray-400">
                {{ currentSelectedShop.name }} runs from {{ currentSelectedShop?.startDate?.toDate().toLocaleDateString() }} to {{ currentSelectedShop?.endDate?.toDate().toLocaleDateString() }}. Shop Closes on {{ currentSelectedShop?.shopEndDate?.toDate().toLocaleDateString() }}.
                <span class="text-primary">
                    {{ selectedShopType }} Shop Selected.
                </span>
            </p>
        </div>

        <!-- Shop Content -->
        <div class="p-8">
            <template v-for="k,v in shopList" :key="v">
                <ShopAccordionComponent :data="k" :name="v" :shopBoxCallback="shopBoxCallback"/>

            </template>
           
        </div>

        <div class="toast z-[52] mb-20" :class="showToast ? '' : 'hidden'">
            <ShopCartBoxComponent :data="selectedData" @cart-update="quantityAdjust"/>
        </div>

        <CartComponent :cartData="cartData" ref="CartComponentRef" @cart-update="quantityAdjust"/>
        
    </div>
</template>

<script setup lang="ts">

//setup firebase
import { collection, getDocs, Timestamp } from "firebase/firestore"; 

const originalShopList = ref<any>({})
const shopList = ref<any>({})
const selectedData = ref<any>({})
const cartData = ref<any>([])
const cartTotal = ref(0)
const showToast = ref(false)
const shopsData = ref<any>([])
const currentSelectedShop = ref<any>({})
const selectedShopType = ref<string>("")

const { $db } = useNuxtApp()
const CartComponentRef = ref<any>(null)

onMounted(async () => {
    //use nuxt app
    loadShops()

    console.log("loadede")
    const querySnapshot = await getDocs(collection($db, "shopdata"));
    querySnapshot.forEach((doc) => {
        let data = doc.data()
        if (data.category in shopList.value) {
            shopList.value[data.category].push(data)
        } else {
            shopList.value[data.category] = [data]
        }
    });
    originalShopList.value = shopList.value
    console.log(shopList.value)
    quantityAdjust()
})

const openCart = () => {
    CartComponentRef.value.calculateFinalPrices()
    const cartModal = document.getElementById('cartModal') as HTMLDialogElement
    cartModal?.showModal()
}

const selectShop = (shopType: string) => {
    console.log(shopType)
    selectedShopType.value = shopType
    let tempList = quantityAdjust()
    Object.keys(tempList).map((category: any) => {
        tempList[category] = tempList[category].filter((item: any) => {
            return item.shopType == shopType
        })
        //if empty categoy, clear
        if (tempList[category].length == 0) {
            delete tempList[category]
        }
    });
    shopList.value = tempList
    console.log(shopList.value)
}

const loadShops = async () => {
    const querySnapshot = await getDocs(collection($db, "shops"));
    querySnapshot.forEach((doc) => {
        let data = doc.data()
        shopsData.value.push(data)
        if (data.current) {
            currentSelectedShop.value = data
        }
        if (data.shopTypes && data.shopTypes.length > 0) {
            selectedShopType.value = data.shopTypes[0]
        }
    });
    console.log(shopsData.value)
    console.log(currentSelectedShop.value)
    
}


const quantityAdjust = () => {
    var cart = localStorage.getItem('cart')
    if (cart) {
        let cart2 = JSON.parse(cart)
        cartTotal.value = cart2?.length ?? 0

        console.log(cart2)
        let totalloops = 0
        //TODO: find a better way for this, currently 3 loops
        const tempList = JSON.parse(JSON.stringify(originalShopList.value))
        // Object.keys(tempList).map((category: any) => {
        //     tempList[category].forEach((item: any) => {
        //         cart2.forEach((itemdata: any) => {
        //             if ((itemdata.item.name == item.name) && (itemdata.item.coinType == item.coinType)) {
        //                 item.quantity -= itemdata.quantity
        //             }
        //             totalloops++
        //         });
                
        //     });
        // });

        cart2.forEach((itemdata: any) => {
            let values: any = Object.keys(tempList)
            console.log(values)
            console.log(itemdata)

            category: for (let i = 0; i < values.length; i++) {
                if (itemdata.item.category != values[i]) {
                    console.log("skipping " + values[i])
                    continue category
                }
                
                itemlist: for (let j = 0; j < tempList[values[i]].length; j++) {
                    console.log(tempList[values[i]][j])
                    if ((itemdata.item.name == tempList[values[i]][j].name) && (itemdata.item.coinType == tempList[values[i]][j].coinType)) {
                        tempList[values[i]][j].quantity -= itemdata.quantity
                        break category
                    }
                }
            }
        });
        
        

        shopList.value = tempList
        console.log(shopList.value)
        console.log(totalloops)
        cartData.value = cart2

        showToast.value = false
        return tempList
    }
    
}

const shopBoxCallback = (data: any) => {
    console.log(data)
    selectedData.value = data
    showToast.value = true
}

</script>
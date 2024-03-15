<template>
  <MainLayout>
    <div id="ShoppingCartPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div class="h-[500px] flex items-center justify-center">
        <div class="pt-20">
          <img class="mx-auto" width="250" src="/cart-empty.png" />
          <div class="text-xl text-center mt-4">No items yet?</div>

          <div class="flex text-center">
            <NuxtLink
              to="/auth"
              class="bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >
              Sign in
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="md:flex gap-4 justify-between mx-auto w-full">
        <div class="md:w-[65%]">
          <div class="bg-white rounded-lg p-4">
            <div class="text-2xl font-bold mb-2">
              Shopping Cart ({{ userStore.cart.length }})
            </div>
          </div>

          <div class="bg-[#FEEEEF] rounded-lg p-4 mt-4">
            <div class="text-red-500 font-bold">
              Welcome Deal applicable on 1 item only
            </div>
          </div>

          <div id="Items" class="bg-white rounded-lg p-4 mt-4">
            <div v-for="product in products">
              <CartItem
                :product="product"
                :selectedArray="selectedArray"
                @selectedRadio="selectedRadioFunc"
              />
            </div>
          </div>
        </div>

        <div class="md:hidden block my-4" />
        <div class="md:w-[35%]">
          <div id="Summary" class="bg-white rounded-lg p-4">
            <div class="text-2xl font-extrabold mb-2">Summary</div>
            <div class="flex items-center justify-between my-4">
              <div class="font-semibold">Total</div>
              <div class="text-2xl font-semibold">
                $ <span class="font-extrabold">{{ totalPriceComputed }}</span>
              </div>
            </div>
            <button
              @click="goToCheckout"
              class="flex items-center justify-center bg-[#FD374F] w-full text-white text-[21px] font-semibold p-1.5 rounded-full mt-4"
            >
              Checkout
            </button>
          </div>
          <div id="PaymentProtection" class="bg-white rounded-lg p-4 mt-4">
            <div class="text-lg font-semibold mb-2">Payment methods</div>
            <div class="flex items-center justify-start gap-8 my-4">
              <div v-for="card in cards">
                <img :src="card" class="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();

const cards = ref(['visa.png', 'mastercard.png', 'paypal.png', 'applepay.png']);
const selectedArray = ref([]);

const totalPriceComputed = computed(() => {
  const total = userStore.cart.reduce(
    (acc, currItem) => acc + currItem.price,
    0
  );
  return total / 100;
});

const selectedRadioFunc = (el) => {
  const index = selectedArray.value.findIndex((item) => item.id === el.id);

  if (index === -1) {
    selectedArray.value.push(el);
  } else {
    selectedArray.value.splice(index, 1);
  }
};

const goToCheckout = () => {
  userStore.cart = [];

  const selectedItems = userStore.cart.filter((item) =>
    selectedArray.value.some((selectedItem) => selectedItem.id === item.id)
  );

  userStore.checkout = [...userStore.checkout, ...selectedItems];

  navigateTo('/checkout');
};

const products = [
  {
    title: 'Product 1',
    description: 'Description for Product 1',
    id: '001',
    url: 'https://picsum.photos/id/7/800/800',
    price: 1099,
  },
  {
    title: 'Product 2',
    description: 'Description for Product 2',
    id: '002',
    url: 'https://picsum.photos/id/71/800/800',
    price: 1999,
  },
];
</script>

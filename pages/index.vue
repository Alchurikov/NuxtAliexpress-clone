<template>
  <MainLayout>
    <div id="IndexPage" class="mt-4 max-w-[1200px] mx-auto px-2">
      <div
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div v-if="products" v-for="product in products" :key="product.id">
          <ProductComponent :product="product" />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
const products = [
  {
    title: 'Product 1',
    description: 'Description for Product 1',
    id: '1',
    url: 'https://picsum.photos/id/7/800/800',
    price: 1099,
  },
  {
    title: 'Product 2',
    description: 'Description for Product 2',
    id: '2',
    url: 'https://picsum.photos/id/71/800/800',
    price: 1999,
  },
  {
    title: 'Product 3',
    description: 'Description for Product 3',
    id: '3',
    url: 'https://picsum.photos/id/72/800/800',
    price: 2999,
  },
  {
    title: 'Product 4',
    description: 'Description for Product 4',
    id: '4',
    url: 'https://picsum.photos/id/73/800/800',
    price: 1499,
  },
  {
    title: 'Product 5',
    description: 'Description for Product 5',
    id: '5',
    url: 'https://picsum.photos/id/74/800/800',
    price: 2499,
  },
  {
    title: 'Product 6',
    description: 'Description for Product 6',
    id: '6',
    url: 'https://picsum.photos/id/75/800/800',
    price: 3499,
  },
  {
    title: 'Product 7',
    description: 'Description for Product 7',
    id: '7',
    url: 'https://picsum.photos/id/76/800/800',
    price: 3999,
  },
  {
    title: 'Product 8',
    description: 'Description for Product 8',
    id: '8',
    url: 'https://picsum.photos/id/77/800/800',
    price: 4999,
  },
  {
    title: 'Product 9',
    description: 'Description for Product 9',
    id: '9',
    url: 'https://picsum.photos/id/78/800/800',
    price: 5499,
  },
  {
    title: 'Product 10',
    description: 'Description for Product 10',
    id: '10',
    url: 'https://picsum.photos/id/79/800/800',
    price: 6499,
  },
];
</script>

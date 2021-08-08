<template>
  <div class="flex flex-row flex-wrap items-center justify-center mt-20">
    <div v-for="product in $store.state.products" :key="product.id">
      <div
        class="grid-product flex flex-col items-start mx-2 cursor-pointer"
        key="0"
        @click="onClick(product)"
      >
        <img
          :src="require(`../assets/` + product.img)"
          alt="prod"
          class="max-w-482 max-h-724"
        />
        <div class="desc py-2 flex flex-col items-start">
          <p>{{ product.desc }}</p>
          <p>{{ product.price }}$</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    function findImgUrl(imgUrl) {
      return require(imgUrl);
    }
    function onClick(product) {
      console.log(
        "clicked",
        product.id,
        product.img,
        product.desc,
        product.price
      );
      router.push({
        name: "Product",
        params: product,
      });
    }
    return { onClick, findImgUrl };
  },
};
</script>

<style></style>

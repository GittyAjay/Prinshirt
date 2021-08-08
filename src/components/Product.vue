<template>
  <div class="flex flex-row justify-center items-start flex-wrap mt-20">
    <img :src="getImgUrl($route.params.img)" alt="prod1" class="mb-10" />
    <div class="flex flex-col items-stretch mx-10">
      <div class="flex flex-col justify-start items-start">
        <h1 class="text-4xl mb-2">{{ $route.params.desc }}</h1>
        <h1 class="text-2xl mb-2">{{ $route.params.price }}</h1>
      </div>
      <h1 class="text-2xl mb-2 flex justify-start">size</h1>
      <div class="flex flex-row my-2">
        <button
          class="
            bg-transparent
            focus:border-black
            focus:bg-gray-50
            text-black
            py-2
            px-3
            border-2
            mr-10
          "
          @click="size = `Small`"
        >
          Small
        </button>
        <button
          class="
            bg-transparent
            focus:border-black
            focus:bg-gray-50
            text-black
            py-2
            px-3
            border-2
            mr-10
          "
          @click="size = `Medium`"
        >
          Medium
        </button>
        <button
          class="
            bg-transparent
            focus:border-black
            focus:bg-gray-50
            text-black
            py-2
            px-3
            border-2
            mr-10
          "
          @click="size = `Large`"
        >
          Large
        </button>
        <button
          class="
            bg-transparent
            focus:border-black
            focus:bg-gray-50
            text-black
            py-2
            px-3
            border-2
            mr-10
          "
          @click="size = ` X Large`"
        >
          X Large
        </button>
      </div>
      <h1 class="text-2xl mb-2 flex justify-start">color-{{ color }}</h1>
      <div class="flex flex-row my-2">
        <div
          class="bg-red-100 w-10 h-10 mr-5"
          @click="changeColor('red')"
        ></div>
        <div
          class="bg-blue-100 w-10 h-10 mr-5"
          @click="changeColor('blue')"
        ></div>
        <div
          class="bg-green-100 w-10 h-10 mr-5"
          @click="changeColor('green')"
        ></div>
        <div
          class="bg-indigo-100 w-10 h-10 mr-5"
          @click="changeColor('indigo')"
        ></div>
      </div>
      <button
        class="
          bg-transparent
          focus:border-black
          focus:bg-gray-50
          text-black
          max-w-full
          py-3
          border-2
          mr-10
          mt-5
        "
        v-if="!isCartSelected"
        @click="addToCart"
      >
        Add to cart
      </button>
      <button
        class="
          bg-black
          text-white
          max-w-full
          py-3
          mr-10
          mt-5
          flex flex-row
          justify-center
          items-center
        "
      >
        Buy with
        <img
          src="../assets/phonpay.webp"
          alt="phonpay"
          width="20"
          height="20"
          class="mx-2"
        />
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  props: {
    allProps: {},
  },
  setup(context) {
    const size = ref("");
    console.log(context);
    const color = ref("red");
    const isCartSelected = ref(false);
    const store = useStore();
    const route = useRoute();

    function getImgUrl(imgName) {
      return require("../assets/" + imgName);
    }
    function changeColor(colors) {
      color.value = colors;
      console.log("function is called", color.value);
    }
    function addToCart() {
      isCartSelected.value = true;
      store.dispatch("ADD_TO_CART", { ...route.params, size, color });
    }
    watch(store.state.cart, (prev, newValue) => {
      console.log("values added");
      console.log(prev, newValue);
    });
    return { getImgUrl, color, changeColor, addToCart, isCartSelected, size };
  },
};
</script>

<style></style>

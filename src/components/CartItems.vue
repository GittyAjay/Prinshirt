<template>
  <div
    class="
      cart
      h-full
      w-1/4
      bg-white
      fixed
      top-0
      right-0
      bottom-0
      flex flex-col
      justify-start
      items-stretch
      py-10
      transition-all
      duration-100
      ease-in
      delay-100
    "
    v-if="$store.state.isSidebarEnable"
  >
    <div class="flex flex-row justify-between mx-10 items-stretch">
      <h1>CART</h1>
      <XIcon
        class="h-6 w-6 mr-4 text-black-100 cursor-pointer hover:text-red-600"
        @click="$store.state.isSidebarEnable = false"
      />
    </div>
    <div class="overflow-y-auto">
      <div
        class="carts flex flex-col items-stretch my-10 mx-5"
        v-for="cart in $store.state.cart"
        :key="cart.id"
      >
        <div class="cart flex flex-row">
          <img
            :src="require(`../assets/` + cart.img)"
            alt="img"
            width="100"
            height="100"
          />
          <div class="bio flex flex-col justify-between items-stretch mx-5">
            <div class="bio-note flex flex-col text-left">
              <p>{{ cart.desc }}</p>
              <p>{{ cart.size }}/{{ cart.color }}</p>
            </div>
            <div class="bio-note flex flex-row justify-between">
              <div class="buttons flex flex-row justify-center">
                <button
                  class="mr-5"
                  @click="cart.count = parseInt(cart.count) + 1"
                >
                  +
                </button>
                <p>{{ cart.count }}</p>
                <button
                  class="ml-5"
                  @click="
                    cart.count > 1 && (cart.count = parseInt(cart.count) - 1)
                  "
                >
                  -
                </button>
              </div>
              <p>${{ cart.price * cart.count }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="total flex flex-row justify-between items-strecth my-5 mx-5">
      <p>SUBTOTAL</p>
      {{ totalPrice }}
      <p>{{ price }}$</p>
    </div>
    <div class="checkout flex flex-col items-strecth">
      <button
        class="
          bg-blue-500
          text-white
          max-w-full
          py-3
          flex flex-row
          justify-center
          items-center
          mx-5
        "
      >
        checkout
      </button>
    </div>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/solid";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
// import { computed, ref } from "@vue/runtime-core";
export default {
  components: { XIcon },
  setup() {
    const price = ref(0);
    const store = useStore();
    const totalPrice = computed(() => {
      let sum = 0;
      console.log("price...");
      store.state.cart.map((value) => {
        sum = sum + value.count * value.price;
      });
      price.value = sum;
    });
    return { totalPrice, price };
  },
};
</script>

<style>
</style>
<template>
  <div
    class="
      flex flex-row
      justify-around
      items-center
      px-10
      py-5
      shadow-sm
      fixed
      top-0
      right-0
      left-0
      bg-white
    "
  >
    <h1 class="text-lg">Prinshirt</h1>
    <nav class="flex flex-row">
      <a href="#"><UserIcon class="h-6 w-6 mr-4 text-black-100" /></a>
      <a href="#"> <SearchIcon class="h-6 w-6 mr-4 text-black-100" /></a>
      <div
        class="cart flex justify-center items-center relative"
        @click="onClick"
      >
        <ShoppingBagIcon
          class="h-6 w-6 mr-4 text-black-100 cursor-pointer"
          @click="$store.state.isSidebarEnable = true"
        />
        <div
          v-if="onCartItemAdded"
          class="no-of-cart-item w-2 h-2 bg-red-400 absolute bottom-0 rounded"
        ></div>
      </div>
    </nav>
  </div>
</template>

<script>
import { UserIcon, SearchIcon, ShoppingBagIcon } from "@heroicons/vue/solid";
import { computed, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import { ref } from "vue";
export default {
  components: { UserIcon, SearchIcon, ShoppingBagIcon },
  setup() {
    const cartItems = ref([]);
    const store = useStore();
    watch(store.state.cart, () => {
      console.log("changed");
      cartItems.value.push(store.state.cart);
    });
    const onCartItemAdded = computed(() => {
      return cartItems.value.length > 0 ? true : false;
    });
    const onClick = computed(() => {
      console.log("clicked", cartItems);
    });
    return { onClick, onCartItemAdded };
  },
};
</script>

<style></style>

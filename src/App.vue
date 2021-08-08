<template>
  <Header />
  <router-view />
  <CartItems />
</template>
<script>
import Header from "./components/Header.vue";
import { ref } from "@vue/reactivity";
import CartItems from "./components/CartItems.vue";

export default {
  components: {
    Header,
    CartItems,
  },
  setup() {
    const categories = ref("Male");
    function selectCategories() {
      categories.value == "Male"
        ? (categories.value = "Female")
        : (categories.value = "Male");
    }
    return { selectCategories, categories };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

import { createStore } from "vuex";
export default createStore({
  state: {
    user: {},
    products: [
      { id: '1', img: 'prod1.webp', desc: `Jack's Classic Fit Tee`, size: '', color: '', count: 1, price: 31 },
      { id: '2', img: 'prod2.webp', desc: `Jack's Classic Fit Tee`, size: '', color: '', count: 1, price: 31 },
      { id: '3', img: 'prod3.webp', desc: `Jack's Classic Fit Tee`, size: '', color: '', count: 1, price: 31 },
      { id: '4', img: 'prod4.webp', desc: `Jack's Classic Fit Tee`, size: '', color: '', count: 1, price: 31 },
      { id: '5', img: 'prod5.webp', desc: `Jack's Classic Fit Tee`, size: '', color: '', count: 1, price: 31 },
      { id: '6', img: 'prod5.webp', desc: `Jack's Classic Fit Tee`, size: '', color: '', count: 1, price: 31 },
    ],
    cart: [],
    isSidebarEnable: false
  },
  mutations: {
    addToCart: (state, payload) => {
      state.cart.push(payload);
    }
  },
  actions: {
    ADD_TO_CART: (context, payload) => {
      context.commit('addToCart', payload);
    }
  },
  modules: {},
});

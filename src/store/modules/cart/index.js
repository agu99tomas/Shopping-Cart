const state = {
  items: [],
};

const mutations = {
  ADD_ITEM({ items }, item) {
    if (items.indexOf(item) === -1) items.push(item);
    item.total++;
  },
  DECREASE_ITEM({ items }, item) {
    item.total--;
    if (item.total < 1) items.splice(items.indexOf(item), 1);
  },
  DELETE_ITEM({ items }, item) {
    items.splice(items.indexOf(item), 1);
  },
};

const actions = {
  addItem({ commit }, item) {
    commit("ADD_ITEM", item);
  },
  decreaseItem({ commit }, item) {
    commit("DECREASE_ITEM", item);
  },
  deleteItem({ commit }, item) {
    commit("DELETE_ITEM", item);
  },
};

const getters = {
  cartItems: ({ items }) => items,
  bought: ({ items }) => items.reduce((ac, item) => item.total + ac, 0),
  total: ({ items }) => items.reduce((ac, item) => item.cost * item.total + ac, 0),
};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;

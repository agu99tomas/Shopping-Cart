import { seedData } from "./seed.js";

const state = {
    products : seedData,
}

const mutations = {}

const actions = {}

const getters = {
    products : state => state.products,
}

const productModule = {
    state,
    mutations,
    actions,
    getters,
}
export default productModule;
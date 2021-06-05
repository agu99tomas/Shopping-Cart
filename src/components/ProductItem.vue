<template>
  <v-card class="mx-auto" max-width="344" light>
    <v-img :src="product.imageUrl" height="300px"></v-img>

    <v-card-title class="mb-1">
      {{ product.title }}
      <v-spacer></v-spacer>
      <div class="amber--text font-weight-bold mr-2">${{ product.cost }}</div>
    </v-card-title>

    <v-card-subtitle>
      {{ product.description }}
    </v-card-subtitle>

    <v-container>
      <v-btn color="amber" elevation="0" dark block @click="addItem(product)">
        <v-icon left>mdi-cart</v-icon>
        Add to cart
      </v-btn>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Poster",
  props: ["product"],
  methods: mapActions(["addItem"]),
};
</script>
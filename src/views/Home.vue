<template>
  <div id="Home">
    <v-toolbar color="amber" dark flat>
      <v-toolbar-title class="text-uppercase font-weight-medium"
        >select food</v-toolbar-title
      >
      <v-spacer></v-spacer>
      <v-btn text icon class="mr-2" router to="Cart">
        <v-icon>mdi-cart-outline</v-icon>
        <v-badge
          v-if="bought > 0"
          color="amber darken-1"
          :content="bought"
        ></v-badge>
      </v-btn>
    </v-toolbar>

    <v-container>
      <v-carousel :cycle="true" hide-delimiters>
        <v-carousel-item v-for="product in products" :key="product.id">
          <ProductItem :product="product" />
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
import { mapGetters } from "vuex";

export default {
  components: { ProductItem },
  name: "Home",
  computed: mapGetters(["bought", "products"]),
};
</script>

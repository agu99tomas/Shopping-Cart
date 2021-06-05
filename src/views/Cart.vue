<template>
  <div id="cart">
    <v-toolbar color="amber" dark flat>
      <v-btn text icon class="mr-2" router to="/">
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <v-toolbar-title class="text-uppercase font-weight-medium"
        >SHOOPING</v-toolbar-title
      >
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-container>
      <CartItem
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        :cartItem="cartItem"
      />

      <v-card class="mt-5">
        <v-container class="d-flex">
          <span class="subtitle-2 d-flex font-weight-bold align-center"
            >Total:
          </span>
          <v-spacer></v-spacer>
          <span
            class="amber--text font-weight-bold subtitle-1 d-flex align-center mr-5"
            >${{ total }}</span
          >
        </v-container>
      </v-card>
      <v-btn class="mt-2" color="amber" dark block> Payment </v-btn>
    </v-container>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import { mapGetters } from "vuex";

export default {
  components: { CartItem },
  name: "Cart",
  computed: mapGetters(["cartItems", "total"]),
};
</script>

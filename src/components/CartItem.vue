<template>
  <v-card class="mt-2">
    <v-container>
      <v-row>
        <v-col cols="3">
          <v-img
            :src="cartItem.imageUrl"
            height="60px"
            width="60px"
            contain
          ></v-img>
        </v-col>
        <v-col cols="6">
          <span class="subtitle-1 font-weight-bold">{{ cartItem.title }}</span>
          <span class="amber--text font-weight-bold mr-2 d-block"
            >${{ cartItem.cost }}</span
          >
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <div class="mt-2 d-flex">
        <v-btn icon class="align-center" @click="addItem(cartItem)">
          <v-icon class="grey--text">mdi-chevron-up</v-icon>
        </v-btn>

        <span class="font-weight-medium grey--text align-center d-flex">
          {{ cartItem.total }}
        </span>

        <v-btn icon class="align-center" @click="decreaseItem(cartItem)">
          <v-icon class="grey--text">mdi-chevron-down</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon class="align-center" @click="deleteItem(cartItem)">
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "cartItem",
  props: ["cartItem"],
  methods: mapActions(["addItem", "decreaseItem", "deleteItem"]),
};
</script>

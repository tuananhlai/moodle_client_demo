<template>
  <div>
    <main-screen />
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </div>
</template>

<script>
import MainScreen from "../../components/MainScreen.vue";

export default {
  components: { MainScreen },
};
</script>

<style scoped></style>

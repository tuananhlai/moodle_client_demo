<template>
  <base-line class="background">
    <v-layout align-center justify-center mt-12>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Sign In</v-toolbar-title>
          </v-toolbar>
          <v-card-text class="my-4">
            <v-form @submit="login()" class="mt-4">
              <v-text-field
                prepend-icon="mdi-account"
                v-model="user.email"
                label="Username"
                placeholder="username"
                outlined
                required
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                v-model="user.password"
                label="Password"
                outlined
                required
                placeholder="password"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>
              <v-checkbox v-model="keepsignin" :label="`Stay logged in`">
              </v-checkbox>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="mr-2 mb-2" color="primary" @click="login()"
              >Login</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </base-line>
</template>

<script>
import BaseLine from "../layouts/Baseline.vue";
import { AUTH_LOGIN } from "../../store/actions/auth";

export default {
  name: "Login",
  components: {
    BaseLine,
  },
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      keepsignin: false,
      showPassword: false,
    };
  },
  methods: {
    login() {
      this.$store.dispatch(AUTH_LOGIN, this.user).then(() => {
        if (this.$route.query.redirect) {
          this.$router.push(this.$route.query.redirect);
        }
        this.$router.push({ path: "/courses/home" });
      });
    },
  },
};
</script>

<style scoped></style>

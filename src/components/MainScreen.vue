<template>
  <div>
    <v-app-bar app color="primary" dark elevation="0">
      <v-app-bar-nav-icon
        @click.stop="sidebarMenu = !sidebarMenu"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn @click="toggleTheme" color="primary" class="mr-2">{{
        buttonText
      }}</v-btn>
      <v-icon>mdi-account</v-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="sidebarMenu"
      app
      floating
      :permanent="sidebarMenu"
      :mini-variant.sync="mini"
      class="background-color: lightgray"
    >
      <v-list dense color="primary" dark>
        <v-list-item>
          <v-list-item-action>
            <v-icon @click.stop="sidebarMenu = !sidebarMenu"
              >mdi-chevron-left</v-icon
            >
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <h3>Menu</h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-card class="mx-3 mt-5" outline shaped tile>
        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.href"
            active-class="primary--text"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <router-view name="navigation"></router-view>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "MainScreen",
  data: () => ({
    sidebarMenu: true,
    toggleMini: false,
    items: [
      { title: "Home", href: "/courses/home", icon: "mdi-home-outline" },
      {
        title: "Dashboard",
        href: "/courses/dashboard",
        icon: "mdi-view-dashboard",
      },
      {
        title: "Calendar",
        href: "/courses/calendar",
        icon: "mdi-calendar-month-outline",
      },
      {
        title: "Private files",
        href: "/courses/users/files",
        icon: "mdi-file",
      },
      { title: "My courses", href: "", icon: "mdi-school" },
      { title: "Math", href: "/courses/math", icon: "mdi-school-outline" },
      {
        title: "English",
        href: "/courses/english",
        icon: "mdi-school-outline",
      },
    ],
  }),
};
</script>

<template>
  <div>
    <v-app-bar app color="primary" dark elevation="0">
      <v-app-bar-nav-icon
        @click.stop="sidebarMenu = !sidebarMenu"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(a, index) in menu"
            :key="index"
            link
            :to="a.href"
            active-class="primary--text"
          >
            <v-list-item-icon>
              <v-icon>{{ a.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ a.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
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
    menu: [
      { title: "Profile", href: "", icon: "mdi-account" },
      { title: "Grades", href: "", icon: "mdi-calendar-month-outline" },
      { title: "Messages", href: "", icon: "mdi-forum" },
      { title: "Preference", href: "", icon: "mdi-cog-outline" },
      { title: "Log out", href: "/", icon: "mdi-logout-variant" },
    ],
  }),
};
</script>

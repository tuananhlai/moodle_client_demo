import Login from "./views/Login.vue";
import Courses from "./views/Main.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: require("./views/Moodle/Home.vue").default,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "./views/Moodle/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
  },
  {
    path: "/courses",
    name: "Courses",
    component: Courses,
    children: [
      {
        path: "home",
        alias: [""],
        name: "Home",
        component: () => import("./views/Home.vue"),
      },
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("./views/Dashboard.vue"),
      },
      {
        path: "calendar",
        name: "Calendar",
        component: () => import("./views/Calendar.vue"),
      },
      {
        path: "users/files",
        name: "Files",
        component: () => import("./views/Files.vue"),
      },
      {
        path: "math",
        name: "Course",
        component: () => import("./views/Course.vue"),
      },
    ],
  },
];

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EventLayout from "../views/events/EventLayout.vue";
import EventDetail from "../views/events/EventDetail.vue";
import EventRegister from "../views/events/EventRegister.vue";
import EventEdit from "../views/events/EventEdit.vue";
import NotFound from "../views/NotFound.vue";
import NetworkError from "../views/NetworkError.vue";
import Nprogress from "nprogress";
import serviceEvent from "../services/ServiceEvent";
import Gstore from "../store";

const routes = [
  {
    path: "/",
    redirect: { name: "home" },
  },
  {
    path: "/events",
    name: "home",
    component: HomeView,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/event/:id(.*)",
    redirect: (route) => ({ path: `/events/${route.params.id}` }),
  },
  {
    path: "/events/:id",
    name: "EventLayout",
    component: EventLayout,
    beforeEnter: (to) => {
      return serviceEvent
        .getEvent(to.params.id)
        .then((res) => {
          Gstore.event = res.data;
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            return {
              name: "404Resource",
              params: { resource: "event" },
            };
          } else {
            return { name: "NetworkError" };
          }
        });
    },
    children: [
      {
        path: "",
        name: "EventDetail",
        component: EventDetail,
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister,
      },
      {
        path: "edit",
        name: "EventEdit",
        component: EventEdit,
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/404/:resource",
    name: "404Resource",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-error",
    name: "NetworkError",
    component: NetworkError,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach(() => {
  Nprogress.start();
});
router.afterEach(() => {
  Nprogress.done();
});

export default router;

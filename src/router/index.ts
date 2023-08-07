import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventOrganizerView from '../views/EventOrganizerView.vue'
import StudentListView from "../views/StudentListView.vue"
import EventDetailView from "../views/event/EventDetailView.vue"
import EventEditView from "../views/event/EventEditView.vue"
import EventRegisterView from "../views/event/EventRegisterView.vue"
import EventLayoutView from "../views/event/EventLayoutView.vue"
import NotFoundView from "../views/NotFoundView.vue"
import NetworkErrorView from '../views/NetworkErrorView.vue'
import nProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props : (route) => ({page: parseInt(route.query?.page as string || '1'),limit: parseInt(route.query?.limit as string || '2')})
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/organizer',
      name: 'organizer',
      component: EventOrganizerView
    },
    {
      path: '/student',
      name: 'student',
      component: StudentListView
    },
    {
      path : '/event/:id',
      name : 'event-layout',
      component : EventLayoutView,
      props : true,
        beforeEnter: (to) => {
          // <-- put API call here
        },
      children : [
        {
          path: '',
          name: 'event-detail',
          component: EventDetailView,
          props: true
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEditView,
          props: true
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegisterView,
          props: true
        }
      ]
    },
    {
      path : '/:catchAll(.*)'
    , name : 'not-found'
    ,component : NotFoundView
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundView,
      props: true
    },
    {
      path : '/network-error',
      name : 'network-error',
      component : NetworkErrorView
    }

  ]
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})



export default router

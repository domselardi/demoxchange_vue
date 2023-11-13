import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'activatedRoute',
  routes: [
    {
      path: '/',
      name: 'DemoxchangeHomepageView',
      component: () => import('../views/DemoxchangeHomepageView.vue'),
      meta: {
        auth: false,
        apiFunction: 'kokoloko'
      }
    },
    {
      path: '/digital-currency-daily',
      name: 'DemoxchangeDigitalCurrencyDailyView',
      component: () => import('../views/DemoxchangeDigitalCurrencyDailyView.vue'),
      meta: { auth: false }
    },
    {
      path: '/digital-currency-weekly',
      name: 'DemoxchangeDigitalCurrencyWeeklyView',
      component: () => import('../views/DemoxchangeDigitalCurrencyWeeklyView.vue'),
      meta: { auth: false }
    },
    {
      path: '/digital-currency-monthly',
      name: 'DemoxchangeDigitalCurrencyMonthlyView',
      component: () => import('../views/DemoxchangeDigitalCurrencyMonthlyView.vue'),
      meta: { auth: false }
    }
  ]
})

export default router

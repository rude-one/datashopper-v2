import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'overview',
    component: () => import('@/views/OverviewView.vue'),
    meta: { title: 'Overview' }
  },
  {
    path: '/visitor-identification',
    name: 'visitor-identification',
    component: () => import('@/views/VisitorIdentificationView.vue'),
    meta: { title: 'Visitor Identification' }
  },
  {
    path: '/direct-mail',
    name: 'direct-mail',
    component: () => import('@/views/DirectMailView.vue'),
    meta: { title: 'Direct Mail' }
  },
  {
    path: '/websites',
    name: 'websites',
    component: () => import('@/views/WebsitesView.vue'),
    meta: { title: 'Websites' }
  },
  {
    path: '/analytics',
    name: 'analytics',
    component: () => import('@/views/AnalyticsView.vue'),
    meta: { title: 'Analytics' }
  },
  {
    path: '/audiences',
    name: 'audiences',
    component: () => import('@/views/AudiencesView.vue'),
    meta: { title: 'Audiences' }
  },
  {
    path: '/integrations',
    name: 'integrations',
    component: () => import('@/views/IntegrationsView.vue'),
    meta: { title: 'Integrations' }
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('@/views/SettingsView.vue'),
    meta: { title: 'Settings' }
  },
  {
    path: '/api-docs',
    name: 'api-docs',
    component: () => import('@/views/ApiDocsView.vue'),
    meta: { title: 'API Docs' }
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('@/views/HelpView.vue'),
    meta: { title: 'Help' }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title || 'Dashboard'} | DataShopper`
  next()
})

export default router

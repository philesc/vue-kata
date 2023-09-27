import { createRouter, createWebHistory } from 'vue-router'
import EmployeeReport from "@/views/EmployeeReport.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EmployeeReport
    }
  ]
})

export default router

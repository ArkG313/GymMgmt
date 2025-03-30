import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/DengLu', component: () => import('../views/DengLu.vue') },
        { path: '/', component: () => import('../views/ShouYe.vue') },
        { path: '/JLGuanli', component: () => import('../views/JLGuanli.vue') },
        { path: '/Home', component: () => import('../views/Home.vue') },
        { path: '/HYGuanli', component: () => import('../views/HYGuanli.vue') },
        { path: '/KCGuanli', component: () => import('../views/KCGuanli.vue') },
        { path: '/SPGuanli', component: () => import('../views/SPGuanli.vue') },
    ]
})
export default router;
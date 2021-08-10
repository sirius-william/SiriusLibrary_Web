import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: "/login",
        component: () => import("../pages/login")
    },
    {
        path: "/main",
        component: () => import("../pages/MainPage"),
        children: [
            {
                path: "/borrow_and_lend",
                component: () => import("../pages/BorrowAndLend")
            },
            {
                path: "/show_books",
                component: () => import("../pages/ShowBooks")
            },
            {
                path: "",
                component: () => import("../pages/Home")
            },
            {
                path: "/user_list",
                component: () => import("../pages/User")
            },
            {
                path: "/userinfo",
                component: () => import("../pages/UserInfo")
            }
        ]
    },
    {
        path: "/",
        redirect: "/login"},

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

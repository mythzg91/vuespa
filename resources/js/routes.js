import Home from './components/Home.vue'
import About from './components/About.vue'
import Feedback from './components/Feedback.vue'
import Category from './components/Category.vue'
import Post from './components/Post.vue'
import New from './components/NewPost.vue'
import Login from './components/Login.vue'
import Layout from './components/Layout.vue'

export default {
    mode: 'history',

    linkActiveClass: 'font-bold',

    routes: [
        {
            path: '/',
            redirect: '/home',
            name: 'layout',
            component: Layout,
            children: [
                {
                    path: '/home',
                    component: Home
                },
                {
                    path: '/about',
                    name: 'about',
                    component: About
                },
                {
                    path: '/feedback',
                    name: 'feedback',
                    component: Feedback
                },
                {
                    path: '/login',
                    component: Login,
                    beforeEnter: (to, from, next) => {
                        if (localStorage.getItem('authenticated')) {
                            // 已认证跳转到首页
                            next('/new');
                        } else {
                            next();
                        }
                    }
                },
                {
                    path: '/new',
                    component: New,
                    beforeEnter: (to, from, next) => {
                        if (localStorage.getItem('authenticated')) {
                            // 已认证可以访问该路由
                            next();
                        } else {
                            // 否则跳转到登录页面认证
                            next('/login');
                        }
                    }
                },
                {
                    path: '/post/:id',
                    name: 'post',
                    component: Post
                },
                {
                    path: '/:name',
                    name: 'category',
                    component: Category
                },
            ]
        },
    ]
}

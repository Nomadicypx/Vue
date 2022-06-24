// 1. 定义路由组件.
// 也可以从其他文件导入
import Over from '../views/Overall.vue'
import Main from '../views/Main.vue'
import Ind from '../views/Index.vue'
import Reg from '../views/Register.vue'
import Forg from '../views/Forget.vue'
import NotFound from '../views/NotFound.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/overall/:id', component: Over },
  { path: '/overall', redirect:'/',component: Over },
  { path: '/main', component: Main },
  { path: '/', component: Ind },
  { path: '/register', component: Reg },
  { path: '/forget', component: Forg },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
export default router

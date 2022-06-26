// 1. 定义路由组件.
// 也可以从其他文件导入
import Over from '../views/Overall.vue'
import Main from '../views/Main.vue'
import Ind from '../views/Index.vue'
import Reg from '../views/Register.vue'
import Forg from '../views/Forget.vue'
import NotFound from '../views/NotFound.vue'
import Test from '../components/Test.vue'
import User from '../components/Userinfo.vue'
import aOver from '../views/AcceptedOverall.vue'
import Upload from '../views/Upload.vue'
import {createRouter,createWebHashHistory} from 'vue-router'
import Manage from '../views/Manage.vue'
import Send from '../views/SendTaskManage.vue'
import Rec from '../views/ReceiveTaskManage.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。

const routes = [
  { path: '/overall/:id', component: Over },
  {
    path:'/manage',
    component:Manage,
    children:[
        {
            path:'/manage/userinfo',
            component:User,
        },
        {
            path:'/manage/sendtask',
            component: Send,
        },
        {
            path:'/manage/receivetask',
            component: Rec,
        }
    ]
  },
  { path: '/upload', component: Upload },
  { path: '/aoverall/:id', component: aOver },
  { path: '/overall',name:'overall',component: Over },
  { path: '/main', component: Main },
  { path: '/', component: Ind },
  { path: '/register', component: Reg },
  { path: '/forget', component: Forg },
  { path: '/test', component: Test },
  { path: '/user', component: User },
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

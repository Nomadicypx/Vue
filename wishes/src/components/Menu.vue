<template>
  <el-container class="layout-container-demo">
    <el-aside width="200px">
      <el-scrollbar>
        <el-menu :default-openeds="['1','2']" :default-active="$route.path" router>
          <el-sub-menu index="1">
            <template #title>
              <el-icon><icon-menu /></el-icon>任务管理
            </template>
            <el-menu-item-group>
              <template #title></template>
              <el-menu-item index="/manage/receivetask">已接取的任务</el-menu-item>
              <el-menu-item index="/manage/sendtask">已发出的任务</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><setting/></el-icon>个人信息管理
            </template>
            <el-menu-item-group>
              <template #title></template>
              <el-menu-item index="/manage/userinfo">个人信息</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; background-color:whitesmoke;">
        <h1> </h1>
        <el-button type="primary" round @click="backToMain">返回主界面</el-button>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
        methods: {
            backToMain() {
                this.$router.replace('/main')
            }
        },

}

</script>





<style scoped>
.layout-container-demo {
  position:absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
}
.el-aside {
  color: rgb(32, 52, 89);
  background: rgb(32, 52, 89);
  margin: 0px;
  padding: 0px;
}
.el-menu {
  background-color: rgb(167, 188, 227);
}
.el-main {
  padding: 20px;
  background-color:whitesmoke;
}

</style>

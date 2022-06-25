<template>
<!--1.首先，弹窗页面中要有el-dialog组件即弹窗组件，我们把弹窗中的内容放在el-dialog组件中-->
<!--2.设置:visible.sync属性，动态绑定一个布尔值，通过这个属性来控制弹窗是否弹出-->
<div>
<el-dialog title="弹窗" :model-value="detailVisible" width="35%" :append-to-body="true">
    弹窗内容
  </el-dialog>


</div>
  
</template>

<script>
    export default {
        name: "dialogComponent",
        data(){
          return{
            detailVisible:false
          }
        },
      methods:{
      //3.定义一个init函数，通过设置detailVisible值为true来让弹窗弹出，这个函数会在父组件的方法中被调用
        init(data){
          this.detailVisible=true;
          //data是父组件弹窗传递过来的值，我们可以打印看看
          console.log(data);
        }
      }
    }
</script>

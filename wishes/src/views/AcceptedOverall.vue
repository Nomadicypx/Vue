<script >

import myfrom from '../components/Form.vue'
import axios from 'axios'

//TODO:页面两个跳转按钮的功能还没做
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default{
    data(){
       return{
         height: window.innerHeight,
         taskContent:{
            title: '默认内容',
            price:'20',
            contact:'18807383177',
            region: '默认地点',
            resource: '跑腿',//任务类型,radio输入
            desc: '默认描述',
         }
       }
    },
    mounted(){
        
        const data = this
        window.onresize = function(){
            return (() => {
                console.log("windows"+window.innerHeight)
                data.height = window.innerHeight
                console.log(data)
            })()
        },
        console.log("acceptedTaskDisplay"+this.$route.params.id)
        //TODO:获取任务信息
        this.taskId = this.$route.params.id;//拿到任务id可以用于显示任务信息,拿到信息后填充taskContent用于编辑的默认值
        let url = this.$store.state.serverURL+'/task/'+this.taskId;
        console.log("查看任务"+url)
        this.queryTask()//查询任务
        // axios.get(url).then(
        //     function(response){//拿到数据
        //         this.taskBody.description;
        //     }
        // ).catch(function(){

        // }).then(function(){

        // })
    },

    methods:{
        toHome:function(event){
            this.$router.go(-1)
        },
        queryTask:function(){

        }
    }
    ,
    components:{
        myfrom,
    }
    // beforeRouteEnter(to,from,next){           
    //     next((vm)=>{
    //         if(!vm.$store.state.login){
    //             console.log('main未登录状态')
    //             vm.$router.push('/')
    //         }
    //         else{
    //             console.log('main已经登录')
    //             console.log(vm.$store.state.user.id)
    //         }
    //     })
    // },

}
</script>

<template>
    <div>
        <section id="contact-area" :style="{height:height+'px'}" >
            <div class="alignContainer">
                <div class="cardContainer">
                   <el-card shadow="always" :body-style="{ padding: '20px' }">
                    <h2 style="text-align:center">Make Wishes</h2>
                    <myfrom :params="taskContent" :ifaccepted="yes"></myfrom>
                   </el-card>
                   
                    
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
@import url('../../public/css/style1.css');
.cardContainer{
    text-align: center;
    width: 600px;
    margin-top: 50px;
    text-align: left;
}
.alignContainer{
    display: flex;
    justify-content: center;
}
</style>

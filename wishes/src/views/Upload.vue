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
        }
    },

    methods:{
        toHome:function(event){
            console.log('进入')
            this.$router.go(-1)
        },

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
                    <myfrom :params="taskContent" :ifaccepted="no"></myfrom>
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

<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
    export default{
        data(){
            return{
                tasks:[
                    {
                        id:1,

                    },
                    {
                        id:2,
                    }
                ],//存放任务数据
            }
        },
        mounted(){
            this.drawItem()//给账号设置canvas元素
            this.getTaskList()//返回任务数据
        },
        beforeRouteEnter(to,from,next){           
            next((vm)=>{
                if(!vm.$store.state.login){
                    console.log('未登录状态')
                    vm.$router.push('/')
                }
                else{
                    console.log('已经登录')
                    console.log(vm.$store.state.user.id)
                }
            })
        },
        methods:{
            drawItem: function(){
                var c=document.getElementById("userCanvas");
                var ctx=c.getContext("2d");
                ctx.fillStyle="#ffffff";
                ctx.beginPath();
                ctx.arc(30,30,30,0*Math.PI,2*Math.PI);
                ctx.closePath();
                ctx.fill();
                ctx.font = "20px WenQuanYi Micro Hei";
                ctx.fillStyle="#000000";
                ctx.fillText("帐号", 10,40);
            },//TODO:任务请求
            getTaskList: function(){//根据用户id获取用户表的所有字段
                //如果用户表的能解决任务的类型个数不为0，根据任务类型发送请求
                if(this.$store.state.user.types.length>0){
                    console.log('发送类型请求');
                }
                else{//没有特定类型时随机展示
                    console.log('发送随机请求');
                }
            },
            toOverall: function(index){//参数是任务在tasks列表里的index
                this.$router.push('/overall/:'+this.$data.tasks[index].id)
            }
        }
    }
</script>


<template>
    <div>
        <div>
            <ul>
                <li v-for="(task, index) in tasks" :key="task.id" @click="toOverall(index)">
                     - {{ index }} - {{ task.id }}
                </li>
            </ul>
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <div class="dialog" name = "user" id="userdiv" style="position:absolute;right:10px; top: 20px; width: 60px; height: 60px" >
                <canvas  id="userCanvas" width="60" height="60" style="border:0px solid #c3c3c3;">
                </canvas>
            </div>    
        </div>
    </div>
</template>

<style>
	.dialog{
		opacity: 0.5;
	}
	.dialog:hover{
		opacity: 1.0;
	}
</style>

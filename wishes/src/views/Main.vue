<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import {useStore} from 'vuex'
import {useRouter} from 'vue-router'
import axios from 'axios'
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
                ],//存放任务数据,当成功访问到数据的时候对象会等于返回体的list
                infoLoaded:false,//个人信息加载完成
                taskInfoLoaded:false,//任务信息加载完成

            }
        },
        mounted(){
            this.drawItem()//给账号设置canvas元素
            if(!this.infoLoaded){
                this.getUserInfo()//网络请求拿到个人信息知道偏好类型
            }
            //TODO:重置user的信息这里需要同步一下
            if(!this.taskInfoLoaded){
                this.getTaskList()
            }           
            console.log(this.$store.state.token)
            if(this.infoLoaded&&this.taskInfoLoaded){
                this.renderTask()
            }
            else{//页面信息还需要加载

            }
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
                    //登录页面跳转过来的时候已经拿到用户ID号了
                    
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
            getTaskList: async function(){//根据用户id获取用户表的所有字段
                //如果用户表的能解决任务的类型个数不为0，根据任务类型发送请求
                if(this.$store.state.user.preferTaskType!=null &&this.$store.state.user.preferTaskType!=''){
                    let preferTypes = this.$store.state.user.preferTaskType.split(';')//用分号做分隔符
                    console.log(preferTypes)
                    //TODO:发送网路请求
                    console.log('发送类型请求');
                    
                    let serverURL = this.$store.state.serverURL+'/task/type' //组合类型请求一起发送，这里就发一种类型测试了
                    try{
                        let res = await axios({
                        method:'get',
                        url:serverURL,
                        headers:{
                            'Content-Type':'application/json;charset=UTF-8',
                            'Authorization':this.$store.state.token
                        },
                        params:{
                            typeId:preferTypes[0]
                        }
                        });
                        this.$data.tasks = res.data.data.records;
                        console.log(this.$data.tasks[0])//可以拿到数据了
                        this.taskInfoLoaded = true;
                    }catch(error){
                        console.log("类型请求发送失败")
                        console.log(error)
                    }
                }
                else{//没有特定类型时随机展示,这里API会把所有的数据都拿过来，可能加载很慢,可以改用参数传递控制表大小
                    console.log('发送随机请求');
                    let serverURL = this.$store.state.serverURL+'/task'
                    try{
                        let res = await axios({
                        method:'get',
                        url:serverURL,
                        headers:{
                            'Content-Type':'application/json;charset=UTF-8',
                            'Authorization':this.$store.state.token
                        }
                        });
                        this.$data.tasks = res.data.data.records;
                        console.log(this.$data.tasks[0])//可以拿到数据了
                        this.taskInfoLoaded = true;
                    }catch(error){
                        console.log("随机请求发送失败")
                        console.log(error)
                    }
                }
            },
            toOverall: function(index){//参数是任务在tasks列表里的index
                this.$router.push({
                    name:'overall',
                    params:{
                        id: this.$data.tasks[index].id,
                        description: this.$data.tasks[index].description,
                        location: this.$data.tasks[index].location,
                        price: this.$data.tasks[index].price,
                        title: this.$data.tasks[index].title,
                        type: this.$data.tasks[index].type,
                        email:this.$data.tasks[index].userEmail,
                        user:this.$data.tasks[index].username,
                    }
                })
            },
            getUserInfo: async function(){
                let serverURL = this.$store.state.serverURL+'/self'
                try{
                    let res = await axios({
                        method:'get',
                        url:serverURL,
                        headers:{
                            'Content-Type':'application/json;charset=UTF-8',
                            'Authorization':this.$store.state.token
                        }
                    });
                    this.$store.state.user = res.data.data;
                    console.log(res.data.data)
                    this.infoLoaded = true;
                }catch(error){
                    console.log('错误请求')
                    console.log(error)
                    
                }              
            },
            toManage: function(){
                this.$router.push('/manage');
            },
            renderTask: function(){//TODO:拿到任务数据时调用的渲染函数

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
                <canvas  id="userCanvas" width="60" height="60" style="border:0px solid #c3c3c3;" @click='toManage'>
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

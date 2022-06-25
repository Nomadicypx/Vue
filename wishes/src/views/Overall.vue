<script >


import axios from 'axios'
let dd = '私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊私聊'
//TODO:页面两个跳转按钮的功能还没做
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default{
    data(){
       return{
         taskId: null,
         taskBody:{
            description:dd,
            title:'帮忙喂乌龟',
            type:'跑腿',
            location:'映雪',
            author:'发布人',
            mobile:18807383177
         },
         height: window.innerHeight,
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
        //TODO:获取任务信息
        this.taskId = this.$route.params.id;//拿到任务id可以用于显示任务信息
        let url = this.$store.state.serverURL+'/task/'+this.taskId;
        console.log("获取任务"+url)
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
            console.log('进入')
            this.$router.push('/main');
        },
        //TODO:接取任务接口
        takeTask:function(){
            let url = this.$store.state.serverURL+'/task/'+this.taskId+':accept';
            console.log("接取任务"+this.$data.taskId)
            // axios.get(url).then(
            //     function(res){

            //     }
            // )
        }
    }
    ,
    beforeRouteEnter(to,from,next){           
        next((vm)=>{
            if(!vm.$store.state.login){
                console.log('main未登录状态')
                vm.$router.push('/')
            }
            else{
                console.log('main已经登录')
                console.log(vm.$store.state.user.id)
            }
        })
    },

}
</script>

<template>
    <div>
        <section id="contact-area" :style="{height:height+'px'}" >
            <div >
            
                <!--end section heading-->
                <div class="row"  style="overflow:hidden">
                    <div class="col-lg-10 offset-lg-1" style="overflow:hidden">
                        <!--start contact form-->
                        <div class="contact-box text-center" style="overflow:hidden">
                        
                            
                            <div align="left"><h3>{{this.$data.taskBody.title}}</h3></div>
                            <br>	
                            <div align="left" style="width: inherit;"><p>{{this.$data.taskBody.description}}</p>
                            </div>
                            <div align="left"><font></font></div>   
                            <div style="margin-top: 20px;">
                                <div align='right' style="font-size:10px">发布人: &nbsp;<sapn style="font-size:10px">{{this.taskBody.author}}</sapn></div>
                                <div align='right' style="font-size:10px">地点: &nbsp;<sapn style="font-size:10px">{{this.taskBody.location}}</sapn></div>
                                <div align='right' style="font-size:10px">联系方式: &nbsp;<sapn style="font-size:10px">{{this.taskBody.mobile}}</sapn></div>    
                            </div>                             
                            <div align="center" style="margin-top: 20px;">
                                <button @click="takeTask">接取</button>
                                &nbsp;&nbsp;&nbsp;
                                <button @click="toHome"><font color="#fff">返回</font></button>
                            </div>

                        </div>
                        <!--end contact form-->
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
@import url('../../public/css/bootstrap.min.css');
@import url('../../public/css/style.css'); 
@import url('../../public/css/style1.css');
.register-button{ /* 按钮美化 */
    width: 100px; /* 宽度 */
    height: 40px; /* 高度 */
    border-width: 0px; /* 边框宽度 */
    border-radius: 3px; /* 边框半径 */
    background:#83ABE0; /* 背景颜色 */
    cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
    outline: none; /* 不显示轮廓线 */
    font-family: Microsoft YaHei; /* 设置字体 */
    color: white; /* 字体颜色 */
    font-size: 17px; /* 字体大小 */
}

.register-button:hover{ /* 鼠标移入按钮范围时改变颜色 */
	background:#133F69;
}
</style>

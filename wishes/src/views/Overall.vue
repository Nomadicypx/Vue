<script >



//TODO:页面两个跳转按钮的功能还没做
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
export default{
    data(){
       return{
         taskId: null,
         height: window.innerHeight,

       }
    },
    mounted(){
        this.taskId = this.$route.params.id;//拿到任务id可以用于显示任务信息
        const data = this
        window.onresize = function(){
            return (() => {
                console.log("windows"+window.innerHeight)
                data.height = window.innerHeight
                console.log(data)
            })()
        }
    },
    computed:{
    }
    ,
    methods:{
        toHome:function(event){
            console.log('进入')
            this.$router.push('/main');
        },
        //TODO:接取任务接口
        takeTask:function(){

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
            <div class="container">
            
                <!--end section heading-->
                <div class="row"  style="overflow:hidden">
                    <div class="col-lg-10 offset-lg-1" style="overflow:hidden">
                        <!--start contact form-->
                        <div class="contact-box text-center" style="overflow:hidden">
                        
                            
                            <div align="left"><h3>帮我喂龟</h3></div>
                            <br>	
                            <div align="left" style="width: inherit;"><p>此处为详细信息，将数据库库中的详细信息显示出来，例如：我因为暑假要回家，为期一个月，宿舍中养的几只乌龟和鱼无人饲养，因此需要一位小伙伴帮忙喂养，具体如何信息请与我交流，以及宿舍信息;
                                此处为详细信息，将数据库库中的详细信息显示出来，例如：我因为暑假要回家，为期一个月，宿舍中养的几只乌龟和鱼无人饲养，因此需要一位小伙伴帮忙喂养，具体如何信息请与我交流，以及宿舍信息
                                此处为详细信息，将数据库库中的详细信息显示出来，例如：我因为暑假要回家，为期一个月，宿舍中养的几只乌龟和鱼无人饲养，因此需要一位小伙伴帮忙喂养，具体如何信息请与我交流，以及宿舍信息
                                此处为详细信息，将数据库库中的详细信息显示出来，例如：我因为暑假要回家，为期一个月，宿舍中养的几只乌龟和鱼无人饲养，因此需要一位小伙伴帮忙喂养，具体如何信息请与我交流，以及宿舍信息</p>
                            </div>
                            <div align="left"><font></font></div>                                
                            <div align="center">
                                <button >接取</button>
                                &nbsp;&nbsp;&nbsp;
                                <button @click.prevent="toHome"><font color="#fff">返回</font></button>
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

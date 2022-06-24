<script >
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import axios from 'axios'

export default{
    data(){
        return {
            account:null,
            passwd:null,
            confirm:null,
            mail:null,
            vcode:null,
        }
    },
    mounted() {
        //console.log("执行");
        let script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.src = '../../public/script/TweenLite.js'
        document.head.appendChild(script1);
        let script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.src = '../../public/script/EasePack.js';
        document.head.appendChild(script2);
        let script3 = document.createElement('script');
        script3.type = 'text/javascript';
        script3.src = '../../public/script/demo.js';
        document.head.appendChild(script3);
        let script4 = document.createElement('script');
        script4.type = 'text/javascript';
        script4.src = '../../public/script/rAF.js';
        document.head.appendChild(script4);
        
    },
    methods:{
        getCode: function(){
            if(this.isMail()){
                console.log('邮箱验证成功')
                //发送邮箱验证码请求
                let serverURL = this.$store.state.serverURL+'/users'
                console.log(serverURL)
                //----------------------页面获取验证码
                // res = axios({
                //     method:'post',
                //     url:serverURL,
                //     data:{
                //         username:this.$data.account,
                //         password:this.$data.passwd,
                //         email:this.$data.mail,
                //         mobile:'string'
                //     },
                // }).then(function(res){
                //     console.log(res)
                //     return res
                // })           
            }
            else{//邮箱不是标准格式

            }
            
        },
        isMail: function(){//验证邮箱是否正确，正则表达式
            return true;
        },
        submit: function(){
            if(this.$data.passwd!=this.$data.confirm){
                //密码没有确认的情况
                console.log('请确认密码')
            }
            else if(!this.isMail()){
                //邮箱格式不正确
            }
            else{
                let serverURL = this.$store.state.serverURL+'/users/captcha'
                console.log(serverURL)
                //----------------页面进行注册
                // res = axios({
                //     method:'post',
                //     url:serverURL,
                //     data:{
                //         email:this.$data.mail,
                //         captcha:this.$data.vcode
                //     },
                // }).then(function(res){
                //     console.log(res)
                //     return res
                // })                   
            }
        },
    },
}
</script>

<template>
    <div >
        <div class="container demo-1">
            <div class="content">
                <div id="large-header" class="large-header">
                    <canvas id="demo-canvas"></canvas>
                    <div class="logo_box">
                        <h2 align="center">
                        Sign up
                    </h2>
                        <form >
                            <div class="input_outer">
                                <span class="u_user">
                                </span>
                                <input v-model="account" name="logname" class="text" style="color: #FFFFFF !important" type="text"
                                    placeholder="账户">
                            </div>
                            <div class="input_outer">
                                <span class="us_uer">
                                </span>
                                <input v-model="passwd" name="logpass" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;"
                                     type="password" placeholder="密码">
                            </div>
            
                            <div class="input_outer">
                                <span class="us_uer">
                                </span>
                                <input v-model="confirm" name="logpass" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;"
                                     type="password" placeholder="确认密码">
                            </div>
                            <div class="input_outer" style="display:flex;padding-right=0px;">
                                <span class="box_uer">
                                </span>
                                <input v-model="mail" name="logname" class="text" style="color: #FFFFFF !important" type="text"
                                    placeholder="邮箱">
                                <a class="get_code_uer" @click="getCode" >获取验证码</a>
                            </div>
                            <div class="input_outer" >
                                <span class="code_uer">
                                </span>
                                <input v-model="vcode" name="logname" class="text" style="color: #FFFFFF !important" type="text"
                                    placeholder="邮箱验证码">
                            </div>
                            <section align="center" style="display:flex">
                                <div style='width:50%;line-height:2.3' class="register-button" @click='submit' >提交</div>
                                <div style='width:50%'><input type="reset" class="reset-button"></div>
                            </section>
                            
                        </form>
                        <div style="height: 20px"></div>
                        <div align="center" > <router-link align="center" to="/" style="color:#9BA2E5">
                                    返回登录界面</router-link></div>
                    </div>
                </div>
            </div>
        </div>       
    </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
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

.reset-button{ /* 按钮美化 */
	width: 100px; /* 宽度 */
	height: 40px; /* 高度 */
	border-width: 0px; /* 边框宽度 */
	border-radius: 3px; /* 边框半径 */
	background:#C39696; /* 背景颜色 */
	cursor: pointer; /* 鼠标移入按钮范围时出现手势 */
	outline: none; /* 不显示轮廓线 */
	font-family: Microsoft YaHei; /* 设置字体 */
	color: white; /* 字体颜色 */
	font-size: 17px; /* 字体大小 */
}
.reset-button:hover{ /* 鼠标移入按钮范围时改变颜色 */
	background:#76191B;
}
@import url('../../public/css/normalize.css');
@import url('../../public/css/demo.css');
@import url('../../public/css/component.css');
</style>

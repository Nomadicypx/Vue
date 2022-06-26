<script>
import axios from 'axios'

export default {
    mounted() {
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
        // console.log("执行");
    },
    methods:{
        submit: async function(){          
            await this.verify()
            console.log(this.$store.state.login)   
            if(this.$store.state.login==true){
                console.log('登录成功')
                this.$router.push('/main');
            }
            else{
                console.log('登录失败')
                this.whatHWF()
            }
        },
        verify: async function(){
            let serverURL = this.$store.state.serverURL+'/oauth/token'
            let that = this
            console.log(serverURL)
            //TODO:----------------------页面登录请求部分,返回请求登记登录状态!!!所有页面如果登录状态为未登录直接索引到登录界面上
            try{
                let res = await axios({
                    method:'post',
                    url:serverURL,
                    params:{
                        username:this.$data.account,
                        password:this.$data.passwd,
                        scope:'all',
                        grant_type:'password',
                        client_id:'app',
                        client_secret:'bkdwln231-23'
                    },
                    headers:{
                        'Content-Type':'application/json;charset=UTF-8',
                        'Authorization':'Basic YXBwOmJrZHdsbjIzMS0yMw=='
                    }
                });
                if(res.data.data.access_token!=undefined){              
                console.log(res)
                that.$message("登录"+res.data.errmsg)
                that.$store.state.token = "Bearer "+res.data.data.access_token
                that.$store.state.refreshedToken = "Bearer "+res.data.data.refresh_token
                that.$store.state.user.id = res.data.data.userId // self信息接口返回参数里头没有id，所以在这个地方设置
                //console.log(that.$store.state.token)
                that.$store.state.login = true;
                //console.log('改变状态')
            }
            else{
                this.$message(res.data.errmsg)
            }
            }catch(error){
                console.log(error)
            }
            
        },
        whatHWF:function(){

        },

    },
    data(){
        return {
            account: null,
            passwd: null,
        }
    }
}

</script>

<template>
<body>
    <div class=" demo-1">
        <div >
            <div id="large-header" class="large-header">
                <canvas id="demo-canvas"></canvas>
                <div class="logo_box">
                    <h2 align="center">
                      Achieve Your Wishes
                  </h2>
                    <form action="#" name="f" method="post">
                        <div class="input_outer">
                            <span class="u_user">
                            </span>
                            <input name="logname" v-model='account' class="text" style="color: #FFFFFF !important" type="text" autocomplete="new-accounts"
                                   placeholder="请输入账户">
                        </div>
                        <div class="input_outer">
                            <span class="us_uer">
                            </span>
                            <input name="logpass" v-model='passwd' class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;" autocomplete="new-password"
                                    type="password" placeholder="请输入密码">
                        </div>
                        <div class="mb2">
                            <span class="act-but submit" @click="submit" style="color: #FFFFFF">
                                登录
                            </span>   
                        </div>

						<div align="center" >
                            <router-link align="center" to="/register" style="color:#ffffcc;margin-right:20px ">
								点击注册
                            </router-link>                           
                            <router-link align="center" to="/forget" style="color:#ffffcc">
								忘记密码
                            </router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
                            
</body>
</template>

<style>
@import url('../../public/css/normalize.css');
@import url('../../public/css/demo.css');
@import url('../../public/css/component.css');
</style>


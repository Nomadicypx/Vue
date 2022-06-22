<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
export default {
    mounted() {
        console.log("输出");
        let script1 = document.createElement('script');
        script1.type = 'text/javascript';
        script1.src = '../public/script/TweenLite.js'
        document.head.appendChild(script1);
        let script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.src = '../public/script/EasePack.js';
        document.head.appendChild(script2);
        let script3 = document.createElement('script');
        script3.type = 'text/javascript';
        script3.src = '../public/script/demo.js';
        document.head.appendChild(script3);
        let script4 = document.createElement('script');
        script4.type = 'text/javascript';
        script4.src = '../public/script/rAF.js';
        document.head.appendChild(script4);
        // console.log("执行");
    }
}

</script>

<template>
<body>
    <div class="container demo-1">
        <div class="content">
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
                            <input name="logname" class="text" style="color: #FFFFFF !important" type="text"
                                   placeholder="请输入账户">
                        </div>
                        <div class="input_outer">
                            <span class="us_uer">
                            </span>
                            <input name="logpass" class="text" style="color: #FFFFFF !important; position:absolute; z-index:100;"
                                   value="" type="password" placeholder="请输入密码">
                        </div>
                        <div class="mb2">
                            <a class="act-but submit" href="src/main.html" style="color: #FFFFFF">
                                登录
                            </a>
							
                        </div>
						<div align="center" > <a align="center" href="src/register.html" style="color:#ffffcc">
								还没有帐号？点击注册</a></div>
                           
                    </form>
                </div>
            </div>
        </div>
    </div>

</body>
</template>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
@import url('../public/css/normalize.css');
@import url('../public/css/demo.css');
@import url('../public/css/component.css');
</style>


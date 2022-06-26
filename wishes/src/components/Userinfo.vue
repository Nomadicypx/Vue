<template>
    <div class="alignContainer">
        <div class="cardContainer">
            <el-card shadow="always" :body-style="{ padding: '20px' } ">
                <el-descriptions title="用户个人" direction="vertical" :column="4" border>
                    <el-descriptions-item label="用户名">
                        <div class="hidden">
                            <el-input  :disabled="!isEditable" v-model="username" :placeholder="pusername" />
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item label="手机号">
                        <div class="hidden">
                            <el-input  :disabled="!isEditable" v-model="mobile" :placeholder="pmobile"/>
                        </div>                       
                    </el-descriptions-item>
                    <el-descriptions-item  label="邮箱" >
                        <div class="hidden">
                            <el-input size="small" disabled v-model="email" :placeholder="pemail"/>
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item label="地点" >
                        <div class="hidden">
                            <el-input  :disabled="!isEditable" v-model="location" placeholder="默认地点" />
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item label="愿意接取类型">
                        <el-checkbox v-model="checked1" :disabled="isEditable" @change="hookTest">跑腿</el-checkbox>
                        <el-checkbox v-model="checked2" :disabled="isEditable">解答</el-checkbox>
                        <el-checkbox v-model="checked3" :disabled="isEditable">交易</el-checkbox>                       
                    </el-descriptions-item>
                    <el-descriptions-item label="个人说明">
                        <div class="hidden">
                            <el-input  :disabled="!isEditable" v-model="desc" :placeholder="pdesc" />
                        </div>
                    </el-descriptions-item>
                </el-descriptions>
                <div style="margin-top:20px">
                    <el-button type="primary" :disabled="isEditable" @click="triggerEdit">编辑 &nbsp;<el-icon><Edit /></el-icon></el-button> 
                    <el-button type="primary" @click="triggerSubmit">提交 &nbsp;<el-icon><Upload /></el-icon></el-button>
                </div>
            </el-card> 
                 
        </div>        
    </div>
    
</template>
<script>
export default {
    data() {
        return{
            checked1: false,
            checked2: true,
            checked3: true,
            isEditable: false,//为true的时候按钮禁用，但编辑事件正好相反
            username: null,pusername:null,
            mobile:null,pmobile:null,
            email:null,pemail:null,
            desc:null,pdesc:null,
            location:null,
            
        }
    } ,
    methods:{
        triggerEdit:function(){
            this.isEditable = true;
            console.log("出发点击事件"+this.isEditable)
        },
        check: function(value){
            return value!=-1
        }
        ,
        triggerSubmit:function(event){
            //TODO:后台传送个人信息数据

            //失去焦点改样式的代码
            let target = event.target;
            if(target.nodeName=="I"||target.nodeName=="SPAN"){
                target = event.target.parentNode;
            }
            target.blur();
            this.isEditable = false;
        },
        hookTest:function(value){
            console.log(this.checked1)
        }
    },
    mounted(){
        if(this.$store.state.user.preferTaskType!=null){
            let list = this.$store.state.user.preferTaskType.split(';')
            console.log(list)
            this.checked1 = this.check(list[0])
            this.checked2 = this.check(list[1])
            this.checked3 = this.check(list[2])
        }
        this.pusername = this.$store.state.user.username,
        this.pmobile = this.$store.state.user.mobile,
        this.pemail = this.$store.state.user.email,
        this.pdesc = this.$store.state.user.sign,
        console.log(this.$store.state)
    }
    //TODO:在进入主页的时候已经拿到个人的数据了,可以不用再重新发送

    
}
</script>
<style scoped>
.cardContainer{
    text-align: center;
    width: 600px;
    margin-top: 50px;
    
}
.alignContainer{
    display: flex;
    justify-content: center;
}
/* 去掉输入框的边框 */
.hidden >>> .el-input__wrapper{ 
    box-shadow: 0px 0px 0px #888888 ;
    
}
.hidden .is-disabled >>>.el-input__wrapper {
    background-color: #ffffff;
    box-shadow: 0px 0px 0px #888888 ;
}
</style>
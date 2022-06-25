<template>
    <div class="alignContainer">
        <div class="cardContainer">
            <el-card shadow="always" :body-style="{ padding: '20px' } ">
                <el-descriptions title="垂直带边框列表" direction="vertical" :column="4" border>
                    <el-descriptions-item label="用户名">
                        <div class="hidden">
                            <el-input  :disabled="!isEditable" v-model="input" placeholder="kooriookami" />
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item label="手机号">
                        <div class="hidden">
                            <el-input  :disabled="!isEditable" v-model="input" placeholder="kooriookami" />
                        </div>                       
                    </el-descriptions-item>
                    <el-descriptions-item label="邮箱" >
                        <div class="hidden">
                            <el-input  disabled v-model="input" placeholder="kooriookami" />
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item label="地点" >
                        <div class="hidden">
                            <el-input  :disabled="!isEditable" v-model="input" placeholder="kooriookami" />
                        </div>
                    </el-descriptions-item>
                    <el-descriptions-item label="愿意接取类型">
                        <el-checkbox v-model="checked1" :disabled="isEditable" @change="hookTest">跑腿</el-checkbox>
                        <el-checkbox v-model="checked2" :disabled="isEditable">交易</el-checkbox>
                        <el-checkbox v-model="checked2" :disabled="isEditable">帮助</el-checkbox>                       
                    </el-descriptions-item>
                    <el-descriptions-item label="个人说明">
                        <div class="hidden">
                            <el-input  :disabled="!isEditable" v-model="input" placeholder="kooriookami" />
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
            isEditable: false,//为true的时候按钮禁用，但编辑事件正好相反
            input:null,
        }
    } ,
    methods:{
        triggerEdit:function(){
            this.isEditable = true;
            console.log("出发点击事件"+this.isEditable)
        },
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
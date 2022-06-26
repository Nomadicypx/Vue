<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="标题">
      <el-input v-model="form.ftitle" :placeholder="plh.title"/>
    </el-form-item>
    <el-form-item label="出价">
      <el-input v-model="form.fprice" :placeholder="plh.price"/>
    </el-form-item>
    <el-form-item label="联系方式">
      <el-input v-model="form.fcontact" :placeholder="plh.contact"/>
    </el-form-item>
    <el-form-item label="地点">
      <el-select v-model="form.fregion" :placeholder="plh.region">
        <el-option label="芙蓉" value="芙蓉" />
        <el-option label="海韵" value="海韵" />
        <el-option label="翔安" value="翔安" />
      </el-select>
    </el-form-item>
    <el-form-item label="类型">
      <el-radio-group v-model="form.fresource">
        <el-radio label="1" >跑腿</el-radio>
        <el-radio label="2" >解答</el-radio>
        <el-radio label="3" >交易</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="form.fdesc" type="textarea" :placeholder="plh.desc"/>
    </el-form-item>
    <el-form-item >
      <el-button type="primary" @click="onSubmit">发布</el-button>
      <el-button @click="this.$router.go(-1)">返回</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" >
import { toRefs,reactive,ref,defineComponent} from 'vue'
import { useStore} from 'vuex'
import { ElMessage } from 'element-plus'
import axios from 'axios'
export default defineComponent({
    name:'myform',
    props:{
        params:Object,
        ifaccepted:String
    },
    setup(props){
        // do not use same name with ref
        const form = reactive({
            ftitle: '',
            fprice:'',
            fcontact:'',
            fregion: '',
            fresource: '',
            fdesc: '',
        })//提交的表单内容
        const {params} = toRefs(props)
        //console.log(params.value.desc)
        const store = useStore()
        const plh = params.value
        const onSubmit = async () => {
            console.log("submit执行le")
            
            console.log(store)
            
            let serverURL = store.state.serverURL+'/task'
            try{
                let res = await axios({
                method:'post',
                url:serverURL,
                headers:{
                    'Content-Type':'application/json;charset=UTF-8',
                    'Authorization':store.state.token
                },
                data:{
                    title:form.ftitle,
                    description: form.fdesc,
                    location:form.fregion,
                    price:form.fprice,
                    typeId:form.fresource
                }
                });
                ElMessage("提交成功")
                
            }catch(error){
                console.log("类型请求发送失败")
                console.log(error)
            }
        }
        return {
            form ,
            onSubmit,
            plh
        }
    }
})
</script>

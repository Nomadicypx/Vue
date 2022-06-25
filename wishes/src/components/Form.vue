<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="标题">
      <el-input v-model="form.title" :placeholder="plh.title"/>
    </el-form-item>
    <el-form-item label="出价">
      <el-input v-model="form.price" :placeholder="plh.price"/>
    </el-form-item>
    <el-form-item label="联系方式">
      <el-input v-model="form.contact" :placeholder="plh.contact"/>
    </el-form-item>
    <el-form-item label="地点">
      <el-select v-model="form.region" :placeholder="plh.region">
        <el-option label="芙蓉" value="furong" />
        <el-option label="海韵" value="haiyun" />
        <el-option label="翔安" value="xiangan" />
      </el-select>
    </el-form-item>
    <el-form-item label="类型">
      <el-radio-group v-model="form.resource">
        <el-radio label="跑腿" />
        <el-radio label="交易" />
        <el-radio label="帮助" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="描述">
      <el-input v-model="form.desc" type="textarea" :placeholder="plh.desc"/>
    </el-form-item>
    <el-form-item >
      <el-button type="primary" @click="onSubmit">发布</el-button>
      <el-button @click="this.$router.go(-1)">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" >
import { toRefs,reactive,ref,defineComponent} from 'vue'

export default defineComponent({
    name:'myform',
    props:{
        params:Object,
        ifaccepted:String
    },
    setup(props){
        // do not use same name with ref
        const form = reactive({
            title: '',
            price:'',
            contact:'',
            region: '',
            resource: '',
            desc: '',
        })//提交的表单内容
        const {params} = toRefs(props)
        //console.log(params.value.desc)
        const plh = params.value
        const onSubmit = () => {
            console.log('submit!')
        }
        return {
            form ,
            onSubmit,
            plh
        }
    }
})
</script>

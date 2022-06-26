<template>
    <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input
              v-model="search"
              class="search_name"
              size="mini"
              placeholder="输入任务名称查询">
            </el-input>
          </el-form-item>
      </el-form>





      <el-table :data="receiveTask"
      border
       style="width: 100%,margin: auto;" >
       <el-table-column label="任务id" >
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="margin-left: 10px">{{ scope.row.task_id }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="任务名称" >
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="margin-left: 10px">{{ scope.row.task_name }}</span>
          </div>
        </template>
      </el-table-column>
      <el-table-column label="任务描述" >
        <template #default="scope">
          <div style="display: flex; align-items: center">
            <span style="margin-left: 10px">{{ scope.row.description }}</span>
          </div>
        </template>
        </el-table-column>
        <el-table-column label="定位" >
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <span style="margin-left: 10px">{{ scope.row.location }}</span>
              </div>
            </template>
        </el-table-column>
       <el-table-column label="价格" >
            <template #default="scope">
              <div style="display: flex; align-items: center">
                <span style="margin-left: 10px">{{ scope.row.price }}</span>
              </div>
            </template>
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="200">
      
                <template #default="scope">
                  <el-button size="small" @click="handleFinish(scope.$index, scope.row)"
                    >完成任务</el-button
                  >
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleCancel(scope.$index, scope.row)"
                    >取消任务</el-button
                  >
                </template>
        </el-table-column>
      </el-table>

  
</template>

<script lang="ts" >
import axios from 'axios'
export default {
        data() {
            return {
              Task: {
                    task_id:'',
                    task_name: '',
                    description: '',
                    location: '',
                    price: ''
                },
              receiveTask: [
              {
                 task_id:'1',
                task_name: '接收的请求',
                description: '啦啦啦啦',
                location: '芙蓉',
                price:'5元'
              },
              {
                task_id:'2',
                task_name: '取快递',
                description: '啦啦hjgjjghg哈师大赛季的冠军傻瓜机大噶技术的旮角啦啦',
                location: '芙过好几个经过海关监管和国家机关监管机构蓉',
                price:'5元'
              },
              {
                task_id:'3',
                task_name: '取快递',
                description: '啦啦啦啦',
                location: '芙蓉',
                price:'5元'
              },
              {
                task_id:'4',
                task_name: '取快递',
                description: '啦啦啦啦',
                location: '芙法国德国德国的法国队蓉',
                price:'5元'
              },],
              dialogUpdate: false,
              search: '',
            }
        },
        async mounted(){
          
          let serverURL = this.$store.state.serverURL+'/task/user/accepted';
          
            try{
            let res = await axios({
            method:'get',
            url:serverURL,
            headers:{
                'Content-Type':'application/json;charset=UTF-8',
                'Authorization':this.$store.state.token
            },
            });
            
            console.log(res.data.data)
            this.receiveTask = this.responseHandler(res.data.data)
            console.log(this.receiveTask)
          
          }catch(error){
              console.log("任务请求发送失败")
              console.log(error)
          }
          
        },
        computed: 
        {
                receiveTask() {
                  return this.receiveTask.filter((item) => {
                    return item.task_name.indexOf(this.search) !== -1
                  })
                }
        },
        methods: {
            responseHandler: function(input){
              let res = []
              for(var i=0;i<input.length;i++){
                let item: any = new Object();
                item.task_id = input[i].id;
                item.task_name = input[i].title;
                item.description = input[i].description;
                item.price = input[i].price;
                item.location = input[i].location;
                res.push(item)
              }
              return res
            },
            handleFinish(index, row) {
               this.$confirm('完成任务操作, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                  console.log('完成任务')
                //     let postData = this.qs.stringify({
                //         taskId: row.task_id,
                //     });
                //     this.axios({
                //         method: 'post',
                //         url:'/delete',
                //         data:postData
                //     }).then(response =>
                //     {
                //     
                //         this.axios.post('/page').then(response =>
                //         {
                //             this.sendTask = response.data;
                //         }).catch(error =>
                //         {
                //             console.log(error);
                //         });
                //         this.$message({
                //             type: 'success',
                //             message: '删除成功!'
                //         });
                //         console.log(response);
                //     }).catch(error =>
                //     {
                //         console.log(error);
                //     });

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });

            },
            handleCancel(index, row) {
              this.$confirm('取消任务操作, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {

                  console.log('取消任务')
                //     let postData = this.qs.stringify({
                //         taskId: row.task_id,
                //     });
                //     this.axios({
                //         method: 'post',
                //         url:'/delete',
                //         data:postData
                //     }).then(response =>
                //     {
                //   
                //         this.axios.post('/page').then(response =>
                //         {
                //             this.sendTask = response.data;
                //         }).catch(error =>
                //         {
                //             console.log(error);
                //         });
                //         this.$message({
                //             type: 'success',
                //             message: '删除成功!'
                //         });
                //         console.log(response);
                //     }).catch(error =>
                //     {
                //         console.log(error);
                //     });

                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消'
                    });
                });


            },
        },

}
















</script>

<style scoped>

body{
    
    padding: 40px;
  }

</style>
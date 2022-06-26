<template>
<el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入任务名称查询">
            </el-input>
          </el-form-item>
          <el-form-item>
             <el-button type="success" round @click="toUpload">发布新任务</el-button>
          </el-form-item>
      </el-form>
 
      <el-table :data="sendTask"    
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
      <el-table-column label="操作" fixed="right" width="150">
          <template #default="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            >修改</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
<!-- 修改任务 -->
    <el-form :model="Task"  ref="Task" label-width="70px" class="demo-ruleForm" size="default" >
      <el-dialog
        title="编辑"
        :append-to-body='true'
        :model-value="dialogUpdate"
        :close-on-click-modal="false"
        :show-close="false"
        width="80%">
        <!-- 与新增任务不同，修改任务需要传入task_id -->
        <el-input type="hidden" v-model="Task.task_id"/>

        <el-form-item label="任务名称" prop="task_name">
          <el-input v-model="Task.task_name"></el-input>
        </el-form-item>
        <el-form-item label="任务描述" prop="description">
          <el-input v-model="Task.description" autosize type="textarea"/>
        </el-form-item>
        <el-form-item label="定位" prop="location">
          <el-input v-model="Task.location"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="Task.price"></el-input>
        </el-form-item>

        <template #footer>
          <span class="dialog-footer">
            <el-button @click="cancel()" size="medium">取 消</el-button>
            <el-button @click="editTask()" type="primary" size="medium">确 定</el-button>
          </span>
        </template>
      </el-dialog>
    </el-form>




<!-- 增加任务 -->
    <el-form :model="Task"  ref="Task" label-width="70px" class="demo-ruleForm" size="default" >
      <el-dialog
        title="添加"
        :append-to-body='true'
        :model-value="dialogVisible"
        :close-on-click-modal="false"
        :show-close="false"
        width="80%">
        <el-form-item label="任务名称" prop="task_name">
          <el-input v-model="Task.task_name"></el-input>
        </el-form-item>
        <el-form-item label="任务描述" prop="description">
          <el-input v-model="Task.description" autosize type="textarea"/>
        </el-form-item>
        <el-form-item label="定位" prop="location">
          <el-input v-model="Task.location"></el-input>
        </el-form-item>
        <el-form-item label="价格" prop="price">
          <el-input v-model="Task.price"></el-input>
        </el-form-item>

        <template #footer>
          <span class="dialog-footer">
            <el-button @click="cancel()" size="medium">取 消</el-button>
            <el-button @click="addTask()" type="primary" size="medium">确 定</el-button>
          </span>
        </template>
      </el-dialog>
    </el-form>
  
</template>

<script>
import {useStore} from 'vuex'
import axios from 'axios'
export default {
        data() {
            return {
              rowdataloaded:false
              ,
              Task: {
                    task_id:'',
                    task_name: '',
                    description: '',
                    location: '',
                    price: ''
                },

              //这里需要你改，发送网络请求，获取发出的任务，返回的data可以直接赋值给sendTask，但是我觉得返回的很多属性没用，
              sendTask: [
              {
                task_id:'1',
                task_name: '发出的请求',
                description: '啦啦啦啦',
                location: '芙蓉',
                price:'5元'
              },
              {
                task_id:'2',
                task_name: '发出的请求',
                description: '啦啦啦啦',
                location: '芙蓉',
                price:'5元'
              },
              {
                task_id:'3',
                task_name: '发出的请求',
                description: '啦啦啦啦',
                location: '芙蓉',
                price:'5元'
              },
              {
                task_id:'4',
                task_name: '是速度大速度加快',
                description: '啦啦啦啦',
                location: '芙蓉',
                price:'5元'
              },
              {
                task_id:'5',
                task_name: '名命名',
                description: '啦啦啦啦',
                location: '芙蓉',
                price:'5元'
              },
             ],
              dialogUpdate: false,
              dialogVisible:false,

              search: '',

            }
        },
        async mounted(){
          
          let serverURL = this.$store.state.serverURL+'/task/user/published';
          if(!this.rowdataloaded){
              try{
              let res = await axios({
              method:'get',
              url:serverURL,
              headers:{
                  'Content-Type':'application/json;charset=UTF-8',
                  'Authorization':this.$store.state.token
              },
              });
              
              this.taskInfoLoaded = true;
              console.log(res.data.data)
              this.sendTask = this.responseHandler(res.data.data)
              console.log(this.sendTask)
            }catch(error){
                console.log("任务请求发送失败")
                console.log(error)
            }
          }
        }
        ,
        computed: 
        {
                sendTask() {
                  return this.sendTask.filter((item) => {
                    return item.task_name.indexOf(this.search) !== -1
                  })
                }
        },
        methods: {
            responseHandler: function(input){
              let res = []
              for(var i=0;i<input.length;i++){
                let item = new Object();
                item.task_id = input[i].id;
                item.task_name = input[i].title;
                item.description = input[i].description;
                item.price = input[i].price;
                item.location = input[i].location;
                res.push(item)
              }
              return res
            }
            ,
            toUpload: function(){
              this.$router.push('/upload');
            },
            handleEdit(index, row) {
              // this.dialogUpdate = true;
              
              this.Task = Object.assign({}, row);
              this.$router.push('/aoverall/:'+this.Task.task_id);
            },
            handleDelete(index, row) {
      
                this.$confirm('删除操作, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    
                    this.$message({
                        type: 'info',
                        message: '删除成功'
                    });

                    ///////////////////////////////////////////////////////////////网络请求改这里
                    // let postData = this.qs.stringify({
                    //     taskId: row.task_id,
                    // });
                    // this.axios({
                    //     method: 'post',
                    //     url:'/delete',
                    //     data:postData
                    // }).then(response =>
                    // {
                    //     this.axios.post('/page').then(response => //这里重新查询发出的任务
                    //     {
                    //         this.sendTask = response.data;///////////////////这个是必须的！！！！要更新表格的数据！！！！
                    //     }).catch(error =>
                    //     {
                    //         console.log(error);
                    //     });
                    //     this.$message({
                    //         type: 'success',
                    //         message: '删除成功!'
                    //     });
                    //     console.log(response);
                    // }).catch(error =>
                    // {
                    //     console.log(error);
                    // });
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });

            },

            cancel() {
                this.dialogUpdate = false;
                this.dialogVisible=false;
                this.emptyUserData();
            },
            emptyUserData(){
                this.r=this.Task = {
                    task_id:'',
                    task_name: '',
                    description: '',
                    location: '',
                    price:''
                }
            },
            
        },

}


</script>

<style scoped>

body{
    margin: 20px;
    padding: 40px;
  }

</style>
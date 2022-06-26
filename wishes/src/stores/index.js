import {createStore} from 'vuex'
const store = createStore({
    state(){
        return{           
            serverURL:'http://139.196.12.152:8080',
            token: '111',
            refreshedToken : '222',
            login:false,
            user:{//参考/self api返回的数据字段
                id:11,
                preferTaskType:"",
                basics:null
            }
        }
    },
    mutations:{
        setToken(state,payload){
            state.token = payload;
        },
        setRefreshToken(state,payload){
            state.flushedToken = payload;
        },
        setLogin(state,payload){
            state.login = payload;
        },

    }
})
export default store
import {createStore} from 'vuex'
const store = createStore({
    state(){
        return{           
            serverURL:'http://139.196.12.152:8080',
            token: '111',
            refreshedToken : '222',
            login:false,
            user:{
                id:11,
                types:[],
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
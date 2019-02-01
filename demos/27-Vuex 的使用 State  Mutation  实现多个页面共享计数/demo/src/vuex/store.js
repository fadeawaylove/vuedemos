import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

// 用于存储数据
var state = {
    count:1
}


// 用于存储方法
var mutations = {
    incCount(){
        ++ state.count;
    },
    desCount() {
        --state.count;
    }
}

// 实例化一个Vuex的store
const store = new Vuex.Store({
    state: state,
    mutations: mutations
})

export default store;




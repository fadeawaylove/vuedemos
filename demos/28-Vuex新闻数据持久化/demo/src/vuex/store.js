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

// getters的使用 当改变state中的属性的值的时候，就会触发getters中相关的方法
var getters = {
    computedCount(state) {
        return state.count*2;
    }
}

// actions异步触发mutation中的方法
var actions = {
    incMutationCount(context){
        context.commit('incCount');
    }
}

// 实例化一个Vuex的store
const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    getters: getters,
    actions: actions
})

export default store;




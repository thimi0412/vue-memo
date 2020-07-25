import Vue from 'vue'
import Vuex from 'vuex'
import createdPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createdPersistedState()],
    state: {
        memos: [{
            id: 1,
            body: 'サンプルのメモです'
        }]
    },
    mutations: {
        save(state, memo) {
            let max = state.memos[state.memos.length - 1].id;
            memo.id = max + 1;
            state.memos.push(memo);
        },
        update(state, data) {
            let target = state.memos.find(memo => memo.id == data.id);
            target.body = data.body;
        }
    }
})
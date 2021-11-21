import axios from "axios";

export default {
    state: {
        categories: []
    },

    mutations: {
        getCategoriesMutation(state, payload){
            state.categories = payload
        }
    },
    actions: {
        getCategoriesAction( { commit }){
            const token = localStorage.getItem('token');
            const headers = { Authorization: `Bearer ${token}`}
            axios.get('http://localhost:8090/categories', {headers}).then(resp => {
                commit('getCategoriesMutation', resp.data)
            })
        }
    },
    namespaced: true
}
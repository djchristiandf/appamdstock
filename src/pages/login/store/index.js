export default {
    state:{
        user: {username:'',token:''}
    },

    mutations:{
        setUser(state, payload){
            state.user = payload
        }
    },

    actions: {
        setUserLogin( {commit}) {
            const username = localStorage.getItem('username');
            const token = localStorage.getItem('token');

            const userLogin = { username: username, token: token}
            commit('setUser', userLogin)
        }
    },

    namespaced: true
}
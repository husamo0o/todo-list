import router from '../router';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        registerEmail: 'hi',
        registerPassword: 'there',
        registerError:null,
        loginEmail: 'hi',
        loginPassword: 'there',
        loginError:null,
        token: null,
    },
    actions: {
        logout({ commit}){
            commit('setToken', null);
            router.push('/login');
        },
        register({ commit, state }){
            commit('setRegisterError', null);
            return HTTP().post('auth/register',{
                email: state.registerEmail,
                password: state.registerPassword,
            })
                .then(({ data }) => {
                    commit('setToken', data.token);
                    router.push('/');
                })
                .catch(() => {
                    commit('setRegisterError', 'An Error Has occurd Registering your Information');
                });
        },
        login({ commit, state }){
            commit('setLoginError', null);
            return HTTP().post('auth/login',{
                email: state.loginEmail,
                password: state.loginPassword,
            })
                .then(({ data }) => {
                    commit('setToken', data.token);
                    router.push('/');
                })
                .catch(() => {
                    commit('setLoginError', 'An Error Has occurd Logging you In');
                });
        },
    },
    getters:{
        isLoggedIn(state){
            return !!state.token
        },
    },
    mutations: {
        setToken(state, token){
            state.token =token;
        },
        setRegisterError(state, error){
            state.registerError = error;
        },
        setRegisterEmail(state, email) {
        state.registerEmail = email;
        },
        setRegisterPassword(state, password){
            state.registerPassword = password
        },

        setLoginError(state, error){
            state.loginError = error;
        },
        setLoginEmail(state, email) {
        state.loginEmail = email;
        },
        setLoginPassword(state, password){
            state.loginPassword = password
        },
    },
}
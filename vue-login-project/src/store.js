import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allUsers: [
      { id: 1, name: "silnex", email: "silnex@silnex.kr", password: "1234" },
      { id: 2, name: "noone", email: "noone@silnex.kr", password: "1234" }
    ],
    isLogin: false,
    isLoginError: false
  },
  mutations: {
    loginSuccess(state) {
      state.isLogin = true
      state.isLoginError = false
    },
    loginError(state) {
      state.isLogin = false
      state.isLoginError = true
    }
  },
  actions: {
    login({ state, commit }, loginObj) {
      let selectedUser = null
      state.allUsers.forEach(user => {
        if (user.email === loginObj.email) {
          selectedUser = user
        }
      })
      selectedUser === null
        ? commit("loginError")
        : selectedUser.password !== loginObj.password
        ? commit("loginError")
        : commit("loginSuccess")
    }
  }
})
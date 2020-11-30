/*Identity.store.js*/

import identity_management from "@/service/identity_management";
import auth from "@/service/auth";


const state = {
    authorizationEndpoint: null,
    idToken: localStorage.getItem('id_token') || '',
    accessToken: localStorage.getItem('access_token') || '',
    refreshToken: localStorage.getItem('refresh_token') || '',
    currentUserName: null
}
const actions = {

    async fetchAuthorizationEndpoint({commit}, data) {
        let resp = await identity_management.getOpenIdConfig(data)
        let baseURL = resp.data.authorization_endpoint
        this.authorizartionURL = baseURL + "?response_type=code&client_id=" + data.client_id + "&" +
            "redirect_uri="+data.redirect_uri+"&scope=openid&kc_idp_hint=oidc"
        commit('SET_AUTH_ENDPOINT', this.authorizartionURL)

    },

    async authenticateUsingCode({dispatch}, data) {
        let resp = await identity_management.getToken(data);
        dispatch("setAuthToken", resp.data);
    },

    async authenticateLocally({dispatch}, data) {
        try {
            let resp = await identity_management.localLogin(data);
            dispatch("setAuthToken", resp.data);
        }catch (e) {
            return false
        }
    },

    async logout({commit}, data) {
        let dat = {
            client_id: data.client_id,
            client_sec: data.client_sec,
            refresh_token: auth.getRefreshToken()
        }
        await identity_management.logout(dat)
        commit('CLEAR_AUTH_TOKEN', data)
    },

    setAuthToken({commit}, data) {
        commit('SET_AUTH_TOKEN', data)

        let currentUserName = auth.getLoggedUsername();
        commit('SET_CURRENT_USER_NAME', {currentUserName});
    },

    // eslint-disable-next-line no-unused-vars
    async isAuthenticated({commit, getters, dispatch}, data) {
        try {
            if (!getters.isAuthenticated) {
                let dat = {
                    client_id: data.client_id,
                    client_sec: data.client_sec,
                    refresh_token: auth.getRefreshToken()
                }
                let response = await identity_management.getTokenUsingRefreshToken(dat).catch();
                dispatch("setAuthToken", response.data);

                return getters.isAuthenticated;
            }
            return true
        } catch (e) {
            commit('CLEAR_AUTH_TOKEN')
        }

    },


    // eslint-disable-next-line no-unused-vars
    async isLoggedUserHasAdminAccess({commit, data}){
        return auth.isUserHasAdminAccess()
    },

    // eslint-disable-next-line no-unused-vars
      async getCurrentUserName({commit}, data){
          return auth.getLoggedUsername()
      }

}


const mutations = {

    SET_AUTH_ENDPOINT(state, data) {
        state.authorizationEndpoint = data
    },

    SET_AUTH_TOKEN(state, data) {
        auth.clearIdToken()
        auth.clearAccessToken()
        auth.clearRefreshToken()
        auth.setIdToken(data.id_token)
        auth.setAccessToken(data.access_token)
        auth.setRefreshToken(data.refresh_token)
        state.idToken = data.id_token
        state.accessToken = data.access_token
        state.refreshToken = data.refresh_token
    },

    SET_CURRENT_USER_NAME(state, data) {
        state.currentUserName = data.currentUserName
    },

    // eslint-disable-next-line no-unused-vars
    CLEAR_AUTH_TOKEN(state, data) {
        auth.clearIdToken()
        auth.clearAccessToken()
        auth.clearRefreshToken()
        state.idToken = ''
        state.accessToken = ''
        state.refreshToken = ''
        state.currentUserName = null
    }
}

const getters = {
    getAuthorizationEndpoint(state) {
        return state.authorizationEndpoint
    },

    isAuthenticated(state) {
        return state.idToken && state.idToken !== "" && !auth.isTokenExpired(state.idToken);
    },

    getAccessToken(state) {
        return state.accessToken;
    },
    getCurrentUserName(state){
        return state.currentUserName;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
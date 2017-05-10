export const state = {
  user: null,
  firstLoad: true,
  menuName: '',
  sonMenu: []  // 栏目子导航
}

export const mutations = {
  setSonMenu (state, menu) {
    state.sonMenu = menu
  },
  SET_USER (state, user) {
    if (user === '') {}
    state.user = user || null
  },
  ACTIVE (state) {
    state.firstLoad = false
  },
  SET_MENU_NAME (state, name) {
    state.menuName = name
  }
}

export const getters = {
  isFirst (state) {
    return state.firstLoad
  },
  isAuthenticated (state) {
    return !!state.user
  },
  loggedUser (state) {
    return state.user
  },
  isMaster (state) {
    return !!state.user && !!state.user.isMaster
  }
}

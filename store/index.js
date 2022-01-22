
export const state = () => ({
  user: {
    email: '',
    uid: '',
    authenticated: false,
  },
  items: [],
  searchItems: [],
  searchFailed: false,
  // filter state can be all, done and notDone
  filterState: 'all',
  doneItems: 0
})

export const mutations = {
  setUserInfo(state, params) {
    state.user.email = params.email
    state.user.uid = params.uid
    state.user.authenticated = params.authenticated
  },

  setAuthentication(state, user) {
    if (user) {
      state.user.authenticated = true
      state.user.email = user.email
      state.user.uid = user.uid
    } else {
      state.user.authenticated = false
      state.user.email = ''
      state.user.uid = ''
    }
  },

  setItems(state, items) {
    this.state.items  = items
  },

  setSearchItems(state, items) {
    state.searchFailed = false
    this.state.searchItems  = items
    if (!items[0]) {
      state.searchFailed = true
    }

  },

  clearSearchItems(state, items) {
    this.state.searchItems = []
    state.searchFailed = false
  },

  setFilterState(state, param) {
    state.filterState = param
  },

  incrementAdd(state) {
    state.doneItems += 1
  },

  resetDone(state) {
    state.doneItems = 0
  }
}

export const actions = {
  async isAuthenticated() {
    return this.$fire.auth.currentUser
  },
  // add item
  async addItem({state}, values) {
    try {
      // sending req to the api
      const itemCollection = await this.$fire.firestore.collection('items')
      const req = await itemCollection.add({
        name: values,
        uid: state.user.uid,
        doneTime: '',
        done: false,
      })
      return true
    } catch (e) {
      alert(e.message)
      return false
    }

    // refreshing the api
  },

  async getItems({commit, state}) {
    let items = []
    commit('resetDone')
    try {
      const itemCollection =  await this.$fire.firestore.collection('items')

      let query= null;
      if (state.filterState === 'done') {
        query = await itemCollection.where('uid', '==', state.user.uid).where('done', '==', true).get()
      } else if (state.filterState === 'notDone') {
        query = await itemCollection.where('uid', '==', state.user.uid).where('done', '==', false).get()
      } else {
        query = await itemCollection.where('uid', '==', state.user.uid).get()
      }

      query.forEach((doc) => {
        items.push({id: doc.id, ...doc.data()})
        if (doc.data().done) {
          commit('incrementAdd')
        }
      })
      commit('setItems', items)
    } catch (e) {
      alert(e.message)
    }
  },

  // update item
  async update({}, item) {
    try {
      const req = await this.$fire.firestore.collection('items')
      await req.doc(item.id).update({
        done: item.done,
        doneTime: item.doneTime,
      })
    } catch (e) {
      alert(e)
    }
  },
  // delete item
  async delete({}, id) {
    try {
      const req = await this.$fire.firestore.collection('items')
      await req.doc(id).delete()
    } catch (e) {
      alert(e)
    }
  },
  // search
  async search({commit, state}, text) {
    let items = []
    state.items.forEach(item => {
      if (item.name.includes(text)) {
        items.push(item)
      }
    })
    commit('setSearchItems', items)
  }
}

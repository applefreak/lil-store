export function createStore(reducer) {
  let store
  let listener = []

  return {
    getState() {
      return store
    },
    commit(action, payload) {
      store = reducer(store, action, payload)
      listener.forEach(cur => cur(store, action))
    },
    subscribe(cb) {
      if (typeof cb === 'function') {
        listener = [...listener, cb]
      } else {
        throw new Error('"subscribe()" must be passed in a function!')
      }
    }
  }
}

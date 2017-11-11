const { createStore } = require('./index')

const reducer = (store, action, payload) => {
  if (!store) store = 0 // this is how you define your initial state

  switch(action) { // define how your state will change according to action
    case 'incr':
    store++
    break
    case 'decr':
    store--
    break
    case 'add':
    store += payload
    break
  }

  return store
}

const store = createStore(reducer)

store.subscribe(state => console.log(state))

store.commit('add', 5) // prints out 5
store.commit('incr') // prints out 6
store.commit('incr') // prints out 7
store.commit('decr') // prints out 6

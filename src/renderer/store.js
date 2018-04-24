import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'


const reducer = () => ({})


export function configureStore(initialState = {}) {
  const middlewares = [
    thunk.withExtraArgument({}),
    createLogger({ collapsed: true }),
  ]

  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares)),
  )
}


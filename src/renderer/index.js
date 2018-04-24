import React from 'react'
import ReactDom from 'react-dom'
import { hot } from 'react-hot-loader'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import styled from 'styled-jss'

import { rootRoutes } from './routes'
import { configureStore } from './store'


const root = document.getElementById('app')
const store = configureStore()

const App = hot(module)(() => (
  <Provider store={store}>
    <BrowserRouter>
      {rootRoutes(store)}
    </BrowserRouter>
  </Provider>
))

const render = () => {
  ReactDom.render(
    <App />,
    root,
  )
}

render()

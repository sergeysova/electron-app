import React from 'react'
import { Switch, Route } from 'react-router-dom'

import styled from 'styled-jss'

import Play from 'assets/backward.svg'


const Header = styled('header')({
  height: '40px',
  backgroundColor: 'white',
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
  '-webkit-user-select': 'none',
  '-webkit-app-region': 'drag',
})

const AppTemplate = styled('div')({
  padding: '20px',
})

const NotFoundPage = () => (
  <div>
    Error! Not found!
  </div>
)

const RootPage = () => (
  <div>
    Root. <Play />
  </div>
)

export const rootRoutes = (store) => (
  <React.Fragment>
    <Header />
    <AppTemplate>
      <Switch>
        <Route path="/" exact component={RootPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AppTemplate>
  </React.Fragment>
)

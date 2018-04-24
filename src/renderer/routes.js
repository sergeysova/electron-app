import React from 'react'
import { Switch, Route } from 'react-router-dom'

import styled from 'styled-jss'

import Backward from 'assets/backward.svg'
import Forward from 'assets/forward.svg'
import Play from 'assets/play.svg'


const Header = styled('header')({
  height: '4rem',
  paddingLeft: '10rem',
  display: 'flex',
  flexFlow: 'row nowrap',
  backgroundColor: 'white',
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
  '-webkit-user-select': 'none',
  '-webkit-app-region': 'drag',

  '& svg': {
    padding: '0.6rem',
    width: '28px',
    height: '28px',
    opacity: 0.3,

    '&:hover': {
      opacity: 0.9,
    },
  },

})

const AppTemplate = styled('div')({
  padding: '2rem',
})

const NotFoundPage = () => (
  <div>
    Error! Not found!
  </div>
)

const RootPage = () => (
  <div>
    Root.
  </div>
)

export const rootRoutes = (store) => (
  <React.Fragment>
    <Header>
      <Backward />
      <Play />
      <Forward />
    </Header>
    <AppTemplate>
      <Switch>
        <Route path="/" exact component={RootPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AppTemplate>
  </React.Fragment>
)

import React from 'react'
import useStyle from './style'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Header from './components/Header/Header'
import UserLogin from './components/Login/Login'
import Feed from './components/Feed/Feed'
import Sidebar from './components/Sidebar/Sidebar'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

export default function App() {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <Router>
        <Header></Header>
        <div className='app-div'>
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/login' component={UserLogin} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

const Home = () => {
  const classes = useStyle()
  return (
    <Container className={classes.grid_root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <Sidebar></Sidebar>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Feed></Feed>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

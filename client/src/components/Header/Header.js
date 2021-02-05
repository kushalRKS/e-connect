import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import appConfig from '../../config'
import { Link as RouterLink } from 'react-router-dom'
import { MemoryRouter as Router } from 'react-router'
import Link from '@material-ui/core/Link'
import useStyle from './style'
import { Button } from '@material-ui/core'

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to='/login' {...props} />
))

export default function Header() {
  const classes = useStyle()

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          ></IconButton>
          <Typography variant='h6' className={classes.title}>
            <Link component={RouterLink} to='/home' color='inherit'>
              {appConfig.appName}
            </Link>
          </Typography>

          <Button component={RouterLink} to='/login'>
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

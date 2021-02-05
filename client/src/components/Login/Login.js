import React, { useState } from 'react'
import useStyles from './styles'

import {
  Container,
  Paper,
  TextField,
  Typography,
  Button,
  Link,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
} from '../materialComponents.js'

// import Container from '@material-ui/core/Container'
// import Paper from '@material-ui/core/Paper'
// import TextField from '@material-ui/core/TextField'
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import Link from '@material-ui/core/link'

const Login = () => {
  const classes = useStyles()
  const [fromData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fromData)
  }

  const clear = () => {
    setFormData({
      email: '',
      password: '',
    })
  }
  return (
    <div className={classes.root}>
      <div className={classes.loginFromWrap}>
        <Typography className={classes.headerText} variant='h5' color='primary'>
          Login
        </Typography>

        <form onSubmit={(e) => handleSubmit(e)}>
          <TextField
            className={classes.input}
            fullWidth
            label='Email'
            required
            type='email'
            variant='outlined'
            onChange={(e) => {
              setFormData({ ...fromData, email: e.target.value })
            }}
          />
          <TextField
            className={classes.input}
            fullWidth
            label='Password'
            required
            type='password'
            variant='outlined'
            onChange={(e) => {
              setFormData({ ...fromData, password: e.target.value })
            }}
          />

          <Button variant='contained' color='primary' type='submit' fullWidth>
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

const Register = () => {
  const classes = useStyles()
  const [fromData, setFormData] = useState({
    firstName: '',
    lastanme: '',
    email: '',
    password: '',
    gender: '',
    confirmedPssword: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(fromData)
  }

  const clear = () => {
    setFormData({
      firstName: '',
      lastanme: '',
      email: '',
      password: '',
      confirmedPssword: '',
    })
  }
  return (
    <div className={classes.root}>
      <div className={classes.loginFromWrap}>
        <Typography className={classes.headerText} variant='h5' color='primary'>
          Create an account
        </Typography>

        <form onSubmit={(e) => handleSubmit(e)}>
          <TextField
            className={classes.input}
            fullWidth
            label='First Name'
            required
            type='text'
            variant='outlined'
            onChange={(e) => {
              setFormData({ ...fromData, firstName: e.target.value })
            }}
          />
          <TextField
            className={classes.input}
            fullWidth
            label='Last Name'
            required
            type='text'
            variant='outlined'
            onChange={(e) => {
              setFormData({ ...fromData, lastanme: e.target.value })
            }}
          />
          <TextField
            className={classes.input}
            fullWidth
            label='Email'
            required
            type='email'
            variant='outlined'
            onChange={(e) => {
              setFormData({ ...fromData, email: e.target.value })
            }}
          />
          <TextField
            className={classes.input}
            fullWidth
            label='Password'
            required
            type='password'
            variant='outlined'
            onChange={(e) => {
              setFormData({ ...fromData, password: e.target.value })
            }}
          />
          <TextField
            className={classes.input}
            fullWidth
            label='Confirm Password'
            required
            type='password'
            variant='outlined'
            onChange={(e) => {
              setFormData({ ...fromData, confirmedPssword: e.target.value })
            }}
          />

          <FormControl component='fieldset'>
            <FormLabel component='legend'>Gender</FormLabel>
            <RadioGroup
              row
              aria-label='gender'
              name='gender1'
              value={fromData.gender}
              onChange={(e) =>
                setFormData({ ...fromData, gender: e.target.value })
              }
            >
              <FormControlLabel
                value='female'
                control={<Radio />}
                label='Female'
              />
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel
                value='other'
                control={<Radio />}
                label='Other'
              />
            </RadioGroup>
          </FormControl>

          <Button variant='contained' color='primary' type='submit' fullWidth>
            Register
          </Button>
        </form>
      </div>
    </div>
  )
}

export default function UserLogin() {
  const classes = useStyles()
  const [showLogin, setShowLogin] = useState(true)
  const [showRegister, setShowRegister] = useState(false)
  return (
    <div>
      <Container maxWidth='sm'>
        <Paper style={{ marginBottom: '20px' }}>
          {showLogin ? (
            <>
              <Login></Login>
              <div className={classes.loginFromWrap}>
                <Typography style={{ marginTop: '-20px' }}>
                  Dont have any account?
                  <Link
                    style={{ marginLeft: '10px' }}
                    href='#'
                    onClick={(e) => setShowLogin(false)}
                  >
                    Register
                  </Link>
                </Typography>
              </div>
            </>
          ) : (
            <>
              <Register></Register>
              <div className={classes.loginFromWrap}>
                <Typography style={{ marginTop: '-20px' }}>
                  Already have an account?
                  <Link
                    style={{ marginLeft: '10px' }}
                    href='#'
                    onClick={(e) => setShowLogin(true)}
                  >
                    Login
                  </Link>
                </Typography>
              </div>
            </>
          )}
        </Paper>
      </Container>
    </div>
  )
}

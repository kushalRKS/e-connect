import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  grid_root: {
    flexGrow: 1,
    padding: '20px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

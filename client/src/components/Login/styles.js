import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '50px',
  },
  loginFromWrap: {
    padding: '20px',
  },

  headerText: {
    marginBottom: '20px',
  },
  input: {
    marginBottom: '10px',
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'strech',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}))

export default useStyles

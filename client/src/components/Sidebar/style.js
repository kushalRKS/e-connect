import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  user_block: {
    height: 'calc(100vh - 200px)',
    background: '#ffffff',
    padding: '30px 0px',
  },
  user_avatar: {
    height: '114px',
    width: '114px',
    borderRadius: '50%',
    overflow: 'hidden',
    position: 'relative',
  },
  user_avatar_img: {
    width: 'auto',
    height: '100%',
    maxWidth: '100%',
    display: 'block',
    margin: '0 auto',
  },
}))

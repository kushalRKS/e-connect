import React from 'react'
import useStyle from './style'
export default function Sidebar() {
  const classes = useStyle()

  return (
    <div className={classes.user_block}>
      <div className={classes.user_avatar}>
        <img
          className={classes.user_avatar_img}
          src='https://user-images.githubusercontent.com/2351721/31314483-7611c488-ac0e-11e7-97d1-3cfc1c79610e.png'
          alt=''
        />
      </div>
    </div>
  )
}

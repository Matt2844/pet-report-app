import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  loginEnter: {
    marginTop: '2.5rem',
    height: '1.5rem'
  }
})

export default function Login () {
  const classes = useStyles();

  return (
    <div>
      <section className="login-section">
        <div className="login-section-login">
          <p>Login Back arrow</p>
          <div className="login-card">
            <h3>Login</h3>
            <input placeholder="email" />
            <input placeholder="password" /><br />
            <Button className={classes.loginEnter} variant="outlined">Enter</Button>
          </div>
        </div>
        <div className="login-section-photo">
          right
        </div>
      </section>
    </div>
  )
}
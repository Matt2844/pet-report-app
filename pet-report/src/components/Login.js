import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  loginEnter: {
    marginTop: '4.5rem',
    height: '1.5rem',
    backgroundColor: 'white',
  },
})

export default function Login () {
  const classes = useStyles();

  return (
    <div>
      <section className="login-section">
        <div className="login-section-login">
          <div className="login-card">
            <form noValidate autoComplete="off">
              <div className="login-email">
                <TextField label="email" />
              </div>
              <div className="login-password">
                <TextField label="password" />
              </div>
              <Button className={classes.loginEnter} variant="outlined">Login</Button>
            </form>
          </div>
        </div>
        <div className="login-section-photo">
          <img className="login-dog" src="/images/pr-pro-login-dog.jpg" />
        </div>
      </section>
    </div>
  )
}
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
      <section className="register-section">
        <div className="register-section-register">
          <div className="register-card">
            <form noValidate autoComplete="off">
              <div className="register-email">
                <TextField label="email" />
              </div>
              <div className="register-password">
                <TextField label="password" />
              </div>
              <Button className={classes.loginEnter} variant="outlined">Register</Button>
            </form>
          </div>
        </div>
        <div className="register-section-photo">
          <img className="register-dog" src="/images/pr-pro-register-dog.jpeg" />
        </div>
      </section>
    </div>
  )
}
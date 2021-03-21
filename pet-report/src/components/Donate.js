import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  support: {
    marginTop: '2rem',
    backgroundColor: 'rgb(147, 207, 244)',
  }
})

export default function Donate () {
  const classes = useStyles();

  return (
    <div className="donate-wrapper">
      <h3>Like The App?</h3>
      <p>Hopefully this application adds value to your business. If it does, please support the site <a href='https://www.buymeacoffee.com/pet.report.pro' target="_blank" rel="noopener noreferrer">here</a> or by clicking 'Support' below.</p>
      <p>Donations are collected through a site called Buy Me A Coffee. It is a friendly, fun, and secure way to make payments.</p>
      <p>With enough donations, significant improvements will be made to Pet Report Pro. Improvements will be based on user input and feedback.</p>
      <a href='https://www.buymeacoffee.com/pet.report.pro' target="_blank" rel="noopener noreferrer">
        <Button className={classes.support}>Support</Button>
      </a>
    </div >
  )
}
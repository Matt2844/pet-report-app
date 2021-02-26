import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider'
import SettingsIcon from '@material-ui/icons/Settings';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  list: {
    width: 425,
    padding: '1rem',
    paddingRight: '1.5rem',
  },
  fullList: {
    width: 'auto',
  },
  submit: {
    marginTop: '3rem',
    marginLeft: '2rem',
    height: '1.8rem'
  }
});

export default function QuestionsModal () {
  const classes = useStyles();
  const [theme, setTheme] = useState('Basic')
  const [heading, setHeading] = useState('Didot')
  const [body, setBody] = useState('Sans Serif')
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleChangeTheme = (event) => {
    setTheme(event.target.value);
  };

  const handleChangeHeading = (event) => {
    setHeading(event.target.value);
  };

  const handleChangeBody = (event) => {
    setBody(event.target.value);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"

    >
      <h3 className="settings-heading">Settings (N/A)</h3>
      <Divider />
      <form className="save-settings">
        <div className="theme-settings">
          <InputLabel id="theme-select-label">Pet Service Type</InputLabel>
          <Select
            labelId="theme-select-settings"
            id="theme-select-field"
            value={theme}
            onChange={handleChangeTheme}
          >
            <MenuItem value={'Basic'}>Basic</MenuItem>
            <MenuItem value={'Boarding'}>Boarding</MenuItem>
            <MenuItem value={'Pet Sitting'}>Pet Sitting</MenuItem>
            <MenuItem value={'Grooming'}>Grooming</MenuItem>
            <MenuItem value={'Walking'}>Walking</MenuItem>
          </Select>
        </div>
        <div className="company-name-settings">
          <TextField label="Company Name" />
        </div>
        <div className="theme-settings">
          <InputLabel id="theme-select-label">Heading (Font)</InputLabel>
          <Select
            labelId="theme-select-settings"
            id="theme-select-field"
            value={heading}
            onChange={handleChangeHeading}
          >
            <MenuItem value={'Didot'}>Didot</MenuItem>
            <MenuItem value={'Sans Serif'}>Sans Serif</MenuItem>
            <MenuItem value={'Candera'}>Candera</MenuItem>
            <MenuItem value={'Copperplate'}>Copperplate</MenuItem>
            <MenuItem value={'Cursive'}>Cursive</MenuItem>
          </Select>
        </div>

        <div className="company-review-url">
          <TextField label="Suggest Review URL" />
        </div>

        <Button className={classes.submit} type="submit" variant="outlined">Submit</Button>


      </form>
    </div >
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className="settings-icon" onClick={toggleDrawer(anchor, true)}>
            <SettingsIcon />
          </button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} transitionDuration={700}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
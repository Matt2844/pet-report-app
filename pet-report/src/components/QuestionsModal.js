import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider'
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles({
  list: {
    width: 600,
    padding: '1rem',
    paddingRight: '1.5rem',
  },
  fullList: {
    width: 'auto',
  },
});

export default function QuestionsModal () {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <h3 className="faq-heading">Frequently Asked Questions</h3>
      <Divider />
      <ul>
        <li>
          <h4>1. My Report Card Is Complete, How Do I Send It To A Client?</h4>
          <p>Click the PDF icon on the left hand side. This will save the report card to your computer.
          You can either hold onto the PDF, or send it off to your client immediately.<br /><br />
          To forward the report card to your client, we recommend sending it by email. Simply attach the PDF to an email by dragging the PDF onto the body of the email.
          You can also click the attach button from your email and search for the PDF in your folders.
          </p>
        </li>
        <li>
          <h4>2. Can I Customize The Report Card?</h4>
          <p>Yes, just select a pet service type that suits your client the best. You can also select which fields you want to display.
          Click the 'x' when editing the form to hide a specific field. You can also change the font style.
          </p>
        </li>
        <li>
          <h4>3. Can I Create And Save Default Settings?</h4>
          <p>If you are logged in, then yes. Click the settings icon on the lefthand side. Then select the settings you want to
          to use as the default. <br /><br />
          This means that everytime you return to create a report card, part of the report card
          will already be filled out with your selected settings.
          </p>
        </li>
        <li>
          <h4>4. What does the 'Suggest Review URL' button mean and do?</h4>
          <p>This is a section where you can prompt your customers to leave a review somewhere. We recommend directing
          your customers to leave a review on Google. If your business is not registered with Google, you can always use a link
          a facebook page, or your personal website,
          </p>
        </li>

      </ul>
    </div >
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <button className="frequently-asked-questions" onClick={toggleDrawer(anchor, true)}>
            <HelpIcon />
          </button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} transitionDuration={700}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
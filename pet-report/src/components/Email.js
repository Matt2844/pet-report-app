import React from 'react';
import EmailIcon from '@material-ui/icons/Email';




export default function Email (props) {

  return (
    <div>
      <a href={`mailto:?subject=${props.subjectMessage}`}>
        <button className="email-icon">
          <EmailIcon />
        </button>
      </a>
    </div >
  );
}
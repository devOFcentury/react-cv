import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'


function Contact({nameIcon, children}) {

  
  return (
    <div className='row p-0'>
        <div className='col-3  d-flex justify-content-center'>
            <FontAwesomeIcon icon={nameIcon} size="3x" className='Profile__faIcon' />
        </div>
        <div className='col-9 p-0 Contact__para'>
            {children}
            <hr className='d-sm-none d-md-block'/>
        </div>
        
    </div>
  )
}

export default Contact;
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Hobbies() {
  return (
    <div className='row'>
        <div className='col-md-9 col-lg-10 offset-md-3 offset-lg-2'>

           <FontAwesomeIcon icon="baseball-bat-ball" size='3x' className='text-primary' />
           <FontAwesomeIcon icon="futbol" size='3x' className='text-primary' style={{margin : '0px 30px'}} />
           <FontAwesomeIcon icon="earth-africa" size='3x' className='text-primary' />
        </div>
    </div>
  )
}

export default Hobbies
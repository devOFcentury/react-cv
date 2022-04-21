import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';


function Interest({mt, title, nameIcon, children}) {
  return (
    <div className={`col-12 bg-light pt-4 pb-4 mt-${mt} pe-lg-5`}>
        <div className='row'>
            <div className='col-md-3 col-lg-2 d-sm-none d-md-block'>
                <FontAwesomeIcon icon={nameIcon} size="3x" />
            </div>
            <div className='col-md-9 col-lg-10'>
                <h2>{title}</h2>
            </div>
        </div>

        {children}
    </div>
  )
}

export default Interest;
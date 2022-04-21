import React from 'react'

function DiplomaAwards({hr, h4, h3}) {
  return (
    <div className='row'>
        <div className='col-md-9 col-lg-10 offset-md-3 offset-lg-2'>
            <h4>{h4}</h4>
            <h5 className='text-primary'>{h3}</h5>
            {hr}
        </div>
    </div>
  )
}

export default DiplomaAwards;
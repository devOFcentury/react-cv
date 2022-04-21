import React from 'react'

function Designation({hr}) {
  return (
    <div className='row'>
        <div className='col-md-9 col-lg-10 offset-md-3 offset-lg-2'>
            <h4>Designation at Company Name</h4>
            <h5 className='text-primary'>APR 2015 - NOV 2017</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A officiis quas officia nemo ullam porro laudantium in error cumque quibusdam sit tempora quam architecto</p>
            {hr}
        </div>
    </div>
  )
}

export default Designation
import React from 'react';
import '../../styles/Profile.css';
import avatar from '../../images/avatar.jpg';
import Contact from './Contact';
import Skills from './Skills';



function Profile() {
  return (
    <div className='col-sm-12 col-md-5 col-lg-4 pt-sm-3 pb-sm-3 Profile'>
        <div className='row'>
            <div className='col-md-9 offset-md-3 Profile__image ps-sm-2 p-md-0'>
                <img src={avatar} className="Profile__img img-fluid" alt='user'/>
                <h2 className='fw-bold text-light fs-1'>Good Name</h2>
                <h3 className='fs-3 text-light opacity-75'>Designation</h3>
                <hr className='d-sm-none d-md-block'/>
            </div>
        </div>

        <div className='grille'>
          <Contact nameIcon="phone">
            <p>+1234567879</p>
            <p>Mobile</p>
          </Contact>

          <Contact nameIcon="envelope">
            <p>name@email.com</p>
            <p>personal</p>
          </Contact>

          <Contact nameIcon="location-dot">
            <p>H-123, Block A<br/> State, Country</p>
            <p>home</p>
          </Contact>
        </div>

        <Skills nameIcon="clipboard-list" />

    </div>
  )
}

export default Profile
import React from 'react';
import '../../styles/Profile.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function Skills({nameIcon}) {
  var opacity = {opacity: 0.9}
  return (
    <div className='Skills mt-0 mt-md-4'>
        <div className='row'>
          <div className='col-3  d-flex justify-content-md-center skills__left'>
              <FontAwesomeIcon icon={nameIcon} size="3x" className='Profile__faIcon' />
          </div>
          <div className='col-6 col-md-9 p-0 Skills__para'>
              <p className='fs-3 text-light opacity-75'>Technical Skills</p>
              <hr className='d-sm-none d-md-block'/>
          </div>
        </div>

        <div className='row technical-progress'>

          <div className='col-md-9 offset-md-3'>
            <p className='text-light' style={opacity}>HTML5, CSSS3, JQUERY</p>
            <div className="progress" style={{height: '9px', background: '#1010af'}}>
              <div className="progress-bar bar" role="progressbar" style={{width: '95%', background:'#DDD'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className='col-md-9 offset-md-3 mt-md-3'>
            <p className='text-light' style={opacity}>Angular 5</p>
            <div className="progress" style={{height: '9px', background: '#1010af'}}>
              <div className="progress-bar bar" role="progressbar" style={{width: '60%', background:'#DDD'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className='col-md-9 offset-md-3 mt-md-3'>
            <p className='text-light' style={opacity}>Bootstrap</p>
            <div className="progress" style={{height: '9px', background: '#1010af'}}>
              <div className="progress-bar bar" role="progressbar" style={{width: '95%', background:'#DDD'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className='col-md-9 offset-md-3 mt-md-3'>
            <p className='text-light' style={opacity}>Wordpress</p>
            <div className="progress" style={{height: '9px', background: '#1010af'}}>
              <div className="progress-bar bar" role="progressbar" style={{width: '70%', background:'#DDD'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className='col-md-9 offset-md-3 mt-md-3'>
            <p className='text-light' style={opacity}>CodeIgniter</p>
            <div className="progress" style={{height: '9px', background: '#1010af'}}>
              <div className="progress-bar bar" role="progressbar" style={{width: '65%', background:'#DDD'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className='col-md-9 offset-md-3 mt-md-3'>
            <p className='text-light' style={opacity}>Photoshop, Illustrator, Xd</p>
            <div className="progress" style={{height: '9px', background: '#1010af'}}>
              <div className="progress-bar bar" role="progressbar" style={{width: '85%', background:'#DDD'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className='col-md-9 offset-md-3 mt-md-3'>
            <p className='text-light' style={opacity}>inVision</p>
            <div className="progress" style={{height: '9px', background: '#1010af'}}>
              <div className="progress-bar bar" role="progressbar" style={{width: '80%', background:'#DDD'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>


        <div className='row'>

          <div className='col-3  d-flex justify-content-md-center skills__left'>
              <FontAwesomeIcon icon={nameIcon} size="3x" className='Skills__faIcon' />
          </div>

          <div className='col-6 col-md-9 p-0 Skills__para'>
              <hr className='d-sm-none d-md-block mt-md-4 mb-md-4'/>
              <p className='fs-3 text-light opacity-75'>Personal Skills</p>
          </div>

        </div>

        <div className='row technical-progress'>

          <div className='col-md-9 offset-md-3'>
            <p className='text-light' style={opacity}>Creativity</p>
            <div className="progress" style={{height: '9px', background: '#1010af'}}>
              <div className="progress-bar bar" role="progressbar" style={{width: '95%', background:'#DDD'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className='col-md-9 offset-md-3 mt-md-3'>
            <p className='text-light' style={opacity}>Leadership</p>
            <div className="progress" style={{height: '9px', background: '#1010af'}}>
              <div className="progress-bar bar" role="progressbar" style={{width: '90%', background:'#DDD'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

          <div className='col-md-9 offset-md-3 mt-md-3'>
            <p className='text-light' style={opacity}>Communication</p>
            <div className="progress" style={{height: '9px', background: '#1010af'}}>
              <div className="progress-bar bar" role="progressbar" style={{width: '80%', background:'#DDD'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Skills;
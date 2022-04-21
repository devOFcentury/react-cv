import React from 'react';
import '../../styles/Personalinfo.css';
import Interest from './Interest';
import Lorem from './Lorem';
import Designation from './Designation';
import DiplomaAwards from './DiplomaAwards';
import Hobbies from './Hobbies';

function Personalinfo() {

    var hr = (<hr/>);
  return (
    <div className='col-sm-12 col-md-7 col-lg-8 Personalinfo'>
        <div className='container'>
            <div className='row'>
                <Interest mt={0} title="About" nameIcon="user">
                    <Lorem />
                </Interest>

                <Interest mt={4} title="Work Experience" nameIcon="briefcase">
                    <Designation hr={hr} />
                    <Designation hr={hr} />
                    <Designation />
                </Interest>

                <Interest mt={4} title="Education" nameIcon="graduation-cap">
                    <DiplomaAwards hr={hr} h4="Diploma/Degree from College/Institute" h3="FEB 2002 - AUG 2003" />
                    <DiplomaAwards h4="Diploma/Degree from College/Institute" h3="FEB 2002 - AUG 2003" />
                </Interest>

                <Interest mt={4} title="Achievment" nameIcon="square">
                    <DiplomaAwards hr={hr} h4="Awards name at place" h3="FEB 2002" />
                    <DiplomaAwards h4="Awards name at place" h3="FEB 2002" />
                </Interest>

                <Interest mt={4} title="Hobbies" nameIcon="face-smile">
                    <Hobbies />
                </Interest>

                
                <p className={`col-12 pt-4 pb-4  pe-lg-5`}>
                    <strong>Be</strong> /username &nbsp;&nbsp; <strong>in</strong> /username
                </p>
               
            </div>
        </div>
    </div>
  )
}

export default Personalinfo;
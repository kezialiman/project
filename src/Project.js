import React from 'react';
import './Project.css';
import top_up from "./logo/manual_top_up_request.png";
import delayed_settlement from "./logo/delayed_settlement.jpg";
import loo_logo from "./logo/loo_map.jpg";

function Project() {
  return (
    <div className='project__section'>
        <div className='project__wrapper'>
          <div className='project__container'>
          <div className='project__container-card'>
            <div className='project__container-cardInfo'>
                <img className='project_icon' src={top_up} alt="Top Up" />
                <h3>Manual Top Up</h3>
                <p>Software Engineer Intern at OY!</p>
                <ul className='project__container-features'>
                  <li>Developed manual top up feature with upload and download capabilities from AWS s3.</li>
                  <li>Implemented for update locking system using SQL.</li>
                  <li>Auto generated email and slack notification upon request submission.</li>
                  <li>Successfully prevent human error from previous one-way top up feature.</li>
                </ul>
                <p>Java | Unit Test Junit & Mockito | Design Document | API Contract</p>
            </div>
          </div>
        <div className='project__container-card'>
            <div className='project__container-cardInfo'>
            <img className='project_icon' src={delayed_settlement} alt="Delayed Settlement" />
                <h3 style={{color: '#4e4c44'}}>Delayed Settlement</h3>
                <p style={{color: '#4e4c44'}}>Software Engineer Intern at OY!</p>
                <ul className='project__container-features' style={{color: '#4e4c44'}}>
                  <li>Built delayed settlement feature to solve liquidity issue with auto
                    update capability using cron triggered scheduler.</li>
                  <li>Used SQL index to speed up filtering and sorting & export capability.</li>
                  <li>Testing in development server using Dbeaver and Postman.</li>
                </ul>
                <p style={{color: '#4e4c44'}}>Java | React | Design Document | API Contract | OOP Design</p>
            </div>
        </div>
        <div className='project__container-card'>
            <div className='project__container-cardInfo'>
            <img className='project_icon' src={loo_logo} alt="Loo Logo" />
                <h3>Loo!</h3>
                <p>Personal Project: Android application used to search nearest restroom around you</p>
                <ul className='project__container-features'>
                  <li>Developed using Android Studio and integrated toilet rating system using Firebase database.</li>
                  <li>Implemented Google maps and Google sign-in API for user login.</li>
                  <li>Designed UIUX using Figma and created user story flow chart.</li>
                </ul>
                <p>CalHacks 2019 | Java | Figma</p>
                </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Project;

import React from 'react';
import './Project.css';
import top_up from "./logo/manual_top_up_request.png";
import delayed_settlement from "./logo/delayed_settlement.jpg";
import loo_logo from "./logo/loo_map.jpg";
import { HEADING, TEXT } from "./Constants";

function Project() {
  return (
    <div className='project__section'>
        <h5>{HEADING.highlights}:</h5>
        <div className='project__wrapper'>
          <div className='project__container'>
          <div className='project__container-card'>
            <div className='project__container-cardInfo'>
                <img className='project_icon' src={top_up} alt="Top Up" />
                <h3>{HEADING.manualTopUp}</h3>
                <p>{TEXT.oy_intern}</p>
                <ul className='project__container-features'>
                  <li>{TEXT.bullet_points.top_up_1}</li>
                  <li>{TEXT.bullet_points.top_up_2}</li>
                  <li>{TEXT.bullet_points.top_up_3}</li>
                  <li>{TEXT.bullet_points.top_up_4}</li>
                </ul>
                <p>{TEXT.project_footer.top_up}</p>
            </div>
          </div>
        <div className='project__container-card'>
            <div className='project__container-cardInfo'>
            <img className='project_icon' src={delayed_settlement} alt="Delayed Settlement" />
                <h3 style={{color: '#4e4c44'}}>{HEADING.delayedSettlement}</h3>
                <p style={{color: '#4e4c44'}}>{TEXT.oy_intern}</p>
                <ul className='project__container-features' style={{color: '#4e4c44'}}>
                  <li>{TEXT.bullet_points.settlement_1}</li>
                  <li>{TEXT.bullet_points.settlement_2}</li>
                  <li>{TEXT.bullet_points.settlement_3}</li>
                </ul>
                <p style={{color: '#4e4c44'}}>{TEXT.project_footer.settlement}</p>
            </div>
        </div>
        <div className='project__container-card'>
            <div className='project__container-cardInfo'>
            <img className='project_icon' src={loo_logo} alt="Loo Logo" />
                <h3>{HEADING.loo}</h3>
                <p>{TEXT.loo_description}</p>
                <ul className='project__container-features'>
                  <li>{TEXT.bullet_points.loo_1}</li>
                  <li>{TEXT.bullet_points.loo_2}</li>
                  <li>{TEXT.bullet_points.loo_3}</li>
                </ul>
                <p>{TEXT.project_footer.loo}</p>
                </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Project;

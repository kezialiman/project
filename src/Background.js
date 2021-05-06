import React from 'react';
import './Background.css';
import { HEADING, TEXT, WEBLINK } from "./Constants";

function Background() {
  return (
    <div className='background__section'>
        <div className='background__wrapper'>
          <div className='background__container'>
          <div className='background__container-card'>
            <div className='background__container-cardInfo'>
                <h3>{HEADING.education}</h3>
                <p>{TEXT.berkeley}</p>
                <ul className='background__container-features'>
                  <li>{TEXT.bullet_points.gpa_berkeley}</li>
                  <li>{TEXT.bullet_points.honors}</li>
                  <li>{TEXT.bullet_points.dsp_notetaker}</li>
                </ul>
                <p>{TEXT.dvc}</p>
                <ul className='background__container-features'>
                  <li>{TEXT.bullet_points.gpa_dvc}</li>
                  <li>{TEXT.bullet_points.dvc_math_tutor}</li>
                </ul>
            </div>
          </div>
        <div className='background__container-card'>
            <div className='background__container-cardInfo'>
                <h3>{HEADING.clubs}</h3>
                <p>{TEXT.women_in_stem}</p>
                <ul className='background__container-features'>
                  <li>{TEXT.bullet_points.women_awareness}</li>
                  <li>{TEXT.bullet_points.workshop}</li>
                </ul>
                <p>{TEXT.secretary_earth_club}</p>
                <ul className='background__container-features'>
                  <li>{TEXT.bullet_points.sign_up_volunteer}</li>
                </ul>
            </div>
        </div>
        <div className='background__container-card'>
            <div className='background__container-cardInfo'>
                <h3>{HEADING.volunteer}</h3>
                <p>{TEXT.wtf_bazaar_1}
                    <br></br>
                    <a href={WEBLINK.bazaar}>{TEXT.wtf_bazaar_2}</a>
                </p>
                <ul className='background__container-features'>
                  <li>{TEXT.bullet_points.bazaar_1}</li>
                  <li>{TEXT.bullet_points.bazaar_2}</li>
                </ul>
                <p>{TEXT.library}</p>
                <ul className='background__container-features'>
                  <li>{TEXT.bullet_points.book_1}</li>
                </ul>
                </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default Background;

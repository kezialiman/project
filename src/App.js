import './App.css';
import Project from "./Project";
import Background from "./Background";
import logo from './logo/kezia_formal.jpg';
import { Button } from './Button';
import { ReactComponent as Email } from "./logo/gmail.svg";
import { ReactComponent as Github } from "./logo/github.svg";
import { ReactComponent as LinkedIn } from "./logo/linked_in.svg";
import { ReactComponent as Postgresql } from "./logo/postgresql.svg";
import { ReactComponent as Python } from "./logo/python.svg";
import { ReactComponent as Java } from "./logo/java.svg";
import { HEADING, TEXT, WEBLINK } from "./Constants";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <img className='home_profile' src={logo} alt="Logo" />
      <div className="menu">
          <a className="sub-menu">{HEADING.home}</a>
          <a> | </a>
          <a className="sub-menu" href="#about-me">{HEADING.aboutMe}</a>
          <a> | </a>
          <a className="sub-menu" href="#project">{HEADING.highlights}</a>
          <a> | </a>
          <a className="sub-menu" href="#connect">{HEADING.connect}</a>
      </div>
      <div>
        <h1>{TEXT.introduction}</h1>
        <p className="opening">{TEXT.opening}</p>
        <div>
          <a id="about-me">
          <h5>{HEADING.aboutMe}:</h5>
          <h6>{TEXT.about_me_part_1a}<a href={WEBLINK.berkeley}>UC Berkeley</a>{TEXT.about_me_part_1b}
            <br></br><br></br>
            {TEXT.about_me_part_2a}<a href={WEBLINK.oy}>fintech company </a>{TEXT.about_me_part_2b}
            <br></br><br></br>
            {TEXT.about_me_part_3} 
            <br></br>
            <Link to='/AboutMe'>{TEXT.see_more}</Link>
          </h6>
          </a>
        </div>
        <div>
          <Background />
        </div>
        <a id="project">
        <Project />
        </a>
        <Button onClick={WEBLINK.github} buttonSize='btn--wide' buttonColor='blue'>
            {TEXT.more_projects}
        </Button>
      </div>
      <div className="connect">
        <h5>{HEADING.connect}:</h5>
        <h6>{TEXT.connect}
          <br></br>
          {TEXT.direct}
        </h6>
        <a id="connect">
        <a href={WEBLINK.email}>
          <Email />
        </a>
        <a href={WEBLINK.linkedIN}>
          <LinkedIn />
        </a>
        <a href={WEBLINK.github}>
          <Github />
        </a>
        </a>
      </div>
      <div className='svg-icon'>
        <h7>{HEADING.language}:
        Java<Java />
        | Python<Python />
        | PostgreSQL<Postgresql />
        </h7>
      </div>
      <div className="row_full"></div>
    </div>
  );
}

export default App;

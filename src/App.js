import logo from './kezia_profile_art.jpg';
import { Button } from './Button';
import './App.css';
import { ReactComponent as Email } from "./logo/gmail.svg";
import { ReactComponent as Github } from "./logo/github.svg";
import { ReactComponent as LinkedIn } from "./logo/linked_in.svg";
import { ReactComponent as Postgresql } from "./logo/postgresql.svg";
import { ReactComponent as Python } from "./logo/python.svg";
import { ReactComponent as Java } from "./logo/java.svg";
import Project from "./Project";

function App() {
  return (
    <div className="App">
      <img className='home_profile' src={logo} alt="Logo" />
      <div className="menu">
          <a className="sub-menu" herf="#about-me">About Me</a>
          <a> | </a>
          <a className="sub-menu" href="#project">Projects</a>
          <a> | </a>
          <a className="sub-menu" href="#connect">Connect</a>
      </div>
      <div>
        <h1>Hi, I'm Kezia Liman</h1>
        <p className="opening">Fresh grad software engineer based in Berkeley, CA</p>
        <div>
          <a id="about-me">
          <h5>About Me:</h5>
          <h6>The rapid rise of online applications has opened my eyes to the power of 
          technology in elevating today's business. With my growing passion and eagerness to know
          more about this industry, I am taking Electrical Engineering and Computer Science as my
          major in <a href="https://eecs.berkeley.edu">UC Berkeley</a>. Outside of taking technical courses, I also took business and linear
          programming courses. I had 4 months internship experience for a <a href="https://oyindonesia.com">fintech company </a>
          in Indonesia as a product engineer in the payment acceptance team.
          <br></br>
          <br></br>
          I am currently looking for a full-time or internship as opportunities to hone my skills
          in software engineering or product engineering. 
          </h6>
          </a>
        </div>
        <a id="project">
        <h5>Projects:</h5>
        <Project />
        </a>
        <Button onClick='https://github.com/kezialiman/project.git' buttonSize='btn--wide' buttonColor='blue'>
            Explore More Projects
        </Button>
      </div>
      <div className="connect">
        <h5>Connect:</h5>
        <h6>Feel free to connect and reach out to me for any inquiries.
          <br></br>
          Email: kezialiman@gmail.com  |  LinkedIn: Kezia Liman
        </h6>
        <a id="connect">
        <a href="mailto:kezialiman@gmail.com">
          <Email />
        </a>
        <a href="https://www.linkedin.com/in/kezialiman">
          <LinkedIn />
        </a>
        <a href="https://github.com/kezialiman/project.git">
          <Github />
        </a>
        </a>
      </div>
      <div className='svg-icon'>
        <h7>Language:
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

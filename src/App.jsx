import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {faCircleRight}  from '@fortawesome/free-solid-svg-icons';
import {faCircleLeft}  from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';


function App(names,opin) {
  names = ["omar benlama","mohammed bouldjadj","ali rabeh"];
  opin = ["Lorem ipsum dolor sit amet.","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error expedita, veritatis facilis id saepe dolorem.","Lorem ipsum dolor sit, amet consectetur adipisicing."];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? names.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === names.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="navbar">
          <details>
            <summary><FontAwesomeIcon icon={faBars} /></summary>
            <div>
              <a href="#header">about</a>
              <a href="#team">team</a>
              <a href="#services">services</a>
              <a href="#contact">contact</a>
            </div>
          </details>
        </div>
      </nav>
      <header id='header'>
        <p>Lorem ipsum dolor sit amet, consectetur adi <br/>piscing elit. Sed do eiusmod </p>
        <div className="rb">
          <p>Lorem ipsum dolor sit amet, adi <br/> piscing elit. Sed do eiusmod.</p>
          <button>Let's Talk</button>
        </div>
      </header>
      <div id="bar"></div>
      <div id="team">
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.adipiscing elit.Sed do eiusmod tempor incididunt ut labore.
        </p>
        <br />
        <hr />
        <div className="mem">
          <p>racha labidi</p>
          <span>ui ux designer</span>
          <hr />
        </div>
        <div className="mem">
          <p>racha labidi</p>
          <span>ui ux designer</span>
          <hr />
        </div>
        <div className="mem">
          <p>racha labidi</p>
          <span>ui ux designer</span>
          <hr />
        </div>
        <div className="mem">
          <p>racha labidi</p>
          <span>ui ux designer</span>
          <hr />
        </div>
      </div>
      <div id="services">
        <h2>whate we offer</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adi   Lorem ipsum dolor sit amet, consectetur adi  piscing . Sed do eiusmod </p>
        <div id="listoff">
          <div className="offer">
            <img src="/images/off1.jpg" alt="" />
            <p>web developement</p>
          </div>
          <div className="offer">
            <img src="/images/off1.jpg" alt="" />
            <p>web developement</p>
          </div>
          <div className="offer">
            <img src="/images/off1.jpg" alt="" />
            <p>web developement</p>
          </div>
          <div className="offer">
            <img src="/images/off1.jpg" alt="" />
            <p>web developement</p>
          </div>
          <div className="offer">
            <img src="/images/off1.jpg" alt="" />
            <p>web developement</p>
          </div>
          <div className="offer">
            <img src="/images/off1.jpg" alt="" />
            <p>web developement</p>
          </div>
        </div>
      </div>
      <div id="why">
        <h2>Why Clients Choose Us</h2>
        <div id="list">
          <div className="card">
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>why</p>
            <span>Lorem ipsum dolor sit amet, consectetur adi   Lorem ipsum dolor sit amet, consectetur</span>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>why</p>
            <span>Lorem ipsum dolor sit amet, consectetur adi   Lorem ipsum dolor sit amet, consectetur</span>
          </div>
          <div className="card">
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>why</p>
            <span>Lorem ipsum dolor sit amet, consectetur adi   Lorem ipsum dolor sit amet, consectetur</span>
          </div>
        </div>
      </div>
      <div id="contact">
        <h2>Have a project in mind?</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adi   Lorem ipsum dolor sit amet, consectetur adi  piscing . Sed do eiusmod</p>
        <button>Let's Talk</button>
      </div>
      <div id="feedback">
        <span>Spoiler: They love it!</span>
        <h2>Here’s what peoplesay about our work.</h2>
        <div className="feedback">
          <img src="/images/feedback.png" alt="" />
          <div className="feed">
            <h4>{names[currentIndex]}</h4>
            <p>{opin[currentIndex]}</p>
            <FontAwesomeIcon icon={ faCircleLeft } onClick={handlePrev} />
            <FontAwesomeIcon icon={ faCircleRight} onClick={handleNext} />
          </div>
        </div>
      </div>
      <footer>
        <img src="/images/footer.png" alt="" />
        <div id="foot">
          <div className="left">
            <p>© 2025 Built by Advence . All rights reserved.</p>
            <a href="">Privacy</a>
            <a href="">Policy</a>
            <a href="">Terms</a>
            <a href="">Accessability</a>
            <a href="">FAQ's</a>
          </div>
          <div className="right">
            <a href=""><FontAwesomeIcon icon={faTiktok} /></a>
            <a href=""><FontAwesomeIcon icon={faInstagram} /></a>
            <a href=""><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import profileIcon from "../src/assets/images/painted-icon-trans.png";
import projectIcon from "../src/assets/images/web_dev_icon.png";
import contactIcon from "../src/assets/images/contact-icon.png";
import profileImage from "../src/assets/LayneColor.jpg";
import "./Home.css";
// import workDeskImage from "../src/assets/workDeskImage5.jpg";

function Home() {
  return (
    <Container>
      <br />
      <Row>
        <Col md={1}></Col>
        <Col md={6}>
          <div>
            <span id="name-is-span">Hi, my name is . . .</span>
          </div>
          <div>
            <span id="name-span">Layne Hansen</span>
          </div>
          {/* </Col> */}
          <Row>
            {/* <Col md={1}></Col> */}
            <Col md={12}>
              <br />
              <span className="tagline-span" id="designer-span">
                Designer
              </span>
              <span className="tagline-span" id="developer-span">
                Developer
              </span>
              <span className="tagline-span" id="dad-span">
                Dad
              </span>
              <span className="tagline-span" id="dude-span">
                Dude
              </span>
              <br />
              <p id="homepage-text">
                I am a full-stack web developer. I code because I love it. I
                teach coding because I want others to reach their goals the way
                I was able. I work on my own projects. I help others. I am
                looking to become a full-time developer.
              </p>
            </Col>
            {/* <Col md={5}></Col> */}
          </Row>
          <Row>
            {/* <Col md={1}></Col> */}
            <Col md={4}>
              <div classname="profile-link">
                <Link to="/Profile">
                  <img
                    src={profileIcon}
                    alt=""
                    width="150px"
                    id="profile-icon"
                  />
                </Link>
                <h4 id="profile-header">About Me</h4>
              </div>
            </Col>
            <Col md={4}>
              <div classname="projects-link">
                <Link to="/Projects">
                  <img
                    src={projectIcon}
                    alt=""
                    width="140px"
                    id="projects-icon"
                  />
                </Link>
                <h4 id="projects-header">Projects</h4>
              </div>
            </Col>
            <Col md={4}>
              <div classname="contact-link">
                <Link to="/Contact">
                  <img
                    src={contactIcon}
                    alt=""
                    width="130px"
                    id="contact-icon"
                  />
                </Link>
                <h4 id="contact-header">Contact Me</h4>
              </div>
            </Col>
            {/* <Col md={5}></Col> */}
          </Row>
          </Col>
          <Col md={5}>
            <img src={profileImage} alt="" width="360" id="profile-img-home"/>
          </Col>
      </Row>
    </Container>
  );
}

export default Home;

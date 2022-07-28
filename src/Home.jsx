import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import profileIcon from "../src/assets/images/painted-icon-trans.png";
import projectIcon from "../src/assets/images/web_dev_icon.png";
import contactIcon from "../src/assets/images/contact-icon.png";
// import workDeskImage from "../src/assets/workDeskImage5.jpg";

function Home() {
  return (
    <Container>
      <br />
      <Row>
        <Col md={2}></Col>
        <Col md={2}>
          <div classname="profile-link">
            <a href="/Profile">
            <img src={profileIcon} alt="" width="300px"/>
            </a>
            <h4>About Me</h4>
          </div>
        </Col>
        <Col md={1}></Col>
        <Col md={2}>
          <img src={projectIcon} alt="" width="250px"/>
          <h4>Projects</h4>
        </Col>
        <Col md={1}></Col>
        <Col md={2}>
        <img src={contactIcon} alt="" width="240px"/>
          <h4>Contact Me</h4>
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

export default Home;

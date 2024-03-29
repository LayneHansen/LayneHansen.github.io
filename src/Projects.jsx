import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import "./Projects.css";
import sureVoteLogo from "../src/assets/SureVoteLogo 2.png";
import rememberThemImage from "../src/assets/RememberThemBanner.png";
import streaminGuideImage from "../src/assets/StreamGuideLogo.png";
import passwordGeneratorImage from "../src/assets/PasswordGenerator.png";
import githubFinderLogo from '../src/assets/Github_Finder_logo_2.png';

function Projects() {
  return (
    <div className="App">
      
      <h1 id="projects-title">Projects</h1>

      <Row>
        {/* <Col md={2}></Col> */}

        <Col md={3}>
          <Card style={{ width: "18rem" }} id="sure-vote-card">
            <a
              href="https://young-journey-30565.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img variant="top" src={sureVoteLogo} />
            </a>
            <Card.Body>
              <Card.Title id="sure-vote-title">Sure Vote</Card.Title>
              <Card.Text>
                Sure Vote is a responsive full-stack application that utilizes
                facial recognition technology for secure voting. Sure Vote was
                built using the MERN (Mongo, Express, React, Node) paradigm.
              </Card.Text>
              <Card.Text>
                My Role: This was my initial concept, worked with a partner on 
                the front end design, created the secure ballot and dummy data,
                and created user and ballot database models.
              </Card.Text>

              <Button
                id="website-button"
                variant="secondary"
                href="https://young-journey-30565.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Website
              </Button>
              <Button
                id="github-button"
                variant="secondary"
                href="https://github.com/LayneHansen/newSure-vote"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repo
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ width: "18rem" }} id="remember-them-card">
            <a
              href="https://protected-forest-25007.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img variant="top" src={rememberThemImage} />
            </a>
            <Card.Body>
              <Card.Title id="remember-them-title">Remember Them</Card.Title>
              <Card.Text>
                Remember Them allows users to research and pay tribute to fallen
                US servicemembers. Users can add their own military story,
                fallen hero, find military-related movies and books, or
                participate in a forum.
              </Card.Text>
              <Card.Text>
                My Role: This was my initial concept; assisted with all aspects 
                of project, but main task was front end design and development.
                Created additional pages and assisted with connecting to APIs.
              </Card.Text>

              <Button
                id="website-button"
                variant="secondary"
                href="https://protected-forest-25007.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Website
              </Button>
              <Button 
              id="github-button" 
              variant="secondary"
              href="https://github.com/LayneHansen/remember-them"
              target="_blank"
              rel="noopener noreferrer">
                Github Repo
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ width: "18rem" }} id="streaming-guide-card">
            <a
              href="https://imbingz.github.io/Ultimate-Streaming-Guide/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img variant="top" src={streaminGuideImage} />
            </a>
            <Card.Body>
              <Card.Title id="streaming-guide-title">
                Streaming Guide
              </Card.Title>
              <Card.Text>
                Streaming Guide is a web-based, mobile-friendly application that
                allows users to search movies and TV shows currently streaming
                on dozens of services. It was built with HTML, CSS, and
                Javascript.
              </Card.Text>
              <Card.Text>
                My Role: This was my initial concept, worked on initial design 
                and partnered on front end development; created modal that displays
                movie titles; created commercial to market the site.
              </Card.Text>

              <Button 
              id="website-button" 
              variant="secondary"
              href="https://imbingz.github.io/Ultimate-Streaming-Guide/"
              target="_blank"
              rel="noopener noreferrer">
                Live Website
              </Button>
              <Button 
              id="github-button" 
              variant="secondary"
              href="https://github.com/LayneHansen/Ultimate-Streaming-Guide"
              target="_blank"
              rel="noopener noreferrer">
                Github Repo
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={githubFinderLogo} />
            <Card.Body>
              <Card.Title id='github-finder-title'>Github Finder</Card.Title>
              <Card.Text>
                This app allows users to search for web developers 
                on Github. Once they find the developer, they link 
                to a personal page and can link to their individual Github
                repos.
              </Card.Text>
              <Card.Text>
                This application was originally designed by Brad Traversy.
                I created this following his course and made some modifications,
                mostly in the front end design. I
                am adding ability to search for repos by keyword.
              </Card.Text>
              <Button
                class="btn btn-md btn-block"
                id="website-button"
                variant="secondary"
                href="https://github-finder-7354.vercel.app/"
                target="_blank"
                rel="noopener noreferrer">
                Live Website
              </Button>
              <Button
                class="btn btn-md btn-block"
                id="github-button"
                variant="secondary"
                href="https://github.com/LayneHansen/github-finder"
                target="_blank"
                rel="noopener noreferrer">
                Github Repo
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* <Col md={2}></Col> */}
      </Row>

      <br />

      <Row>
        <Col md={3}>
        <Card style={{ width: "18rem" }} id="password-generator-card">
            <a
              href="https://laynehansen.github.io/password_generator/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card.Img variant="top" src={passwordGeneratorImage} />
            </a>
            <Card.Body>
              <Card.Title id="password-generator-title">
                Password Generator
              </Card.Title>
              <Card.Text>
                Password Generator is a lightweight, web-based application that
                allows users to generate a unique password to their specs, i.e.,
                upper and lower case letters, special symbols, numbers.
              </Card.Text>
              <Card.Text>
                My Role: This was initially a homework assignment for my web 
                development bootcamp. The assignment was to generate the random 
                password but I took the design to a higher level.
              </Card.Text>

              <Button
                class="btn btn-md btn-block"
                id="website-button"
                variant="secondary"
                href="https://laynehansen.github.io/password_generator/"
                target="_blank"
                rel="noopener noreferrer">
                Live Website
              </Button>
              <Button
                class="btn btn-md btn-block"
                id="github-button"
                variant="secondary"
                href="https://github.com/LayneHansen/password_generator"
                target="_blank"
                rel="noopener noreferrer">
                Github Repo
              </Button>
            </Card.Body>
          </Card>
        </Col>


        <Col md={3}>
          {/* <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card> */}
        </Col>

        <Col md={3}>
        </Col>
        
        <Col md={3}>
        </Col>




      </Row>
    </div>
  );
}

export default Projects;

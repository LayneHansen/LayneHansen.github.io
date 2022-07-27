import React from "react";
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import workDeskImage from "../src/assets/workDeskImage5.jpg";

function Home() {
  return (
    <Container>
      <div className="background-image">
        <img
          src={workDeskImage}
          width="1730"
          useMap="#deskmap"
          alt="Work desk with laptop, phone, and glasses."
        />
      </div>
      <map name="deskmap">
        <div id="computer-area">
          <area
            id="computer-image"
            shape="poly"
            coords="0,0,315,0,685,725,685,755,680,770,670,780,0,1120"
            as={Link} to={"/Projects"}
            //href="/projects"
            alt="computer"
            data-hover="projects"
          />
        </div>
        <div id="phone-area">
          <area
            id="phone-image"
            shape="poly"
            coords="620,210,850,155,870,160,890,180,1030,715,1013,743,990,770,770,805,760,810,730,775,605,270,615,215"
            as={Link} to={"/Contact"}
            // href="/contact"
            alt="phone"
          />
        </div>
        <div id="glasses-area">
          <area
            id="glasses-image"
            shape="poly"
            coords="1055,305,1235,270,1275,865,1100,850"
            as={Link} to={"/Profile"}
            // href="/profile"
            alt="glasses"
          />
        </div>
      </map>
    </Container>
  );
}

export default Home;

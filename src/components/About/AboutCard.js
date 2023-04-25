import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aravind M </span>
            from <span className="purple"> Nagapattinam, Tamil Nadu.</span>
            <br />
            <br></br> I'm Aravind hard-working engineering graduate specializing
            in Biomedical Engineering. I'm a Fresher and I have 6 months of
            experience in Guvi Institution as a MERN stack Learner.
            <br />
            I mainly work with the MERN stack but I have a profound knowledge of
            HTML & CSS, Javascript.
            <br />
            <br></br>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places and people
            </li>
            <li className="about-activity">
              <ImPointRight /> Fitness related activities
            </li>
          </ul>

          <p style={{ color: "rgb(255, 240, 0)" }}>
            "You are only Confined by the Walls you build Yourself "{" "}
          </p>
          <footer className="blockquote-footer">Andrew Murphy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

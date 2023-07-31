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
            <br></br> I seek to work in a competitive field and ready to accept
            the challenges, utilizing my skills, would like to work with a
            highly esteemed company which gives me a platform to use my
            expertise and skills for mutual growth and benefit of company and
            myself.
            <br />
            I Started off my self-learning journey with online tutorials like
            Google and Youtube. Then I took a step further and Enrolled in the
            GUVI IIT MADRAS as Fullstack developer Nanodegree Program which
            involved extensive programming and real world projects. Later, I
            learned MERN Stack From Guvi and built an Website using React JS,
            Node, Express Js, MongoDB.
            <br />
            <br></br>
            Apart from technical skills I do possess some hobbies that I love to
            do
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places and people
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

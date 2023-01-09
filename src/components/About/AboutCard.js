import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Christopher Celaya </span>
            from <span className="purple"> El Paso, Texas.</span>
            <br />
            <br />I am a junior pursuing Computer Science at the University of Texas at El Paso.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Tinkering with artificial intelligence
            </li>
            <li className="about-activity">
              <ImPointRight /> Video game development
            </li>
            <li className="about-activity">
              <ImPointRight /> Working on startups
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            <br />
            "Earn with your mind 🧠
            <br /> not your time. ⏰"{" "}
          </p>
          <footer className="blockquote-footer">chriscelaya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

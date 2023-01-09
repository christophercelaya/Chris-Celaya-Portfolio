import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
            Here are a few things I've been working on lately.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AI Song Writer"
              description="Chatbot using ChatGPT to generate songs in the style of famous rapper, Eminem."
              ghLink="https://github.com/christophercelaya/ai-song-writer"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="AI Blog Writer"
              description="Write blog post like Paul Graham."
              ghLink="https://github.com/christophercelaya/GPT3-AI-Blog-Writer"
              demoLink="https://gpt-3-ai-blog-writer.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="English Translator and Improver"
              description="Replace simplified A0-level words and sentences with more beautiful and elegant, upper level English words and sentences."
              ghLink="https://github.com/christophercelaya/GPT3-Tester/tree/main"
              demoLink="https://gpt-3-ai-english-translator-and-improver.vercel.app/"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""/>
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""/>
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              demoLink=""/>
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

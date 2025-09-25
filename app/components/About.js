"use client";

import { Container, Row, Col, Button } from "react-bootstrap";

export default function About() {
  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center gy-4">
          {/* Left Column: Image */}
          <Col lg={5} className="text-center">
            <div className="about-image">
              <img
                src="/code.jpg" // 👉 place your image in /public/about-me.png
                alt="Frank Mikel"
                className="img-fluid rounded-circle shadow"
              />
            </div>
          </Col>

          {/* Right Column: Text */}
          <Col lg={7}>
            <div className="about-content">
              <h2>About Me</h2>
              <p>
                I’m <span className="highlight">Frank Mikel</span>, a passionate{" "}
                <strong>Frontend Developer</strong> who loves building elegant,
                user-friendly, and modern web applications. With a strong focus
                on responsive design and clean code, I enjoy transforming ideas
                into digital experiences that make an impact.
              </p>
              <p>
                Skilled in <strong>JavaScript</strong>, <strong>React</strong>,
                <strong>Bootstrap</strong>, <strong>Html</strong>, <strong>Css</strong> ,<strong>Next.js</strong> , I continuously explore new tools
                and frameworks to improve my workflow and create innovative
                solutions.
              </p>
              <div className="about-actions mt-3">
                <Button variant="primary" href="#skills" className="me-2">
                  My Skills
                </Button>
                <Button variant="outline-light" href="/cv.pdf" download>
                  Download CV
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

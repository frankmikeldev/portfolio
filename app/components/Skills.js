"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="section-title text-center mb-5">My Skills</h2>
        <Row className="gy-4">
          {/* HTML & CSS */}
          <Col md={4}>
            <Card className="skill-card text-center">
              <Card.Body>
                <FaHtml5 size={50} className="mb-3 text-accent" />
                <FaCss3Alt size={50} className="mb-3 ms-3 text-accent" />
                <Card.Title>HTML & CSS</Card.Title>
                <Card.Text>
                  Strong foundation in building responsive layouts and styling
                  with <strong>Bootstrap</strong> and modern CSS techniques.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* JavaScript */}
          <Col md={4}>
            <Card className="skill-card text-center">
              <Card.Body>
                <FaJsSquare size={50} className="mb-3 text-accent" />
                <Card.Title>JavaScript</Card.Title>
                <Card.Text>
                  Skilled in modern JavaScript (ES6+) with hands-on experience
                  in creating interactive and dynamic web applications.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* React & Next.js */}
          <Col md={4}>
            <Card className="skill-card text-center">
              <Card.Body>
                <FaReact size={50} className="mb-3 text-accent" />
                <Card.Title>React & Next.js</Card.Title>
                <Card.Text>
                  Experienced in building scalable SPAs with <strong>React</strong> 
                  and delivering high-performance, SEO-friendly apps using <strong>Next.js</strong>.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

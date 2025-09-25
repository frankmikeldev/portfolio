"use client";

import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function Projects() {
  const projects = [
    { title: "Portfolio Website", img: "/project1.png", link: "https://your-link.com" },
    { title: "Educational Website", img: "/school.png", link: "https://frankmikeldev.github.io/Naija-School-Help-/" },
    { title: "Blog Platform", img: "/project3.png", link: "https://your-link.com" },
    { title: "Dashboard App", img: "/project4.png", link: "https://your-link.com" },
    { title: "Landing Page", img: "/project5.png", link: "https://your-link.com" },
    { title: "Mobile App UI", img: "/project6.png", link: "https://your-link.com" },
  ];

  return (
    <section id="projects" className="projects-section">
      <Container>
        <h2 className="section-title text-center mb-5">My Projects</h2>
        <Row className="gy-4">
          {projects.map((project, idx) => (
            <Col md={4} sm={6} xs={12} key={idx}>
              <Card className="project-card text-center">
                {/* Title first */}
                <Card.Header className="project-title">
                  {project.title}
                </Card.Header>

                {/* Image in the middle */}
                <Card.Img
                  variant="top"
                  src={project.img}
                  alt={project.title}
                  className="project-img"
                />

                {/* Button last */}
                <Card.Body>
                  <Button
                    variant="primary"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

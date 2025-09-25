"use client";

import { useEffect, useRef } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Typed from "typed.js";

export default function Hero() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Web Developer", "Frontend Developer", "Creative Thinker"],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="hero-section text-center text-lg-start">
      <Container>
        <Row className="gy-4 justify-content-center align-items-center">
          <Col lg={8}>
            <div className="hero-content">
              <h1>
                Hello, I'm <span className="highlight">Frank Mikel</span>
              </h1>
              <h2>
                I’m a <span ref={typedRef} className="typed"></span>
              </h2>
              <p>
                Passionate about building modern, responsive, and user-friendly
                web applications. I love transforming ideas into elegant digital
                solutions with clean code and creative design.
              </p>
              <div className="hero-actions mt-4">
                <Button variant="primary" href="#projects" className="me-2">
                  View My Work
                </Button>
                <Button variant="outline-light" href="#contact">
                  Get In Touch
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

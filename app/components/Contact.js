"use client";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { EnvelopeFill, TelephoneFill, Linkedin, Github } from "react-bootstrap-icons";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title text-center mb-4">Get In Touch</h2>
        <p className="section-subtitle text-center mb-5">
          Have a question, a project idea, or just want to say hello?  
          Feel free to reach out — I’d love to hear from you!
        </p>
        <Row className="gy-5">
          {/* Contact Info */}
          <Col md={5}>
            <div className="contact-info">
              <p><EnvelopeFill className="me-2 text-accent" /> frankmikel84@gmail.com</p>
              <p><TelephoneFill className="me-2 text-accent" /> +123 456 7890</p>
              <div className="social-links mt-4">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <Linkedin size={28} className="me-3 text-accent" />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  <Github size={28} className="text-accent" />
                </a>
              </div>
            </div>
          </Col>

          {/* Contact Form */}
          <Col md={7}>
            <Form className="contact-form">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control as="textarea" rows={5} placeholder="Your Message" />
              </Form.Group>
              <Button type="submit" variant="primary" className="w-100">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

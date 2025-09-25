"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaTwitter, FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row className="align-items-center text-center">
          {/* Left Side */}
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0">
              © {new Date().getFullYear()} <span className="highlight">Frank Mikel</span>. All Rights Reserved.
            </p>
          </Col>

          {/* Right Side: Social Icons */}
          <Col md={6}>
            <div className="footer-socials">
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithub size={20} />
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noreferrer">
                <FaDribbble size={20} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

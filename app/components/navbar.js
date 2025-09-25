"use client";

import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function PortfolioNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      style={{ backgroundColor: "var(--background-color)" }}
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand href="#home" style={{ color: "#fff" }}>
          MyPortfolio
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left: main nav links */}
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => setExpanded(false)}>HOME</Nav.Link>
            <Nav.Link href="#about" onClick={() => setExpanded(false)}>ABOUT</Nav.Link>
            <Nav.Link href="#projects" onClick={() => setExpanded(false)}>PROJECTS</Nav.Link>
            <Nav.Link href="#skills" onClick={() => setExpanded(false)}>SKILLS</Nav.Link>
            <Nav.Link href="#contact" onClick={() => setExpanded(false)}>CONTACT</Nav.Link>
          </Nav>

          {/* Right: social icons (desktop only) */}
          <Nav className="d-none d-lg-flex">
            <Nav.Link href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub size={20} />
            </Nav.Link>
            <Nav.Link href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin size={20} />
            </Nav.Link>
            <Nav.Link href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter size={20} />
            </Nav.Link>
          </Nav>

          {/* Mobile: social icons shown inside the collapsed menu, aligned left */}
          <Nav className="d-lg-none mt-3 mobile-social">
            <Nav.Link href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub size={20} />
            </Nav.Link>
            <Nav.Link href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin size={20} />
            </Nav.Link>
            <Nav.Link href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

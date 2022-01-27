import Image from "next/image";
import { useState } from "react";
import { Navbar, Nav, Row, Container } from "react-bootstrap";
import styles from "./Navbar.module.css";

export default function MainNavbar() {
  const NavItems = [
    { link: "/#about", name: "About Me" },
    { link: "/#skills", name: "Skills" },
    { link: "/#projects", name: "Projects" },
    { link: "/#blog", name: "Blogs" },
    { link: "/#contact", name: "Contact" },
  ];

  return (
    <>
      <Row className={"justify-content-center"}>
        <Navbar expand="sm" className={styles.navbar} bg="dark" variant="light">
          <Container>
            <Navbar.Brand className={styles.navbrand} href="#home">
              <Image
                src="/static/favicon.ico"
                alt="Logo"
                height="30"
                width="30"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {NavItems.map((item, index) => (
                  <Nav.Link
                    key={index}
                    href={item.link}
                    className={styles.navLink}
                  >
                    {item.name}
                  </Nav.Link>
                ))}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Row>
    </>
  );
}

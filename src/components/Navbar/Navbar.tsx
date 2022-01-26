import Image from "next/image";
import { useState } from "react";
import { Navbar, Nav, Row, Container } from "react-bootstrap";
import styles from "./Navbar.module.css";

export default function MainNavbar() {
  const NavItems = [
    { link: "#about", name: "About Me" },
    { link: "#skills", name: "Skills" },
    { link: "#projects", name: "Projects" },
    { link: "#blogs", name: "Blogs" },
    { link: "#contact", name: "Contact" },
  ];

  return (
    <>
      <Row className={"justify-content-center"}>
        <Navbar className={styles.navbar} bg="dark" variant="light">
          <Container>
            <Navbar.Brand className={styles.navbrand} href="#home">
              <Image
                src="/static/favicon.ico"
                alt="Logo"
                height="30"
                width="30"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              {NavItems.map((item) => (
                <Nav.Link href={item.link} className={styles.navLink}>
                  {item.name}
                </Nav.Link>
              ))}
            </Nav>
          </Container>
        </Navbar>
      </Row>
    </>
  );
}

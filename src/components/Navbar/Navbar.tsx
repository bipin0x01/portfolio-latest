import Image from "next/image";
import { useState } from "react";
import { Navbar, Nav, Row, Container } from "react-bootstrap";
import styles from './Navbar.module.css'

export default function MainNavbar() {
    return (
        <> 
           <Row className={'justify-content-center'}>
           <Navbar className={styles.navbar} bg="dark" variant="light">
                    <Container>
                    <Navbar.Brand className={styles.navbrand} href="#home">
                        <Image src="/static/favicon.ico" alt="Logo" height="40" width="40"/>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={styles.navLink}>Home</Nav.Link>
                        <Nav.Link href="#about" className={styles.navLink}>About Me</Nav.Link>
                        <Nav.Link href="#skills"  className={styles.navLink}>Skills</Nav.Link>
                        <Nav.Link href="#projects"  className={styles.navLink}>Projects</Nav.Link>
                        <Nav.Link href="#blog" className={styles.navLink}>Blogs</Nav.Link>
                        <Nav.Link href="#contact"  className={styles.navLink}>Contact</Nav.Link>
                    </Nav>
                    </Container>
            </Navbar>
           </Row>
        </>
    );
}

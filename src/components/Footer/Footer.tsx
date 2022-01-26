import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      link: "https://github.com/bipin0x01",
      name: "Github",
      icon: "fab fa-github",
      color: "color: rgb(108, 117, 125);",
      hovercolor: "#db4437",
    },
  ];
  return (
    <>
      <section id="footer">
        <footer className="mt-auto py-3 text-center">
          <small className="mb-2">
            <i className="fas fa-code"></i> with{" "}
            <i className="fas fa-heart"></i>
            by <strong>Bipin Thapa</strong>
          </small>
          <div className="container-fluid justify-content-center">
            {/* <a
              className="social mx-1"
              href="https://facebook.com/bt.kaji"
              style="color: rgb(108, 117, 125);"
              onmouseover="this.style.color='#db4437'"
              onmouseout="this.style.color='#6c757d'"
            >
              <i className="fas fa-envelope fa-1x"></i>
            </a> */}
            {socialLinks.map((item, index) => (
              <Link key={index} passHref href={item.link}>
                <a
                  className="social mx-1"
                  style={{ color: "rgb(108, 117, 125)" }}
                >
                  <FaGithub />
                </a>
              </Link>
            ))}
          </div>
        </footer>
      </section>
    </>
  );
}

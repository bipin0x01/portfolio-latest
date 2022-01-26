import Link from "next/link";
import {
  FaCode,
  FaFacebook,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      name: "Github",
      link: "https://github.com/bipin0x01",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/bipin-thapa-b9a8a11a4/",
    },
    {
      name: "Twitter",
      link: "https://twitter.com/bipin0x01",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/bipin0x01/",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/bt.kaji",
    },
  ];

  function socialicons(name) {
    switch (name.toLowerCase()) {
      case "github":
        return <FaGithub />;
      case "linkedin":
        return <FaLinkedin />;
      case "twitter":
        return <FaTwitter />;
      case "instagram":
        return <FaInstagram />;
      case "facebook":
        return <FaFacebook />;
      default:
        return null;
    }
  }

  return (
    <>
      <section id="footer">
        <footer className="mt-auto py-3 text-center">
          <small className="mb-2">
            <FaCode style={{ color: "green" }} /> with{" "}
            <FaHeart style={{ color: "red" }} /> by <strong>Bipin Thapa</strong>
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
              <Link key={index} href="/asas">
                <a
                  className="social mx-1"
                  style={{ color: "rgb(108, 117, 125)" }}
                >
                  {socialicons(item.name)}
                </a>
              </Link>
            ))}
          </div>
        </footer>
      </section>
    </>
  );
}

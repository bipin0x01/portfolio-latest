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
            {socialLinks.map((item, index) => (
              <a target="_blank" key={index} href={item.link}>
                <button className="btn btn-link social mx-1">
                  {socialicons(item.name)}
                </button>
              </a>
            ))}
          </div>
        </footer>
      </section>
    </>
  );
}

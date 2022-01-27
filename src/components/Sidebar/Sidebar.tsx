import Link from "next/link";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const sidebarLinks = {
  facebook: "https://www.facebook.com/bt.kaji",
  github: "https://github.com/bipin0x01",
  linkedin: "https://www.linkedin.com/in/bipin-thapa-73bb09203/",
  resume: "https://resume.io/r/LNfoPCIaz",
};

export default function Sidebar() {
  return (
    <>
      <section id="sidebar">
        <div className="sidebar-container">
          <div className="sidebar-buttons">
            <div className="sidebar-button">
              <Link href={sidebarLinks.facebook} passHref>
                <button type="button" className="btn btn-primary">
                  <h2>
                    <FaFacebook />
                  </h2>
                </button>
              </Link>
            </div>
            <div className="sidebar-button">
              <Link href={sidebarLinks.linkedin} passHref>
                <button type="button" className="btn btn-primary">
                  <h2>
                    <FaLinkedin />
                  </h2>
                </button>
              </Link>
            </div>
            <div className="sidebar-button">
              <Link href={sidebarLinks.github} passHref>
                <button type="button" className="btn btn-primary">
                  <h2>
                    <FaGithub />
                  </h2>
                </button>
              </Link>
            </div>
            <div className="sidebar-button-cv sidebar-button">
              <Link href={sidebarLinks.resume} passHref>
                <button type="button" className="btn btn-primary btn-lg">
                  <FaDownload />
                  <div className="download-cv">
                    Download
                    <br /> Resume
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

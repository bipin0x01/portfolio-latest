import Link from "next/link";
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const sidebarLinks = {
  facebook: "https://www.facebook.com/bt.kaji",
  github: "https://github.com/bipin0x01",
  linkedin: "https://www.linkedin.com/in/bipin0x01/",
  resume:
    "https://github.com/bipin0x01/bipin0x01/raw/main/BipinThapa_Resume.pdf",
};

export default function Sidebar() {
  return (
    <>
      <section id="sidebar">
        <div className="sidebar-container">
          <div className="sidebar-buttons">
            <div className="sidebar-button">
              <Link href={sidebarLinks.facebook} passHref>
                <a target="_blank">
                  <button type="button" className="btn btn-primary">
                    <h2>
                      <FaFacebook />
                    </h2>
                  </button>
                </a>
              </Link>
            </div>
            <div className="sidebar-button">
              <Link href={sidebarLinks.linkedin} passHref>
                <a target="_blank">
                  <button type="button" className="btn btn-primary">
                    <h2>
                      <FaLinkedin />
                    </h2>
                  </button>
                </a>
              </Link>
            </div>
            <div className="sidebar-button">
              <Link href={sidebarLinks.github} passHref>
                <a target="_blank">
                  <button type="button" className="btn btn-primary">
                    <h2>
                      <FaGithub />
                    </h2>
                  </button>
                </a>
              </Link>
            </div>
            <div className="sidebar-button-cv sidebar-button">
              <Link href={sidebarLinks.resume} passHref>
                <a target="_blank">
                  <button type="button" className="btn btn-primary btn-lg">
                    <FaDownload />
                    <div className="download-cv">
                      Download
                      <br /> Resume
                    </div>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

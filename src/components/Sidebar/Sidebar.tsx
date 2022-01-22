import Link from 'next/link';
import { FaDownload, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Sidebar() {

    return (
        <>
            <section id="sidebar">

                <div className="sidebar-container">
                    <div className="sidebar-buttons">
                        <div className="sidebar-button">
                            <button type="button" className="btn btn-primary">
                                <h2><FaFacebook /></h2>
                            </button>
                        </div>
                        <div className="sidebar-button">
                            <button type="button" className="btn btn-primary">
                                <h2><FaLinkedin /></h2>
                            </button>
                        </div>
                        <div className="sidebar-button">
                            <button type="button" className="btn btn-primary">
                                <h2><FaGithub /></h2>
                            </button>
                        </div>
                        <div className="sidebar-button-cv sidebar-button">
                            <Link href="/static/CV.pdf">
                                <button type="button" className="btn btn-primary btn-lg">
                                    <FaDownload />
                                    <div className="download-cv">
                                        Download<br /> Resume
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
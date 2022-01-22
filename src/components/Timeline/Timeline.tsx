import { Container } from "react-bootstrap";

export default function Timeline({ children }) {
    return (
        <>
            <Container className="p-4">
                <h2 className="mt-3 text-center"><strong>TIMELINE</strong></h2>
                <div className="row container">
                    <div className="col mt-4">
                        <div className="timeline-body bg-themed">
                            {children}
                            {/* <div className="timeline-item">
                            <div className="content">
                                <h2>Content Writer/SEO Analyst at passive financer.com</h2>
                                <h6 className="date">2017 — 2019</h6>
                                <p>Content Research, Blog Post Creation and On page and Off-Page as well as Technical SEO
                                    Optimization.</p>
                            </div>
                        </div> */}
                            {/* <div className="timeline-item">
                            <div className="content">
                                <h2>Freelance Web Developer</h2>
                                <h6 className="date">2018 — Present</h6>
                                <p>Worked on freelance web development projects like gamemandu, icartnepal, rural.ao,
                                    cashkar, etc. Some of which can be found in my portfolio.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="content">
                                <h2>Infosec Enthusiast and Independent Security Researcher</h2>
                                <h6 className="date">2018 — Present</h6>
                                <p>Started studying Cyber Security Concepts and doing Independent Research</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="content">
                                <h2>CTF Player</h2>
                                <h6 className="date">2019 — Present</h6>
                                <p>Started Participating in online Capture the Flag(CTF) Contests out of which most are Jeopardy-style.</p>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="content">
                                <h2>Chief Technology Officer(CTO) and Web Developer Lead at <a href="https://nestnepal.com">Nest Nepal</a></h2>
                                <h6 className="date">2020 — Present</h6>
                                <p>Manage and Lead the team of web developers.</p>
                            </div>

                        </div> */}
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
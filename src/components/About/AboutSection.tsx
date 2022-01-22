import Image from "next/image";

export default function AboutSection() {
    return (
        <section id="about">
            <div className="container col-lg-10 mx-auto mt-5 mb-5">
                <div className="mb-4 text-center"><h1 id="about-me"><strong>About me</strong></h1></div>

                <p>Hi I am <strong>Bipin Thapa</strong>,<br />
                    An infosec enthusiast, wannabe hacker and freelance web developer with content writing hobby. I love learning how
                    things
                    work. I shifted to breaking things after realizing that I was better at breaking than in creating, while working as a
                    web developer. LOL 😂
                    I spend most of my my time solving vulnerable labs, doing individual security researches and CTFs(more often).</p>
                <h2 className="mb-3 text-center" id="skillsets"><strong>Things I do</strong></h2>
                <div className="row">
                    <div className="col-lg">

                        <div className="row justify-content-between align-items-center">
                            <div className="col-10">
                                <p className="mb-1">HTML5/CSS3</p>
                            </div>
                            <div className="col-2 text-right">
                                <p className="mb-1 text-muted">90%</p>
                            </div>
                        </div>

                        <div className="progress mb-4 bg-themed" style={{ height: "8px" }}>
                            <div className="progress-bar bg-danger wow  slideInLeft animated" role="progressbar" style={{width: "90%", visibility: "visible", animation: "slideInLeft"}}>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg">

                        <div className="row justify-content-between align-items-center">
                            <div className="col-10">
                                <p className="mb-1">HTML5/CSS3</p>
                            </div>
                            <div className="col-2 text-right">
                                <p className="mb-1 text-muted">90%</p>
                            </div>
                        </div>

                        <div className="progress mb-4 bg-themed" style={{ height: "8px" }}>
                            <div className="progress-bar bg-danger wow  slideInLeft animated" role="progressbar" style={{width: "90%", visibility: "visible", animation: "slideInLeft"}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
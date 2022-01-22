import Image from "next/image";
import SkillLogo from "./SkillLogo";

export default function SkillsetsSection() {
    return (
        <>
            <section id="skills">
                <div className="container col-lg-10 mx-auto my-5">
                    <div className="py-2  text-center">
                        <h1><strong>Skills</strong></h1>
                    </div>
                    <div className="row container toolslogo">
                        <div className="col">
                            <SkillLogo
                                img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                                alt="Python" />
                        </div>
                        <div className="col">
                            <SkillLogo
                                img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                                alt="Python" />
                        </div>
                        <div className="col">
                            <SkillLogo
                                img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                                alt="Python" />
                        </div>
                        <div className="col">
                            <SkillLogo
                            img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
                            alt="Python" />
                        </div>
                    </div>
                </div>
                <div data-tilt className="toolslogo-bg">
                    <span>
                        <p>ReactJS</p>
                        {/* <p style="top: -12px;left: 190px;font-size: 12px;">ES6</p>
                        <p style="left: 342px;top: 190px;font-size: 19px;">Django</p>
                        <p style="top: 30px;right: 900px;font-size: 12px;">Redux</p>
                        <p style="top: 130px;right: 60px;font-size: 16px;">MongoDB</p>
                        <p style="top: 120px;left: 80px;font-size: 11px;">Figma</p>
                        <p style="top: 240px;right: 240px;font-size: 23px;">Docker</p>
                        <p style="top: 290px;left: 150px;font-size: 11px;">BurpSuite</p>
                        <p style="top: 300px;right: 555px;font-size: 16px;">Radare</p> */}
                        <p >Wordpress</p>
                        <p>AWS</p>
                    </span>
                </div>
            </section>
        </>
    );
}
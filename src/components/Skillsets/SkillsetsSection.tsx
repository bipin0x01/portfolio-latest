import { useEffect, useState } from "react";
import SkillLogo from "./SkillLogo";

export default function SkillsetsSection() {
  const [maxvalues, setmaxvalues] = useState(["0px", "0px"]);

  useEffect(() => {
    const skillsection = document.getElementById("skills");

    let maxlength = skillsection.offsetHeight;
    let maxwidth = skillsection.offsetWidth;

    setmaxvalues(["" + maxlength, "" + maxwidth]);
  }, []);

  function random(min, max) {
    const num = Math.random() * (max - min + 1) + min;
    return Math.floor(num);
  }

  const mainskills = [
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
      name: "Python",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png",
      name: "Javascript",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png",
      name: "TypeScript",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png",
      name: "MERN Stack",
      size: 4,
    },
  ];

  const otherskills = [
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "Express",
    "MongoDB",
    "Python",
    "Django",
    "SQL",
    "CSS",
  ];

  return (
    <>
      <section id="skills">
        <div className="container col-lg-10 mx-auto my-5">
          <div className="py-2  text-center">
            <h1>
              <strong>Skills</strong>
            </h1>
          </div>
          <div className="row container toolslogo text-center">
            {mainskills.map((skill, index) => (
              <div className="col">
                <SkillLogo
                  key={index}
                  img={skill.image}
                  alt={skill.name}
                  size={skill.size ? skill.size : 2}
                />
              </div>
            ))}
          </div>
        </div>
        <div data-tilt className="toolslogo-bg">
          <span>
            {otherskills.map((skill, index) => (
              <p
                key={index}
                style={{
                  top: random(0, maxvalues[0]),
                  right: random(0, maxvalues[1]),
                  fontSize: random(8, 25),
                }}
              >
                {skill}
              </p>
            ))}
          </span>
        </div>
      </section>
    </>
  );
}

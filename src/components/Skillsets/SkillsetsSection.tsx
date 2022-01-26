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
  ];

  const otherskills = [
    { name: "CSS" },
    { name: "JavaScript" },
    { name: "React" },
    { name: "Redux" },
    { name: "Node" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "Python" },
    { name: "Django" },
    { name: "SQL" },
    { name: "CSS" },
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
          <div className="row container toolslogo">
            <div className="col">
              {mainskills.map((skill) => (
                <SkillLogo img={skill.image} alt={skill.name} />
              ))}
            </div>
          </div>
        </div>
        <div data-tilt className="toolslogo-bg">
          <span>
            {otherskills.map((skill) => (
              <p
                style={{
                  top: random(0, maxvalues[0]),
                  right: random(0, maxvalues[1]),
                  fontSize: random(8, 25),
                }}
              >
                {skill.name}
              </p>
            ))}
          </span>
        </div>
      </section>
    </>
  );
}

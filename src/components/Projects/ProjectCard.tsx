import Image from "next/image";
import Link from "next/link";
import { FaGithubAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  Img,
  description,
  liveUrl,
  githubUrl,
  tags,
}) {
  return (
    <>
      <div className=" col-xl-4 col-lg-4 col-md-6 my-2">
        <div
          className="fadeIn animated project card pb-2"
          data-wow-delay=".15s"
          style={{
            visibility: "visible",
            animationDelay: "0.15s",
            animation: "fadeIn",
          }}
        >
          <Image
            className="project-image"
            src={Img}
            alt="image"
            height={200}
            width={400}
            objectFit="cover"
          />
          <div className=" text-themed row">
            <div className="col-md-12">
              <div className="card-body">
                <h4 id="project-name" className="card-title">
                  {title}
                </h4>
                <p id="project-desc" className="card-text">
                  {description}
                </p>
              </div>
            </div>
          </div>
          <div className="projectcard-footer row">
            <div
              id="project-tools"
              className="card-text col pr-4-xl align-self-end"
            >
              {tags.map((item, i) => {
                return (
                  <span
                    key={i}
                    className="badge badge-pill text-primary border border-primary ml-1"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
          <div
            id="project-buttons"
            style={{ position: "absolute" }}
            className="pt-2"
          >
            <Link href={liveUrl}>
              <a target="_blank">
                <button type="button" className="btn btn-secondary">
                  Live Demo
                </button>
              </a>
            </Link>

            <Link href={githubUrl}>
              <a target="_blank">
                <button type="button" className="btn btn-secondary">
                  Github Repo &nbsp; <FaGithubAlt />
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

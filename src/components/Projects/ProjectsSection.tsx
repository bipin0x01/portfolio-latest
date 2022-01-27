import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ children }) {
  return (
    <>
      <section id="projects">
        <div className="container col-lg-10 mx-auto mt-5 mb-5">
          <div className="user-details">
            <div className="mb-4 text-center">
              <h1 id="projects">
                <strong>Projects</strong>
              </h1>
            </div>
          </div>
          <div className="project-collection">
            <div className="row m-n5">
              {/* Projects */}
              {children}

              {/* // See more button */}
              <div className="col-lg-12 text-center">
                <a
                  href="#skills"
                  className="btn btn-outline-primary btn-md"
                  role="button"
                >
                  See more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

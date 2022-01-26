import Head from "next/head";
import styles from "../styles/Home.module.css";
// import components from '../components/'
import {
  TimelineItem,
  BlogCard,
  AboutSection,
  Sidebar,
  MainNavbar,
  HeroSection,
  Timeline,
  SkillsetsSection,
  ProjectsSection,
  BlogSection,
  ContactSection,
  ProjectCard,
  Footer,
} from "../components";

const projects = [
  {
    title: "Project 1",
    image: "https://via.placeholder.com/250",
    description: "This is a project description",
    demoLink: "",
    codeLink: "",
    tags: ["react", "node", "express"],
  },
  {
    title: "Project 2",
    image: "https://via.placeholder.com/250",
    description: "This is a project description",
    demoLink: "",
    codeLink: "",
    tags: ["react", "node", "express"],
  },
  {
    title: "Project 3",
    image: "https://via.placeholder.com/250",
    description: "This is a project description",
    demoLink: "",
    codeLink: "",
    tags: ["react", "node", "express"],
  },
  {
    title: "Project 4",
    image: "https://via.placeholder.com/250",
    description: "This is a project description",
    demoLink: "",
    codeLink: "",
    tags: ["react", "node", "express"],
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bipin Thapa - Personal Portfolio</title>
        <meta
          name="description"
          content="Full Stack Web Developer and Infosec Enthusiast"
        />
        <link rel="icon" href="../public/static/favicon.ico" />
      </Head>
      <Sidebar />
      <MainNavbar />
      <HeroSection />
      <AboutSection />
      <Timeline>
        <TimelineItem />
        <TimelineItem
          position="IT Incharge"
          from={2018}
          to={"Present"}
          roles="My role was to lorem"
        />
      </Timeline>
      <SkillsetsSection />
      <ProjectsSection>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            Img={project.image}
            description={project.description}
            liveUrl={project.demoLink}
            githubUrl={project.codeLink}
            tags={project.tags}
          />
        ))}
      </ProjectsSection>
      <BlogSection>
        <BlogCard
          title="Audit Management System"
          Img="/static/pp.jpg"
          description="asdasd"
          author="Kaji"
          date="2020"
          tags={["reactjs", "js"]}
        />
      </BlogSection>
      <ContactSection />
      <Footer />
    </div>
  );
}

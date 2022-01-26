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

const blogdata = [
  {
    title: "Audit Management System",
    image: "https://via.placeholder.com/250",
    description: "This is a blog description",
    author: "Kaji",
    date: "2020",
    tags: ["react", "node", "express"],
  },
];

const timelineDate = [
  {
    company: "Bipin Thapa Pvt. Ltd.",
    position: "Software Engineer",
    from: 2018,
    to: 2019,
    roles: "Software Engineer",
  },
  {
    // company: "Bipin Thapa Pvt. Ltd.",
    position: "Software Engineer",
    from: 2019,
    to: 2020,
    roles: "Software Engineer",
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
        {timelineDate.map((item, index) => (
          <TimelineItem
            key={index}
            company={item.company}
            position={item.position}
            from={item.from}
            to={item.to}
            roles={item.roles}
          />
        ))}
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
        {blogdata.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            Img={blog.image}
            description={blog.description}
            author={blog.author}
            date={blog.date}
            tags={blog.tags}
          />
        ))}
      </BlogSection>
      <ContactSection />
      <Footer />
    </div>
  );
}

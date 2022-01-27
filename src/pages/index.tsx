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
    title: "Audit Firm Management System",
    image:
      "https://github.com/bipin0x01/AuditManagement/raw/main/Screenshots/dashboard.PNG?raw=true",
    description:
      "An IMS designed to manage audit firms. It is a web application based on MERN Stack. It can be used to keep the data of audit firms,their employees, clients and their respective audit reports.",
    demoLink: "https://auditmanagementthapa.herokuapp.com/login",
    codeLink: "https://github.com/bipin0x01/AuditManagement",
    tags: [
      "react",
      "node",
      "express",
      "Mongodb",
      "Multer",
      "JWTAuth",
      "Heroku",
    ],
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
    company: "Vines Software Innovation Company(VSIC)",
    position: "Web Developer Intern",
    from: " July 2018",
    to: "Dec 2018",
    roles:
      "My role was to assist junior as senior developers in turning the figma designs into working web pages.",
  },
  {
    position: "Content Writer/SEO Analyst",
    company: "passivefinancer.com",
    from: "2017",
    to: "2019",
    roles:
      "Content Research, Blog Post Creation and On page and Off-Page as well as Technical SEO.",
  },
  {
    position: "Freelance Web Developer",
    from: "2018",
    to: "Present",
    roles:
      "Worked on freelance web development projects like gamemandu, icartnepal, rural.ao,cashkar, etc. Some of which can be found in my portfolio.",
  },
  {
    position: "Infosec Enthusiast and Independent Security Researcher",
    from: "2018",
    to: "Present",
    roles:
      "Started studying Cyber Security Concepts and doing Independent Research",
  },
  {
    position: "CTF Player",
    from: "2019",
    to: "Present",
    roles:
      "Started Participating in online Capture the Flag(CTF) Contests out of which most are Jeopardy-style.",
  },
  {
    position: "Chief Technology Officer(CTO) and Web Developer Lead",
    from: 2020,
    to: "Present",
    roles: "Manage and Lead the team of web developers.",
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

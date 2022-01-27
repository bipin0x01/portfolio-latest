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
      "Redux",
    ],
  },
  {
    title: "Qselly",
    image:
      "https://github.com/bipin0x01/portfolio2.0/blob/master/Qselly.screenshot.PNG?raw=true",
    description:
      "A fullstack webapp project for creating multiple stores. This project was in collaboration with a friend of mine named Bipul Poudel. I was responsible mainly for creating the frontend of the admin panel.",
    demoLink: "https://qselly.vercel.app/",
    tags: [
      "react",
      "node",
      "Chakra-UI",
      "MongoDB",
      "Vercel",
      "Typescript",
      "Cloudinary",
      "Nextjs",
      "Chartjs",
      "ContextAPI",
    ],
  },
  {
    title: "CryptoVerse - The Ultimate Crypto Hub",
    description:
      "Cryptoverse is an React app that shows realtime information and price updates about major cryptocurrencies as well as latest news . ReactQuery is used for updating data from a free API's endpoints from Rapidapi.",
    demoLink: "https://crypto-verse-five.vercel.app/",
    codeLink: "https://github.com/bipin0x01/CryptoVerse",
    tags: ["ReactQuery", "ReactJS", "Ant Design", "Chartjs"],
  },
  {
    title: "React Expense Tracker",
    image:
      "https://github.com/bipin0x01/react-expense-tracker/blob/main/expense%20tracker.PNG?raw=true",
    description:
      "Simple React App Design which can be used to track your expenses. This is just a non working component verison .",
    demoLink: "https://react-expense-tracker-liard.vercel.app/",
    codeLink: "https://github.com/bipin0x01/react-expense-tracker",
    tags: ["pure css", "react", "node"],
  },
  {
    title: "AGNOTES",
    description:
      "Website Design for a note sharing website for students of Far Western University.",
    image: "https://imgur.com/BKfBbNb.png",
    demoLink: "https://bipin0x01.github.io/agnotes/",
    codeLink: "https://github.com/bipin0x01/agnotes",
    tags: ["css3", "html5", "bootstrap", "javascript"],
  },
  {
    title: "Python Port Scanner - CLI Tool",
    description:
      "A simple python port scanner which can be used to scan ports on a host.",
    image: "https://imgur.com/Y9y992G.png",
    demoLink: "",
    codeLink: "https://github.com/bipin0x01/py-port-scanner",
    tags: ["socket programming", "python", "cli", "infosec", "security"],
  },
  {
    title: "JWT Authentication",
    description:
      "A simple JWT authentication system or boilerplate that uses JWTWebtoken package for jwt implementation.",
    tags: ["jwt", "jwtwebtoken", "nodejs", "authentication"],
    codeLink: "https://github.com/bipin0x01/jwt-auth-with-nodejs",
  },
  {
    title: "Web Login and Register UI",
    description:
      "A simple web login and register UI using pure CSS. It uses javascript for form validation.",
    image:
      "https://github.com/bipin0x01/Web-Login-and-Register-UI/blob/main/assets/images/login%20UI.png?raw=true",
    demoLink: "https://bipin0x01.github.io/Web-Login-and-Register-UI/",
    codeLink: "https://github.com/bipin0x01/Web-Login-and-Register-UI",
    tags: ["css3", "html5", "javascript"],
  },
  {
    title: "Portfolio Website",
    description:
      "A portfolio website for showcasing my projects, blogs and experiences.",
    image:
      "https://github.com/bipin0x01/portfolio2.0/raw/master/demo.png?raw=true",
    demoLink: "https://portfolio-with-nextjs-peach.vercel.app/",
    codeLink: "https://github.com/bipin0x01/portfolio-with-nextjs",
    tags: [
      "css3",
      "ReactJS",
      "NextJs",
      "Typescript",
      "ParticlesJs",
      "React Bootstrap",
    ],
  },
  {
    title: "Python Online Class Bot",
    description:
      "A simple UI for python online class bot. The bot can be used to take online classes on assigned time.",
    codeLink: "https://github.com/bipin0x01/Online-Class-Bot-UI-with-Tkinter",
    tags: ["python", "Tkinter", "desktop app design"],
  },
  {
    title: "Youtube Favourite List",
    description:
      "A simple UI for Youtube Favourite List. It can be used to add and remove favourite videos from a list.",
    codeLink: "https://github.com/bipin0x01/youtubeList",
    demoLink: "#",
    tags: ["ReactJs", "ExpressJS", "Nodejs", "MongoDB", "Bootstrap"],
  },
  {
    title: "Python Django CRUD App",
    description:
      "A simple CRUD app using python and django. It basically allows the user to add, update, delete and view the information about the writers from database.",
    codeLink: "https://github.com/bipin0x01/Django-CRUD-App/",
    tags: ["python", "django", "postgresql", "crud"],
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

const timelineData = [
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
    company: "Nest Nepal Pvt. Ltd.",
    from: 2020,
    to: "Present",
    roles: "Manage and Lead the team of web developers.",
  },
  {
    position: "Web Developer Lead and Consultant",
    company: "Kumari Tech International Pvt. Ltd.",
    from: 2020,
    to: "Present",
    roles:
      "Manage and Lead the team of web developers and suggest the company about the current prospects of upcoming projects and their quotation.",
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
        <meta name="description" content="Free Web tutorials" />
        <meta
          name="keywords"
          content="React, NestJs, Full Stack Web Development, Bipin Thapa, JavaScript, Typescript, Web Developer"
        />
        <meta name="author" content="Bipin Thapa" />
        <meta name="robots" content="index,follow" />
        <meta property="og:image" content="/static/pp.jpg" />
        <meta
          property="og:site_name"
          content="Bipin Thapa - Personal Portfolio Site"
        />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <Sidebar />
      <MainNavbar />
      <HeroSection />
      <AboutSection />
      <Timeline>
        {timelineData.map((item, index) => (
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

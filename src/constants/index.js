import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "MERN Stack Developer",
    company_name: "T.C.A",
    icon: starbucks,
    iconBg: "#383E56",
    date: "December 2024 - NOW",
    points: [
      "Gaining hands-on experience with full-stack JavaScript development using MongoDB, Express, React, and Node.js.",
      "Building dynamic web applications by integrating front-end and back-end technologies.",
      "Developing a strong understanding of RESTful APIs and asynchronous programming.",
      "Learning modern JavaScript frameworks and libraries to enhance development efficiency and scalability.",
      "Exploring best practices for coding, debugging, and deploying applications in the MERN ecosystem.",
      "Collaborating on projects and learning version control with Git and GitHub.",
    ],
  },
  {
    title: "Bachelor's Of Computer Application ",
    company_name: "M.D.University, Rohtak",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Sept 2019 - Aug 2023",
    points: [
      "Completed a Bachelor of Computer Applications (BCA) from Maharshi Dayanand University (MDU).",
      "Gained foundational knowledge in computer science, programming, and software development.",
      "Studied various subjects including data structures, algorithms, database management, and networking.",
      "Developed practical skills through hands-on projects and assignments.",
      "Acquired proficiency in multiple programming languages such as JS, C,C++ and Reactjs.",
      "Built a strong understanding of computer systems, software engineering principles, and IT fundamentals.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Myself",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2020 - Nov 2024",
    points: [
      "Gained proficiency in HTML, CSS, and JavaScript for creating responsive and interactive websites.",
      "Mastered modern front-end frameworks and libraries, including React.js, to build dynamic user interfaces.",
      "Learned back-end development with Node.js and Express.js to create server-side applications and APIs.",
      "Acquired knowledge of database management with MongoDB, and implemented CRUD operations.",
      "Gained experience in building responsive, user-friendly websites using best practices in web design.",
      "Developed skills in version control with Git and GitHub for efficient collaboration and project management.",
      "Explored web deployment techniques and learned how to host applications on cloud platforms.",
    ],
  }
]

export { services, technologies, experiences, };

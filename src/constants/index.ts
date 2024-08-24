// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  project1,
  project2,
  project3,
  project4,
  linkedin,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "GitHub",
    link: "https://github.com/Vishnutyagi",
  },
] as const;

// Services
export const SERVICES = [
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
    title: "Competetive Programmer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Software Engineer Intern",
    company_name: "Fabulous Media",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - July 2023",
    points: [
      "Worked as a Front-end Web Developer, skillfully producing user-friendly and responsive websites.",
      "Collaborated with the team to create and implement websites like Health Upwardly Mobile, Halo Homes and Fabulous Media, that ensuring optimal user experience.",
      "Led impactful solo projects, merging innovative design with SEO strategies to elevate users engagement. These initiatives significantly contributed to a notable increase in company revenue.",
      "Exposure: HTML, CSS, JavaScript, React.js , Bootstrap, GoCommercially.",
    ],
  },
  {
    title: "Cricket Team Captain",
    company_name: "Games and Sports Council, IIT BHU",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Apr 2023",
    points: [
      "Responsible for managing the Cricket Tournaments of IIT (BHU) of more than 7000 students.",
      "Made the Financial-Budget of the Cricket Tournaments budgeted for the whole tournament, including equipment for all Players, plus all year-round activities, amounted to over 10 Million Rupees.",
      "Managed and Designed the flow of events including Inter-IIT Cricket , Spardha(IIT BHU) , Aavhan(IIT Bombay).",
    ],
  },
  {
    title: "Marketing Executive",
    company_name: "Spardha’21 — IIT BHU",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "March'21",
    points: [
      "Marketing Executive — India’s largest Games and Sports Festival - Spardha’21 — IIT BHU",
      "Cooperated with the marketing team of Spardha’21 to strategize and execute a successful outreach plan targeting the communication with 100+ companies for building strong partnerships and sponsorships.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: user1,
  // },
  // // {
  // //   testimonial:
  // //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  // //   name: "Chris Brown",
  // //   designation: "COO",
  // //   company: "DEF Corp",
  // //   image: user2,
  // // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: user3,
  // },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Food Hut – E Commerce",
    description:
      "Created an ECommerce app which provides user a catalog of products available for purchase in the restaurant. Used Express.js and Node.js to build a RestAPI that handles data flow between the server and client.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "green-text-gradient",
      },
      {
        name: "mongoDB",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/Vishnutyagi/food-hut-front",
    live_site_link: "https://food-hut-mocha.vercel.app/",
  },
  {
    name: "Split Wise Application",
    description:
      "Built a dynamic React app for easy expense splitting among specified individuals. Used React components for dynamic rendering of input fields, optimizing scalability and user customization.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "reactRouter",
        color: "green-text-gradient",
      },
      {
        name: "ReactComponent",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/Vishnutyagi/split-wise-application",
    live_site_link: "https://split-wise-application-phi.vercel.app/",
  },
  {
    name: "Algorithm Visualizer",
    description:
      "Developed a website that helps in visualizing various Sorting and Path Finding Algorithms.Implemented sorting algorithms : merge, quick, selection, bubble, and insertion sort and Breadtdh first Search and Dijkstra's Algorithm for dynamic visualization.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/Vishnutyagi/Algorithm-Visualizer",
    live_site_link: "https://algorithm-visualizer-tawny.vercel.app/",
  },
  {
    name: "Django Poll Application",
    description:
      "Curated a full - featuredPolling Web Application using Django. Implemented the feature to login , register, create, update, add and delete polls.",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "DjangoMVT",
        color: "green-text-gradient",
      },
      {
        name: "djangoPOST",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/Vishnutyagi/poll-application",
    live_site_link: "https://github.com/Vishnutyagi/poll-application",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/vishnu-tyagi-075231232/",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Vishnutyagi",
  },
] as const;

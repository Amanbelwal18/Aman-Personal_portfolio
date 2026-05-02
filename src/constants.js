// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';

import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';

import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';

import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';

import mysqlLogo from './assets/tech_logo/mysql.png';


import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';






// Experience Section Logo's
import webverseLogo from './assets/company_logo/jj_logo.png';

// Education Section Logo's
import thdcLogo from './assets/education_logo/thdc_logo.webp';
import ucskm_logo from './assets/education_logo/ucskm_logo.jpg';

// Project Section Logo's
import campusvoiceLogo from './assets/work_logo/campus_voice.png';
import ciezycLogo from './assets/work_logo/ciezyc.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Tech Intern",
    company: "Uniqey JJ Fintax",
    date: "Feb 2026 - March 2026",
    desc: "Performed application testing, identified bugs, suggested improvements for the app, and gained exposure to backend systems while learning how the app’s backend processes work.",
    skills: [
      "React JS",
      "Node.js",
      "Api Testing",
      "Backend Exposure",
      "Api Integration",
      "Git",
      "GitHub",
      "Building and deploying web applications",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: thdcLogo,
    school: "THDC_IHET college, New Tehri , Uttarakhand",
    date: "Auguest 2023 - July 2027",
    grade: "73.2%",
    desc: "I completed my Bachelor's degree in Computer Science (B.TECH) from THDC_IHET college, New Tehri , Uttarakhand. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at THDC-IHET College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Technology - B.TECH (Computer Science)",
  },
  {
    id: 1,
    img: ucskm_logo,
    school: "UCSKM Public School, Bhiwadi, Rajasthan",
    date: "Apr 2022 - March 2023",
    grade: "78%",
    desc: "I completed my class 12 education from UCSKM Public School, Bhiwadi, Rajasthan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: ucskm_logo,
    school: "UCSKM Public School, Bhiwadi, Rajasthan",
    date: "Apr 2020 - March 2021",
    grade: "87.5%",
    desc: "I completed my class 10 education from UCSKM Public School, Bhiwadi, Rajasthan, under the CBSE board, where I studied Science with Computer.",
    degree: "CBSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "Campus Voice",
    description:
      "A comprehensive student grievance portal designed to address problems inside the university campus. Students can seamlessly lodge complaints regarding maintenance, academic issues, and campus facilities. The platform features status tracking, dark mode UI, and a detailed dashboard for administration to prioritize and resolve student concerns efficiently.",
    image: campusvoiceLogo,
    tags: ["React JS", "Node.js", "Express", "Tailwind CSS", "MongoDB"],
    github: "https://github.com/codingmastr/Campus-Voice",
    webapp: "https://campus-voice.netlify.app/",
  },
  {
    id: 1,
    title: "Ciezyc Fest Website",
    description:
      "Contributed to the development of 'Ciezyc', the official annual fest website for THDC IHET. Worked on creating a dynamic and engaging platform for the college fest, building UI components and managing the event dashboard.",
    image: ciezycLogo,
    tags: ["React JS", "Tailwind CSS", "Frontend", "Collaboration"],
    github: "https://github.com/",
    webapp: "https://ciezyc.com/",
  },
];


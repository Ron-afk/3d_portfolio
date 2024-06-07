import {
    gear,
    coding,
    tutor,
    data,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    tailwind,
    nodejs,
    c,
    git,
    cpp,
    jmeter,
    selenium,
    lol,
    threejs,
    fightgame,
    jira,
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
      title: "Data Management",
      icon: data,
    },
    {
      title: "Mechanical Engineer",
      icon: gear,
    },
    {
      title: "Software Test Engineer",
      icon: coding,
    },
    {
      title: "Tutor",
      icon: tutor,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Jira",
      icon: jira,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Software Test Engineer",
      company_name: "DaoAI Robotics",
      iconBg: "#383E56",
      date: "Jan 2024 - April 2024",
      points: [
        "Testing different software product lines within the CI/CD developing cycle.",
        "Develop UI-bsed user test of AI training website with Selenium.",
        "Develop and delopy auto-test for AI training server, tests are auto-tiggered weekly to ensure functionality of AI model and backend server.",
        "Participating in documentation and training for interal departments and external customer.",
      ],
    },
    {
      title: "Technical Business Analytic",
      company_name: "Acturis Canada",
      iconBg: "#E6DEDD",
      date: "Sep 2023 - Dec 2023",
      points: [
        "Provide product service for insurer-broker platforms.",
        "Modify Oracle database using SQL developer and script to build insurance products.",
        "Intra-company teamwork using platforms including Jira, Confluence, Outlook, and Teams.",
        "Participating in meeting with clients for product specification and review.",
      ],
    },
    {
      title: "Teaching Assistant",
      company_name: "UBC",
      iconBg: "#383E56",
      date: "Jan 2023 - April 2023",
      points: [
        "Provide academic tutor services for university students.",
        "Answering students’ questions related to course material (Introduction to Computer Systems) during office hours and on Piazza.",
        "Leading students in the lab, guiding them to work through the lab questions.",
        "Grading exams and assignments.",
      ],
    },
  ];
  
  const educations = [
    {
      degree:"Bachelor of Science",
      school: "University of British Columbia",
      program: "Computer Science",
      date: "Sep 2020 - present",
      areas: [
        "Data Structure",
        "Algorithms",
        "Operating Systems",
        "Computer Vision",
        "Internet Computing",
        "Data Mining and Machine Learning",
      ],
    },
    {
      degree:"Master of Engineering",
      school: "University of Alberta",
      program: "Engineering Management",
      date: "Sep 2020 - Jan 2022",
      areas: [
        "Data analysis/Machine Learning",
        "System Reliability Analysis",
        "Risk Management",
        "Finiancial Analysis",
      ],
    },
    {
      degree:"Bachelor of Science",
      school: "University of Alberta",
      program: "Mechanical Engineering",
      date: "Sep 2014 - Aug 2018",
      areas: [
        "Force Analysis in Complex System",
        "Thermal Dynamics",
        "Fluid Dynamics",
        "Vibration",
        "Mechanical Design",
      ],
    },
    
  ];
  
  const projects = [
    {
      name: "Web Test Automation - Selenium",
      description:
        "Web front end test using Selenium to interact with web page and report reaction time for different behavior to spot bugs and improment possibilities.",
      tags: [
        {
          name: "Selenium",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: selenium,
      source_code_link: null,
    },
    {
      name: "Web Test Automation - JMeter",
      description:
        "Web back end server test using JMeter deployed with Jenkins and triggered periodically to test server loading performance and ensure model performance.",
      tags: [
        {
          name: "JMeter",
          color: "blue-text-gradient",
        },
        {
          name: "Jenkins",
          color: "green-text-gradient",
        },
        {
          name: "HTTP",
          color: "pink-text-gradient",
        },
      ],
      image: jmeter,
      source_code_link: null,
    },
    {
      name: "Fight Game",
      description:
        "Web game for two players controlled by keyboards. Different animation for different behaviors including move, jump, attack, and fail.",
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
      image: fightgame,
      source_code_link: "https://github.com/Ron-afk/FightGame",
    },
    {
      name: "League of Legends Season Database",
      description:
        "Web with SQL database to record and show data for LOL seasons. Data can be present with different filters.",
      tags: [
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
        {
          name: "PHP",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: lol,
      source_code_link: "https://github.com/Ron-afk/LOL_info_database",
    },
  ];
  
  export { services, technologies, experiences, educations, projects };
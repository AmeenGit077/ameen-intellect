import {
  python,
  java,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  fpaas,
  threejs,
  ovitag,
  cgi,
  allpings,
  jasper,
  sp,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
    type: "section", // Scrolls to section on home page
  },
  {
    id: "work",
    title: "Work",
    type: "page", // Opens as separate page
    path: "/work",
  },
  {
    id: "contact",
    title: "Contact",
    type: "page", // Opens as separate page
    path: "/contact",
  },
];

export const services = [
  { title: "Java", icon: java },
  { title: "Python", icon: python },
  { title: "Spring Boot", icon: sp },
  { title: "SQL", icon: sql },
  { title: "React JS", icon: reactjs },
  { title: "git", icon: git },
  { title: "JavaScript", icon: javascript },
  { title: "CSS 3", icon: css },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
];

export const experiences = [
  {
    title: "Senior Software Developer",
    company_name: "CGI | Bell Canada (Telecom)",
    icon: cgi,
    iconBg: "#f9f9f9ff",
    date: "Mar 2025 - Present",
    company_link: "https://www.cgi.com",
    points: [
      "Architecting large-scale diagnostic platform enabling real-time service performance analysis and issue detection for telecom systems serving millions of users.",
      "Designed and implemented Translation API with dynamic multi-language support, serving localized content from PostgreSQL JSONB data structures.",
      "Developed Spring Boot microservices for translation management, category-metric hierarchy, and optimized data retrieval pipelines.",
      "Engineered normalized relational schema migration from JSONB, improving query performance and data integrity.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Memob+ | Allpings DMP Platform (AdTech)",
    icon: allpings,
    iconBg: "#f1f1f1ff",
    date: "Oct 2022 - Mar 2025",
    company_link: "https://allpings.com/login",
    points: [
      "Built full-stack features using Java 17 (Spring Boot) and React, powering web-based advertising solutions and user engagement tools.",
      "Integrated Stripe payment system for tier-based client billing and implemented social logins via Meta, Snap, and TikTok APIs.",
      "Optimized application performance using RabbitMQ, Kafka for async event handling, and Redis/Caffeine for intelligent caching strategies.",
      "Implemented ETL pipelines for seamless data integration and utilized PostgreSQL with geospatial queries (Lat/Long) for location-based targeting.",
    ],
  },
  {
    title: "Senior Java Developer",
    company_name: "Tracker Wave |RTLS (Healthcare)",
    icon: ovitag,
    iconBg: "#f2f3f3ff",
    date: "Mar 2020 - Oct 2022",
    company_link: "https://trackerwave.com/",
    points: [
      "Developed RESTful APIs using Spring Boot for Real-Time Location Services (RTLS) application, managing porter and asset tracking across hospital premises.",
      "Designed queue-based API logic serving real-time state changes and route updates to Angular clients with sub-second latency.",
      "Implemented Java Scheduler for automated patient report emails across multiple time zones, ensuring 99.9% delivery reliability.",
      "Leveraged ClickHouse for real-time analytics and MySQL with normalized parent-child structures for efficient multi-location healthcare data queries.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "CTela Solutions Pvt Ltd | IoT Analytics (IoT)",
    icon: jasper,
    iconBg: "#f5f5f7ff",
    date: "Feb 2017 - Mar 2020",
    company_link: "https://www.cisco.com/c/en/us/services/acquisitions/jasper.html",
    points: [
      "Built robust Java-based web applications using Spring Core, Spring IOC, Spring Data JPA, Spring Integration, and Hibernate ORM.",
      "Managed end-to-end project builds using Maven, ensuring consistent and efficient development workflows across teams.",
      "Developed complex SQL queries and managed database objects (tables, views, stored procedures) using MySQL for IoT data processing.",
      "Collaborated effectively using Git for version control, code reviews, and seamless integration across distributed development teams.",
    ],
  },
];

export const projects = [
  {
    name: "FPaaS",
    description:
      "Fare Payment as a Service (FPaaS) is a cloud-based platform that allows users to travel and pay for their fares in a secure and efficient manner.",
    tags: [
      { name: "Spring Boot", color: "blue-text-gradient" },
      { name: "Java", color: "green-text-gradient" },
      { name: "MySQL", color: "pink-text-gradient" },
      { name: "Microservices", color: "blue-text-gradient" },
      { name: "OpenAPI (Swagger)", color: "green-text-gradient" },
    ],
    image: fpaas,
    source_code_link: "https://github.com/AmeenGit077/fpaas",
  }
];

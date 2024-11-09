import project1 from "../assets/projects/project1.jpeg";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";
import project5 from "../assets/projects/project5.png";
import project6 from "../assets/projects/project6.png";
import institute1Logo from "../assets/education/institute1Logo.jpg"; 
import institute2Logo from "../assets/education/institute2Logo.jpg"; 
import institute3Logo from "../assets/education/institute3Logo.jpg"; 
import certificate1 from "../assets/certificate/certificate1.png";
import certificate2 from "../assets/certificate/certificate2.png";
import certificate3 from "../assets/certificate/certificate3.png";
import certificate4 from "../assets/certificate/certificate4.png";
import certificate5 from "../assets/certificate/certificate5.png";
import certificate6 from "../assets/certificate/certificate6.png";
import certificate7 from "../assets/certificate/certificate7.png";

export const HERO_CONTENT = `Detail-oriented and versatile full stack developer with a foundation in software development, blockchain, and project management. Experienced in React, Java, MySQL, and MongoDB, I bring a proactive approach to problem-solving and deliver high-quality, user-focused solutions. Known for my organizational skills and precision in managing multiple projects, I am driven by a passion for innovation and teamwork to make an impact across technical domains.`;

export const ABOUT_TEXT = `Dedicated and versatile developer with a passion for crafting efficient, user-focused applications. With hands-on experience in technologies like React, Java, MySQL, and MongoDB, along with a strong foundation in blockchain and project management, I thrive on solving complex challenges and delivering high-quality solutions. My journey in tech began with a deep curiosity, evolving into a career where I continuously learn, innovate, and adapt. I value teamwork and am driven to make a meaningful impact across diverse projects. Outside of work, I enjoy exploring emerging technologies and contributing to open-source initiatives.`;

export const EDUCATION = [
  {
    institution: "SIT- Symbiosis Institute of Technology, Pune",
    degree: "B.Tech in Computer Science and Engineering",
    duration: "Aug 2022 - May 2026",
    details: "CGPA: 8.63",
    logo: institute1Logo,
  },
  {
    institution: "Dr. Ambedkar College, Nagpur",
    degree: "High School",
    duration: "Aug 2020 - April 2022",
    details: "87.33 %",
    logo: institute3Logo,
  },
  {
    institution: "Center Point School, Nagpur",
    degree: "Primary School",
    duration: "Jun 2010 - March 2022",
    details: "96.66 %",
    logo: institute2Logo,
  },
];

export const EXPERIENCES = [
  {
    duration: "June 2024 - Sept 2024",
    role: "Blockchain Developer Intern",
    company: "Project Human City",
    description: `Developed decentralized solutions for the Company Project Human City, leveraging blockchain technology for enhanced security and scalability. As Head of Blockchain at Cyber Blockchain Club, SIT, I lead initiatives to drive innovation and collaboration in blockchain development.`,
    skills: ["Blockchain", "React", "NFT", "Web3", "Ethereum", "DLT", "Agile"],
  },
  {
    duration: "June 2024 - Aug 2024",
    role: "Java Development Intern",
    company: "Next24tech Technology & Services",
    description: `Built multiple web applications using Java and relevant frameworks, providing full-stack solutions. Independently completed assigned tasks to meet project requirements and deliver high-quality results.`,
    skills: ["Java", "Java Swing", "JDBC"],
  },
  {
    duration: "June 2024 - July 2024",
    role: "Full Stack Developer Intern",
    company: "MetaCraft",
    description: `Worked on full-stack development tasks using GitHub, Svelte, and SvelteKit to build applications. Led the DevStar project collaboration, focusing on developing accessible resources for the community.`,
    skills: ["GitHub", "Svelte", "SvelteKit", "Version Control", "Teamwork"],
  },
  {
    duration: "June 2024 - Present",
    role: "Content Editor",
    company: "CSE Editorial Team, SIT",
    description: `Edited newsletters and magazine articles to ensure quality and accuracy, collaborating with faculty and students to foster knowledge sharing.`,
    skills: ["Content Management", "Research", "Collaboration"],
  },
  {
    duration: "June 2024 - July 2024",
    role: "Summer Intern",
    company: "Muskurahat Foundation",
    description: `Led a crowdsourcing project, raising over Rs. 3,600 for social causes and strengthening community connections through collaborative initiatives.`,
    skills: ["Crowdsourcing", "Communication", "Community Engagement"],
  },
];


export const PROJECTS = [
  {
    title: "Caring Nanny Full Stack WebApp with Gen AI",
    image: project1,
    githubLink: "https://github.com/ayushimahajan295/CaringNanny-MERN-Full-Stack-with-Gen-AI",
    description:
      "A dynamic and user-friendly web application designed to help parents find, book, and manage nanny services. The app allows users to browse through available nannies, schedule appointments, make secure payments, and access a helpful assistant chatbot for quick support",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "Real-Time Chat Application",
    image: project2,
    githubLink: "https://github.com/ayushimahajan295/RealTimeChatApplication",
    description:
      "Developed a responsive real-time chat application in Java with user authentication, message encryption, and multimedia support. Built with an efficient chat interface, it enables secure communication through a Simple HTTP Server. The project was developed in IntelliJ IDEA and incorporates JavaFX for the UI.",
    technologies: ["Java", "JavaFX", "Java Servlets", "OpenJDK"],
  },
  {
    title: "Handy Notes App for Desktop",
    image: project3,
    githubLink: "https://handy-notes-app.vercel.app/",
    description:
      "A note-taking app built with Svelte and Dexie, offering features like organized note management, real-time search, in-app editing, and automatic saving to boost productivity.",
    technologies: ["HTML", "CSS", "JavaScript", "Svelte", "Dexie"],
  },
  {
    title: "SlamBook - Instagram Clone",
    image: project4,
    githubLink: "https://github.com/ayushimahajan295/sip24-sveltekit-fundamentals/tree/ayushi-mahajan", 
    description:
      "A sleek Instagram clone that allows users to upload images, apply real-time filters (Grayscale, Sepia), and share posts with an intuitive interface.",
    technologies: ["SvelteKit", "Tailwind CSS", "Prisma", "SQLite", "JavaScript", "HTML", "SVG"]
},

 {
    title: "Symbiosis Classifieds",
    image: project5, 
    githubLink: "https://github.com/ayushimahajan295/Symbiosis-Classifieds-Project",
    description: 
      "A user-friendly platform designed to simplify Symbiosis student life by offering housing, ride, and item exchange listings. Powered by MySQL, it ensures seamless organization and real-time updates for a dynamic user experience.",
    technologies: ["MySQL", "Java", "JDBC"]
 },
  {
    title: "Traffic Data Analysis and Prediction using MATLAB",
    image: project6,
    githubLink: "https://github.com/ayushimahajan295/MATLAB-project",
    description:
      "A MATLAB project that processes and analyzes traffic data to model and predict traffic scenarios. Using deep learning and machine learning toolboxes, it provides insights for effective traffic management and scenario forecasting.",
      technologies: ["MATLAB", "Deep learning", "Predictive Modeling"]
  },
];

export const CERTIFICATIONS = [
  {
    name: "Postman API Fundamentals Student Expert",
    year: "2024",
    image: certificate1,
    link: "https://badgr.com/public/assertions/DiowlAESSj-rEbhaBTJAbA", 
  },
  {
    name: "HackerRank Software Engineering",
    year: "2024",
    image: certificate2,
    link: "https://www.hackerrank.com/certificates/318c7b30d52f", 
  },
  {
    name: "LoR - MetaCraft Summer Internship Certificate",
    year: "2024",
    image: certificate3,
    link: "https://verify.craftlab.ai/q6a4rzUL6J", 
  },
  {
    name: "MetaCraft Mastering GitHub Fundamentals",
    year: "2024",
    image: certificate4,
    link: "https://verify.netcredential.com/q6a4Iwwgp2", 
  },
  {
    name: "MongoDB for SQL Experts",
    year: "2024",
    image: certificate5,
    link: "https://learn.mongodb.com/c/8c7xuKUFRoG34lAPHMJQgQ",
  },
  {
    name: "Core MATLAB Skills",
    year: "2024",
    image: certificate6,
    link: "https://matlabacademy.mathworks.com/progress/share/learningpath/certificate.html?id=b0d45d51-3b6f-4687-b0b3-e4729c707142&",
  },
  {
    name: "Academor Cyber Security Internship",
    year: "2023",
    image: certificate7,
    link: "https://drive.google.com/file/d/1sXoDcqPGH4QRQprLuWUUFD2U06RAb5_R/view",
  },
];

export const LANGUAGES = [
  {
    name: "English",
    proficiency: "Professional Working",
  },
  {
    name: "Hindi",
    proficiency: "Native or Bilingual",
  },
  {
    name: "German",
    proficiency: "Elementary",
  },
];

export const ACHIEVEMENTS = [
  "Gold Medalist in Computer Science Olympiad (Grade 1 to 8)",
  "IAYP Silver and Bronze Medal",
  "Won Best Delegate in SITMUN'23 and Techfest'23, SIT",
  "Intermediate and Elementary Drawing Exams with Grade A",
  "Presented research paper, 'Decentralized Fund Management System for Indian Temples Powered by Blockchain,' at ICCUBEA-2024",
];

export const CONTACT = {
  address: "Nagpur, Maharashtra - 440018 ",
  phoneNo: "+918262810467",
  email: "mayushi295@gmail.com",
};

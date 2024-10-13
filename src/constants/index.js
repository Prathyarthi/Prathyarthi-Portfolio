import {
  mobile,
  backend,
  creator,
  web,
  video,
  knowly,
  realtime,
  paytm,
  coldemail,
  scrape,
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
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: mobile,
  },
  {
    title: "AI Engineer",
    icon: backend,
  },
  {
    title: "Devops Engineer",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Wave Hackathon 2023",
    iconBg: "#383E56",
    date: "26 Sep 2023",
    points: [
      "Developed a Learning management system using MERN stack.",
      "Collaborating with my team including designers, developers to create high-quality application.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Won 3rd prize in this Hackathon.",
    ],
  },
  {
    title: "HackB-24",
    iconBg: "#E6DEDD",
    date: "24 Feb 2024",
    points: [
      "Developed a Doctor Appointment system using MERN stack and OpenCV for facial recognition.",
      "Collaborating with my team including designers, developers to create high-quality application.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Placed 4th in this Hackathon.",
    ],
  },
  {
    title: "Article on Blockchain Technology",
    iconBg: "#383E56",
    date: "22 May 2024",
    points: [
      "My teammate and I wrote an article on blockchain technology.",
      "We presented the overview of how blockchain technology works.",
      "Won 2nd prize in this competition.",
    ],
  },
  {
    title: "BITM Inter-College Hackathon",
    iconBg: "#E6DEDD",
    date: "2 Aug 2024",
    points: [
      "Developed a Video Conferencing Application using NextJS, Typescript, postgreSQL and prisma and implemented Chat-to-PDF feature using Generative AI.",
      "Collaborating with my team including designers, developers to create high-quality application.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Won 1st prize in this Hackathon.",
    ],
  },
];

const projects = [
  {
    name: "Video Conferencing",
    description:
      "This is a platform offering seamless virtual meetings. It supports scheduled meetings, recordings, screen sharing, and interactive tools for collaboration. The chat-to-PDF feature allows users to share notes and chat with it using AI.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: video,
    source_code_link: "https://github.com/Prathyarthi/vistaar_pdf",
  },
  {
    name: "Knowly",
    description:
      "Knowly is a Learning Management System (LMS) used to create, manage, and deliver educational content, featuring tools like code editor, chatbot, live classroom, and note taking. It streamlines online and in-person learning for institutions and organizations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: knowly,
    source_code_link: "https://github.com/Prathyarthi/Knowly_advanced",
  },
  {
    name: "Real-time Docs",
    description:
      "Real-time Docs enables simultaneous editing and collaboration on documents, with instant updates.It enhances teamwork by ensuring all participants see changes as they happen. It also includes features like floating comments, and notifications.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "liveblocks",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: realtime,
    source_code_link: "https://github.com/Prathyarthi/Realtime-Collaborative-Docs",
  },
  {
    name: "Paytm",
    description:
      "Implemented a Paytm-like payment gateway solution enabling seamless transfer of funds from bank accounts to digital wallets(On Ramping). Developed using a monorepo structure with Next.js, TypeScript and Postgresql for database.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: paytm,
    source_code_link: "https://github.com/Prathyarthi/PayTM_advanced",
  },
  {
    name: "Cold Email Generator AI",
    description:
      "This end-to-end project utilizes Llama 3.1, ChromaDB, Langchain, and Streamlit to create a Cold Email Generator. It helps software and AI service companies efficiently craft and send personalized cold emails to potential clients.",
    tags: [
      {
        name: "langchain",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "chromadb",
        color: "pink-text-gradient",
      },
    ],
    image: coldemail,
    source_code_link: "https://github.com/Prathyarthi/cold-email-Generator-AI",
  },
  {
    name: "AI Web Scraper",
    description:
      "This project creates an AI web scraper in Python that extracts and analyzes website content based on a given URL, using prompts to retrieve specific information. It integrates Selenium, BeautifulSoup, LangChain, and Streamlit .",
    tags: [
      {
        name: "langchain",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "selenium",
        color: "pink-text-gradient",
      },
    ],
    image: scrape,
    source_code_link: "https://github.com/Prathyarthi/AI-Website-Scraper",
  },
];

export { services, experiences, projects };

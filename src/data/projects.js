import devhubImg from "../assets/Images/projects/devhub/devhub.jpg";
import devhubImg1 from "../assets/Images/projects/devhub/1.jpg";
import devhubImg2 from "../assets/Images/projects/devhub/2.jpg";
import devhubImg3 from "../assets/Images/projects/devhub/3.jpg";
import devhubImg4 from "../assets/Images/projects/devhub/4.jpg";
import foodaddaImg from "../assets/Images/projects/foodadda/foodadda.jpg";
import foodaddaImg1 from "../assets/Images/projects/foodadda/1.jpg";
import foodaddaImg2 from "../assets/Images/projects/foodadda/2.jpg";
import foodaddaImg3 from "../assets/Images/projects/foodadda/3.jpg";
import foodaddaImg4 from "../assets/Images/projects/foodadda/4.jpg";
import foodaddaImg5 from "../assets/Images/projects/foodadda/5.jpg";
import foodaddaImg6 from "../assets/Images/projects/foodadda/6.jpg";
import foodaddaImg7 from "../assets/Images/projects/foodadda/7.jpg";
import multigameImg from "../assets/Images/projects/multigame/multigame.jpg";
import multigameImg1 from "../assets/Images/projects/multigame/1.jpg";
import multigameImg2 from "../assets/Images/projects/multigame/2.jpg";
import multigameImg3 from "../assets/Images/projects/multigame/3.jpg";
import multigameImg4 from "../assets/Images/projects/multigame/4.jpg";
import portfolioImg from "../assets/Images/projects/portfolio/portfolio.jpg";
import portfolioImg1 from "../assets/Images/projects/portfolio/1.jpg";
import portfolioImg2 from "../assets/Images/projects/portfolio/2.jpg";
import portfolioImg3 from "../assets/Images/projects/portfolio/3.jpg";
import admissionportalImg from "../assets/Images/projects/admissionportal/admissionportal.jpg";
import admissionportalImg1 from "../assets/Images/projects/admissionportal/1.jpg";
import admissionportalImg2 from "../assets/Images/projects/admissionportal/2.jpg";
import admissionportalImg3 from "../assets/Images/projects/admissionportal/3.jpg";
import admissionportalImg4 from "../assets/Images/projects/admissionportal/4.jpg";
import admissionportalImg5 from "../assets/Images/projects/admissionportal/5.jpg";
import admissionportalImg6 from "../assets/Images/projects/admissionportal/6.jpg";
import admissionportalImg7 from "../assets/Images/projects/admissionportal/7.jpg";

const projects = [
  {
    name: "foodadda",
    title: "The Food Adda",
    technologies: ["MongoDB", "ExpressJS", "React", "NodeJS"],
    // source: "https://github.com/parthnvaswani/the-food-adda",
    website: "https://parthnvaswani.netlify.app/#food",
    images: [
      foodaddaImg,
      foodaddaImg1,
      foodaddaImg2,
      foodaddaImg3,
      foodaddaImg4,
      foodaddaImg5,
      foodaddaImg6,
      foodaddaImg7,
    ],
    description:
      "Built with MERN stack this website provides a platform to local food shops to bring their business online.",
    about: `<p class="proj_about">This was created as a mini project for 5th semester at MSU for our client Indian Innovation. We used MERN stack for this website. We used Material UI as our design library.</p>
    
    <p class="proj_about">We also made it a PWA with advanced caching strategies for images and other assets and tried other things to increase it's performance and get perfect lighthouse score, we also ensured to implement all security measures to prevent from any attacks like XSS, CSRF, No SQL Injection, HPP and etc. I also learnt how to lead a team and handle the pressure when everything is not going according to plan.</p>`,
    tech: [
      "UI/UX Design",
      "Responsive Website Design",
      "Material UI",
      "React/Easy Peasy",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "axios",
      "JWT",
      "REST API",
      "Web Security",
      "PWA",
      "SEO",
      "Nodemailer",
    ],
    resources: [
      {
        text: "The project is online at",
        linkText: "https://parthnvaswani.netlify.app/#food",
        link: "https://parthnvaswani.netlify.app/#food",
      },
      {
        text: "The API and it's documentation is online at",
        linkText: "https://parthnvaswani.netlify.app/#foodapi",
        link: "https://parthnvaswani.netlify.app/#foodapi",
      },
      // {
      //   text: "See the source code at",
      //   link: "https://github.com/parthnvaswani/the-food-adda",
      // },
      {
        text: "You can read the documentation here",
        linkText: "Food Adda Docs",
        link: `${window.location.origin}/Docs/TheFoodAdda_Documentation.pdf`,
      },
    ],
  },
  {
    name: "admissionportal",
    title: "MSU Admission Portal",
    technologies: ["MongoDB", "ExpressJS", "VueJS", "NodeJS"],
    // source: "https://github.com/parthnvaswani/AdmissionPortal",
    website: "https://parthnvaswani.netlify.app/#admission",
    images: [
      admissionportalImg,
      admissionportalImg1,
      admissionportalImg2,
      admissionportalImg3,
      admissionportalImg4,
      admissionportalImg5,
      admissionportalImg6,
      admissionportalImg7,
    ],
    description:
      "Built with MEVN stack this website provides a platform for online admission process.",
    about: `<p class="proj_about">This was created as a final semester project at MSU for our client MSU. It was created for automating the tedious part of admission process at MSU BSc.</p> 
    
    <p class="proj_about">We got to design many algorithms for the parts of admission process like generating merit, allocating seats, converting data to CSV and etc. we also learnt scheduling tasks using cron jobs on backend.We also tried to increase it's performance and get perfect lighthouse score, we also ensured to implement all security measures to prevent from any attacks like XSS, CSRF, No SQL Injection, HPP and etc.</p>
      
     <p class="proj_about">As a leader I decided to use Agile. I learnt to manage time and react to drastic requirement changes and allocate time to tasks in the next sprints.</p>`,
    tech: [
      "UI/UX Design",
      "Responsive Website Design",
      "Vuetify",
      "Vue/Vuex",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "axios",
      "JWT",
      "REST API",
      "Web Security",
      "Nodemailer",
      "SEO",
      "Agile/Trello",
    ],
    resources: [
      {
        text: "The project is online at",
        link: "https://parthnvaswani.netlify.app/#admission",
        linkText: "https://parthnvaswani.netlify.app/#admission",
      },
      {
        text: "The API documentation is online at",
        link: "https://documenter.getpostman.com/view/11722625/TWDTNzj7",
        linkText: "API Docs",
      },
      // {
      //   text: "See the source code at",
      //   link: "https://github.com/parthnvaswani/AdmissionPortal",
      //   linkText: "https://github.com/parthnvaswani/AdmissionPortal",
      // },
      {
        text: "You can read the documentation here",
        link: `${window.location.origin}/Docs/AdmissionPortalDocumentation.pdf`,
        linkText: "Admission Portal Docs",
      },
    ],
  },
  {
    name: "portfolio",
    title: "Portfolio",
    technologies: ["Svelte", "Vite", "Firebase"],
    source: "https://github.com/parthnvaswani/Portfolio",
    website: window.location.origin,
    images: [portfolioImg, portfolioImg1, portfolioImg2, portfolioImg3],
    description:
      "Built with Svelte this website is a showcase of my recent projects as a Full-Stack Web Developer.",
    about: `<p class="proj_about">The idea behind this project was to create a showcase of everything I've worked on in the past. I have used the technologies that I love the most.</p>

    <p class="proj_about">I've used Firebase(firestore) as a database for contact form because a separate backend was not needed for a simple thing, on frontend I used Svelte with Vite without any styling library using custom CSS. I used some free SVG and other were made by me using Figma.</p>`,
    tech: [
      "UI/UX Design",
      "CSS Animations",
      "Responsive Website Design",
      "CSS3",
      "Svelte",
      "Vite",
      "Firebase",
      "Figma",
      "Squoosh",
    ],
    resources: [
      {
        text: "The project is online at",
        link: window.location.origin,
        linkText: window.location.origin,
      },
      {
        text: "See the source code at",
        link: "https://github.com/parthnvaswani/Portfolio",
        linkText: "https://github.com/parthnvaswani/Portfolio",
      },
    ],
  },
  {
    name: "devhub",
    title: "Dev Hub",
    technologies: ["MongoDB", "ExpressJS", "React", "NodeJS"],
    source: "https://github.com/parthnvaswani/devhub",
    website: "https://parthnvaswani.netlify.app/#devhub",
    images: [devhubImg, devhubImg1, devhubImg2, devhubImg3, devhubImg4],
    description:
      "Built with MERN stack this website is a social network for developers.",
    about: `<p class="proj_about">This was created during an online boot camp for understanding the implementation of MERN stack in a real website.</p>

    <p class="proj_about">I learnt about things like bootstrap & responsive layout, react/redux, ajax using axios, storing and using JWT from local storage on frontend and on backend I got to learn things like authentication and authorization, creating REST API, connecting and querying a database like MongoDB. And finally writing deployment scripts and deploying it. After boot camp was over I decided to convert the website into a PWA and implement some things to boost SEO.</p>`,
    tech: [
      "UI/UX Design",
      "Responsive Website Design",
      "Bootstrap",
      "React/Redux",
      "MongoDB",
      "ExpressJS",
      "NodeJS",
      "axios",
      "JWT",
      "REST API",
      "SEO",
      "PWA",
    ],
    resources: [
      {
        text: "The project is online at",
        link: "https://parthnvaswani.netlify.app/#devhub",
        linkText: "https://parthnvaswani.netlify.app/#devhub",
      },
      {
        text: "See the source code at",
        link: "https://github.com/parthnvaswani/devhub",
        linkText: "https://github.com/parthnvaswani/devhub",
      },
    ],
  },
  {
    name: "multigame",
    title: "Multiplayer Game",
    technologies: ["Socket.io", "NodeJS", "ExpressJS"],
    source: "https://github.com/parthnvaswani/multiplayergame",
    website: "https://parthnvaswani.netlify.app/#multi",
    images: [
      multigameImg,
      multigameImg1,
      multigameImg2,
      multigameImg3,
      multigameImg4,
    ],
    description:
      "Built with vanilla HTML, CSS, JS and Socket.io this is a realtime multiplayer game.",
    about: `<p class="proj_about">This was created using vanilla HTML, CSS, JS on frontend and NodeJS with Socket.io on backend for learning creation of realtime multiplayer games.</p>

      <p class="proj_about">It was created just for learning and playing it with my friends. I learnt how to use web sockets for realtime communication and how to manage rooms, scores, connections and etc.</p>`,
    tech: [
      "UI/UX Design",
      "Responsive Website Design",
      "HTML",
      "CSS",
      "JS",
      "Socket.io",
      "ExpressJS",
      "NodeJS",
    ],
    resources: [
      {
        text: "The project is online at",
        link: "https://parthnvaswani.netlify.app/#multi",
        linkText: "https://parthnvaswani.netlify.app/#multi",
      },
      {
        text: "See the source code at",
        link: "https://github.com/parthnvaswani/multiplayergame",
        linkText: "https://github.com/parthnvaswani/multiplayergame",
      },
    ],
  },
];

export default projects;

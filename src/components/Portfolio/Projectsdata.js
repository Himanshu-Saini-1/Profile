import appstore from "../../assests/appstore.png";
import xpert from "../../assests/xpert.png";
import myweb from "../../assests/portfolio.png";
import hostel from "../../assests/hostel.png";
const projectsData = [
  {
    id: 1,
    title: "APP STORE",
    image: appstore,
    description:
      "Production level project - Contributed in frontend part of whole application",
  },
  {
    id: 2,
    title: "RESUME XPERT",
    image: xpert,
    description:
      "Reduces the 30% of HR work and make the shortlisting the candidate 70% faster.Machine learning model which predict the likelyhood of an canditate to join the enterpherise ",
  },
  {
    id: 3,
    title: "Portfolio",
    image: myweb,
    description:
      "My portfolio showcases a curated collection of my projects, highlighting my skills in web development, data science, and Java development. Explore my work and connect with me through an engaging and interactive interface. ",
  },
  {
    id: 4,
    title: "Hostel Room allocation",
    image: hostel,
    description:
      "This web application allow the hostel management to allocate the room and students to get more aalocated more effeciently. ",
  },

  // Add more projects as needed
];

export default projectsData;

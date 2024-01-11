import instaClone from "../images/mern__insta__clone.JPG";
import amazonClone from "../images/amazon__clone.JPG";
import whatsappClone from "../images/whatsapp__clone.JPG";
import ticTacToe from "../images/ticTacToe.JPG";
import boilerhub from "../images/BoilerHub.jpg";
import byReports from "../images/by_reports.png";
import mesha from "../images/mesha.png";
import techtip24 from "../images/techtip24.png";

export const projects = [
  {
    title: "Unilever BY Reports",
    image: byReports,
    desc: `The goal of the project is to develop a user-friendly website for managing warehouse management system. The website will have a fast and efficient interface to help users easily run queries and access data from the database. Additionally, users will be able to export the data into Excel files for their convenience. I worked on this project in Appwrk It Solutions.`,
    techUsed: ["React JS", "React-Redux", ".Net", "MS Sql", "Azure Auth"],
    link: "https://appwrk.com/case-studies/warehouse-inventory-management-tool-byreport",
  },
  {
    title: "Unilever Boiler Hub",
    image: boilerhub,
    desc: `Boiler Hub is a portal that provides a data fetching and processing platform based on React and NestJS(NodeJS framework); user-friendly charts are implemented in the portal for better data visualization. It is a faster, quicker, and much more efficient portal where charts are used for better UI purposes. I worked on this project in Appwrk It Solutions.`,
    techUsed: [
      "React JS",
      "React-Redux",
      "Nest JS",
      "MS Sql",
      "Apex Charts",
      "Azure Auth",
    ],
    link: "https://appwrk.com/case-studies/hindustan-unilever-fmcg-software-boiler-hub",
  },
  {
    title: "Mesha",
    image: mesha,
    desc: `Mesha enables users to manage all of their financial operations in one place. With Mesha, users can make worldwide payments, set reminders for upcoming payments, exchange tokens, and conduct cryptocurrency transactions with ease. With this web application, users can utilize a single dashboard for managing business operations across various countries, banks, and service providers more quicker and easier. I worked on this project in Appwrk It Solutions.`,
    techUsed: [
      "Next JS",
      "React-Redux",
      "Node JS",
      "PostgreSql",
      "Solidity",
      "Web3",
    ],
    link: "https://appwrk.com/case-studies/finance-management-app-mesha",
  },
  {
    title: "Techtip24",
    image: techtip24,
    desc: `TechTip24 provides Live Interactive Sessions and Live Consultancy Services to the respective candidates who want to build their career in Data Analyst, Business Analyst, Business Intelligence, Data Science kind of profiles using multiple tools and technologies.`,
    techUsed: ["Laravel", "Razorpay", "PHP", "HTML", "CSS", "JavaScript"],
    link: "https://techtip24.com/",
  },
  {
    title: "MERN Social",
    image: instaClone,
    desc: `This is a clone projects in which I have tried to copy instagram
      design and some functionalities. This is developed by using MERN
      technology. Some of the feature of this react app is adding a post ,
      update post , delete post , like post , save post , comment ,
      authentication system using JWT , edit profile , follow a user and
      explore section etc.`,
    techUsed: [
      "Tailwind Css",
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "React-Redux",
      "JWT",
      "Axios",
    ],
    github: "https://github.com/codewithsahil/mern-insta-clone",
    link: "https://mern-social-blue.vercel.app/",
  },
  {
    title: "E-commerce",
    image: amazonClone,
    desc: `This is an e-commerce website. This is developed by using MERN + NEXT
      js technology. Some of the feature of this next app is routing, add to
      cart , update cart , product details page and checkout using STRIPE
      etc. Feel free to check out th e full fuctionality. For payment press
      4 and 2 multiple times as test card credentials.`,
    techUsed: [
      "NextJS",
      "ReactJS",
      "NodeJS",
      "Sanity",
      "Stripe",
      "reactContext",
    ],
    github: "https://github.com/codewithsahil/eCommerce_nextjs_sanity_stripe",
    link: "https://e-commerce-nextjs-sanity-stripe.vercel.app/",
  },
  {
    title: "RealTime Chat",
    image: whatsappClone,
    desc: `This is a real time chat application. This is developed by using MERN
      + Socket.io . Some of the feature of this react app is routing,
      login/register , view profile , create chat , real time messages and
      notifications etc. Feel free to check out full fuctionality. You can
      also login with Guest Users to save your time.`,
    techUsed: [
      "MaterialUI",
      "NodeJS",
      "ReactJS",
      "MongoDB",
      "react-redux",
      "socket.io",
    ],
    github: "https://github.com/codewithsahil/mern-socket-io-chat-app",
    link: "https://web-production-7ccd.up.railway.app/",
  },
  {
    title: "TicTacToe",
    image: ticTacToe,
    desc: `This is a simple tic tac toe game which we must have palyed sometime
      in our childhood on paper. This is built by using React js and simple
      css. This app has results like win/loose and Tie. And also theme
      functionality - Light/Dark`,
    techUsed: ["Css", "ReactJS"],
    github: "https://github.com/codewithsahil/tic-tact-toe-reactjs",
    link: "https://tic-tac-toe-reactjs-light-dark.vercel.app/",
  },
];

import instaClone from "../images/mern__insta__clone.JPG";
import amazonClone from "../images/amazon__clone.JPG";
import whatsappClone from "../images/whatsapp__clone.JPG";
import ticTacToe from "../images/ticTacToe.JPG";

export const projects = [
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

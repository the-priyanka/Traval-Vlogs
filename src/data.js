import React from "react";
import { FaFacebook } from "react-icons/fa";
import {
  BsSnapchat,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import img1 from "./assets/video1.jpg";
import img2 from "./assets/video2.jpg";
import img3 from "./assets/video3.jpg";
import img4 from "./assets/video4.jpg";

export const links = [
  {
    id: 1,
    url: "#",
    text: "home",
  },
  {
    id: 2,
    url: "#about",
    text: "my story",
  },
  {
    id: 3,
    url: "#vlog",
    text: "my vlog",
  },
  {
    id: 4,
    url: "#life",
    text: "my life",
  },
  {
    id: 5,
    url: "#contact",
    text: "follow me",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.youtube.com",
    icon: <BsYoutube />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <BsSnapchat />,
  },
  {
    id: 3,
    url: "https://www.instagram.com",
    icon: <BsInstagram />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <BsTwitter />,
  },
  {
    id: 5,
    url: "https://www.facebook.com",
    icon: <FaFacebook />,
  },
];
export const video = [
  {
    id: 1,
    url: "https://www.youtube.com/watch?v=cVCxtLiLJfo",
    img: `${img1}`,
    text: " Calangute Beach",
  },
  {
    id: 2,
    url: "https://youtu.be/gD0r15mAj58",
    img: `${img2}`,
    text: "Guru Shikhar | Hill Station",
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=JrIy47CUsdE",
    img: `${img3}`,
    text: "Sunset Point",
  },
  {
    id: 4,
    url: "https://www.youtube.com/watch?v=oWT4NNVCCHs",
    img: `${img4}`,
    text: "Mumbai To Goa By Train",
  },
];

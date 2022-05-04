import React from "react";
import { FaFacebook } from "react-icons/fa";
import {
  BsSnapchat,
  BsInstagram,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
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

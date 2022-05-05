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
    text: "my vlogs",
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
    url: "https://www.youtube.com/c/NJVlogs001",
    icon: <BsYoutube />,
  },
  // {
  //   id: 2,
  //   url: "https://www.twitter.com",
  //   icon: <BsSnapchat />,
  // },
  {
    id: 3,
    url: "https://www.youtube.com/redirect?event=channel_description&redir_token=QUFFLUhqa2xybGhFcmpKUk1hTGpqcUZGTXh1d2lfVUp6d3xBQ3Jtc0tuTmVkM0tSRjFQbEdjVGRQOWlIOElUdjJlbHRHVzdWaGJtemhPbU02UWpldFAxNWNGa1NhS29CWTB6OUdXN01pMU93Y0NBVW9lb09hMENsdXB5SUxYVDNralJrczl2T19nV0xRMkF6dUduUkk3ajlzQQ&q=https%3A%2F%2Fwww.instagram.com%2Fp%2FCODD9AkHGOQ%2F%3Futm_medium%3Dcopy_link",
    icon: <BsInstagram />,
  },
  // {
  //   id: 4,
  //   url: "https://www.twitter.com",
  //   icon: <BsTwitter />,
  // },
  {
    id: 5,
    url: "https://www.facebook.com/TravelPreneur-NJ-101380628636211/videos/1118124482357529/",
    icon: <FaFacebook />,
  },
];

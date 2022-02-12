import React from "react";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
  },
  {
    id: 2,
    url: "/voiceroom",
    text: "voiceroom",
  },
  {
    id: 3,
    url: "/blogs",
    text: "blogs",
  },
  {
    id: 4,
    url: "/jokes",
    text: "jokes",
  },
  {
    id: 5,
    url: "/appointment",
    text: "appointment",
  },
  {
    id: 6,
    url: "/about",
    text: "about",
  },
];

export const auth = [
  {
    id: 1,
    url: "/signup",
    icon: <FiUserPlus />,
  },
  {
    id: 2,
    url: "/signin",
    icon: <FaSignInAlt />,
  },
  {
    id: 3,
    url: "/signout",
    icon: <FaSignOutAlt />,
  },
];

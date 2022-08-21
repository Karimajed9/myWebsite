import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SideBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Experience',
    path: '/workExperience',
    icon: <IoIcons.IoMdBriefcase />,
    cName: 'nav-text'
  },
  {
    title: 'Education',
    path: '/education',
    icon: <FaIcons.FaUniversity />,
    cName: 'nav-text'
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <IoIcons.IoMdPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Tools',
    path: '/tools',
    icon: <FaIcons.FaTools />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Me',
    path: '/contact',
    icon: <IoIcons.IoMdContact />,
    cName: 'nav-text'
  }
];
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCalendar, faFolder, faFileAlt, faFileExcel, faFilePowerpoint, faUsers, faComment, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const links = [
    {
      url: 'https://mail.google.com/',
      icon: faEnvelope,
    },
    {
      url: 'https://calendar.google.com/',
      icon: faCalendar,
    },
    {
      url: 'https://drive.google.com/',
      icon: faFolder,
    },
    {
      url: 'https://docs.google.com/',
      icon: faFileAlt,
    },
    {
      url: 'https://sheets.google.com/',
      icon: faFileExcel,
    },
    {
      url: 'https://slides.google.com/',
      icon: faFilePowerpoint,
    },
    {
      url: 'https://meet.google.com/',
      icon: faUsers,
    },
    {
      url: 'https://chat.google.com/',
      icon: faComment,
    },
  ];

  return (
    <div className={`sidebar-container ${isCollapsed ? '' : 'collapsed'}`}>
      <div className="toggle-button" onClick={toggleCollapse}>
        <FontAwesomeIcon icon={isCollapsed ? faBars : faTimes} />
      </div>
      {!isCollapsed && (
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>
                <FontAwesomeIcon icon={link.icon} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;

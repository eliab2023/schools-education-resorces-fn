import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const socialMediaLinks = [
    {
      icon: faFacebook,
      url: "https://www.facebook.com/",
    },
    {
      icon: faTwitter,
      url: "https://www.twitter.com/",
    },
    {
      icon: faInstagram,
      url: "https://www.instagram.com/",
    },
    {
      icon: faGithub,
      url: "https://www.github.com/",
    },
  ];

  return (
    <footer className={`flex justify-center items-center bg-gray-800 text-gray-200 p-4 fixed w-full bottom-0`}>
      <div className="flex gap-4">
        {socialMediaLinks.map((link) => (
          <a
            key={link.icon}
            href={link.url}
            className="text-sm font-medium hover:text-gray-400"
          >
            <FontAwesomeIcon icon={link.icon} />
          </a>
        ))}
      </div>
      <p className="text-sm font-medium mt-4">&copy; 2023 Online Exam Stimulation Platform</p>
    </footer>
  );
};

export default Footer;

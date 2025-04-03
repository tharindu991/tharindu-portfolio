import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
const socials = [
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/tharindubandara/",
  },
  { icon: <FaGithub />, path: "https://github.com/tharindu991" },

  { icon: <FaTwitter />, path: "https://x.com/tharindu991" },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

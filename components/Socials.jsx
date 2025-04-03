import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/tharindu991" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/tharindubandara/",
  },
  // { icon: <FaYoutube />, path: "" },
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
            legacyBehavior
          >
            <a target="_blank" className={iconStyles}>
              {item.icon}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;

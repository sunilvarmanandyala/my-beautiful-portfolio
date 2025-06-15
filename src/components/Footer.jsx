import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="w-full py-4 border-t border-white/10 bg-black/90 text-center text-gray-400 text-sm flex flex-col items-center gap-2">
      <div className="flex space-x-4">
        <a
          href="https://github.com/SunilVarmaNandyala"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/sunil-varma-522456171/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
      <span>© {new Date().getFullYear()} Sunil Varma Nandyala. All rights reserved.</span>
    </footer>
  );
};

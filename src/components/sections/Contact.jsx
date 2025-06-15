import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then((result) => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch <span className='inline-flex items-center gap-2 ml-4'><a href="https://github.com/SunilVarmaNandyala" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.371 0 0 5.373 0 12.004c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.261.82-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.613-4.042-1.613-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.997.109-.775.418-1.304.76-1.604-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.469-2.382 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.958-.266 1.984-.399 3.003-.403 1.018.004 2.045.137 3.005.403 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.243 2.873.119 3.176.77.839 1.234 1.911 1.234 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.815 1.102.815 2.222 0 1.604-.015 2.897-.015 3.293 0 .319.216.694.825.576C20.565 21.8 24 17.303 24 12.004 24 5.373 18.627 0 12 0z"/></svg></a><a href="https://www.linkedin.com/in/sunil-varma-nandyala/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M20.451 20.451h-3.555v-5.569c0-1.328-.027-3.036-1.849-3.036-1.851 0-2.134 1.445-2.134 2.939v5.666h-3.554v-11.5h3.413v1.571h.049c.476-.9 1.637-1.849 3.368-1.849 3.598 0 4.263 2.367 4.263 5.448v6.33zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.145.926-2.07 2.07-2.07 1.143 0 2.07.925 2.07 2.07 0 1.143-.927 2.07-2.07 2.07zM7.114 20.451h-3.554v-11.5h3.554v11.5zM22.225 0h-20.451c-.977 0-1.774.797-1.774 1.775v20.451c0 .978.797 1.774 1.774 1.774h20.451c.978 0 1.775-.796 1.775-1.774v-20.451c0-.978-.797-1.775-1.775-1.775z"/></svg></a></span>
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Name..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="example@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

          <div className="flex justify-center mt-6 space-x-6 text-white">
            
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

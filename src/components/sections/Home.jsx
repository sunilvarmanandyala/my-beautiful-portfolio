import { RevealOnScroll } from "../RevealOnScroll";
import profileImg from "../../assets/profile.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
    >
      <RevealOnScroll>
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Sunil Varma
          </h1>

          <p className="text-gray-400 text-lg mb-8">
            I’m a passionate software developer currently pursuing my Master’s in Computer Science.
            I build modern, full-stack applications with Java, Spring Boot, MongoDB, React, and AI tools.
            I’m driven to solve real-world problems through scalable and intelligent systems.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image below text */}
        <div className="mt-10">
          <img
            src={1profileImg}
            alt="Sunil Varma"
            className="w-48 h-48 object-cover rounded-full shadow-lg mx-auto"
          />
        </div>
      </RevealOnScroll>
    </section>
  );
};

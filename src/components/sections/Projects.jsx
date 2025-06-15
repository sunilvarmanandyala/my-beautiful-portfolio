import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <ProjectCard
  title="AI Chatbot Kits"
  description="An embeddable AI chat widget built with Next.js and Tailwind CSS. Features include natural-language conversations powered by OpenAI’s GPT-3.5-turbo, automated lead capture via Zapier webhooks, real-time engagement tracking with Google Analytics 4, a Settings UI for custom prompts and webhooks, and a one-line widget.js embed for zero-config deployment."
  techStack={[
    "Next.js",
    "Tailwind CSS",
    "React",
    "OpenAI SDK",
    "Zapier Webhooks",
    "Google Analytics 4",
    "Vercel"
  ]}
  github="https://github.com/sunilvarmanandyala/ai-chatbot-kits"
  demo="https://ai-chatbot-kits-kor7vf67f-sunilvarmanandyalas-projects.vercel.app"
/>


            <ProjectCard
  title="Broadband Website Clone"
  description="A responsive React & Tailwind CSS clone of Midco’s site, inspired by Starlink’s modern aesthetic. Features a dynamic hero, interactive pricing & plan selectors, business & mobile pages with GSAP/Framer Motion animations, AOS scroll effects, and a custom chat widget integration."
  techStack={[
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "AOS",
    "React Router",
    "canvas-confetti"
  ]}
  github="https://github.com/sunilvarmanandyala/broadband"
  demo="https://sunilvarmanandyala.github.io/broadband/"
/>


            {/* LLM Chatbot */}
            <ProjectCard
              title="LLM-Powered Chatbot"
              description="Built using Azure AI Foundry and GPT-4. Features multi-turn conversation, prompt chaining, and semantic search for enhanced context retention."
              techStack={["GPT-4", "Azure AI Studio", "Prompt Flow", "React"]}
        
            />

            {/* Broadband Speed ML */}
            <ProjectCard
              title="Broadband Speed Prediction"
              description="Trained a regression model to predict download speeds using real Ookla data. Includes feature encoding, evaluation metrics, and Matplotlib visualizations."
              techStack={["Python", "Pandas", "scikit-learn", "Matplotlib"]}
           />

            {/* Library Management System */}
            <ProjectCard
              title="Library Management System"
              description="Full-stack system using Spring Boot, Angular, and MySQL. Includes user authentication, search functionality, and Jenkins-based CI/CD."
              techStack={["Spring Boot", "Angular", "MySQL", "Jenkins"]}
              github="https://github.com/SunilVarmaNandyala/"
            />

            {/* Publication Automation */}
            <ProjectCard
              title="Publication Automation System"
              description="Tool to gather research data from Google Scholar and automate formatting for conference publication. Presented at a national conference."
              techStack={["Python", "BeautifulSoup", "Automation"]}
  
            />

            {/* Healthcare Data Analytics Platform */}
            <ProjectCard
              title="Recipe Recommendation Syste"
              description="Developed a recipe recommendation engine using BM25, TF-IDF, and tokenization. Provides personalized recipe suggestions based on ingredient relevance."
              techStack={["ML", "BM25", "TF-IDF"]}
            />


          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

const ProjectCard = ({ title, description, techStack, github, demo }) => (
  <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {techStack.map((tech, key) => (
        <span
          key={key}
          className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
        >
          {tech}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center">
      {github && (
        <a
          href={github}
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          GitHub →
        </a>
      )}
      {demo && (
        <a
          href={demo}
          target="_blank"
          className="text-blue-400 hover:text-blue-300 transition-colors my-4"
        >
          Live Demo →
        </a>
      )}
    </div>
  </div>
);

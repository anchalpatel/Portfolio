import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profile from "../Assets/ProfilePhoto.jpeg";
import resume from "../Assets/Anchal_Patel_Software_Developer.pdf";

function Home() {
  return (
   <section id="home" className="flex items-center">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(1.5rem,4vw,3rem)] items-center">

        {/* LEFT */}
        <div className="space-y-[clamp(1rem,2.5vw,1.5rem)] text-center sm:text-left">

          {/* Heading */}
          <h1 className="font-bold leading-tight text-[clamp(2rem,5vw,4rem)]">
            Hi, I'm{" "}
            <span className="block sm:inline bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Anchal Patel
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed text-[clamp(1rem,2.5vw,1.125rem)] max-w-[min(100%,500px)] mx-auto sm:mx-0">
            Backend-focused Software Engineer with hands-on experience building scalable REST APIs and multi-tenant HRMS systems using .NET Core, PostgreSQL, and Azure DevOps. Currently expanding into Data Engineering — designing ETL pipelines and optimizing databases for analytical workloads.
          </p>

          {/* Icons */}
          <div className="flex justify-center sm:justify-start gap-[clamp(1rem,2vw,1.5rem)] items-center">

            <a
              href="https://www.linkedin.com/in/anchalpatel4/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition duration-300 hover:scale-110"
            >
              <FaLinkedin className="text-[clamp(1.4rem,2.5vw,1.8rem)]" />
            </a>

            <a
              href="https://github.com/anchalpatel"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transition duration-300 hover:scale-110"
            >
              <FaGithub className="text-[clamp(1.4rem,2.5vw,1.8rem)]" />
            </a>

            <a
              href="mailto:aanchalpatel4404@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition duration-300 hover:scale-110"
            >
              <MdEmail className="text-[clamp(1.4rem,2.5vw,1.8rem)]" />
            </a>

          </div>

          {/* CV Button */}
          <div>
            <a
              href={resume}
              download
              className="inline-block px-[clamp(1.2rem,2vw,1.8rem)] py-[clamp(0.6rem,1.5vw,0.9rem)] 
              bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-white font-semibold 
              hover:scale-105 transition duration-300"
            >
              Download CV
            </a>
          </div>

        </div>

        {/* RIGHT (IMAGE) */}
        <div className="flex justify-center">
          <div className="relative w-[70%] sm:w-[90%] md:w-[95%] max-w-[350px] aspect-square">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-[60px] rounded-full"></div>

            {/* Image */}
            <img
              src={profile}
              alt="Anchal Patel"
              className="relative w-full h-full object-cover rounded-full border border-white/10"
            />

          </div>
        </div>

      </div>

      </div>
    </section>
  );
}

export default Home;
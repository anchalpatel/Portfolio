import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { personalInfo, hobbies, languages, education } from "../Constants/AboutData";

const iconMap = {
  Name: <FaUser className="text-blue-400 shrink-0" />,
  Email: <FaEnvelope className="text-purple-400 shrink-0" />,
  Contact: <FaPhone className="text-blue-400 shrink-0" />,
  Location: <FaMapMarkerAlt className="text-purple-400 shrink-0" />,
};

const renderValue = (label, value) => {
  if (label === "Email")
    return <a href={`mailto:${value}`} className="text-gray-300 text-sm break-all hover:text-blue-400 transition-colors duration-200">{value}</a>;
  if (label === "Contact")
    return <a href={`tel:${value}`} className="text-gray-300 hover:text-blue-400 transition-colors duration-200">{value}</a>;
  return <span className="text-gray-300 text-sm">{value}</span>;
};

function About() {
  return (
    <section id="about" className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">

        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-8">
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {/* PERSONAL INFO */}
            <div className="p-6 rounded-2xl border border-white/10 hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out">
              <h3 className="mb-4 font-semibold text-white">Personal Info</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {personalInfo.map(({ label, value }) => (
                  <div key={label} className="flex items-center gap-3">
                    {iconMap[label]}
                    {renderValue(label, value)}
                  </div>
                ))}
              </div>
            </div>

            {/* HOBBIES */}
          {/* <div className="p-6 rounded-2xl border border-white/10 hover:scale-[1.02] transition-all duration-300">
              <h3 className="mb-3 font-semibold text-white">Hobbies</h3>
              <div className="flex flex-wrap gap-2">
                {hobbies.map((item, i) => (
                  <span key={i} className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300">{item}</span>
                ))}
              </div>
            </div> */}

            {/* LANGUAGES */}
            <div className="p-6 rounded-2xl border border-white/10 hover:scale-[1.02] transition-all duration-300">
              <h3 className="mb-3 font-semibold text-white">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((item, i) => (
                  <span key={i} className="px-3 py-1 text-sm rounded-full bg-purple-500/20 text-purple-300">{item}</span>
                ))}
              </div>
            </div>

          </div>

          {/* CENTER LINE */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-transparent via-blue-500/40 to-transparent" />

          {/* RIGHT SIDE - EDUCATION STEPPER */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-6">Education</h3>
            <div className="relative">
              <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-500/60 via-purple-500/40 to-transparent" />
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative flex gap-6 pl-8">
                    <div className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 ring-4 ring-[#0B0F19] shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-white leading-snug">{edu.degree}</h4>
                      <p className="text-gray-400 text-sm mt-0.5">{edu.institute}</p>
                      <div className="flex justify-between flex-wrap gap-1 mt-1">
                        <span className="text-xs text-gray-500">{edu.duration}</span>
                        <span className="text-xs text-gray-500">{edu.location}</span>
                      </div>
                      <p className="text-blue-400 text-sm mt-1">{edu.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
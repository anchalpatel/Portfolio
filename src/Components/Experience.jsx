import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";
import { experiences } from "../Constants/ExperienceData";

function Experience() {
  return (
    <section id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full">

        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-8">
          Work{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-500/60 via-purple-500/40 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex gap-6 pl-8">

                {/* Dot */}
                <div className="absolute left-0 top-[6px] w-4 h-4 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 ring-4 ring-[#0B0F19] shrink-0" />

                <div className="flex-1">

                  {/* Role + company */}
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h4 className="font-semibold text-white text-base leading-snug">{exp.role}</h4>
                      <p className="text-blue-400 text-sm mt-0.5">{exp.company}</p>
                    </div>

                    {/* Date + location */}
                    <div className="flex flex-col items-end gap-1 shrink-0">
                      <div className="flex items-center gap-1.5">
                        <FaCalendarAlt className="text-purple-400 shrink-0" />
                        <span className="text-sm text-gray-300">{exp.start} — {exp.end}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="text-blue-400 shrink-0" />
                        <span className="text-sm text-gray-300">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-3 space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-300">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="pt-6 pb-12">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-bold mb-10">
          Get{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            In Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* 🔵 FORM */}
          <form
            action="https://formspree.io/f/xaqavqpz"
            method="POST"
            className="space-y-6 w-full"
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-[#0b0b0f] border border-white/10 text-sm focus:outline-none focus:border-blue-500/50"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-[#0b0b0f] border border-white/10 text-sm focus:outline-none focus:border-blue-500/50"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="w-full px-5 py-3.5 rounded-xl bg-[#0b0b0f] border border-white/10 text-sm focus:outline-none focus:border-blue-500/50"
            />

            <input type="text" name="_gotcha" className="hidden" />

            <motion.button
              type="submit"
              whileTap={{ scale: 0.96 }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium shadow-md hover:shadow-xl transition"
            >
              Send Message
            </motion.button>
          </form>

          {/* 🟣 CONTACT DETAILS + LINKS */}
          <div className="flex flex-col gap-8">

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Feel free to reach out for collaborations, opportunities, or just a quick hello 👋
            </p>

            {/* 📧 Contact Info */}
            <div className="flex flex-col gap-4">

              <a
                href="mailto:yourmail@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition"
              >
                <FaEnvelope className="text-xl" />
                <span className="text-sm">aanchalpatel4404@gmail.com</span>
              </a>

              <a
                href="tel:+919023346608"
                className="flex items-center gap-4 text-gray-300 hover:text-green-400 transition"
              >
                <FaPhoneAlt className="text-xl" />
                <span className="text-sm">+91 9023346608</span>
              </a>

            </div>

            {/* 🔗 Social Links */}
            <div className="flex flex-col gap-5">

              <a
                href="https://github.com/anchalpatel/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition"
              >
                <FaGithub className="text-2xl" />
                <span className="text-base">GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/anchalpatel4/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition"
              >
                <FaLinkedin className="text-2xl" />
                <span className="text-base">LinkedIn</span>
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
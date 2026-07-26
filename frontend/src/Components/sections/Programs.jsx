import { motion } from "framer-motion";
import {
  FaBaby,
  FaChild,
  FaBookReader,
  FaUserGraduate,
} from "react-icons/fa";

const programs = [
  {
    icon: <FaBaby />,
    title: "Play Group",
    age: "2 - 3 Years",
    description:
      "A playful environment that encourages curiosity, creativity and early social development.",
    color: "bg-pink-100 text-pink-500",
  },
  {
    icon: <FaChild />,
    title: "Nursery",
    age: "3 - 4 Years",
    description:
      "Building communication skills, confidence and learning through fun activities.",
    color: "bg-yellow-100 text-yellow-500",
  },
  {
    icon: <FaBookReader />,
    title: "Junior KG",
    age: "4 - 5 Years",
    description:
      "Developing literacy, numeracy and creative thinking through engaging lessons.",
    color: "bg-green-100 text-green-500",
  },
  {
    icon: <FaUserGraduate />,
    title: "Senior KG",
    age: "5 - 6 Years",
    description:
      "Preparing children for primary school with confidence, independence and leadership.",
    color: "bg-blue-100 text-blue-500",
  },
];

const Programs = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
            Our Programs
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-800 lg:text-5xl">
            Learning Designed For Every Stage
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 leading-8">
            Our curriculum is carefully designed to help every child learn,
            explore and grow with confidence.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <div
                className={`inline-flex rounded-2xl p-4 text-4xl ${program.color}`}
              >
                {program.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-800">
                {program.title}
              </h3>

              <p className="mt-2 font-semibold text-red-500">
                Age : {program.age}
              </p>

              <p className="mt-4 leading-7 text-slate-600">
                {program.description}
              </p>

              <button className="mt-8 rounded-full bg-red-500 px-6 py-3 font-semibold text-white transition hover:bg-red-600">
                Learn More
              </button>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Programs;
import {motion} from "framer-motion";
import {
  FaBus,
  FaBook,
  FaVideo,
  FaTree,
  FaFirstAid,
  FaUtensils,
} from "react-icons/fa";

const facilities = [
  {
    icon: <FaBus />,
    title: "Transport Facility",
    description:
      "Safe and reliable transportation with trained drivers and attendants.",
    color: "bg-blue-100 text-blue-500",
  },
  {
    icon: <FaBook />,
    title: "Smart Classrooms",
    description:
      "Interactive classrooms that make learning enjoyable and engaging.",
    color: "bg-red-100 text-red-500",
  },
  {
    icon: <FaVideo />,
    title: "CCTV Surveillance",
    description:
      "Complete campus monitoring to ensure children's safety.",
    color: "bg-green-100 text-green-500",
  },
  {
    icon: <FaTree />,
    title: "Outdoor Play Area",
    description:
      "Safe outdoor activities for physical growth and confidence.",
    color: "bg-yellow-100 text-yellow-500",
  },
  {
    icon: <FaFirstAid />,
    title: "Health & Hygiene",
    description:
      "Clean classrooms with proper hygiene and first-aid facilities.",
    color: "bg-pink-100 text-pink-500",
  },
  {
    icon: <FaUtensils />,
    title: "Healthy Snacks",
    description:
      "Nutritious meals and healthy eating habits for every child.",
    color: "bg-purple-100 text-purple-500",
  },
];

const Facilities = () => {
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
          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-600">
            Campus Facilities
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-800 lg:text-5xl">
            Everything Your Child Needs
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We provide a safe, modern and joyful learning environment where
            children can grow with confidence every day.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <div
                className={`inline-flex rounded-2xl p-4 text-4xl ${facility.color}`}
              >
                {facility.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-800">
                {facility.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {facility.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Facilities;
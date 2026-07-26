import {motion} from "framer-motion";

import{
    FaShieldAlt,
    FaGraduationCap,
    FaPalette,
    FaHeart,
    FaUserFriends,
    FaChalkboardTeacher,
} from "react-icons/fa";

const features=[
    {
        icon: <FaShieldAlt />,
        title: "Safe & Secure Campus", 
        description:
        "A safe, clean and child-friendly environment with complete security.",
        color: "text-red-500",
        bg: "bg-red-50",
    },
    {
        icon: <FaGraduationCap/>,
        title: "Experienced Teachers",
        description: "Qualified teachers helping every child learn with confidence",
        color: "text-blue-500",
        bg: "bg-blue-50",
    },
     {
    icon: <FaPalette />,
    title: "Activity Based Learning",
    description:
      "Creative activities that make learning enjoyable every single day.",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: <FaHeart />,
    title: "Caring Environment",
    description:
      "Every child is treated with love, patience and individual attention.",
    color: "text-pink-500",
    bg: "bg-pink-50",
  },
  {
    icon: <FaUserFriends />,
    title: "Parent Communication",
    description:
      "Regular updates and meetings keep parents involved in learning.",
    color: "text-green-500",
    bg: "bg-green-50",
  },
  {
    icon: <FaChalkboardTeacher/>,
    title: "Holistic Development",
    description:
    "Developing creativity, confidence, communication and leadership.",
    color: "text-purple-500",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

const WhyChooseUs =() =>{
    return(
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7x1 px-6">

                <motion.div
                initial={{opacity:0, y: 40}}
                whileInView={{opacity:1, Y:0}}
                transition={{duration: 0.7}}
                viewport={{once: true}}
                className="text-center">
                    <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
                        Why Choose Us?
                    </span>

                    <h2 className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
                        Why Parents Love Euro Toddlers
                    </h2>
                     <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We provide a joyful, safe and inspiring environment where every
            child learns through play, creativity and exploration.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
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
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all"
            >
              <div
                className={`inline-flex rounded-2xl p-4 text-3xl ${feature.bg} ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-800">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;



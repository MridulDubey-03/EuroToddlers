import {motion} from "framer-motion";
import {
    FaPuzzlePiece,
    FaPaintBrush,
    FaMusic,
    FaRunning,
} from "react-icons/fa";

const methods =[
    {
        icon: <FaPuzzlePiece />,
    title: "Play Base Learning",
    description:
    "Children learn naturally through games, storytelling and interactive activities.",
    color: "bg-red-100 text-red-500",
},
{
    icon: <FaPaintBrush/>,
    title: "Creative Acitivites",
    description: 
    "Art, craft and hands-on activities encourage imagination and creativity.",
    color: "bg-yellow-100 text-yellow-500",
},
{
    icon: <FaMusic/>,
    title:"Music & Dance",
    description: 
    "Rhymes, music and movement make learning joyful and improve confidence.",
    color: "bg-blue-100 text-blue-500", 
},
{
    icon: <FaRunning />,
    title: "Physical Development",
    description:
      "Indoor and outdoor activities improve coordination, balance and teamwork.",
    color: "bg-green-100 text-green-500",
  },
];

const LearningMethodology =() =>{
    return(
        <section className="bg-white py-24">
         <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Learning Methodology
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-800 lg:text-5xl">
            Learning Beyond The Classroom
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We believe children learn best through exploration, creativity,
            play and real-life experiences.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {methods.map((item, index) => (
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
                scale: 1.05,
                y: -8,
              }}
              className="rounded-3xl bg-slate-50 p-8 shadow-lg"
            >
              <div
                className={`inline-flex rounded-2xl p-4 text-4xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-800">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
    );
};
export default LearningMethodology;

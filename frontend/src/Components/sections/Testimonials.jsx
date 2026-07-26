import { motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Parent Name",
    role: "Parent",
    review:
      "Euro Toddlers has created a caring and joyful environment where our child feels comfortable, confident and excited to learn.",
  },
  {
    name: "Parent Name",
    role: "Parent",
    review:
      "The teachers are supportive and attentive. We appreciate the activity-based approach and regular communication with parents.",
  },
  {
    name: "Parent Name",
    role: "Parent",
    review:
      "We have seen wonderful growth in our child's confidence, communication and creativity since joining the school.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
            Parent Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-800 lg:text-5xl">
            What Parents Say About Us
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            The trust of parents inspires us to provide a safe, caring and
            joyful learning experience for every child.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <FaQuoteLeft className="text-4xl text-red-200" />

              <div className="mt-6 flex gap-1 text-yellow-400">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <p className="mt-6 leading-7 text-slate-600">
                "{testimonial.review}"
              </p>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <h3 className="font-bold text-slate-800">
                  {testimonial.name}
                </h3>

                <p className="mt-1 text-sm text-red-500">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

import Section from "../../common/Section";
import SectionHeader from "../../common/SectionHeader";
import { testimonials } from "../../../data/home";
import { staggerReveal } from "../../../utils/animations";

const Testimonials = () => {
  return (
    <Section bg="bg-slate-50">
      <SectionHeader
        badge="Parent Testimonials"
        title="What Parents Say About Us"
        description="The trust of parents inspires us to provide a safe, caring and joyful learning experience for every child."
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} index={index} />
        ))}
      </div>
    </Section>
  );
};

function TestimonialCard({ name, role, review, index }) {
  return (
    <motion.div
      {...staggerReveal(index)}
      className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      <FaQuoteLeft className="text-4xl text-red-200" />

      <div className="mt-6 flex gap-1 text-yellow-400">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <p className="mt-6 leading-7 text-slate-600">&ldquo;{review}&rdquo;</p>

      <div className="mt-8 border-t border-slate-100 pt-6">
        <h3 className="font-bold text-slate-800">{name}</h3>
        <p className="mt-1 text-sm text-red-500">{role}</p>
      </div>
    </motion.div>
  );
}

export default Testimonials;

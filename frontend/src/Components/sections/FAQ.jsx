import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const faqData = [
  {
    question: "What age groups do you accept?",
    answer:
      "Euro Toddlers offers age-appropriate preschool programs for young children. Please contact the school for the current admission age criteria for each program.",
  },
  {
    question: "What teaching method does Euro Toddlers follow?",
    answer:
      "We focus on activity-based and play-based learning that encourages creativity, curiosity, communication and overall development.",
  },
  {
    question: "How can I apply for admission?",
    answer:
      "Parents can contact the school or submit an admission enquiry through the website. Our team will guide you through the admission process.",
  },
  {
    question: "Can parents download the syllabus and holiday list?",
    answer:
      "Yes. The syllabus and holiday list will be available in the Resources section of the website for parents to view and download.",
  },
  {
    question: "How can I contact the school?",
    answer:
      "You can contact Euro Toddlers using the phone number, email address or enquiry form available on the Contact page.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-800 lg:text-5xl">
            Have Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Find answers to some of the most common questions parents ask
            about Euro Toddlers.
          </p>
        </motion.div>

        {/* FAQ List */}

        <div className="mt-14 space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-800">
                  {faq.question}
                </span>

                <span className="text-red-500">
                  {activeIndex === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </button>

              {activeIndex === index && (
                <div className="border-t border-slate-100 px-6 py-5">
                  <p className="leading-7 text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
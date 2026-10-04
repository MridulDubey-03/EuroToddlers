import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// Question/answer list where one item is open at a time.
// items: [{ question, answer }]
const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 p-6 text-left"
            >
              <span className="text-lg font-semibold text-slate-800">
                {item.question}
              </span>
              <span className="text-red-500">
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-slate-100 px-6 py-5">
                <p className="leading-7 text-slate-600">{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

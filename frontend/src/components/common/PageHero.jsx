import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaArrowRight } from "react-icons/fa";

import Badge from "./Badge";

// Hero banner for inner pages (About, Programs, Contact, ...)
const PageHero = ({ badge, title, highlight, description, breadcrumb, image }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-red-50">
      {/* Decorative Circles */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-red-100 opacity-40 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-100 opacity-40 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {badge && <Badge>{badge}</Badge>}

            <h1 className="mt-8 text-5xl leading-tight font-extrabold text-slate-800 lg:text-6xl">
              {title}
              {highlight && (
                <span className="block text-red-500">{highlight}</span>
              )}
            </h1>

            {description && (
              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                {description}
              </p>
            )}

            {/* Breadcrumb */}
            {breadcrumb && (
              <div className="mt-10 flex items-center gap-3 text-sm">
                <Link
                  to="/"
                  className="flex items-center gap-2 text-red-500 hover:text-red-600"
                >
                  <FaHome />
                  Home
                </Link>
                <FaArrowRight className="text-slate-400" />
                <span className="font-semibold text-slate-700">{breadcrumb}</span>
              </div>
            )}
          </motion.div>

          {/* Right */}
          {image && (
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-[40px] bg-red-200 opacity-30 blur-3xl"></div>
              <img
                src={image}
                alt="Euro Toddlers"
                className="relative mx-auto w-full max-w-lg rounded-[40px] bg-white p-8 shadow-2xl"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaArrowRight,
} from "react-icons/fa";

import heroImage from "../../assets/images/EuroToddlerLogo.png";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-red-50">

      {/* Decorative Circles */}

      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-red-100 blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
              About Euro Toddlers
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-slate-800 lg:text-6xl">
              Building Strong Foundations
              <span className="block text-red-500">
                For Lifelong Learning
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              At Euro Toddlers International Pre School, every child
              is encouraged to learn, discover and grow through
              joyful experiences in a safe and nurturing environment.
            </p>

            {/* Breadcrumb */}

            <div className="mt-10 flex items-center gap-3 text-sm">

              <Link
                to="/"
                className="flex items-center gap-2 text-red-500 hover:text-red-600"
              >
                <FaHome />
                Home
              </Link>

              <FaArrowRight className="text-slate-400" />

              <span className="font-semibold text-slate-700">
                About Us
              </span>

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="absolute inset-0 rounded-[40px] bg-red-200 blur-3xl opacity-30"></div>

            <img
              src={heroImage}
              alt="Euro Toddlers"
              className="relative mx-auto w-full max-w-lg rounded-[40px] bg-white p-8 shadow-2xl"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default AboutHero;
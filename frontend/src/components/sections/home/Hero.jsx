import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

import Button from "../../common/Button";
import StatCard from "../../common/StatCard";
import { stats } from "../../../data/school";
import heroImage from "../../../assets/images/EuroToddlerLogo.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-7 py-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
              🎉 Admissions Open 2026–27
            </div>

            <h1 className="text-5xl leading-tight font-extrabold text-slate-800 lg:text-6xl">
              Where Little Minds
              <span className="block text-red-500">Grow Into Big Dreams</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
              We nurture curiosity, creativity, and confidence through joyful,
              activity-based learning in a safe and caring environment.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button to="/admissions" size="lg" icon={FaArrowRight}>
                Enroll Now
              </Button>
              <Button to="/programs" size="lg" variant="outline">
                Explore Programs
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-5">
              {stats.map((stat) => (
                <StatCard key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={heroImage}
              alt="Euro Toddlers"
              className="mx-auto w-full max-w-lg rounded-[35px] shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

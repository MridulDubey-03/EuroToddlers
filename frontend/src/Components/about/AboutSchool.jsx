import { motion } from "framer-motion";
import {
  FaSchool,
  FaAward,
  FaHeart,
  FaChild,
} from "react-icons/fa";

import schoolImage from "../../assets/images/EuroToddlerLogo.png";

const AboutSchool = () => {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Image */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <img
              src={schoolImage}
              alt="Euro Toddlers"
              className="rounded-[35px] shadow-2xl"
            />

          </motion.div>

          {/* Right Content */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <span className="rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600">
              Our Story
            </span>

            <h2 className="mt-6 text-5xl font-extrabold text-slate-800">
              Welcome To
              <span className="block text-red-500">
                Euro Toddlers
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Euro Toddlers International Pre School provides
              a joyful learning environment where every child
              develops academically, socially and emotionally.

              We believe every child is unique and deserves
              individual attention, love and encouragement.

            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              Through activity-based learning, experienced
              teachers and modern classrooms, we prepare
              children for a bright future.

            </p>

            {/* Features */}

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <Feature
                icon={<FaSchool />}
                title="Modern Classrooms"
              />

              <Feature
                icon={<FaAward />}
                title="Experienced Teachers"
              />

              <Feature
                icon={<FaHeart />}
                title="Safe Environment"
              />

              <Feature
                icon={<FaChild />}
                title="Activity Based Learning"
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

function Feature({ icon, title }) {
  return (

    <div className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 shadow">

      <div className="rounded-full bg-red-100 p-4 text-red-500 text-2xl">
        {icon}
      </div>

      <h3 className="font-semibold text-slate-800">
        {title}
      </h3>

    </div>

  );
}

export default AboutSchool;
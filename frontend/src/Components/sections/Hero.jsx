import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../../assets/images/EuroToddlerLogo.png";



const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-7 py-16">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">


          {/* left content */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>


            {/*Badge*/}
            <div className="mb-6 inline-flex rounded-full bg-red-100 px-5 py-2 text-sm font-semibold text-red-600 ">🎉 Admissions Open 2026–27</div>

            {/*Headings*/}


            <h1 className="text-5xl font-extrabold leading-tight text-slate-800 lg:text-6xl">Where Little Minds
              <br></br>
              <span className="text-red-500">Grow Into Big Dreams</span>
            </h1>

            {/*Descriptions*/}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">We nurture curiosity, creativity,
              and confidence through joyful,activity-based learning in a safe and caring environment.</p>


            {/*Buttons*/}

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-600">Enroll Now
                <FaArrowRight />
              </button>

              <button className="rounded-full border-2 border-red-500 px-8 py-4 font-semibold text-red-500 transition-all duration-300 hover:bg-red-50">
                Explore Programs
              </button>
            </div>

            {/*Stats*/}

            <div className="mt-12 grid grid-cols-3 gap-5">
              <div className="rounded-2xl bg-white p-5 text-center shadow-lg">
                <h2 className="text-3xl font-bold text-red-500">500+</h2>
                <p className="mt-2 text-sm text-slate-600">Happy Students</p>
              </div>

              <div className="rounded-2xl bg-white p-5 text-center shadow-lg">
                <h2 className="text-3xl font-bold text-green-500">15+</h2>
                <p className="mt-2 text-sm text-slate-600"> Safe Campus</p>
              </div>
            </div>
          </motion.div>


          {/*Right Image*/}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={heroImage}
              alt="EuroToddlers"
              className="mx-auto w-full max-w-lg rounded-[35px] shadow-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

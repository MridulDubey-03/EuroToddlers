import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
    title: "Learning Together",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800",
    title: "Creative Activities",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800",
    title: "Fun & Play",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800",
    title: "Happy Moments",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1602030028438-4cf153cbae9e?w=800",
    title: "Classroom Activities",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=800",
    title: "Growing Together",
  },
];

const GalleryPreview = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-600">
            Our Gallery
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-slate-800 lg:text-5xl">
            Our Happy Moments
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            A glimpse into the joyful learning, creativity, celebrations and
            unforgettable moments at Euro Toddlers.
          </p>
        </motion.div>

        {/* Gallery Grid */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent">
                <h3 className="p-6 text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}

        <div className="mt-12 flex justify-center">
          <Link
            to="/gallery"
            className="flex items-center gap-2 rounded-full bg-red-500 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-red-600"
          >
            View Full Gallery
            <FaArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GalleryPreview;
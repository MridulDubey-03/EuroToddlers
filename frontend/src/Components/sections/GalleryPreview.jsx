import { motion } from "framer-motion";

const galleryImages = [
  {
    title: "Creative Learning",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900",
  },
  {
    title: "Fun Activities",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900",
  },
  {
    title: "Classroom Moments",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=900",
  },
  {
    title: "Art & Craft",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=900",
  },
  {
    title: "Outdoor Play",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900",
  },
  {
    title: "Happy Kids",
    image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?w=900",
  },
];

const GalleryPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Our Gallery
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Every Smile Tells A Story
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore joyful moments, exciting activities, creative classrooms,
            and unforgettable memories at Euro Toddlers.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid md:grid-cols-3 gap-8">
          {galleryImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl shadow-lg"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition">
            View Full Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryPreview;
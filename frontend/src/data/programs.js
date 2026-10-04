import {
  FaBaby,
  FaChild,
  FaBookReader,
  FaUserGraduate,
  FaComments,
  FaShapes,
  FaPaintBrush,
  FaRunning,
  FaBook,
  FaCalculator,
  FaGlobeAsia,
  FaMusic,
} from "react-icons/fa";

// Programs offered by the school. Used by Home, Programs, Admissions and Contact.
//
// Values in [brackets] are placeholders: replace them with the real details.
// Syllabus PDFs: put the file in frontend/public/downloads/ and set
// `syllabusFile` to its path, e.g. "/downloads/play-group-syllabus.pdf".
// The download button stays disabled while `syllabusFile` is empty.

// What the fees cover. A program can override this with its own `feeIncludes`.
export const feeIncludes = [
  "Books, worksheets and learning material",
  "Art, craft and activity material",
  "School bag and learning kit",
  "Festival celebrations and annual events",
  "Regular parent-teacher meetings",
  "Term-wise progress reports",
];

const fees = (note = "Tuition fee can be paid in [3] instalments.") => ({
  items: [
    { label: "Admission Fee (one-time)", amount: "₹[Amount]" }, // TODO: replace
    { label: "Tuition Fee (annual)", amount: "₹[Amount]" }, // TODO: replace
    { label: "Activity & Material Fee (annual)", amount: "₹[Amount]" }, // TODO: replace
  ],
  note, // TODO: replace
});

export const programs = [
  {
    slug: "play-group",
    icon: FaBaby,
    title: "Play Group",
    age: "2 - 3 Years",
    description:
      "A playful environment that encourages curiosity, creativity and early social development.",
    color: "bg-pink-100 text-pink-500",
    overview:
      "Play Group is your child's first step into school. Through play, songs and sensory activities, children settle into a routine, make friends and begin exploring the world around them with confidence.",
    facts: {
      timing: "[9:00 AM - 11:30 AM]", // TODO: replace
      classSize: "[15] children", // TODO: replace
      ratio: "[1:8]", // TODO: replace
    },
    highlights: [
      "Settling into a happy school routine",
      "Recognising colours, shapes and sounds",
      "Building early speaking and listening skills",
      "Sharing, taking turns and making friends",
      "Developing fine and gross motor skills",
    ],
    curriculum: [
      {
        icon: FaComments,
        title: "Language",
        color: "bg-red-100 text-red-500",
        topics: ["Rhymes and songs", "Picture talk", "Story time", "New words every week"],
      },
      {
        icon: FaShapes,
        title: "Early Concepts",
        color: "bg-blue-100 text-blue-500",
        topics: ["Colours and shapes", "Big and small", "Sorting and matching", "Counting songs"],
      },
      {
        icon: FaPaintBrush,
        title: "Creative Play",
        color: "bg-yellow-100 text-yellow-500",
        topics: ["Finger painting", "Clay and play dough", "Music and movement", "Pretend play"],
      },
      {
        icon: FaRunning,
        title: "Physical & Social",
        color: "bg-green-100 text-green-500",
        topics: ["Outdoor play", "Ball games", "Group activities", "Good habits"],
      },
    ],
    syllabusFile: "", // TODO: e.g. "/downloads/play-group-syllabus.pdf"
    fees: fees(),
  },
  {
    slug: "nursery",
    icon: FaChild,
    title: "Nursery",
    age: "3 - 4 Years",
    description:
      "Building communication skills, confidence and learning through fun activities.",
    color: "bg-yellow-100 text-yellow-500",
    overview:
      "In Nursery, children grow their vocabulary, start recognising letters and numbers, and express themselves through art and music. Activity-based lessons keep learning joyful while building independence.",
    facts: {
      timing: "[9:00 AM - 12:00 PM]", // TODO: replace
      classSize: "[20] children", // TODO: replace
      ratio: "[1:10]", // TODO: replace
    },
    highlights: [
      "Recognising letters and their sounds",
      "Counting and number recognition up to 20",
      "Speaking confidently in full sentences",
      "Pencil grip and early writing patterns",
      "Independence in daily routines",
    ],
    curriculum: [
      {
        icon: FaBook,
        title: "Language & Literacy",
        color: "bg-red-100 text-red-500",
        topics: ["Phonics A–Z", "Rhymes and stories", "Show and tell", "Pre-writing patterns"],
      },
      {
        icon: FaCalculator,
        title: "Numbers",
        color: "bg-blue-100 text-blue-500",
        topics: ["Numbers 1–20", "Counting objects", "Shapes and patterns", "Comparing sizes"],
      },
      {
        icon: FaGlobeAsia,
        title: "My World",
        color: "bg-green-100 text-green-500",
        topics: ["My family", "Animals and plants", "Fruits and vegetables", "Seasons"],
      },
      {
        icon: FaPaintBrush,
        title: "Creative Arts",
        color: "bg-yellow-100 text-yellow-500",
        topics: ["Colouring", "Craft activities", "Music and dance", "Role play"],
      },
    ],
    syllabusFile: "", // TODO: e.g. "/downloads/nursery-syllabus.pdf"
    fees: fees(),
  },
  {
    slug: "junior-kg",
    icon: FaBookReader,
    title: "Junior KG",
    age: "4 - 5 Years",
    description:
      "Developing literacy, numeracy and creative thinking through engaging lessons.",
    color: "bg-green-100 text-green-500",
    overview:
      "Junior KG builds strong foundations in reading, writing and numbers. Children learn to blend sounds into words, write letters neatly and solve simple problems, while art and play keep curiosity alive.",
    facts: {
      timing: "[9:00 AM - 12:30 PM]", // TODO: replace
      classSize: "[25] children", // TODO: replace
      ratio: "[1:12]", // TODO: replace
    },
    highlights: [
      "Reading simple three-letter words",
      "Writing capital and small letters",
      "Numbers up to 50 and simple addition",
      "Expressing ideas through drawing and talk",
      "Working well in groups",
    ],
    curriculum: [
      {
        icon: FaBook,
        title: "English",
        color: "bg-red-100 text-red-500",
        topics: ["Blending sounds", "Sight words", "Letter writing", "Reading short sentences"],
      },
      {
        icon: FaCalculator,
        title: "Mathematics",
        color: "bg-blue-100 text-blue-500",
        topics: ["Numbers 1–50", "Before, after and between", "Simple addition", "Shapes and patterns"],
      },
      {
        icon: FaGlobeAsia,
        title: "Environmental Studies",
        color: "bg-green-100 text-green-500",
        topics: ["Community helpers", "Transport", "Healthy habits", "Our earth"],
      },
      {
        icon: FaMusic,
        title: "Arts & Activities",
        color: "bg-yellow-100 text-yellow-500",
        topics: ["Drawing and colouring", "Craft projects", "Music and dance", "Yoga and games"],
      },
    ],
    syllabusFile: "", // TODO: e.g. "/downloads/junior-kg-syllabus.pdf"
    fees: fees(),
  },
  {
    slug: "senior-kg",
    icon: FaUserGraduate,
    title: "Senior KG",
    age: "5 - 6 Years",
    description:
      "Preparing children for primary school with confidence, independence and leadership.",
    color: "bg-blue-100 text-blue-500",
    overview:
      "Senior KG prepares children for a smooth move to primary school. They read and write independently, work with numbers up to 100, and build the confidence, focus and leadership skills they need for Grade 1.",
    facts: {
      timing: "[9:00 AM - 1:00 PM]", // TODO: replace
      classSize: "[25] children", // TODO: replace
      ratio: "[1:12]", // TODO: replace
    },
    highlights: [
      "Reading short stories independently",
      "Writing words and simple sentences",
      "Numbers up to 100, addition and subtraction",
      "Speaking confidently in front of a group",
      "Ready for Grade 1",
    ],
    curriculum: [
      {
        icon: FaBook,
        title: "English",
        color: "bg-red-100 text-red-500",
        topics: ["Reading stories", "Sentence writing", "Opposites and rhyming words", "Spelling practice"],
      },
      {
        icon: FaCalculator,
        title: "Mathematics",
        color: "bg-blue-100 text-blue-500",
        topics: ["Numbers 1–100", "Addition and subtraction", "Time and money", "Measurement"],
      },
      {
        icon: FaGlobeAsia,
        title: "Environmental Studies",
        color: "bg-green-100 text-green-500",
        topics: ["Our body", "Plants and animals", "Water and air", "Safety rules"],
      },
      {
        icon: FaMusic,
        title: "Arts & Activities",
        color: "bg-yellow-100 text-yellow-500",
        topics: ["Art and craft", "Music and dance", "Public speaking", "Sports and yoga"],
      },
    ],
    syllabusFile: "", // TODO: e.g. "/downloads/senior-kg-syllabus.pdf"
    fees: fees(),
  },
];

export const getProgramBySlug = (slug) =>
  programs.find((program) => program.slug === slug);

import {
  FaEye,
  FaBullseye,
  FaHandHoldingHeart,
  FaSchool,
  FaAward,
  FaHeart,
  FaChild,
  FaSmile,
  FaLanguage,
  FaHandsHelping,
} from "react-icons/fa";

import { school } from "./school";

export const storyHighlights = [
  { icon: FaSchool, title: "Modern Classrooms" },
  { icon: FaAward, title: "Experienced Teachers" },
  { icon: FaHeart, title: "Safe Environment" },
  { icon: FaChild, title: "Activity Based Learning" },
];

export const values = [
  {
    icon: FaEye,
    title: "Our Vision",
    description:
      "To be a trusted early learning school where every child grows into a confident, curious and kind individual.",
    color: "bg-blue-100 text-blue-500",
  },
  {
    icon: FaBullseye,
    title: "Our Mission",
    description:
      "To provide joyful, activity-based learning in a safe and caring environment that builds strong foundations for life.",
    color: "bg-red-100 text-red-500",
  },
  {
    icon: FaHandHoldingHeart,
    title: "Our Values",
    description:
      "Love, respect, curiosity and honesty guide everything we do with children and parents.",
    color: "bg-green-100 text-green-500",
  },
];

// Placeholders: replace years and milestones with the school's real history
export const timeline = [
  {
    year: school.establishedYear,
    title: "School Founded",
    description: `${school.shortName} opened its doors with a vision of joyful early learning.`,
  },
  {
    year: "[Year]", // TODO: replace
    title: "[Milestone]", // TODO: replace
    description: "[Describe this milestone, e.g. new campus or programs added.]",
  },
  {
    year: "[Year]", // TODO: replace
    title: "[Milestone]", // TODO: replace
    description: "[Describe this milestone, e.g. award or recognition.]",
  },
  {
    year: "Today",
    title: "Growing Together",
    description:
      "Hundreds of happy students and families continue to grow with us.",
  },
];

// Placeholders: replace with real teacher names and roles
export const teachers = [
  { name: "[Teacher Name]", role: "Play Group Teacher", color: "bg-pink-100 text-pink-500" },
  { name: "[Teacher Name]", role: "Nursery Teacher", color: "bg-yellow-100 text-yellow-500" },
  { name: "[Teacher Name]", role: "Junior KG Teacher", color: "bg-green-100 text-green-500" },
  { name: "[Teacher Name]", role: "Senior KG Teacher", color: "bg-blue-100 text-blue-500" },
];

export const whyChoose = [
  {
    icon: FaSmile,
    title: "Happy Learning",
    description:
      "Children look forward to school every day thanks to playful, engaging lessons.",
    color: "bg-yellow-100 text-yellow-500",
  },
  {
    icon: FaLanguage,
    title: "Strong Communication",
    description:
      "Rhymes, stories and conversation build confident speaking and listening skills.",
    color: "bg-blue-100 text-blue-500",
  },
  {
    icon: FaHandsHelping,
    title: "Parent Partnership",
    description:
      "Regular updates and meetings keep parents involved in every step of learning.",
    color: "bg-red-100 text-red-500",
  },
];

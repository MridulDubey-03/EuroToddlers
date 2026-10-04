import {
  FaComments,
  FaSchool,
  FaFileAlt,
  FaCheckDouble,
} from "react-icons/fa";

import { programs } from "./programs";

export const admissionSession = "2026–27";

// Date on which the child's age is counted for each program
export const ageCutoffDate = "[Cut-off Date]"; // TODO: replace, e.g. "31st May 2026"

export const steps = [
  {
    icon: FaComments,
    title: "Enquire",
    description:
      "Call us, chat on WhatsApp or fill in the online form below to start your application.",
    color: "bg-red-100 text-red-500",
  },
  {
    icon: FaSchool,
    title: "Campus Visit",
    description:
      "Visit our campus with your child, meet our teachers and see our classrooms.",
    color: "bg-blue-100 text-blue-500",
  },
  {
    icon: FaFileAlt,
    title: "Submit Documents",
    description:
      "Complete the admission form and submit the required documents at the school office.",
    color: "bg-yellow-100 text-yellow-500",
  },
  {
    icon: FaCheckDouble,
    title: "Confirmation",
    description:
      "Complete the fee payment to confirm your child's seat. Welcome to the Euro Toddlers family!",
    color: "bg-green-100 text-green-500",
  },
];

// Edit this list to match the school's actual requirements
export const documents = [
  "Child's birth certificate",
  "4 recent passport-size photographs of the child",
  "Parents' photo ID proof (Aadhaar / PAN)",
  "Residential address proof",
  "Child's immunization / vaccination record",
  "Previous school report card (if applicable)",
];

export const admissionFaqs = [
  {
    question: "When do admissions open?",
    answer: `Admissions for the ${admissionSession} academic year are open now. Seats are limited in each program, so we recommend applying early.`,
  },
  {
    question: "What is the age criteria for each program?",
    answer: `${programs
      .map((program) => `${program.title}: ${program.age}`)
      .join(", ")}. Age is calculated as on ${ageCutoffDate}.`,
  },
  {
    question: "What is the fee structure?",
    answer:
      "Fees vary by program. Open any program on the Programs page to see its complete fee structure and what is included. For any questions, call us or send a message on WhatsApp.",
  },
  {
    question: "Which documents are needed for admission?",
    answer:
      "You will need the child's birth certificate, photographs, parents' ID and address proof, and the immunization record. See the full list on this page.",
  },
  {
    question: "Can my child join in the middle of the year?",
    answer:
      "Yes, mid-year admissions are possible if seats are available in the program. Please contact the school to check availability.",
  },
  {
    question: "Is a campus visit required before admission?",
    answer:
      "We strongly recommend it. A visit helps you and your child get comfortable with our classrooms, teachers and environment.",
  },
];

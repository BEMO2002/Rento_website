import React, { useState } from "react";
import { Link } from "react-router";
import { IoArrowDown } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "../Framermotion/varient";
const faqGroups = [
  {
    title: "Rent Car from Rento?",
    subtitle: "All about warranty, bookings, test drive, financing, etc...",
    theme: "primary",
    items: [
      {
        question: "How can I see a car before renting it?",
        answer:
          "You can schedule a test drive or visit our showroom to inspect the car in person.",
      },
      {
        question: "Can I negotiate the price of Rento cars?",
        answer:
          "Our prices are fixed and transparent, ensuring you get the best value without negotiation.",
      },
      {
        question: "What is the form of ownership transfer?",
        answer:
          "We handle all paperwork and transfer processes to ensure a smooth ownership transition.",
      },
      {
        question: "How can I apply for financing?",
        answer:
          "We offer various financing options. Our team will guide you through the application process.",
      },
    ],
  },
  {
    title: "Choose your car From Rento?",
    subtitle:
      "All about inspection, valuation, payment, ownership transfer, etc...",
    theme: "secondary",
    items: [
      {
        question: "What is the process?",
        answer:
          "Schedule an inspection, get a valuation, accept the offer, and complete the Rent.",
      },
      {
        question: "Which Cars does Rento rent?",
        answer:
          "We buy most car makes and models, subject to inspection and condition assessment.",
      },
      {
        question: "Is the inspection free of cost?",
        answer:
          "Yes, our inspection and valuation services are completely free of charge.",
      },
      {
        question: "How does the ownership transfer take place?",
        answer:
          "We handle all paperwork and ensure a smooth transfer of ownership.",
      },
    ],
  },
];

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-all"
      >
        <span className="font-semibold text-sm lg:text-lg">{question}</span>
        <IoArrowDown
          className="text-xl"
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>
      {open && (
        <div className="faq-answer p-4 text-sm lg:text-lg text-gray-500">
          {answer}
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div className="py-16 bg-[#f9fafb]">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {faqGroups.map((group, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg">
              <div className={`bg-${group.theme} rounded-lg`}>
                <h2 className="lg:text-2xl text-xl font-bold text-white text-center p-4 mb-6">
                  {group.title}
                </h2>
              </div>
              <p className="text-gray-600 mb-8">{group.subtitle}</p>

              <div className="space-y-4">
                {group.items.map((item, i) => (
                  <FAQItem
                    key={i}
                    question={item.question}
                    answer={item.answer}
                  />
                ))}
              </div>

              <Link
                to=""
                className={`inline-block mt-8 px-6 py-3 bg-${group.theme} text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all`}
              >
                Browse all questions
              </Link>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Where is Sea Mirror located?",
    answer:
      "Sea Mirror is located on Jumeirah Bay Island on the Dubai Water Canal and is connected to the entire city of Dubai through King Salman bin Abdulaziz Al Saud Street.",
  },
  {
    question: "Is Sea Mirror good for investment?",
    answer:
      "Given its prime location on the waterfront of the Dubai Water Canal, as well as the elevated lifestyle it promises, Sea Mirror constitutes a great investment for those who wish to add luxurious high-end real estate options to their portfolio.",
  },
  {
    question: "Can a foreigner buy property in Sea Mirror?",
    answer:
      "Yes, foreigners can buy property in Sea Mirror. It is located in a freehold area, which means non-UAE nationals can own the property completely. This applies to both the villas and residences, making it a great option for international buyers who want to invest in Dubai.",
  },
  {
    question: "Is Sea Mirror a freehold property?",
    answer:
      "Yes, Sea Mirror is a freehold property. This means both locals and foreigners can fully own their homes and the land. Freehold ownership makes Sea Mirror more attractive for people looking for long-term investment or permanent residence in Dubai.",
  },

  {
    question: "Which schools are located near Sea Mirror?",
    answer:
      "There are several highly rated schools near Sea Mirror. These include Horizon English School Dubai (British Curriculum), JSS Private School LLC (Indian Curriculum), Japanese School Dubai (Japanese Curriculum), and Al Ittihad Private School Jumeirah (American Curriculum).",
  },
  {
    question: "What options are there for nurseries near Sea Mirror?",
    answer:
      "Parents looking for nurseries near Sea Mirror can consider Blossom Downtown Nursery Dubai, Learning Tree Nursery, and Little Angel Nursery.",
  },
  {
    question:
      "What amenities can one expect at Sea Mirror, Jumeirah Bay Island?",
    answer:
      "Sea Mirror offers its residents a wide range of well-maintained amenities that include a balcony, a BBQ area, a private garage, a children’s play area, a shopping mall, a swimming pool, a sports court, 24/7 security, and a gym.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-lg  text-primary  mb-4">FAQ's</p>
          {/* <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight  mb-6 text-balance text-black">
            Your questions, <span className="">answered.</span>
          </h2> */}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem
                  value={`item-${index}`}
                  className="border-border text-black"
                >
                  <AccordionTrigger className="text-left hover:cursor-pointer text-lg font-light  transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className=" leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

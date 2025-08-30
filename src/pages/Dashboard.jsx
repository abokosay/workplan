import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Applications System Core",
    path: "/applications-system-core",
  },
  {
    id: 2,
    title: "make stories",
    path: "/make-stories",
  },
  {
    id: 3,
    title: "Google ads",
    path: "/google-ads",
  },
  {
    id: 4,
    title: "kitchen installation",
    path: "/kitchen-installation",
  },
  {
    id: 5,
    title: "turkey language",
    path: "/turkey-language",
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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};


function Dashboard() {
  return (
    <main className="text-center p-8">
      <motion.h1
        className="text-5xl font-bold mb-12 text-[var(--primary)]"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My 2030 Vision
      </motion.h1>

      <motion.section
        className="flex flex-wrap justify-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {cards.map((card) => (
          <Link to={card.path} key={card.id}>
            <motion.div
              className="bg-[var(--card-background)] border border-[var(--card-border)] rounded-lg shadow-lg flex items-center justify-center w-64 h-64 transition-all duration-300 hover:bg-[var(--card-hover-background)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-[var(--text-light)] text-center p-4">
                {card.title}
              </h2>
            </motion.div>
          </Link>
        ))}
      </motion.section>

      <section className="mt-16">
        <div className="w-full max-w-2xl mx-auto bg-[var(--background-light)] rounded-full h-2.5">
          <div className="bg-[var(--primary)] h-2.5 rounded-full" style={{ width: "10%" }}></div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;

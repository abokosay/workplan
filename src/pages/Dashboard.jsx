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

function Dashboard() {
  return (
    <main className="text-center p-8">
      <h1 className="text-5xl font-bold mb-12 text-white">My 2030 Vision</h1>

      <section className="flex flex-wrap justify-center gap-8">
        {cards.map((card) => (
          <Link to={card.path} key={card.id}>
            <motion.div
              className="bg-white rounded-lg shadow-lg flex items-center justify-center w-64 h-64"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 text-center p-4">
                {card.title}
              </h2>
            </motion.div>
          </Link>
        ))}
      </section>

      <section className="mt-16">
        <div className="w-full max-w-2xl mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "10%" }}></div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Rawskinx",
    path: "/rawskinx",
    color: "from-red-500 to-yellow-500",
    svg: (
      <svg fill="currentColor" width="80px" height="80px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7.75 2.5a.75.75 0 0 0-1.5 0v1.586l-2.72 2.72a.75.75 0 0 0 1.06 1.06L7 5.414V8.5a.75.75 0 0 0 1.5 0V2.5zM16.25 14.5a.75.75 0 0 0-1.5 0v1.586l-2.72 2.72a.75.75 0 0 0 1.06 1.06L15.5 17.414V20.5a.75.75 0 0 0 1.5 0V14.5zM4 11.75a.75.75 0 0 1 .75-.75h2.086l2.72-2.72a.75.75 0 0 1 1.06 1.06L8.116 11.75H4.75a.75.75 0 0 1-.75-.75zm15.25.75a.75.75 0 0 0-.75.75v2.086l-2.72 2.72a.75.75 0 1 0 1.06 1.06L18.936 18H22.25a.75.75 0 0 0 0-1.5h-3.336z"/></svg>
    ),
  },
  {
    id: 2,
    title: "Supreme Plots",
    path: "/supreme-plots",
    color: "from-blue-500 to-green-500",
    svg: (
      <svg fill="none" width="80px" height="80px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: "Ads Zone",
    path: "/ads-zone",
    color: "from-purple-500 to-pink-500",
    svg: (
        <svg fill="currentColor" width="80px" height="80px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.075 18.121v7.896c0 0.552-0.312 0.999-0.998 0.999-0.166 0-0.577-0.354-1.082-0.887v-21.194c0.505-0.533 0.916-0.887 1.082-0.887 0.748 0 0.998 0.447 0.998 0.998v8.096c1.353 0.038 2.613 1.135 2.613 2.489 0 1.355-1.26 2.452-2.613 2.49zM12.015 20.046c0.062 0 0-9.029 0-9.029 6.857 0 10.922-3.010 13.064-5.074v19.177c-2.142-2.063-6.207-5.074-13.064-5.074zM8.021 27.952l-1.997-7.927h-1.998c0 0-0.594-1.348-0.864-2.996-0.509 0-0.954 0-1.134 0-0.551 0-0.998-0.447-0.998-0.999v-0.998c0-0.552 0.447-0.999 0.998-0.999 0.18 0 0.625 0 1.134 0 0.271-1.648 0.864-2.995 0.864-2.995h6.99v8.987h-1.997l0.252 0.998h0.997l0.499 1.998h-0.994l1.243 4.931h-2.995z"></path>
        </svg>
    ),
  },
];

function Dashboard() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-12">Welcome to the Dashboard</h1>
      <div className="flex flex-row justify-center gap-8">
        {cards.map((card) => (
          <Link to={card.path} key={card.id}>
            <motion.div
              className={`p-8 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg flex flex-col items-center justify-center w-56 h-56 transition-all duration-300 hover:border-white/40`}
              whileHover={{ scale: 1.1, rotate: 5, background: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ '--tw-gradient-from': card.color.split(' ')[0], '--tw-gradient-to': card.color.split(' ')[2] }}
            >
              <div className="text-white">{card.svg}</div>
              <h2 className="text-2xl font-bold text-center mt-4 text-white">{card.title}</h2>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;


import React from "react";
import { motion } from "motion/react";

export default function Wish({setShowLetters,setShowSurprise,setShowMemories}) {
  return (
   <main className="flex min-h-screen w-full flex-col items-center justify-center gap-6 bg-linear-to-b from-white via-rose-300 to-pink-100 px-4 py-8 sm:gap-8">
      {/* Heading */}
      <h1 className="w-full text-center font-serif italic text-3xl font-extrabold text-pink-800 sm:text-5xl">
        Happiest Birthday Sweetie❤️✨
      </h1>
       <span className="absolute bottom-7  text-5xl sm:right-5 sm:bottom-0-4 sm:text-3xl">
              💗
            </span>
            
             <span className="absolute top-10 right-10 text-5xl sm:top-90 sm:left-60">
              🎀
            </span>
             <span className="absolute left-3 top-3 text-8xl sm:left-5 sm:top-4 sm:text-3xl">
              🌸
            </span>

      {/* Cake */}
      <div className="mt-8 flex w-full justify-center sm:mt-10">
        <motion.img
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -6, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-48 w-auto max-w-full object-contain sm:h-64 md:h-72"
          src="https://i.pinimg.com/originals/be/d5/a7/bed5a77db01d80797bec9880345afcc3.gif"
          alt="Birthday cake"
        />
      </div>

      {/* Gift heading */}
      <h2 className="mt-8 w-full text-center font-serif italic text-2xl font-extrabold text-yellow-800 sm:mt-10 sm:text-4xl">
        Chalo ab Gift choose kro 🥰🎁
      </h2>

      {/* Gift buttons */}
      <div className="mt-8 flex w-full max-w-3xl flex-col items-center justify-center gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">

        <motion.button
        onClick={() => setShowMemories(true)}
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-xs rounded-2xl border-2 border-amber-50 bg-linear-to-r from-pink-500 via-rose-400 to-pink-500 px-4 py-2 font-serif text-xl font-bold  text-white shadow-md shadow-pink-950 sm:w-52"
        >
          Memories💗📷
        </motion.button>

        <motion.button
          type="button"
          onClick={() => setShowLetters(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-xs rounded-2xl border-2 border-amber-50 bg-linear-to-r from-pink-500 via-rose-400 to-pink-500 px-4 py-2 font-serif text-xl font-bold text-white shadow-md shadow-pink-950 sm:w-52"
        >
          Bday letter💌🦋
        </motion.button>

        <motion.button
        onClick={() => setShowSurprise(true)}
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-xs rounded-2xl border-2 border-amber-50 bg-linear-to-r from-pink-500 via-rose-400 to-pink-500 px-4 py-2 font-serif text-xl font-bold text-white shadow-md shadow-pink-950 sm:w-52"
        >
          Surprise🎉🫶🏻
        </motion.button>

      </div>
    </main>
  );
}
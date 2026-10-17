
import React, { useState } from "react";
import { motion } from "motion/react";

export default function Hero({ setShowHero }) {
  const [text, setText] = useState("Jaldi btao m wait ni krungi😤");

  const [gif, setGif] = useState(
    "https://media4.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3d3B0bnBvbzBjaW9xN3MwcTVjZ2N1bXUxN21sY2Z4a255Mmc3c2J4YyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/N2kVLmpwu13G24wdQx/giphy.webp"
  );

  const handleClick = () => {
    setGif(
      "https://i.pinimg.com/originals/db/f0/6f/dbf06fb289bddc864ee3922959681dcc.gif"
    );

    setText("Jhut bolna Sikhlia😡");
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-6 overflow-x-hidden bg-linear-to-b from-white via-rose-300 to-pink-100 px-4 py-8 sm:gap-8">

      {/* Heading */}
      <h1 className="w-full text-center font-serif italic text-3xl font-extrabold text-pink-900 sm:text-5xl">
        Aaj Tumhara Birthday Hai kya??
      </h1>
      <span className="absolute right-10 top-32 text-8xl sm:right-5 sm:top-4 sm:text-3xl">
              💗
            </span>
                <span className="absolute left-3 top-3 text-5xl sm:left-80 sm:top-40 sm:text-3xl">
              ✨
            </span>
             <span className="absolute top-10 right-10 text-4xl sm:top-40 sm:right-60">
              🎀
            </span>
             <span className="absolute left-3 top-3 text-8xl sm:left-5 sm:top-4 sm:text-3xl">
              🌸
            </span>

      {/* GIF */}
      <motion.div
        key={gif}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="flex w-full justify-center"
      >
        <img
          className="h-48 max-w-full object-contain sm:h-72 md:h-80"
          src={gif}
          alt="Shinchan"
        />
      </motion.div>

      {/* Text */}
      <motion.h2
        key={text}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full text-center font-serif text-2xl font-extrabold italic text-pink-900 sm:text-4xl"
      >
        {text}
      </motion.h2>

      {/* Buttons */}
      <div className="flex w-full flex-wrap justify-center gap-5 pt-2 sm:gap-10">

        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowHero(false)}
          className="h-12 w-32 rounded-full border-2 border-black bg-pink-900 font-serif text-2xl font-bold italic text-white transition-colors duration-300 hover:bg-pink-700"
        >
          Yes
        </motion.button>

        <motion.button
          type="button"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleClick}
          className="h-12 w-32 rounded-full border-2 border-black bg-pink-900 font-serif text-2xl font-bold italic text-white transition-colors duration-300 hover:bg-pink-700"
        >
          No
        </motion.button>

      </div>
    </main>
  );
}

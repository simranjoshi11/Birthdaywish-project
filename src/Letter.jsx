
import React, { useState } from "react";
import envolopPic from "./assets/envelope.png";
import { motion } from "motion/react";

export default function Letter({ goToWish }) {
  const [open, setOpen] = useState(
    "This letter is for you, please open it. ❤️"
  );

  const [showCard, setShowCard] = useState(false);

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-red-200 via-rose-200 to-pink-400 bg-center bg-cover">

      {showCard ? (

        // 💌 Letter Card
       <div className="flex min-h-dvh w-full flex-col items-center justify-center gap-6 px-4! py-8! sm:p-8! lg:flex-row lg:gap-10">

  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 30 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="relative w-full max-w-2xl overflow-hidden rounded-3xl border-4 border-pink-100 bg-linear-to-br from-rose-50 via-pink-100 to-orange-50 px-5! pb-12! pt-12! shadow-2xl shadow-pink-200/50 sm:p-12!"
  >

    {/* Cute decorations */}
    <span className="absolute left-3 top-3 text-2xl sm:left-5 sm:top-4 sm:text-3xl">🌸</span>
    <span className="absolute right-3 top-3 text-2xl sm:right-5 sm:top-4 sm:text-3xl">💗</span>
    <span className="absolute bottom-3 left-3 text-2xl sm:bottom-4 sm:left-5">🎀</span>
    <span className="absolute bottom-3 right-3 text-2xl sm:bottom-4 sm:right-5">✨</span>

    {/* Letter content */}
    <div className="relative z-10">

      <p className="mb-4! text-center font-serif text-base italic text-pink-500 sm:mb-6! sm:text-lg">
        ✨ A little letter for someone special ✨
      </p>

      <h1 className="mb-6! text-center font-serif text-3xl font-bold italic text-rose-700 sm:mb-8! sm:text-5xl">
        Happy Birthday! 💗
      </h1>

      <p className="mb-4! text-center font-serif text-lg font-semibold italic text-pink-800 sm:mb-5! sm:text-xl">
        Dear Sweetie, 🧸
      </p>

      <div className="flex flex-col gap-4 text-center font-serif text-base leading-7 text-rose-900 sm:text-lg sm:leading-8">
        <p>Today is all about you! ❤️</p>
        <p>
          I hope your birthday is filled with endless happiness, beautiful
          memories, lots of laughter, and all the love your heart can hold.
        </p>
        <p>
          May all your little dreams come true, and may you always have a
          reason to smile. You deserve all the beautiful things this world has
          to offer.
        </p>
        <p>
          Keep smiling, keep shining, and never stop being the wonderful
          person you are. 🥹💗
        </p>
      </div>

      <p className="mt-6! text-right font-serif text-lg font-bold italic text-rose-700 sm:mt-8! sm:text-xl">
        With lots of love, 💌
        <br />
        Your Favourite Person ❤️
      </p>

      <div className="mt-6! text-center text-xl sm:mt-8! sm:text-2xl">
        🎀 💗 🧸 💗 🎀
      </div>

    </div>
  </motion.div>

  {/* Gif + button */}
  <div className="flex shrink-0 flex-col items-center gap-3">
    <img
      className="h-36 sm:h-48"
      src="https://i.pinimg.com/originals/9d/be/d5/9dbed505add8a7f731aeae39e9e0936c.gif"
      alt="cutie"
    />
    <button
    onClick={goToWish}
      type="button"
      className="h-10 w-40 cursor-pointer rounded-xl border-2 border-black bg-red-500 font-serif text-xl font-bold italic text-white transition-colors duration-300 hover:bg-pink-700 sm:h-8 sm:w-35"
    >
      next gift
    </button>
  </div>

</div>

      ) : (

        // 💌 Envelope
        <div className="flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-8">

          <motion.img
            onClick={() => {
              setShowCard(true);
              setOpen("How is it? ❤️");
            }}
            animate={{
              x: [-3, 3, -3],
              rotate: [-2, 2, -2],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.1,
            }}
            className="h-60 cursor-pointer object-contain"
            src={envolopPic}
            alt="Open your birthday letter"
          />

          <p className="mt-8 text-center font-serif text-2xl font-extrabold italic text-rose-700 sm:text-4xl">
            {open}
          </p>

          <p className="mt-3 text-center text-lg text-pink-800">
            Tap the envelope to open your surprise! 💌
          </p>

        </div>

      )}

    </div>
  );
}


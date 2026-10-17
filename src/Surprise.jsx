import confetti from "canvas-confetti";
import cakePic from "./assets/cake.png";
import React, { useEffect, useState } from 'react'
import{motion} from "motion/react";
import birthdaySong from "./assets/birthdaysong.mp3";


export default function Surprise({ goToWish }) {
 const [count,setCount] =useState(10);
 const [showCake,setShowCake] = useState(false)

useEffect(()=>{
  if(count===0){
    setShowCake(true)
    return;
}

const timer = setTimeout(()=>{
  setCount(count-1);
},1000);
 return () => clearTimeout(timer);
  }, [count]);

  useEffect(() => {
  if (showCake) {
   confetti({
  particleCount: 350,
  spread: 100,
  startVelocity: 55,
  gravity: 0.8,
  ticks: 200,
  origin: {
    x: 0.5,
    y: 1,
  },
});
confetti({
  particleCount: 300,
  angle: 60,
  spread: 80,
  startVelocity: 60,
  origin: { x: 0, y: 1 },
});

confetti({
  particleCount: 300,
  angle: 120,
  spread: 80,
  startVelocity: 60,
  origin: { x: 1, y: 1 },
});
  }
}, [showCake]);
useEffect(() => {
  if (showCake) {
    const audio = new Audio(birthdaySong);
    audio.volume = 1;

    audio.play().catch((error) => {
      console.log("Song play nahi hua:", error);
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }
}, [showCake]);

   return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black px-4">

      {showCake ? (



        // Countdown khatam hone ke baad
       <div className="relative flex min-h-dvh w-full flex-col items-center justify-center bg-[url('https://i.pinimg.com/736x/c7/2b/f3/c72bf37e44bf2f4ec37bff3f9e1bd69f.jpg')] bg-cover bg-center bg-no-repeat">

  <div className="absolute inset-0 overflow-hidden bg-white/50 sm:bg-white/60">

    {/* Heading */}
    <div className="relative z-20 pt-8! sm:pt-6!">
      <h1 className="w-full text-center font-serif text-4xl font-extrabold text-pink-900 sm:text-4xl">Happy</h1>
      <h2 className="w-full text-center font-serif text-6xl font-extrabold text-pink-900 sm:text-6xl">Birthday</h2>
      <h2 className="w-full text-center font-serif text-3xl font-extrabold text-pink-900 sm:text-5xl">Dear✨</h2>
    </div>

    {/* Emojis: mobile par wahi 3, desktop par bade */}
    <span className="absolute right-4 top-24 text-5xl sm:right-[8%] sm:top-[8%] sm:text-7xl">💗</span>
    <span className="absolute right-4 top-4 text-5xl sm:right-[22%] sm:top-[30%] sm:text-8xl">🎀</span>
    <span className="absolute left-4 top-4 text-5xl sm:left-[6%] sm:top-[6%] sm:text-7xl">🌸</span>

    {/* Extra emojis: sirf desktop par */}
    <span className="absolute left-[22%] top-[28%] hidden animate-bounce text-6xl [animation-duration:3s] sm:block">🎉</span>
    <span className="absolute right-[30%] top-[10%] hidden animate-bounce text-6xl [animation-duration:2.5s] sm:block">🎂</span>
    <span className="absolute bottom-[8%] left-[30%] hidden animate-bounce text-6xl [animation-duration:3.5s] sm:block">🎁</span>
    <span className="absolute bottom-[10%] right-[30%] hidden animate-bounce text-6xl [animation-duration:2.8s] sm:block">💖</span>
    <span className="absolute left-[40%] top-[48%] hidden animate-pulse text-5xl sm:block">✨</span>

    {/* Cake gif */}
    <div className="absolute inset-x-0 top-[46%] z-10 flex -translate-y-1/2 justify-center sm:top-[55%]">
      <img
        src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnBwOTIxOXhkNnp2YWVqMnN4MjFqcW5uMThxZTBtaTUyZmtyMGxrbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/AlJ5L2TUUic2Yo22Mo/giphy.gif"
        alt="Birthday Cake"
        className="h-[50dvh] w-full max-w-none object-contain sm:h-[60dvh] sm:w-[45vw]"
      />
    </div>

    {/* Balloons + music gif: left bottom */}
    <div className="absolute bottom-0 left-2 flex flex-col items-center sm:left-[3%]">
      <img
        className="h-[22dvh] sm:h-[42dvh]"
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGtzeDZrdGN4MDM0ZjJzNWdxeXc4MWFheHVwODV0em12OHVxdXJvYSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/xou58h8NWSauoRmfbd/giphy.webp"
        alt="ballon"
      />
      <img
        className="h-[18dvh] sm:h-[28dvh]"
        src="https://i.pinimg.com/originals/2d/7a/81/2d7a81f72a3fa9681ffc884d2aa7448f.gif"
        alt=""
      />
    </div>

    {/* Mirror balloons: right side, sirf desktop par */}
    <img
      className="absolute bottom-[28%] right-[4%] hidden h-[35dvh] -scale-x-100 sm:block"
      src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcGtzeDZrdGN4MDM0ZjJzNWdxeXc4MWFheHVwODV0em12OHVxdXJvYSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/xou58h8NWSauoRmfbd/giphy.webp"
      alt="ballon"
    />

    {/* Cutie gif + button */}
    <div className="absolute bottom-4 right-3 z-20 flex flex-col items-center gap-2 sm:bottom-[4%] sm:right-[5%] sm:top-auto sm:gap-4">
      <img
        className="h-[18dvh] sm:h-[24dvh]"
        src="https://media0.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OGUyZHJtNzgzOHZrenh4eDZiMGIzaThhcWVqZGh1NGJnd201N3pxOSZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/gqumqBGJZTeRZhSIDf/giphy.webp"
        alt="cutie"
      />
      <button
      onClick={goToWish}
        type="button"
        className="h-8 w-35 cursor-pointer rounded-xl border-2 border-black bg-red-500 font-serif text-xl font-bold italic text-white transition-colors duration-300 hover:bg-pink-700 sm:h-12 sm:w-48 sm:text-3xl"
      >
        next gift
      </button>
    </div>

  </div>
</div>
      ) : (
        // Countdown chalne ke dauran
        <>
          <img
            className="h-80 object-contain"
            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdjlpM3poY291ZG5heG0yN2M5Y2gxamRuaWhyZG1iazdwa2NmNmJ2MiZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/OgCGkgT1Whw84YVhhu/giphy.webp"
            alt="Candle"
          />

          <h1 className="mt-6 text-center font-serif text-2xl font-bold text-white">
            Close your eyes and make a wish.✨
          </h1>

          <h2 className="mt-6 text-5xl font-bold text-yellow-300">
            {count}
          </h2>
        </>
      )}

    </div>
    
    );
}


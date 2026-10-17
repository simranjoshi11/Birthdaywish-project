import React from "react";
import SliderModule from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = SliderModule.default || SliderModule;

function Arrow({ onClick, dir }) {
  const isNext = dir === "next";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isNext ? "Next memory" : "Previous memory"}
      className={`absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-rose-500 text-2xl leading-none text-white shadow-lg transition hover:bg-rose-600 ${
        isNext ? "right-1 sm:-right-5" : "left-1 sm:-left-5"
      }`}
    >
      {isNext ? "›" : "‹"}
    </button>
  );
}

const data = [
  { img: "/pic1.webp", description: "May you always be loved more than words can say And may beautiful moments find you every day 🌹" },
  { img: "/pic2.webp", description: "May every little dream of yours come true And may happiness always find its way to you 💕" },
  { img: "/pic3.jpg",  description: "You deserve all the magic this world can bring ✨May your heart always have a reason to sing 🎶" },
  { img: "/pic4.jpg",  description: "May your days be filled with giggles and sunshine ☀️And may your life stay beautiful and divine 💖" },
  { img: "/pic5.jpg",  description: "Another year older,cuter and brighter than before 🥹May life surprise you with happiness and so much more🎁" },
  { img: "/pic6.jpg",  description: "May your smile always shine brighter than the stars above ✨And may your life be filled with endless love 💗" },
];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,

  nextArrow: <Arrow dir="next" />,
  prevArrow: <Arrow dir="prev" />,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
export default function Memories({ goToWish }) {
  return (
    <div className="min-h-screen w-full bg-linear-to-b from-rose-50 via-pink-100 to-rose-200 px-4! py-6! sm:px-8!">
      <h1 className="mb-2! text-center font-serif text-4xl font-extrabold italic text-rose-800 sm:text-6xl">
        Our Memories 💗
      </h1>

      <p className="mb-4! text-center font-serif text-lg italic text-pink-700 sm:text-xl">
        Little moments, endless memories ✨
      </p>

      <div
        className="
          mx-auto! w-full min-w-0 max-w-6xl pb-10!
          [&_.slick-track]:flex
          [&_.slick-slide]:h-auto
          [&_.slick-slide>div]:h-full
          [&_.slick-dots]:-bottom-10
          [&_.slick-dots_li_button:before]:text-rose-400!
          [&_.slick-dots_li.slick-active_button:before]:text-rose-600!
          [&_.slick-dots_li_button:before]:opacity-100!
        "
      >
        <Slider
  dots={true}
  infinite={true}
  speed={500}
  slidesToShow={1}
  slidesToScroll={1}
  arrows={false}
>
          {data.map((d, index) => (
            <div key={index} className="h-full py-4!">
              <div className="mx-auto! flex h-full max-w-sm flex-col overflow-hidden rounded-3xl border border-pink-200 bg-white/90 shadow-xl shadow-pink-300/50 transition duration-300 hover:shadow-2xl hover:shadow-pink-400/50">
                {/* Image */}
                <div className="h-72 shrink-0 bg-linear-to-br from-rose-100 via-pink-100 to-fuchsia-100 p-3!">
                  <img
                    src={d.img}
                    alt={`Memory ${index + 1}`}
                    className="h-full w-full rounded-2xl object-cover object-top shadow-md"
                  />
                </div>

                {/* Description */}
                <div className="flex flex-1 items-center justify-center px-6! py-4!">
                  <p className="text-center font-serif text-lg italic leading-relaxed text-rose-700">
                    {d.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Gif + button */}
      <div className="flex flex-col items-center gap-3">
        <img
          className="h-48"
          src="https://i.pinimg.com/originals/dc/2a/2c/dc2a2c2f6616ca4307b4307126ea02c2.gif"
          alt="cutie"
        />
        <button
        onClick={goToWish}
          type="button"
          className="h-8 w-35 cursor-pointer rounded-xl border-2 border-black bg-red-500 font-serif text-xl font-bold italic text-white transition-colors duration-300 hover:bg-pink-700"
        >
          next gift
        </button>
      </div>
    </div>
  );
}
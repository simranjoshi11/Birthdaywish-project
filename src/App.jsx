import React, { useState } from "react"
import Hero from "./Hero"
import Wish from "./Wish"
import Letter from "./Letter"
import Surprise from "./Surprise"
import Memories from "./Memories"

//  import {motion,useScroll} from "motion/react";

function App() {

  const goToWish = () => {
  setShowMemories(false);
  setShowSurprise(false);
  setShowHero(false);
  setShowLetters(true);
};
 
   const [showHero,setShowHero] = useState(true)  
    const [showLetters,setShowLetters] = useState(true)
    const [showSurprise, setShowSurprise] = useState(false);
    const [showMemories,setShowMemories] = useState(false)

  // const scrollYProgress = useScroll().scrollYProgress

  return (
    <>
 
    {showMemories ? (
      <Memories
        setShowMemories={setShowMemories}
        goToWish={goToWish}
      />
    ) : showSurprise ? (
      <Surprise
        setShowMemories={setShowMemories}
        setShowSurprise={setShowSurprise}
        goToWish={goToWish}
      />
    ) : showHero ? (
      <Hero setShowHero={setShowHero} />
    ) : showLetters ? (
      <Wish
        setShowLetters={setShowLetters}
        setShowSurprise={setShowSurprise}
        setShowMemories={setShowMemories}
      />
    ) : (
      <Letter goToWish={goToWish} />
    )}



    {/* <motion.div 
    style={{
      scaleX:scrollYProgress
    }}
    className="bg-amber-300 h-3 w-full origin-left fixed"></motion.div>
<h2 className="p-20 text-4xl font-bold text-center text-white">Engineering lifestyle</h2>
<p className="text-white font-mono">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat laboriosam nemo, neque magni illum et, quaerat sint aspernatur eos eius dignissimos provident ducimus quam corrupti asperiores nesciunt eveniet, totam tempora culpa ipsum est magnam dolore mollitia? Tempore, cupiditate quos dolor sed quam, magnam doloribus natus, odit illo quae est unde. Mollitia officiis natus autem earum hic praesentium consequatur ea quas labore? Fugit ullam quidem aspernatur. 
  <br /> <br />Eius mollitia error odio. Dolores ut sed aliquid quasi nihil dolorem delectus assumenda quod, quibusdam vel, quae qui molestias cum blanditiis mollitia nam nobis sequi amet expedita, pariatur ex quisquam odio neque? Quis cumque minus voluptates perferendis expedita eaque labore impedit at nostrum architecto quidem, voluptatum vel tempore temporibus sed consequatur inventore sunt adipisci obcaecati quae, magni, corrupti aspernatur fugit? Reiciendis corrupti a adipisci quis, quaerat necessitatibus fuga consequuntur magnam nesciunt nostrum culpa? Molestiae quo quidem et quisquam, at sint pariatur ullam numquam consequatur sunt odio temporibus quam placeat vero ex unde eius maxime. <br /> <br />Modi nesciunt sapiente, est a nulla, iure at veritatis exercitationem vero neque expedita ratione. Vel fugit voluptate laudantium nam odio nobis aut, nostrum ex doloribus ut id nulla exercitationem deserunt quam non officiis dolorum tenetur dolore pariatur possimus totam error consectetur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate a adipisci est harum ratione ipsa non sed animi, quibusdam, commodi vero debitis amet accusantium ipsam, quod provident voluptas perspiciatis. Dolores! <br /><br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat corrupti perspiciatis molestias saepe repudiandae, minus fugit itaque eos blanditiis officia doloremque eveniet, asperiores, ea quos fugiat cum perferendis illo sed cupiditate porro delectus voluptatem consectetur voluptatibus ipsa? Quam nam perspiciatis deserunt hic, ab aperiam deleniti dolore velit labore nihil nulla quia quod aspernatur cupiditate molestias eos fugit amet eius rerum aut fuga minus debitis! Dolorem provident laudantium, ad fuga dolorum asperiores nulla. Laudantium ad eos officia provident nostrum at iusto unde, amet dolores, maxime molestiae inventore obcaecati perspiciatis. Tempore magni deleniti, harum temporibus modi quod aperiam quidem itaque nulla assumenda qui vitae, expedita adipisci minus rerum iusto maiores? Quo tempora nostrum unde vitae provident ea numquam, facilis odit. Magnam nulla at ullam laborum ipsa quidem illo ratione eaque dignissimos quis vitae officiis porro ab error vero eos, repudiandae quo suscipit totam hic praesentium! Doloribus consequuntur magni cum accusantium vitae nihil libero commodi earum porro. Tempora mollitia non quia maxime, fugit odit officia earum error consectetur! Ipsum eveniet, at aspernatur officia illo velit quisquam non magni et rem voluptate! Velit, nemo reiciendis eum neque temporibus commodi sint autem recusandae aut magnam, odio minima sit ipsa. <br/> <br/> Quaerat dolorem necessitatibus nemo voluptates, quisquam, veniam natus et placeat, consequatur hic maxime iure omnis animi quas nam. Rerum reprehenderit, voluptas cumque quasi nisi illo ut cupiditate amet est blanditiis, dolorum rem ipsum sed provident hic molestias maiores eligendi reiciendis facere expedita commodi perferendis saepe neque? Eius reprehenderit deserunt eum pariatur amet laboriosam aliquid voluptatibus esse animi exercitationem, veniam maxime unde itaque ipsa at temporibus dolorem ducimus, a nostrum officiis vero impedit. Nemo libero hic sequi delectus adipisci cumque quam ipsam, tenetur atque quaerat placeat incidunt fugit repudiandae in voluptatem dolorum omnis veritatis! Enim ipsam eaque nulla id quo iste labore ad, repudiandae doloremque voluptatibus debitis!</p> */}

     {/* <motion.div
     animate={{
      x:1000,
      rotate:360
     }}
     transition={{
      duration:4,
      delay:1
     }}
     className='box'>

     </motion.div>
     <motion.div
     animate={{
      x:1000,
      rotate:360
     }}
     transition={{
      duration:4,
      delay:1
     }}
     className="circle"></motion.div> */}
     {/* <motion.img 
     animate={{
      x:[0,800,800,0,0],
      y:[0,0,300,300,0],
      scale:0.8
      
     }}
     transition={{
      duration:4,
      delay:1,
      repeat:Infinity,
      ease:"anticipate"

     }}
drag
whileDrag={{
   scale:0.8

  }} */}
  {/* // dragConstraints={{  //direction ko dayra bta rha h  */}
  {/* //   right:0
  // }}
  // dragDirectionLock="true"  //your element will be drag only for 1 axis x/y
    
   
    

  // whileHover={{ */}
  {/* //   backgroundColor:"white"
  // }} */}

  
  

  
    
{/* 
     src="https://static.vecteezy.com/system/resources/thumbnails/050/343/539/small/a-cartoon-boy-standing-with-his-hands-on-his-chin-png.png" alt="" /> */}
    </>
  )
}

export default App

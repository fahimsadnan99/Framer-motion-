import React, { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
    const [isAnimate,setIsAnimate] = useState(false)


const variantVariable = {
  parent : {
    x : 10,
    background : "black",
    transition : {
      delay : 0.5,
      when : "beforeChildren"
    }
  }
}


const list = {
  hidden : {
    x : -10,
    opacity : 0.1
  },
  show : {
    x : 0,
    opacity : 1,
    staggerChildren : 0.2,
   transition : {
    delay : 0.6
   }

  }
}

  return (
    <div className="w-full ">
      <motion.div className="w-40 bg-purple-800 p-16 " 
      animate={{ x: isAnimate ? 500 : 0 ,y : isAnimate ? 200 : 10,opacity : 1,zIndex : -1}} 
      transition={{
        type : "spring",
        stiffness : 60,
      }}
      initial={{
        opacity : 0.1,
      }}
      onClick={()=> setIsAnimate(!isAnimate)}
      >
        Home
      </motion.div>

      <motion.div className="w-40 mt-12 bg-red-800 p-20"
      whileHover={{
        scale : 1.1
      }}

      whileTap={{scale : 0.9}}
      drag
      dragConstraints={{
        right : 10,
        bottom : 10,
        top : 10,
        left : 10
      }}
      >
      
      </motion.div>






      <motion.div 
      variants={variantVariable}
      animate="parent"
      className="w-40 my-12  p-5 space-y-4"
     
      >
 {
        Array(3).fill(3).map(item=>{
          return (<motion.h1 variants={list}
            initial="hidden" animate="show" className="bg-white w-10  p-4"></motion.h1>)
        })
       }
      </motion.div>
    </div>
  );
};

export default Home;

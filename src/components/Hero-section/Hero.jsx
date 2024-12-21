import {delay, motion} from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import hero from "../Hero-section/home-page.png"

export default function Hero() {
  return (
    <>
      <motion.div className="w-[550px] mx-52 my-44  top-[270px] left-[200px]"
                  initial={{x:-100, opacity:0}}
                  animate={{x:0, opacity:1}}
                  transition={{ ease: "easeOut", duration: 1 , delay:0.1 }}
      >
        <h1 className="text-6xl font-custom text-gray-600 font-semibold">
          Your Favourite Food Delivered Hot &
          Fresh
        </h1>
        <p className=" font-semibold text-lg py-[40px] text-slate-600">
          Healthy switcher chefs do all the prep work, like <br /> peeding, chopping &
          marinating, so you can cook <br /> a fresh food.
        </p>
        <button className="h-[52px] w-[170px] bg-yellow-500 text-white border rounded-3xl flex items-center justify-center gap-3 text-lg font-semibold">Order Now <FaArrowRight/></button>
      </motion.div>
        <motion.img className="w-[700px] absolute right-40 top-16" src={hero} alt=""
          initial={{x:100, opacity:0}}
          animate={{x:0, opacity:1}}
          transition={{ ease: "easeOut", duration: 1 , delay:0.1 }}
          
        />
    </>
  );
}

import { FaArrowRight } from "react-icons/fa6";
import hero from "../Hero-section/home-page.png"

export default function Hero() {
  return (
    <>
      <div className="w-[550px]  absolute top-[270px] left-[200px]">
        <h1 className=" text-6xl">
          Your Favourite Food Delivered Hot & <br />
          Fresh
        </h1>
        <p className=" font-semibold text-lg py-[40px]">
          Healthy switcher chefs do all the prep work, like <br /> peeding, chopping &
          marinating, so you can cook <br /> a fresh food.
        </p>
        <button className="h-[42px] w-[150px] bg-yellow-500 border rounded-2xl flex items-center justify-around text-lg font-semibold">Order Now <FaArrowRight/></button>
      </div>
        <img className="w-[700px] absolute right-40 top-16" src={hero} alt="" />
    </>
  );
}

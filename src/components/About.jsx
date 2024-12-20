import { MdSlowMotionVideo } from "react-icons/md";
import about from "../assets/about.png"
import aboutbanner from "../assets/about-banner.png"

export default function About(){
    return(
        <div className="w-full flex justify-end">
                <div className="mr-52">
                    <h1 className="text-xl font-semibold text-yellow-500">About</h1>
                    <h1 className="text-6xl font-custom text-gray-600 font-semibold">Food Is An Important <br />Part Of A Balanced <br />Diet</h1>
                    <p className="my-3 font-semibold text-lg text-slate-600">Food is a crucial part of a balanced diet <br /> as it provides the body with essential nutrients <br /> needed for energy, growth, and overall health. span <br /> </p> <p className="my-3 font-semibold text-lg text-slate-600"> A balanced diet includes carbohydrates, proteins, fats, <br /> vitamins, minerals, fiber, and water in the right proportions.</p>


                    <div className="flex mt-9 items-center">
                    <button className="h-[52px] w-[170px] bg-yellow-500 text-white border rounded-3xl flex items-center justify-center gap-3 text-lg font-semibold cursor-pointer ">Learn More</button>
                    <MdSlowMotionVideo className="ml-20 text-5xl mr-2 cursor-pointer" /> <p className="text-lg cursor-pointer">Watch Video</p>
                    </div>


                </div>
                <img className="absolute left-0  h-[650px]" src={about} alt="about" />
                <img className="absolute left-0  w-[650px]" src={aboutbanner} alt="aboutBanner" />
        </div>
    )
}
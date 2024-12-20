import { FaRegCircleUser } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";



export default function Testimonial(){
    return(
        <div>

                <div className="mx-52  h-[700px] flex flex-col justify-center gap-16">

                    <div className="flex flex-col gap-5 items-center">
                        <h2 className="text-xl font-semibold text-yellow-500">Testinonial</h2>
                        <h1 className="text-6xl font-custom text-gray-600 font-semibold">What They Are Saying</h1>
          
                        <p className="font-semibold text-lg text-slate-600 text-center">
                            Lorem ipsum dolor sit amet consectetur. Non tincidunt <br />
                            magna non et elit. Dolor turpis molestie dui <br />
                            magnis facilisis at fringilla quam.
                        </p>
          
                    </div>

                    <div className="flex flex-col items-center justify-around mx-60 px-20 gap-5 pb-5 bg-pink-100 rounded-xl">
                        <FaRegCircleUser className="text-5xl" />
                        <p className="text-slate-600 text-center">Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                            magna non et eli Dolor  turpis molestie duimagnis facilisis at fringilla quam.
                        </p>
                        <div className="flex gap-3 text-lg">
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                            <FaStar className="text-yellow-500" />
                        </div>
                        <h1 className="font-semibold text-lg">Jhon Deo</h1>


                    </div>

                </div>


        </div>
    )
}
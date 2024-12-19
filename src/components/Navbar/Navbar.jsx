import { FaCartShopping } from "react-icons/fa6";



function Navbar(){
    return(
        <div className="h-20 w-full flex justify-around items-center z-10 relative mt-10">
            <div>
                <h1 className="text-yellow-500 font-extrabold text-4xl">FOODIE</h1>
            </div>
            <div className="flex items-center gap-6 text-lg font-semibold">
                
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Testimonials</a>
                <a href="#">Contact</a>
                <FaCartShopping className="w-[25px] h-[25px]" />
                <button className="h-[42px] w-[150px] bg-white border rounded-2xl ">Booking Now</button>
            </div>
        </div>

       
    )
}

export default Navbar;
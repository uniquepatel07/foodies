import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";



export default function Footer(){

    return(

        <>
        <div className="mx-52 mb-20 mt-40 flex justify-around">
            <div className="gap-5 flex flex-col">
                <h1 className="text-2xl">FOODIES</h1>
                <div className="flex gap-5 text-3xl text-slate-600">
                <FaTwitter />
                <FaLinkedinIn />
                <FaYoutube />
                <FaFacebook />
                </div>

            </div>


            <div className="flex font-semibold text-base gap-5 font-custom text-slate-600">
                <div className="flex flex-col gap-3" >
                    <a href="#">Quality</a>
                    <a href="#">Help</a>
                    <a href="#">Share</a>
                    <a href="#">Carrers</a>
                    <a href="#">Works</a>
                    <a href="#">Testimonials</a>
                </div>

                <div className="flex flex-col gap-3">
                    <a href="#">244-5888-9875</a>
                    <a href="#">hello@food.com</a>
                    <a href="#">contact@food.com</a>
                </div>

                <div className="flex flex-col gap-3">
                    <a href="#">Term & Condition</a>
                    <a href="#">Privacy Policy</a>
                </div>



            </div>





        </div>
        
        
        </>
    )
}
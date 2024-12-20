



export default function Card({icon, text}){

    return(
        <div className="w-[220px] flex flex-col items-center justify-center bg-pink-100 backdrop-blur-lg gap-8 px-2 py-3 rounded-lg mt-[100px]">
            <h1 className="text-7xl text-yellow-500">{icon} </h1>
            <h1 className="font-semibold text-lg">{text}</h1>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur. Maecenas orci et  interdum facilisi bibendum.</p>
        </div>
    )
}
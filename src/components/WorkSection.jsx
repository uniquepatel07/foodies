import Card from "./Card";
import { MdNoMeals } from "react-icons/md";
import { TbHandFinger } from "react-icons/tb";
import { CiDeliveryTruck } from "react-icons/ci";

export default function WorkSection() {
  return (
    <div>
      <div className="mx-52 mt-52  h-[800px] ">
        <div className="flex flex-col gap-5 items-center">
          <h2 className="text-xl font-semibold text-yellow-500">Work</h2>
          <h1 className="text-6xl font-custom text-gray-600 font-semibold">How It Works</h1>
          
          <p className="font-semibold text-lg text-slate-600 text-center">
            Lorem ipsum dolor sit amet consectetur. Non tincidunt <br />
            magna non et elit. Dolor turpis molestie dui <br />
            magnis facilisis at fringilla quam.
          </p>
          
        </div>

        <div className="flex justify-center gap-12">
            <Card icon={<MdNoMeals />} text={"Pick Meals"} />
            <Card icon={<TbHandFinger />} text={"Choose How Often"} />
            <Card icon={<CiDeliveryTruck />} text={"Fast Deliveries"} />
        </div>
      </div>
    </div>
  );
}

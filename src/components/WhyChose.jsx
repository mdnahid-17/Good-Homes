import { PiLeafFill } from "react-icons/pi";
import { IoTime } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { FaUsers } from "react-icons/fa";

const WhyChose = () => {
  return (
    <div className="bg-slate-200" data-aos="fade-down" data-aos-duration="2000">
      <div className="flex gap-4 justify-center py-10 ">
        <h2 className="text-3xl font-bold border-r-2 border-red-700 px-5">
          Why <span className="text-red-700">Chose Us</span>
        </h2>
        <p className="text-xl text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, sequi.</p>
      </div>

      <div className="grid-cols-1 lg:grid lg:grid-cols-4 px-10">
        <div className="p-5 space-y-3">
          <PiLeafFill size={50}></PiLeafFill>
          <h3 className="text-2xl font-semibold">Affordable Service</h3>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolorum.</p>
        </div>
        <div className="p-5 space-y-3">
          <IoTime size={50}></IoTime>
          <h3 className="text-2xl font-semibold">Reliable Timelines</h3>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolorum.</p>
        </div>
        <div className="p-5 space-y-3">
          <LiaCertificateSolid size={50}></LiaCertificateSolid>
          <h3 className="text-2xl font-semibold">Quality Assurance</h3>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolorum.</p>
        </div>
        <div className="p-5 space-y-3">
          <FaUsers size={50}></FaUsers>
          <h3 className="text-2xl font-semibold">Expert Team</h3>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, dolorum.</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChose;

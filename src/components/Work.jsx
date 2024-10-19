import workImg from "../assets/work-image-1.jpg";
import workImg2 from "../assets/work-image-2.jpg";
import workImg3 from "../assets/work-image-3.jpg";

const Work = () => {
  return (
    <div className="pb-10">
      <h2 className="text-3xl text-center font-bold pb-4" data-aos="fade-left" data-aos-duration="2000">
        How It Woks
      </h2>
      <div className=" grid grid-cols-1 lg:grid-cols-3 lg:w-4/5 mx-auto">
        <div className="w-2/3 text-center">
          <h5 className="text-lg  text-red-700 font-semibold py-4">Phase 1</h5>
          <img style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", margin: "0 46px" }} src={workImg} alt="" />
          <h3 className="text-xl text-center font-semibold py-4">Define</h3>
          <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, similique?</p>
        </div>
        <div className="w-2/3 text-center mt-20">
          <h5 className="text-lg text-red-700 font-semibold py-4">Phase 2</h5>
          <img style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", margin: "0 46px" }} src={workImg2} alt="" />
          <h3 className="text-xl text-center font-semibold py-4">Design</h3>
          <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, similique?</p>
        </div>
        <div className="w-2/3 text-center">
          <h5 className="text-lg text-red-700 font-semibold py-4">Phase 3</h5>
          <img style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)", margin: "0 46px" }} src={workImg3} alt="" />
          <h3 className="text-xl text-center font-semibold py-4">Deliver</h3>
          <p className="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, similique?</p>
        </div>
      </div>
    </div>
  );
};

export default Work;

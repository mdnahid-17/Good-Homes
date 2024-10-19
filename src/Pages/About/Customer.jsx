import customerImg from "../../assets/customer-1.jpg";
import customerImg2 from "../../assets/customer-2.jpg";
import customerImg3 from "../../assets/customer-3.jpg";
import { SiComma } from "react-icons/si";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Customer = () => {
  return (
    <div className="pt-10">
      <h2 className="text-3xl font-bold text-center py-3" data-aos="fade-right" data-aos-duration="2000">What <span className="text-red-700">People</span> Say</h2>
   <div className="pt-10">
   <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="border text-center p-6 bg-slate-300">
          <div className="flex justify-center items-center py-6">
          <SiComma size={25}></SiComma>
          <SiComma size={25}></SiComma>
          </div>
            <p className="pb-10 lg:px-14 text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eligendi nostrum dolorem at sequi cumque quasi laudantium dolorum debitis obcaecati?</p>
            <div className="flex justify-center items-center gap-4">
              <img className=" rounded-full" src={customerImg} alt="" />
              <div>
                <h5 className="font-bold">Mark Stivens</h5>
                <p>NYC</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border text-center p-6 bg-slate-300">
          <div className="flex justify-center items-center py-6">
          <SiComma size={25}></SiComma>
          <SiComma size={25}></SiComma>
          </div>
            <p className="pb-10 lg:px-14 text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eligendi nostrum dolorem at sequi cumque quasi laudantium dolorum debitis obcaecati?</p>
            <div className="flex justify-center items-center gap-4">
              <img className=" rounded-full" src={customerImg2} alt="" />
              <div>
                <h5 className="font-bold">Michael Green</h5>
                <p>Paris</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border text-center p-6 bg-slate-300">
          <div className="flex justify-center items-center py-6">
          <SiComma size={25}></SiComma>
          <SiComma size={25}></SiComma>
          </div>
            <p className="pb-10 lg:px-14 text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eligendi nostrum dolorem at sequi cumque quasi laudantium dolorum debitis obcaecati?</p>
            <div className="flex justify-center items-center gap-4">
              <img className=" rounded-full" src={customerImg3} alt="" />
              <div>
                <h5 className="font-bold">Wendy Moore</h5>
                <p>Washington</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="border text-center p-6 bg-slate-300">
          <div className="flex justify-center items-center py-6">
          <SiComma size={25}></SiComma>
          <SiComma size={25}></SiComma>
          </div>
            <p className="pb-10 lg:px-14 text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eligendi nostrum dolorem at sequi cumque quasi laudantium dolorum debitis obcaecati?</p>
            <div className="flex justify-center items-center gap-4">
              <img className=" rounded-full" src={customerImg} alt="" />
              <div>
                <h5 className="font-bold">Mark Stivens</h5>
                <p>NYC</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border text-center p-6 bg-slate-300">
          <div className="flex justify-center items-center py-6">
          <SiComma size={25}></SiComma>
          <SiComma size={25}></SiComma>
          </div>
            <p className="pb-10 lg:px-14 text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eligendi nostrum dolorem at sequi cumque quasi laudantium dolorum debitis obcaecati?</p>
            <div className="flex justify-center items-center gap-4">
              <img className=" rounded-full" src={customerImg2} alt="" />
              <div>
                <h5 className="font-bold">Michael Green</h5>
                <p>Paris</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="border text-center p-6 bg-slate-300">
          <div className="flex justify-center items-center py-6">
          <SiComma size={25}></SiComma>
          <SiComma size={25}></SiComma>
          </div>
            <p className="pb-10 lg:px-14 text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eligendi nostrum dolorem at sequi cumque quasi laudantium dolorum debitis obcaecati?</p>
            <div className="flex justify-center items-center gap-4">
              <img className=" rounded-full" src={customerImg3} alt="" />
              <div>
                <h5 className="font-bold">Wendy Moore</h5>
                <p>Washington</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
   </div>
    </div>
  );
};

export default Customer;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="mt-10">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        loop={true}
        grabCursor={true}
        slidesPerView={'auto'}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="relative">
            <img className="w-full  object-cover" src="https://i.ibb.co.com/jT0n1Yy/slider-1.jpg" />
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className="absolute w-full top-1/3 left-12 lg:top-1/2 lg:left-20 lg:w-1/2 text-white space-y-2">
              <div className="title" data-swiper-parallax="-300">
                <h1 className="text-2xl lg:text-3xl font-semibold">Modern In A New <span className="text-red-500 font-bold">Residential</span> Complex</h1>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <h3 className="text-xl lg:text-2xl font-medium">Luxury Residential</h3>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p className="hidden text-base lg:text-lg lg:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis
                  iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec
                  elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
                  velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img className="w-full object-cover" src="https://i.ibb.co.com/qpWQLv7/slider-2.jpg" />
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className="absolute w-full top-1/3 left-12 lg:top-1/2 lg:left-20 lg:w-1/2 text-white space-y-2">
              <div className="title" data-swiper-parallax="-300">
                <h1 className="text-2xl lg:text-3xl font-semibold">Modern In A New <span className="text-red-500 font-bold">Residential</span> Complex</h1>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <h3 className="text-xl lg:text-2xl font-medium">Luxury Residential</h3>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p className="hidden text-base lg:text-lg lg:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis
                  iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec
                  elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
                  velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
            <img className="w-full object-cover" src="https://i.ibb.co.com/4SpXR9p/slider-3.jpg" />
            <div className="absolute inset-0 bg-black opacity-45"></div>
            <div className="absolute w-full top-1/3 left-12 lg:top-1/2 lg:left-20 lg:w-1/2 text-white space-y-2">
              <div className="title" data-swiper-parallax="-300">
                <h1 className="text-2xl lg:text-3xl font-semibold">Modern In A New <span className="text-red-500 font-bold">Residential</span> Complex</h1>
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                <h3 className="text-xl lg:text-2xl font-medium">Luxury Residential</h3>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p className="hidden text-base lg:text-lg lg:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum mattis velit, sit amet faucibus felis
                  iaculis nec. Nulla laoreet justo vitae porttitor porttitor. Suspendisse in sem justo. Integer laoreet magna nec
                  elit suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
                  velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean feugiat non eros quis feugiat.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

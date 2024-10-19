import CountUp from "react-countup";
import aboutImg from "../../assets/page-about.jpg";
import Customer from "./Customer";
import { Helmet } from "react-helmet-async";

const About = () => {
    return (
        <div className="my-16">
            <Helmet>
                <title>Good Homes | About</title>
            </Helmet>
            <div className="relative">
                <img src={aboutImg} alt="" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h2 className="text-3xl mx-24 lg:text-5xl font-bold absolute top-10 lg:mx-20 lg:top-1/2 text-white">About</h2>
            </div>

            <div className="lg:w-1/2 mx-auto lg:py-10" data-aos="fade-left" data-aos-duration="2000">
                <h3 className="text-3xl font-bold text-center py-3">About <span className="text-red-700">Our Company</span></h3>
                <p className="text-gray-400 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aliquam quasi. Impedit saepe, omnis ad dicta blanditiis ex unde sequi ullam soluta facere minus quae harum cupiditate natus dolore ipsam.</p>
            </div>

            <div className="grid grid-col space-y-3 lg:grid-cols-4 py-10">
                <div className="text-center border-r-4 space-y-3">
                <h3 className="text-4xl font-bold">
                <CountUp start={0} end={35} duration={2.75} /></h3>
                    <p className="text-xl font-semibold text-gray-400"> Apartment Houses</p>
                </div>
                <div className="text-center border-r-4 space-y-3">
                    <h3 className="text-4xl font-bold">
                    <CountUp start={0} end={1400} duration={2.75} /></h3>
                    <p className="text-xl font-semibold text-gray-400"> Luxe Apartments</p>
                </div>
                <div className="text-center border-r-4 space-y-3">
                    <h3 className="text-4xl font-bold">
                    <CountUp start={0} end={560} duration={2.75} /></h3>
                    <p className="text-xl font-semibold text-gray-400"> Car Parking</p>
                </div>
                <div className="text-center space-y-3">
                    <h3 className="text-4xl font-bold">
                    <CountUp start={0} end={2100} duration={2.75} /></h3>
                    <p className="text-xl font-semibold text-gray-400"> Happy Customers</p>
                </div>
            </div>
            <Customer></Customer>
        </div>
    );
};

export default About;
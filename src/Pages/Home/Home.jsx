import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import Blogs from "../../components/Blogs";
import WhyChose from "../../components/WhyChose";
import Work from "../../components/Work";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Good Homes | Home</title>
            </Helmet>
            <Banner></Banner>
            <WhyChose></WhyChose>
            <Blogs></Blogs>
            <Work></Work>
        </div>
    );
};

export default Home;
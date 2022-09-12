import React from "react";
import Template from "../common/Template";
import Banner from "./Banner";
import MakeCalls  from "./MakeCalls";
import KeyFeatures from "./KeyFeatures";
import GetStarted from "./GetStarted";
import Testimonial from "./Testimonial";
import FiveBoxesBlock from "./FiveBoxesBlock";
const Home = () => {
return (    <React.Fragment>
    <Template>
       <Banner/>
       <MakeCalls/>
       <KeyFeatures/>
       <GetStarted/>
       <Testimonial/>
       <FiveBoxesBlock/>
    </Template>
    </React.Fragment>);
}
export default Home;
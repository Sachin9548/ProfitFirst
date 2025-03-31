import React from "react";
import gif from "../assets/giff.mp4"
import ProfitFirst from "../assets/ProfitFirst1.png"
const FlowSection = () => {
  return (
    <section className="py-10 px-4 text-center ">
    
      <h2 className="text-4xl font-bold mb-4 text-white">
        Getting the Good <span className="my-gradient-text font-bold"> ROAS </span> but still don’t know<br /> where your profit is <span className="my-gradient-text font-bold">going?</span>
      </h2>
      <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
        Profit first will help you to figure out everything in your E com business
      </p>
      <div className="p-2 m-0 flex flex-col justify-center items-center">
       <video className="" autoPlay loop muted style={{width:"60%"}}>
        <source src={gif} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img width={"800px"} src={ProfitFirst} alt="flow image " /> */}
      </div>
      
    </section>    
  );
};

export default FlowSection;

import React from "react";
import gif from "../assets/giff.mp4"
import ProfitFirst from "../assets/ProfitFirst1.png"
const FlowSection = () => {
  return (
    <section className="py-10 px-4 text-center ">
    
    <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 leading-snug px-4">
  Getting the Good <span className="my-gradient-text font-bold">ROAS</span> but still don’t know<br className="hidden sm:block" />&nbsp;
   where your profit is <span className="my-gradient-text font-bold">going?</span>
</h2>

      <p className="text-white mb-12 max-w-2xl mx-auto">
        Profit first will help you to figure out everything in your E com business
      </p>
      <div className="p-2 m-0 flex flex-col justify-center items-center">
       <video className="w-96 md:w-96 lg:w-96 responsivelayout" autoPlay loop muted>
        <source src={gif} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <img width={"800px"} src={ProfitFirst} alt="flow image " /> */}
      </div> 
      
    </section>    
  );
};

export default FlowSection;

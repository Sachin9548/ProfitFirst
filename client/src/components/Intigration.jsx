import React from "react";
import Animation from "../assets/Animation.mp4";
const Intigration = () => {
  return (
    <section className="py-10 px-4 text-center ">
    
      <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 leading-snug px-4">
        Easily Integrate with <span className="my-gradient-text font-bold">Various Platforms</span>
      </h2>
      <p className="text-white mb-12 max-w-2xl mx-auto">
        All problem single solution
      </p>
      <div className="w-full m-0 p-0 flex justify-center items-center">
          <video
            className="w-full sm:max-w-3xl sm:rounded-lg sm:shadow-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={Animation} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>


    </section>
  );
};

export default Intigration;

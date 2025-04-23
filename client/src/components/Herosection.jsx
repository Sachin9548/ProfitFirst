import React from "react";
import {Link} from "react-router-dom";
import Dashboard from "../assets/Dashboard.jpg";
const Herosection = () => {
  return (
    <>
    <section id="HOME"
      // Replace '/path/to/your/hero-bg.jpg' with your actual image path/URL
      className="relative w-full min-h-screen flex flex-col items-center justify-center
                 text-white pt-24 pb-12 px-4"
    >
       {/* Add the two blurred circles */}
       <div 
    className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-50 z-0"
    style={{
      background: 'linear-gradient(to right, rgb(29, 164, 24), rgb(206, 220, 93))',
    }}
  ></div>
  
  <div 
    className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] opacity-50 z-0"
    style={{
      background: 'linear-gradient(to left, rgb(29, 164, 24), rgb(206, 220, 93))',
    }}
  ></div>
      {/* Top Tag */}

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 capitalize" style={{lineHeight: "1.4",marginTop: "100px"}}>
      Know how much you <span className=" font-bold my-gradient-text" >spent</span> & <br />
      how much <span className=" font-bold my-gradient-text">profit</span> you'll make, all in one place!

      </h1>

      {/* Paragraph */}
      <p className="text-center text-[#999] max-w-2xl mt-6 mb-6 text-lg">
      Find every detail that matters to grow your D2C brand—from Roas to Net Profit.
      </p>

      {/* Video Thumbnail (Placeholder) */}
      {/* <div className="relative w-full max-w-xl h-72 mb-6">
        <img
          src="https://i.ytimg.com/vi_webp/uLnk3lG3WZo/maxresdefault.webp"
          alt="Video Thumbnail"
          className="w-full h-full object-cover rounded"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white text-black rounded-full p-3 hover:opacity-80">
            ▶
          </button>
        </div>
      </div> */}

      {/* Buttons */}
      <div className="flex space-x-4 mt-9">
  <Link to="/Contact" className="btn-professional">
    <span>Start your free trial</span>
  </Link>
</div>


    </section>


    <section
  id="DASHBOARD"
  className="relative text-white pt-0 pb-0 px-2 rounded md:pt-12 md:pb-12 md:px-4"
>
  <div className="w-full px-0 md:px-32">
    <img src={Dashboard} alt="Heroimg" className="w-full" />
  </div>
</section>

    </>
  );
};

export default Herosection;

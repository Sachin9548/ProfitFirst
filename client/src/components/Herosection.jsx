import React from "react";

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
      <div className="relative w-full max-w-xl h-72 mb-6">
        <img
          // Replace with the thumbnail image you want
          src="https://i.ytimg.com/vi_webp/uLnk3lG3WZo/maxresdefault.webp"
          alt="Video Thumbnail"
          className="w-full h-full object-cover rounded"
        />
        {/* Optional: A play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white text-black rounded-full p-3 hover:opacity-80">
            ▶
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div class="flex space-x-4 mt-9">
  <button class="btn-professional">
    <span>Start your free trial</span>
  </button>
</div>


    </section>
    <section id="DASHBOARD" className="relative w-full min-h-screen flex flex-col items-center justify-center
                  text-white pt-12 pb-12 px-4">
      <div className=" pl-32 pr-32">
        <img src="https://framerusercontent.com/images/SFaVEcCdEWvi55mMBfU7DGprdQ.png" alt="Heroimg" />
     </div>
    </section>
    </>
  );
};

export default Herosection;

import React, { useState } from "react";
import Logo1 from "../assets/Logo1.png";

const Step3 = ({ onComplete }) => {
  const [platform, setPlatform] = useState("Meta");
  const [MetaData, setMetaData] = useState({
    adAccountId:"",
    AdaccessToken: "",
    
  });

  const handleChange = (e) => {
    setMetaData({ ...MetaData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/onboard/step3", MetaData);
      toast.success("Ad account connected!");
      onComplete();
    } catch (err) {
      toast.error("Failed to connect ad account.");
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6 bg-[#0D1D1E] text-white">
       {/* Add the two blurred circles */}
       <div 
    className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-50 z-0"
    style={{
      background: 'linear-gradient(to right, rgb(18, 235, 142), rgb(18, 235, 142))',
    }}
  ></div>
  
  <div 
    className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] opacity-50 z-0"
    style={{
      background: 'linear-gradient(to left, rgb(18, 235, 142), rgb(18, 235, 142))',
    }}
  ></div>
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl w-full">
        {/* Left side: Video and Logo */}
        <div className="w-full lg:w-1/2 text-center">
          <img src={Logo1} alt="Profit First Logo" className=" w-48 sm:w-64" />
          <div className="bg-white rounded-xl w-full h-[300px] sm:h-[350px] mb-4"></div>
          <p className="text-green-400">
          Watch this video to connect your Meta account to Profit First
                    </p>
        </div>

        {/* Right side: Form */}
        <div className="w-full lg:w-1/2 p-8 rounded-xl myshopifybox">
          <h2 className="text-xl font-semibold mb-4">Connect your Ad Account</h2>

          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded border ${
                platform === "Meta"
                  ? "bg-green-500 text-black font-semibold"
                  : "border-gray-500"
              }`}
              onClick={() => setPlatform("Meta")}
            >
              Meta
            </button>
            <button
              className={`px-4 py-2 rounded border ${
                platform === "Google"
                  ? "bg-green-500 text-black font-semibold"
                  : "border-gray-500"
              }`}
              onClick={() => setPlatform("Google")}
            >
              Google
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Enter your Ad account I’D:</label>
              <input
                type="text"
                name="adAccountId"
                value={MetaData.adAccountId}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Enter Your Access Key</label>
              <input
                type="text"
                name="AdaccessToken"
                value={MetaData.AdaccessToken}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-md text-black font-semibold transition hover:text-white" style={{ backgroundColor:"#12EB8E"}}
            >
              Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step3;

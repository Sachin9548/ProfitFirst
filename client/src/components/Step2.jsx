import React, { useState } from "react";
import Logo1 from "../assets/Logo1.png";
import { toast } from "react-toastify";
import axiosInstance from "../../axios";
import { set } from "mongoose";

const Step2 = ({ onComplete }) => {
  const [platform, setPlatform] = useState("Shopify");
  const [shopifyData, setShopifyData] = useState({
    storeUrl: "",
    apiKey: "",
    apiSecret: "",
    accessToken: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setShopifyData({ ...shopifyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axiosInstance.post("/onboard/step2", shopifyData);
      toast.success("Shopify store connected!");
      onComplete();
      setLoading(false);
    } catch (err) {
      toast.error("Failed to connect store. Please check credentials.");
      console.error("Submission error:", err);
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#0D1D1E]">
        <PulseLoader size={60} color="#12EB8E" />
        {/* <ClipLoader size={60} color="#4f46e5" /> */}
      </div>
    );
  }
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-6 bg-[#0D1D1E] text-white">
      {/* Add the two blurred circles */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-50 z-0"
        style={{
          background:
            "linear-gradient(to right, rgb(18, 235, 142), rgb(18, 235, 142))",
        }}
      ></div>

      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[100px] opacity-50 z-0"
        style={{
          background:
            "linear-gradient(to left, rgb(18, 235, 142), rgb(18, 235, 142))",
        }}
      ></div>
      <div className="flex flex-col lg:flex-row items-center gap-10 max-w-7xl w-full">
        {/* Left side: Video and Logo */}
        <div className="w-full lg:w-1/2 text-center">
          <img src={Logo1} alt="Profit First Logo" className=" w-48 sm:w-64" />
          <div className="bg-white rounded-xl w-full h-[300px] sm:h-[350px] mb-4"></div>
          <p className="text-green-400">
            Watch this video to connect your shopify store to Profit First
          </p>
        </div>

        {/* Right side: Form */}
        <div className="w-full lg:w-1/2 p-8 rounded-xl myshopifybox">
          <h2 className="text-xl font-semibold mb-4">
            Connect your Shopify Store
          </h2>

          <div className="flex gap-4 mb-6">
            <button
              className={`px-4 py-2 rounded border ${
                platform === "Shopify"
                  ? "bg-green-500 text-black font-semibold"
                  : "border-gray-500"
              }`}
              onClick={() => setPlatform("Shopify")}
            >
              Shopify
            </button>
            <button
              className={`px-4 py-2 rounded border ${
                platform === "Wordpress"
                  ? "bg-green-500 text-black font-semibold"
                  : "border-gray-500"
              }`}
              onClick={() => setPlatform("Wordpress")}
            >
              Wordpress
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Store URL:</label>
              <input
                type="text"
                name="storeUrl"
                value={shopifyData.storeUrl}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Shopify API Key:</label>
              <input
                type="text"
                name="apiKey"
                value={shopifyData.apiKey}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Shopify API Security:
              </label>
              <input
                type="text"
                name="apiSecret"
                value={shopifyData.apiSecret}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Shopify Access Token:
              </label>
              <input
                type="text"
                name="accessToken"
                value={shopifyData.accessToken}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 rounded-md text-black font-semibold transition hover:text-white"
              style={{ backgroundColor: "#12EB8E" }}
            >
              Connect
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Step2;

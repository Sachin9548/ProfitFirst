import React from "react";
import { PiClockCountdownBold, PiFlagBannerBold, PiChartBarDuotone } from "react-icons/pi";

const RetentionAnalyticsSection = () => {
  return (
    <section className=" text-white py-4 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Mock Card */}
        {/* <div className="relative">
          <div className="bg-[#121212] rounded-3xl p-6 w-full max-w-md mx-auto shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-white font-medium">Historical LTV</h4>
              <button className="text-sm bg-[#1e1e1e] text-gray-300 px-3 py-1 rounded-full">
                Compare
              </button>
            </div>
            <div className="mb-6">
              <p className="text-2xl font-semibold text-white">$224</p>
              <p className="text-sm text-gray-400">Average</p>
              <p className="text-green-400 text-sm mt-1">▲ 14.12%</p>
            </div>
            <div className="flex items-end justify-between h-32">
              {[40, 20, 50, 30, 45, 60, 30].map((height, idx) => (
                <div
                  key={idx}
                  className="w-4 rounded-full bg-gradient-to-t from-indigo-500 to-blue-400"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
        </div> */}
            <div>
                 <img src="https://framerusercontent.com/images/lGKYYG90gzAn84UOXbSO72COTm8.png" alt="" />
            </div>

        {/* Right Text Content */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-white">
            <PiClockCountdownBold className="text-xl text-[#13ef96]" />
            <span className="font-medium text-[#13ef96]">Retention Analytics</span>
          </div>
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            Increase retention and lifetime value <br /> for your Shopify store
          </h2>
          <p className="text-gray-400 mb-6">
            Calculate Customer <strong className="text-[#13ef96] font-medium">Lifetime value</strong> automatically. 
            Monitor and Improve your sales and customers cohorts.
          </p>
{/* 
          <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:opacity-90 transition">
            Learn more →
          </button> */}

          {/* Features */}
          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <PiFlagBannerBold className="text-[#13ef96] text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-[#13ef96]">Cohort Analysis</h4>
                <p className="text-gray-400 text-sm">
                  Visualize how lifetime value evolves for each cohorts of client you acquire.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <PiChartBarDuotone className="text-[#13ef96] text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-[#13ef96]">Product Cohorts</h4>
                <p className="text-gray-400 text-sm">
                  Identify the products that drives loyalty the most and feature them to boost retention!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetentionAnalyticsSection;

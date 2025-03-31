import React from "react";
import { FaShopify, FaUsers, FaShoppingCart, FaEnvelope, FaChartLine } from "react-icons/fa";
import { PiGraphBold } from "react-icons/pi";
import "../App.css"; // Make sure the path is correct

const useCases = [
  {
    title: "Gross Profit",
    description:
      "Whether you’re a manufacturer or traders you need to know your gross profit, say goodbye to pen and paper and say welcome to Profit First, where you have to mention your product manufacturing cost (COGS) one time only, and you get gross margin details in the Dashboard everytime.",
    icon: <FaShopify className="text-2xl" />,
  },
  {
    title: "Net Profit",
    description:
      "Getting an excellent Roas but still not making any profit? Then you need a Profit first net margin calculator dashboard that give some real time data that you’re making money or just burning the money.",
    icon: <FaUsers className="text-2xl" />,
  },
  {
    title: "Cohort Analysis",
    description:
      "We don’t need to talk about how important Cohort analysis are. Whether you want to know about customer LTV or Product LTV profit first dashboard will give the easy but effective data so that you create your future strategy.",
    icon: <PiGraphBold className="text-2xl" />,
  },
  {
    title: "Marketing ",
    description:
      "You don't need to check the meta ads manager every time, you will get data within Profit First marketing dashboard, from CTR to Roas, from worst performing campaign to best performing campaign.",
    icon: <FaShoppingCart className="text-2xl" />,
  },
  {
    title: "Shipping",
    description:
      "If you’re selling product online then you must know your shipping number like RTO, Delivered Orders, Intransit orders, where’s the RTO came from and you’ll get all this crucial data in Profit First shipping dashboard.",
    icon: <FaEnvelope className="text-2xl" />,
  },
  {
    title: "Optimize Acquisition",
    description:
      "Create powerful audiences in Meta. Promote the right products to maximize LTV:CAC ratio",
    icon: <FaChartLine className="text-2xl" />,
  },
];

const SolutionsSection = () => {
  return (
    <section id="USECASES" className="text-white py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* <span className="text-sm font-medium text-green-400 px-4 py-1 rounded-full border border-green-400 inline-block mb-4">
          ⚡ Use Cases
        </span> */}
        <h2 className="text-4xl font-bold mb-4">
          Say goodbye to login multiple platforms 
          <br />
          <span className="my-gradient-text font-bold">everytime</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          D2C brands owners always check multiple platforms to see the Data
          <br /> but not from now
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-[#141414] rounded-2xl p-6 text-left border border-[#13e691] transition duration-300 custom-glow"
            >
              <div className="mb-4 text-[#13ef96]">{useCase.icon}</div>
              <h3 className="font-semibold text-[#13ef96] mb-2 text-lg">
                {useCase.title}
              </h3>
              <p className="text-gray-400 text-sm">{useCase.description}</p>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;

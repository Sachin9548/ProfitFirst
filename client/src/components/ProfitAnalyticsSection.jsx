import React from "react";
import Gross from "../assets/Gross.png";
import Sales from "../assets/Sales.png";
import CohortGraph from "../assets/CohortGraph.png";
import MarketingGraph from "../assets/MarketingGraph.png";
import ShippingGraph from "../assets/ShippingGraph.png";

const analyticsData = [
  {
    title: "Gross Profit",
    description:
      "Whether you’re a manufacturer or trader, you need to know your gross profit. Say goodbye to pen and paper and welcome Profit First—just mention your COGS once and get gross margin insights on your dashboard every time.",
    icon: Gross,
  },
  {
    title: "Net Profit",
    description:
      "Getting excellent ROAS but still not making a profit? Use our Net Margin Calculator for real-time clarity on whether you’re earning or just burning.",
    icon: Sales,
  },
  {
    title: "Cohort Analysis",
    description:
      "From customer LTV to product LTV, Profit First's cohort dashboard delivers powerful insights to help guide future strategy.",
    icon: CohortGraph,
  },
  {
    title: "Marketing",
    description:
      "No need to constantly check Ads Manager. View CTR, ROAS, and campaign insights right from your Profit First marketing dashboard.",
    icon: MarketingGraph,
  },
  {
    title: "Shipping",
    description:
      "Track RTOs, delivered and in-transit orders all in one place. The shipping dashboard keeps you informed with key logistics data.",
    icon: ShippingGraph,
  },
];

const ProfitAnalyticsSection = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto text-center text-white px-4 py-12" id="USECASES">
        <h2 className="text-2xl sm:text-4xl font-bold mb-4 leading-snug">
          Say goodbye to logging into multiple platforms <br className="hidden sm:block" />
          <span className="my-gradient-text font-bold">every time</span>
        </h2>
        <p className="text-white mb-10 max-w-2xl mx-auto text-base sm:text-lg">
          D2C brand owners used to check multiple platforms for insights—
          <br className="hidden sm:block" />
          but not anymore.
        </p>
      </div>

      <section className="text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16">
          {analyticsData.map((item, index) => (
            <div key={index} className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Text Content */}
              <div className={`${index % 2 !== 0 ? "lg:order-2" : ""}`}>
                <span className="text-[#13ef96] text-sm uppercase tracking-wide">
                  {item.title}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-base">{item.description}</p>
              </div>

              {/* Image */}
              <div className={`${index % 2 !== 0 ? "lg:order-1" : ""} flex justify-center`}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full max-w-md rounded-xl shadow-md object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProfitAnalyticsSection;

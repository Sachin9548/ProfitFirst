import React from "react";
import contact from "../assets/contact.jpg";
import Gross from "../assets/Gross.png";
import Sales from "../assets/Sales.png";
import CohortGraph from "../assets/CohortGraph.png";
import ShippingGraph from "../assets/ShippingGraph.png";
import MarketingGraph from "../assets/MarketingGraph.png";

const analyticsData = [
  {
    title: "Gross Profit",
    description:
      "Whether you’re a manufacturer or trader you need to know your gross profit, say goodbye to pen and paper and say welcome to Profit First, where you have to mention your product manufacturing cost (COGS) one time only, and you get gross margin details in the Dashboard everytime.",
      icon: Gross,

  },
  {
    title: "Net Profit",
    description:
      "Getting an excellent ROAS but still not making any profit? Then you need a Profit First net margin calculator dashboard that gives real time data on whether you’re making money or just burning it.",
      icon: Sales,

  },
  {
    title: "Cohort Analysis",
    description:
      "We don’t need to talk about how important cohort analysis is. Whether you want to know about customer LTV or product LTV, Profit First dashboard provides the effective data to help shape your future strategy.",
      icon: CohortGraph,

  },
  {
    title: "Marketing",
    description:
      "You don't need to check the Meta Ads Manager every time – get data within the Profit First marketing dashboard, from CTR to ROAS, and insights on each campaign.",
    icon: MarketingGraph,
  },
  {
    title: "Shipping",
    description:
      "If you’re selling products online then you must know your shipping metrics – from RTO to delivered and in-transit orders. Profit First shipping dashboard covers all this crucial data.",
      icon: ShippingGraph,

  },
 
];

const ProfitAnalyticsSection = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto text-center text-white" id="USECASES">
        <h2 className="text-4xl font-bold mb-4">
          Say goodbye to login multiple platforms 
          <br />
          <span className="my-gradient-text font-bold">everytime</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          D2C brands owners always check multiple platforms to see the Data
          <br /> but not from now
        </p>
      </div>
      <section className="py-0 px-0 text-white">
        <div className="max-w-6xl mx-auto">
          {analyticsData.map((item, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center px-2"
            >
              {index % 2 === 0 ? (
                <>
                  {/* Icon/Image Column */}
                  <div className="flex justify-center order-2 lg:order-1">
                    <div>
                      <img className="block rounded-xl" src={item.icon} alt={item.title} />
                    </div>
                  </div>
                  {/* Text Content Column */}
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-12 m-0">
                      <span className="font-medium text-[#13ef96] m-0">
                        {item.title}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold leading-snug m-0">
                      {item.title}
                    </h2>
                    <p className="text-gray-400 m-0">
                      {item.description}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* For odd items, text is rendered first */}
                  <div>
                    <div className="flex items-center gap-2 m-0">
                      <span className="font-medium text-[#13ef96] m-0">
                        {item.title}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold leading-snug m-0">
                      {item.title}
                    </h2>
                    <p className="text-gray-400 m-0">
                      {item.description}
                    </p>
                  </div>
                  {/* Icon/Image Column */}
                  <div className="flex justify-center">
                    <div>
                      <img className="block rounded-xl" src={item.icon} alt={item.title} />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProfitAnalyticsSection;

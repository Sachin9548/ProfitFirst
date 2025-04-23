import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, AreaChart, Area, LineChart, Line } from "recharts";

const Dashboard = () => {
    const getValueBasedStops = (data) => {
        const values = data.map((d) => d.value);
        const min = Math.min(...values);
        const max = Math.max(...values);
        const range = max - min || 1;

        return data.map((point, index) => {
            const percent = (index / (data.length - 1)) * 100;
            const valueRatio = (point.value - min) / range;

            // Create a gradient from red to yellow to green
            let color;
            if (valueRatio < 0.33) {
                color = interpolateColor("#C82B2B", "#DAD239", valueRatio / 0.33); // from red to yellow
            } else if (valueRatio > 0.66) {
                color = interpolateColor("#DAD239", "#3ADA83", (valueRatio - 0.66) / 0.34); // from yellow to green
            } else {
                color = "#DAD239"; // yellow for middle values
            }

            return <stop key={index} offset={`${percent}%`} stopColor={color} stopOpacity={1} />;
        });
    };

    // Function to interpolate between two colors based on ratio
    const interpolateColor = (startColor, endColor, ratio) => {
        const start = hexToRgb(startColor);
        const end = hexToRgb(endColor);

        const r = Math.round(start.r + (end.r - start.r) * ratio);
        const g = Math.round(start.g + (end.g - start.g) * ratio);
        const b = Math.round(start.b + (end.b - start.b) * ratio);

        return rgbToHex(r, g, b);
    };

    // Convert hex color to RGB
    const hexToRgb = (hex) => {
        let r = 0,
            g = 0,
            b = 0;
        // 3 digits (e.g. #03F)
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        }
        // 6 digits (e.g. #FF5733)
        else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return { r, g, b };
    };

    // Convert RGB to hex
    const rgbToHex = (r, g, b) => {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
    };

    const OverallData = [
        { label: "Total Orders", value: 100, color: "bg-teal-500" },
        { label: "COD Orders", value: 80, color: "bg-orange-500" },
        { label: "Prepaid Orders", value: 20, color: "bg-purple-500" },
        { label: "Delivered", value: 60, color: "bg-white" },
        { label: "RTO", value: 20, color: "bg-indigo-500" },
        { label: "Total Sales", value: 50000, color: "bg-green-500" },
        { label: "Shipping Cost", value: 4000, color: "bg-red-500" },
    ];

    const chartData = {
        ROAS: [
            { name: "SEP", value: 3.2 },
            { name: "FEB", value: 3.5 },
            { name: "JUL", value: 4.1 },
            { name: "JAN", value: 4.2 },
            { name: "AUG", value: 4.7 },
            { name: "APR", value: 4.9 },
            { name: "MAR", value: 5.8 },
            { name: "JUN", value: 5.9 },
            { name: "MAY", value: 6.3 },
        ],
        CPP: [
            { name: "MAR", value: 300 },
            { name: "MAY", value: 250 },
            { name: "APR", value: 220 },
            { name: "JUN", value: 210 },
            { name: "JAN", value: 170 },
            { name: "AUG", value: 160 },
            { name: "FEB", value: 120 },
            { name: "JUL", value: 110 },
            { name: "SEP", value: 102 },
        ],
        Sales: [
            { name: "FEB", value: 28000 },
            { name: "JAN", value: 30000 },
            { name: "SEP", value: 39000 },
            { name: "APR", value: 48000 },
            { name: "JUL", value: 47000 },
            { name: "MAR", value: 50000 },
            { name: "AUG", value: 51000 },
            { name: "JUN", value: 58000 },
            { name: "MAY", value: 63000 },
        ],
        Order: [
            { name: "FEB", value: 108 },
            { name: "JAN", value: 115 },
            { name: "SEP", value: 150 },
            { name: "MAR", value: 165 },
            { name: "APR", value: 168 },
            { name: "JUL", value: 175 },
            { name: "AUG", value: 185 },
            { name: "JUN", value: 198 },
            { name: "MAY", value: 210 },
        ],
    };

    const summaryData = [
        ["Revenue", "₹10,000"],
        ["Orders", "No. 10"],
        ["Ads Spend", "₹1,000"],
        ["Shipping Spend", "₹1,000"],
        ["Product Cost", "₹5,000"],
        ["Gross Profit", "₹5,000"],
        ["Net Profit", "₹3,000"],
        ["AOV", "₹1,000"],
        ["ROAS", "₹1,000"],
        ["POAS", "₹5,000"],
    ];

    const marktingData = [
        ["Orders No.", "NO. 545"],
        ["CPP", "₹1,000"],
        ["ROAS", "3.4%"],
        ["Amount Spend", "₹1,000"],
        ["LINK CLICKS", "No. 123"],
        ["CPC", "₹5,000"],
        ["CTR", "2.7%"],
        ["Impression", "No."],
        ["CPM", "₹1,000"],
        ["REACH", "No. 123"],
    ];

    const websiteData = [
        ["Total Sales", "₹10,000"],
        ["Total Orders", "₹1,000"],
        ["Total Customers", "₹1,000"],
        ["AOV", "₹1,000"],
        ["Returning Rate", "₹10,000"],
        ["Website Visitor", "No."],
        ["Conversion Rate", "₹1,000"],
        ["Products by sell-through rate", "₹1,000"],
    ];

    const websiteChart = [
        { name: "Jan 2025", newCustomers: 500, returningCustomer: 150 },
        { name: "Feb 2025", newCustomers: 600, returningCustomer: 200 },
        { name: "Mar 2025", newCustomers: 700, returningCustomer: 250 },
        { name: "Apr 2025", newCustomers: 800, returningCustomer: 300 },
        { name: "May 2025", newCustomers: 900, returningCustomer: 350 },
        { name: "Jun 2025", newCustomers: 1000,returningCustomer: 400 },
        { name: "Jul 2025", newCustomers: 1100,returningCustomer: 450 },
        { name: "Aug 2025", newCustomers: 1200,returningCustomer: 500 },
        { name: "Sep 2025", newCustomers: 1300,returningCustomer: 550 },
        { name: "Oct 2025", newCustomers: 1400,returningCustomer: 600 },
        { name: "Nov 2025", newCustomers: 1500,returningCustomer: 650 },
        { name: "Dec 2025", newCustomers: 1600,returningCustomer: 700 },
      ];

    const profitLoss = [
        { month: "JAN", cost: 10000, sales: 4000, adsSpend: 10000, shipping: 3000, netProfit: 17000 },
        { month: "FEB", cost: 12000, sales: 4500, adsSpend: 11000, shipping: 3500, netProfit: 18500 },
        { month: "MAR", cost: 13000, sales: 5000, adsSpend: 12000, shipping: 4000, netProfit: 21000 },
        { month: "APR", cost: 15000, sales: 6000, adsSpend: 13000, shipping: 4500, netProfit: 27500 },
        { month: "MAY", cost: 17000, sales: 7500, adsSpend: 14000, shipping: 5000, netProfit: 39000 },
        { month: "JUN", cost: 20000, sales: 8000, adsSpend: 15000, shipping: 5500, netProfit: 39500 },
        { month: "JUL", cost: 22000, sales: 8500, adsSpend: 16000, shipping: 6000, netProfit: 41000 },
        { month: "AUG", cost: 25000, sales: 9500, adsSpend: 18000, shipping: 7000, netProfit: 45000 },
    ];

    const [selectedData, setSelectedData] = useState(profitLoss[0]);
    const handleBarClick = (data, index) => {
        setSelectedData(data.activePayload[0].payload);
    };

    const [selectedMetric, setSelectedMetric] = useState("ROAS");
    const [productView, setProductView] = useState("best");

    const bestSellingProducts = [
        { id: 1, name: "Casio vintage Unisex", sales: 172, total: 214828 },
        { id: 2, name: "Hysh", sales: 106, total: 108581 },
        { id: 3, name: "Tissot Men's Watches", sales: 97, total: 145500 },
        { id: 4, name: "GA 2100 Blck", sales: 94, total: 149019 },
        { id: 5, name: "Armani Ladies Watches", sales: 36, total: 57768 },
    ];

    const leastSellingProducts = [
        { id: 1, name: "Basic Band", sales: 3, total: 1000 },
        { id: 2, name: "Strap Set", sales: 6, total: 3200 },
        { id: 3, name: "Leather Watch", sales: 9, total: 5100 },
        { id: 4, name: "Analog Kids Watch", sales: 11, total: 7200 },
        { id: 5, name: "Classic Timer", sales: 15, total: 9000 },
    ];

    const customerPieData = [
        { name: "New Customers", value: 15 },
        { name: "Returning Customers", value: 85 },
    ];

    const COLORS = ["#008374", "#2b82f6"];
    const gradientStops = getValueBasedStops(chartData[selectedMetric]);

    return (
        <>
            <div className="p-6 text-white space-y-6 overflow-x-hidden bg-[#0D1D1E] min-h-screen">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Dashboard</h2>
                    <select className="bg-[#161616] text-sm text-white px-3 py-1 rounded-lg border border-gray-700 hover:cursor-pointer">
                        <option>This Year</option>
                        <option>This Month</option>
                        <option>Last 7 Days</option>
                    </select>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                    {summaryData.map(([title, value]) => (
                        <div key={title} className="bg-[#161616] p-4 rounded-xl z-1">
                            <div className="text-sm text-gray-300">{title}</div>
                            <div className="text-xl font-bold text-white">{value}</div>
                        </div>
                    ))}
                </div>

                {/* Profit & Loss Section */}
                <div className="bg-[#161616] rounded-xl p-6 flex flex-col lg:flex-row gap-6 z-1">
                    {/* Chart Section - 3/5 */}
                    <div className="w-full lg:w-3/5">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">Overall Profit and Loss Breakdown</h3>
                            <select className="bg-[#161616] text-sm text-white px-3 py-1 rounded-lg border border-gray-700 hover:cursor-pointer">
                                <option>This Year</option>
                                <option>This Month</option>
                                <option>Last 7 Days</option>
                            </select>
                        </div>
                        <ResponsiveContainer width="100%" height={400}>
                            <BarChart data={profitLoss} barCategoryGap={16} onClick={handleBarClick} style={{ cursor: "pointer" }}>
                                <XAxis dataKey="month" stroke="#888" />
                                <YAxis stroke="#888" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "#161616",
                                        border: "1px solid #2e2e2e",
                                        borderRadius: "8px",
                                        color: "#fff",
                                        boxShadow: "0 4px 12px rgba(0, 255, 47, 0.4)",
                                    }}
                                    cursor={{ fill: "#2e2e2e", opacity: 0.1 }}
                                />
                                <Bar dataKey="sales" stackId="a" fill="#d2f2d4"  />
                                <Bar dataKey="adsSpend" stackId="a" fill="#a3f78f" />
                                <Bar dataKey="shipping" stackId="a" fill="#32e000" />
                                <Bar dataKey="cost" stackId="a" fill="#22b600" />
                                <Bar dataKey="netProfit" stackId="a" fill="#009c1a" radius={[50, 50, 0, 0]}/>
                            </BarChart>
                        </ResponsiveContainer>

                        {/* Legend */}
                        <div className="flex justify-center mt-4 space-x-6 text-sm">
                            <div className="flex items-center space-x-1">
                                <span className="w-3 h-3 rounded-sm bg-[#d2f2d4]" />
                                <span>Sales</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="w-3 h-3 rounded-sm bg-[#a3f78f]" />
                                <span>Ads Spend</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="w-3 h-3 rounded-sm bg-[#32e000]" />
                                <span>Shipping Spend</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="w-3 h-3 rounded-sm bg-[#22b600]" />
                                <span>Cost</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="w-3 h-3 rounded-sm bg-[#009c1a]" />
                                <span>Net Profit</span>
                            </div>
                        </div>
                    </div>

                    {/*  Profit and Loss Breakdown Details Section */}
                    <div className="w-full lg:w-2/5">
                        <h3 className="text-lg font-semibold mb-4">{selectedData.month} 2025</h3>
                        <div className="space-y-3">
                            <div className="bg-[#d2f2d4] text-black p-4 rounded-lg font-medium">Sales: {selectedData.sales}</div>
                            <div className="bg-[#a3f78f] text-black p-4 rounded-lg font-medium">Ad Spend: {selectedData.adsSpend}</div>
                            <div className="bg-[#32e000] text-black p-4 rounded-lg font-medium">Shipping: {selectedData.shipping}</div>
                            <div className="bg-[#22b600] text-black p-4 rounded-lg font-medium">Cost: {selectedData.cost}</div>
                            <hr className="border-gray-700" />
                            <div className="bg-[#009c1a] text-white p-4 rounded-lg font-semibold">Net Profit: {selectedData.netProfit}</div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Marketing</h2>
                    <select className="bg-[#161616] text-sm text-white px-3 py-1 rounded-lg border border-gray-700 hover:cursor-pointer">
                        <option>This Year</option>
                        <option>This Month</option>
                        <option>Last 7 Days</option>
                    </select>
                </div>

                {/* marktingData Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                    {marktingData.map(([title, value]) => (
                        <div key={title} className="bg-[#161616] p-4 rounded-xl z-1">
                            <div className="text-sm text-gray-300">{title}</div>
                            <div className="text-xl font-bold text-white">{value}</div>
                        </div>
                    ))}
                </div>
                {/* example 1 */}
                {/* Marketing Chart Section */}
                <div className="bg-[#161616] rounded-2xl p-6">
                    <div className="mt-6">
                        <div className="flex items-center justify-between mb-2">
                            <div className="space-x-2">
                                {["ROAS", "CPP", "Sales", "Order"].map((metric) => (
                                    <button
                                        key={metric}
                                        onClick={() => setSelectedMetric(metric)}
                                        className={`px-3 py-1 rounded-lg text-sm ${selectedMetric === metric ? "bg-[#00B0FF] text-white font-bold border" : "bg-[#434343] text-white"}`}
                                    >
                                        {metric}
                                    </button>
                                ))}
                            </div>

                            <select className="bg-[#161616] text-sm text-white px-3 py-1 rounded-lg border border-gray-700 hover:cursor-pointer">
                                <option>This Year</option>
                                <option>This Month</option>
                                <option>Last 7 Days</option>
                            </select>
                        </div>

                        <div className="h-64 bg-[#161616] rounded-lg p-4 z-1">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={chartData[selectedMetric]}>
                                    <XAxis dataKey="name" stroke="#888" />
                                    <YAxis stroke="#888" />
                                    <Tooltip contentStyle={{ backgroundColor: "#161616", border: "none" }} labelStyle={{ color: "#fff" }} itemStyle={{ color: "#00B0FF" }} />
                                    <defs>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            {gradientStops}
                                        </linearGradient>
                                    </defs>
                                    <Line type="monotone" dataKey="value" stroke="url(#lineGradient)" strokeWidth={3} dot={{ fill: "#00B0FF", r: 4 }} activeDot={{ r: 6 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* example 2 */}
                {/* Marketing Chart Section */}
                <div className="bg-[#161616] rounded-2xl p-6">
                    <div className="mt-6">
                        <div className="flex items-center justify-between mb-2">
                            <div className="space-x-2">
                                {["ROAS", "CPP", "Sales", "Order"].map((metric) => (
                                    <button
                                        key={metric}
                                        onClick={() => setSelectedMetric(metric)}
                                        className={`px-3 py-1 rounded-lg text-sm ${selectedMetric === metric ? "bg-[#00B0FF] text-white font-bold border" : "bg-[#434343] text-white"}`}
                                    >
                                        {metric}
                                    </button>
                                ))}
                            </div>

                            <select className="bg-[#161616] text-sm text-white px-3 py-1 rounded-lg border border-gray-700 hover:cursor-pointer">
                                <option>This Year</option>
                                <option>This Month</option>
                                <option>Last 7 Days</option>
                            </select>
                        </div>

                        <div className="h-64 bg-[#161616] rounded-lg p-4 z-1">
                            {/* Area Chart */}
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData[selectedMetric]}>
                                    <XAxis dataKey="name" stroke="#888" />
                                    <YAxis stroke="#888" />
                                    <Tooltip contentStyle={{ backgroundColor: "#161616", border: "none" }} labelStyle={{ color: "#fff" }} itemStyle={{ color: "#3ADA83" }} />
                                    <defs>
                                        <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
                                            {gradientStops}
                                        </linearGradient>
                                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            {gradientStops}
                                        </linearGradient>
                                    </defs>
                                    <Area type="monotone" dataKey="value" stroke="url(#lineGradient)" fill="url(#colorUv)" strokeWidth={3} dot={{ fill: "#3ADA83", r: 4 }} activeDot={{ r: 6 }} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Website Section */}
                <div className="pb-6">
                    <h2 className="text-2xl font-bold mb-4">Website</h2>
                    {/* Website Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
                        {websiteData.map(([title, value]) => (
                            <div key={title} className="bg-[#161616] p-4 rounded-xl z-1">
                                <div className="text-sm text-gray-300">{title}</div>
                                <div className="text-xl font-bold text-white">{value}</div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full bg-[#161616] p-4 h-64 rounded-lg mt-12 mb-12 z-1">
                        <h3 className="text-lg font-semibold pb-4">New/Returning Customer</h3>

                        <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={websiteChart}>
                            <XAxis dataKey="name" stroke="#888" />
                            <YAxis stroke="#888" />
                            <Tooltip  contentStyle={{
                                backgroundColor: "#161616",
                                border: "1px solid #2e2e2e",
                                borderRadius: "8px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.4)",
                                color: "#ffffff",
                            }}
                            cursor={{ fill: "#2e2e2e", opacity: 0.5 }} />
                            <Bar dataKey="newCustomers" fill="#00FF00" style={{ cursor: "pointer" }}  />
                            <Bar dataKey="returningCustomer" fill="#FF4C91" style={{ cursor: "pointer" }} />
                        </BarChart>
                        </ResponsiveContainer>
                        {/* legend */}
                        <div className="flex justify-center mt-4 space-x-6 text-sm">
                            <div className="flex items-center space-x-1">
                                <span className="w-3 h-3 rounded-sm bg-[#00FF00]" />
                                <span>New Customers</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span className="w-3 h-3 rounded-sm bg-[#FF4C91]" />
                                <span>Returning Customers</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* bestSelling Products and Least Selling Products */}
                <div className="bg-[#161616] mt-10 rounded-xl p-6 ">
                    <div className="flex items-center justify-between mb-4 ">
                        <div className="space-x-2">
                            {["best", "least"].map((type) => (
                                <button key={type} onClick={() => setProductView(type)} className={`px-3 py-2 rounded-lg text-sm ${productView === type ? "bg-[#434343] text-white font-bold border" : "bg-[#434343] text-white"}`}>
                                    {type === "best" ? "Best Selling Products" : "Least Selling Products"}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Table */}
                        <div className="lg:col-span-2">
                            <table className="w-full text-left text-white">
                                <thead className="border-b border-gray-700">
                                    <tr className="text-gray-400 text-sm">
                                        <th className="py-2">NO.</th>
                                        <th className="py-2">Product Name</th>
                                        <th className="py-2">Sales</th>
                                        <th className="py-2">Total Sales</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(productView === "best" ? bestSellingProducts : leastSellingProducts).map((product, index) => (
                                        <tr key={product.id} className="border-b border-gray-800 text-sm">
                                            <td className="py-2">{index + 1}</td>
                                            <td className="py-2">{product.name}</td>
                                            <td className="py-2">{product.sales}</td>
                                            <td className="py-2">{product.total}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Donut Chart */}
                        <div className="flex justify-center items-center">
                            <PieChart width={400} height={200}>
                                <Pie data={customerPieData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} fill="#8884d8" dataKey="value">
                                    {customerPieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Legend layout="vertical" verticalAlign="middle" align="right" iconSize={10} formatter={(value) => <span className="text-sm text-white">{value}</span>} />
                            </PieChart>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {OverallData.map((item, index) => (
                        <div key={index} className="bg-[#161616] rounded-lg p-4 shadow-md flex items-center space-x-4 z-1">
                            <div className={`w-4 h-4 ${item.color}`}></div>
                            <div>
                                <p className="text-gray-400 text-sm ">{item.label}</p>
                                <p className="text-white font-semibold text-lg">{item.value}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Dashboard;

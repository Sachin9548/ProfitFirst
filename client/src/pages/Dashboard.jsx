import React, {useState} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart, Line,
  PieChart, Pie, Cell, Legend
} from 'recharts';

const chartData = {
  ROAS: [
    { name: 'JAN', value: 1.2 },
    { name: 'FEB', value: 2.1 },
    { name: 'MAR', value: 8.2 },
    { name: 'APR', value: 7.4 },
    { name: 'MAY', value: 6.9 },
    { name: 'JUN', value: 3.5 },
    { name: 'JUL', value: 2.8 },
    { name: 'AUG', value: 8.3 },
    { name: 'SEP', value: 2.0 }
  ],
  CPP: [
    { name: 'JAN', value: 800 },
    { name: 'FEB', value: 900 },
    { name: 'MAR', value: 1000 },
    { name: 'APR', value: 1100 },
    { name: 'MAY', value: 1200 },
    { name: 'JUN', value: 950 },
    { name: 'JUL', value: 1050 },
    { name: 'AUG', value: 980 },
    { name: 'SEP', value: 970 }
  ],
  Sales: [
    { name: 'JAN', value: 10000 },
    { name: 'FEB', value: 12000 },
    { name: 'MAR', value: 15000 },
    { name: 'APR', value: 18000 },
    { name: 'MAY', value: 17000 },
    { name: 'JUN', value: 20000 },
    { name: 'JUL', value: 19000 },
    { name: 'AUG', value: 17500 },
    { name: 'SEP', value: 16000 }
  ],
  Order: [
    { name: 'JAN', value: 100 },
    { name: 'FEB', value: 120 },
    { name: 'MAR', value: 150 },
    { name: 'APR', value: 170 },
    { name: 'MAY', value: 200 },
    { name: 'JUN', value: 210 },
    { name: 'JUL', value: 195 },
    { name: 'AUG', value: 180 },
    { name: 'SEP', value: 160 }
  ]
};



const Dashboard = () => {
  const summaryData = [
    ['Revenue', '₹10,000'],
    ['Orders', 'No. 10'],
    ['Ads Spend', '₹1,000'],
    ['Shipping Spend', '₹1,000'],
    ['Product Cost', '₹5,000'],
    ['Gross Profit', '₹5,000'],
    ['Net Profit', '₹3,000'],
    ['AOV', '₹1,000'],
    ['ROAS', '₹1,000'],
    ['POAS', '₹5,000'],
  ];

  const marktingData = [
    ['Orders No.', 'NO. 545'],
    ['CPP', '₹1,000'],
    ['ROAS', '3.4%'],
    ['Amount Spend', '₹1,000'],
    ['LINK CLICKS', 'No. 123'],
    ['CPC', '₹5,000'],
    ['CTR', '2.7%'],
    ['Impression', 'No.'],
    ['CPM', '₹1,000'],
    ['REACH', 'No. 123'],
  ];

  const websiteData = [
    ['Total Sales', '₹10,000'],
    ['Total Orders', '₹1,000'],
    ['Total Customers', '₹1,000'],
    ['AOV', '₹1,000'],
    ['Returning Rate', '₹10,000'],
    ['Website Visitor', 'No.'],
    ['Conversion Rate', '₹1,000'],
    ['Products by sell-through rate', '₹1,000'],
  ];
  
  

  const profitLoss = [
    { month: 'JAN', cost: 60, sales: 40, netSales: 40 },
    { month: 'FEB', cost: 80, sales: 70, netSales: 45 },
    { month: 'MAR', cost: 90, sales: 80, netSales: 40 },
    { month: 'APR', cost: 100, sales: 90, netSales: 50 },
    { month: 'MAY', cost: 100, sales: 100, netSales: 60 },
  ];



  const [selectedMetric, setSelectedMetric] = useState('ROAS');
  const [productView, setProductView] = useState('best');

const bestSellingProducts = [
  { id: 1, name: 'Casio vintage Unisex', sales: 172, total: 214828 },
  { id: 2, name: 'Hysh', sales: 106, total: 108581 },
  { id: 3, name: "Tissot Men's Watches", sales: 97, total: 145500 },
  { id: 4, name: 'GA 2100 Blck', sales: 94, total: 149019 },
  { id: 5, name: 'Armani Ladies Watches', sales: 36, total: 57768 },
];

const leastSellingProducts = [
  { id: 1, name: 'Basic Band', sales: 3, total: 1000 },
  { id: 2, name: 'Strap Set', sales: 6, total: 3200 },
  { id: 3, name: 'Leather Watch', sales: 9, total: 5100 },
  { id: 4, name: 'Analog Kids Watch', sales: 11, total: 7200 },
  { id: 5, name: 'Classic Timer', sales: 15, total: 9000 },
];

const customerPieData = [
  { name: 'New Customers', value: 15 },
  { name: 'Returning Customers', value: 85 },
];

const COLORS = ['#8ab4f8', '#2b82f6'];


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
            <BarChart data={profitLoss} barCategoryGap={16}>
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#161616',
                  border: '1px solid #2e2e2e',
                  borderRadius: '8px',
                  color: '#fff',
                }}
                cursor={{ fill: '#2e2e2e', opacity: 0.1 }}
              />
              <Bar dataKey="cost" stackId="a" fill="#b9fbc0"/>
              <Bar dataKey="sales" stackId="a" fill="#00ff00" />
              <Bar dataKey="netSales" stackId="a" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex justify-center mt-4 space-x-6 text-sm">
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded-sm bg-[#b9fbc0]" />
              <span>Cost</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded-sm bg-[#00ff00]" />
              <span>Sales</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-3 h-3 rounded-sm bg-[#22c55e]" />
              <span>Net Sales</span>
            </div>
          </div>
        </div>

        {/* Details Section - 2/5 */}
        <div className="w-full lg:w-2/5">
          <h3 className="text-lg font-semibold mb-4">Jan 2025</h3>
          <div className="space-y-3">
            <div className="bg-[#d2f2d4] text-black p-4 rounded-lg font-medium">Sales: 10,000</div>
            <div className="bg-[#a3f78f] text-black p-4 rounded-lg font-medium">Ad Spend: 10,000</div>
            <div className="bg-[#32e000] text-black p-4 rounded-lg font-medium">Shipping: 5,000</div>
            <div className="bg-[#22b600] text-black p-4 rounded-lg font-medium">Cost: 50,000</div>
            <hr className="border-gray-700" />
            <div className="bg-[#009c1a] text-white p-4 rounded-lg font-semibold">Net Profit: 10,000</div>
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

     <div className="bg-[#161616] rounded-2xl p-6">
       <div className="mt-6">
         <div className="flex items-center justify-between mb-2">
         <div className="space-x-2">
            {['ROAS', 'CPP', 'Sales', 'Order'].map(metric => (
              <button
                key={metric}
                onClick={() => setSelectedMetric(metric)}
                className={`px-3 py-1 rounded-lg text-sm ${
                  selectedMetric === metric
                    ? 'bg-[#00B0FF] text-white font-bold border'
                    : 'bg-[#434343] text-white'
                }`}
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
              <Tooltip
                contentStyle={{ backgroundColor: '#161616', border: 'none' }}
                labelStyle={{ color: '#fff' }}
                itemStyle={{ color: '#00B0FF' }}
              />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#00B0FF"
                strokeWidth={3}
                dot={{ fill: '#00B0FF', r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>

         </div>
       </div>
     </div>

     {/* Website Section */}
      <div>
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
       </div>
        {/* bestSelling Products and Least Selling Products */}
       <div className="bg-[#161616] mt-10 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4 ">
                <div className="space-x-2">
                  {['best', 'least'].map(type => (
                    <button
                      key={type}
                      onClick={() => setProductView(type)}
                      className={`px-3 py-1 rounded-lg text-sm ${
                        productView === type
                          ? 'bg-[#434343] text-white font-bold border'
                          : 'bg-[#434343] text-white'
                      }`}
                    >
                      {type === 'best' ? 'Best Selling Products' : 'Least Selling Products'}
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
                      {(productView === 'best' ? bestSellingProducts : leastSellingProducts).map((product, index) => (
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
                    <Pie
                      data={customerPieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {customerPieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                      iconSize={10}
                      formatter={(value) => (
                        <span className="text-sm text-white">{value}</span>
                      )}
                    />
                  </PieChart>
                </div>
              </div>
            </div>

   </div>
   </>
  );
};

export default Dashboard;

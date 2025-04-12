import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
} from 'recharts';

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

  const roasData = [
    { month: 'JAN', meta: 10, google: 20 },
    { month: 'FEB', meta: 40, google: 30 },
    { month: 'MAR', meta: 90, google: 60 },
    { month: 'APR', meta: 150, google: 80 },
    { month: 'MAY', meta: 200, google: 100 },
    { month: 'JUN', meta: 180, google: 130 },
    { month: 'JUL', meta: 160, google: 160 },
    { month: 'AUG', meta: 120, google: 190 },
    { month: 'SEP', meta: 100, google: 220 },
  ];

  const breakdownData = [
    { label: 'CASIO-VINTAGE-168', value: 35, revenue: 490376, color: '#22c55e' },
    { label: 'G-SHOCK-2100', value: 20, revenue: 280215, color: '#3b82f6' },
    { label: 'FOSSIL OLIVE', value: 11, revenue: 154118, color: '#a3a3a3' },
    { label: 'G-SHOCK-Z 2100', value: 8.5, revenue: 119091, color: '#eab308' },
    { label: 'G-SHOCK OAK GA 2100', value: 7, revenue: 98075, color: '#8b5cf6' },
    { label: 'ORDERS', value: 18.5, revenue: 259200, color: '#06b6d4' },
  ];

  const profitLoss = [
    { month: 'JAN', cost: 40, sales: 30, netSales: 40 },
    { month: 'FEB', cost: 50, sales: 40, netSales: 45 },
    { month: 'MAR', cost: 45, sales: 35, netSales: 40 },
    { month: 'APR', cost: 55, sales: 45, netSales: 50 },
  ];

  const totalProgress = 38.4;

  return (
    <div className="p-6 text-white space-y-6 overflow-x-hidden">
      {/* Header */}
      <div className="flex justify-between items-center z-1">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <select className="bg-[#1f1f1f] text-sm text-gray-300 rounded px-3 py-2">
          <option>This Year</option>
          <option>This Month</option>
          <option>Last 7 Days</option>
        </select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-8">
        {summaryData.map(([title, value]) => (
          <div key={title} className="bg-[#161616] p-4 rounded-xl shadow-md">
            <div className="text-sm text-white">{title}</div>
            <div className="text-xl font-bold">{value}</div>
          </div>
        ))}
      </div>

      {/* ROAS + Marketing + Shipping vs Breakdown */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        {/* ROAS + Marketing + Shipping */}
        <div className="col-span-2 space-y-6">
          {/* ROAS Chart */}
          <div className="bg-[#161616] rounded-xl p-4">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold">Meta & Google ROAS</h3>
              <select className="bg-[#1f1f1f] text-sm text-gray-300 rounded px-3 py-2">
                <option>This Year</option>
                <option>This Month</option>
                <option>Last 7 Days</option>
              </select>
            </div>
            <ResponsiveContainer width="100%" height={270}>
              <LineChart data={roasData}>
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line type="monotone" dataKey="meta" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="google" stroke="#a855f7" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Marketing & Shipping */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Marketing */}
            <div className="bg-[#161616] p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Marketing Data</h3>
              <div className="grid grid-cols-4 gap-2 text-center">
                {["Amount Spend", "CTR", "CPC", "ROAS"].map((item) => (
                  <div key={item}>
                    <div className="text-2xl text-[#0081f9] font-bold">50%</div>
                    <div className="text-sm text-gray-400">{item}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-sm text-blue-400">
                <span className="bg-blue-900 px-2 py-1 rounded">↑ 12%</span>
                <span>Yesterday Report</span>
                <span className="bg-blue-900 px-2 py-1 rounded">↑ 12%</span>
                <span>Today Report</span>
              </div>
            </div>

            {/* Shipping */}
            <div className="bg-[#161616] p-4 rounded-xl">
              <h3 className="text-lg font-semibold mb-2">Shipping Data</h3>
              <div className="grid grid-cols-4 gap-2 text-center">
                {["Total Shipment", "Intransit", "Delivered", "RTO"].map((item) => (
                  <div key={item}>
                    <div className="text-2xl text-[#7737f7] font-bold">50%</div>
                    <div className="text-sm text-gray-400">{item}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between text-sm text-purple-400">
                <span className="bg-purple-900 px-2 py-1 rounded">↑ 12%</span>
                <span>Yesterday Report</span>
                <span className="bg-purple-900 px-2 py-1 rounded">↑ 12%</span>
                <span>Today Report</span>
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown Pie Chart */}
        <div className="bg-[#161616] rounded-xl p-4 w-full text-white space-y-8">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Overall Breakdown</h3>
            <div className="flex items-center text-sm text-gray-300 space-x-1 cursor-pointer">
            <select className="bg-[#1f1f1f] text-sm text-gray-300 rounded px-3 py-2">
                <option>This Year</option>
                <option>This Month</option>
                <option>Last 7 Days</option>
              </select>
            </div>
          </div>
          
          <div className="relative w-full flex justify-center mb-10">
            <PieChart width={250} height={130}>
              <Pie
                data={breakdownData}
                dataKey="value"
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={50}
                outerRadius={70}
                paddingAngle={1}
              >
                {breakdownData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <div className="absolute top-[40] text-center">
              <div className="text-2xl font-semibold">{totalProgress}%</div>
              <div className="text-xs text-gray-400">Weekly Analytics</div>
            </div>
          </div>

          <div className="space-y-4 text-sm">
            {breakdownData.map((item) => (
              <div key={item.label} className="flex justify-between items-start">
                <div className="flex items-start space-x-2">
                  <div className="w-3 h-3 mt-1 rounded-sm" style={{ backgroundColor: item.color }} />
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-gray-400">₹{item.revenue.toLocaleString()}</div>
                  </div>
                </div>
                <div className="bg-[#2a2a2a] text-white px-2 py-0.5 rounded text-xs font-semibold">
                  {item.value}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Profit & Loss */}
      <div className="bg-[#0f0f0f] rounded-xl p-6 mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Chart */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Overall Profit and Loss Breakdown</h3>
            <select className="bg-[#161616] text-sm text-white px-3 py-1 rounded border border-gray-700">
              <option>This Year</option>
              <option>This Month</option>
              <option>Last 7 Days</option>
            </select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={profitLoss}>
              <XAxis dataKey="month" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#161616',
                  border: '1px solid #2e2e2e',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  color: '#fff',
                }}
                cursor={{ fill: '#2e2e2e', opacity: 0.1 }}
              />
              <Bar dataKey="cost" stackId="a" fill="#f4f4f5" />
              <Bar dataKey="sales" stackId="a" fill="#38bdf8" />
              <Bar dataKey="netSales" stackId="a" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>

          {/* Legend */}
          <div className="flex justify-center mt-4 space-x-4 text-sm">
            <div className="flex items-center space-x-1"><span className="w-3 h-3 rounded-sm bg-[#f4f4f5]" /> <span>Cost</span></div>
            <div className="flex items-center space-x-1"><span className="w-3 h-3 rounded-sm bg-[#38bdf8]" /> <span>Sales</span></div>
            <div className="flex items-center space-x-1"><span className="w-3 h-3 rounded-sm bg-[#22c55e]" /> <span>Net Sales</span></div>
          </div>
        </div>

        {/* Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-4">Jan 2025</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-3 rounded-lg shadow-md">
                Sales: 10,000
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-3 rounded-lg shadow-md">
                Ad Spend: 10,000
              </div>
              <div className="bg-gradient-to-r from-purple-500 to-violet-700 text-white p-3 rounded-lg shadow-md">
                Shipping: 5,000
              </div>
              <div className="bg-gradient-to-r  from-indigo-500 to-indigo-700 text-white p-3 rounded-lg shadow-md">
                Cost: 50,000
              </div>
            </div>
            <div className="bg-gradient-to-r from-green-500 to-green-900 text-white p-3 rounded-lg shadow-md mt-4">
              <p>Net Profit: 5,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

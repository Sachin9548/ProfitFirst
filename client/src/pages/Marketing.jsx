import React, {useState} from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Line,
  CartesianGrid,
} from 'recharts';

const adsSumaryData = [
  ['Amount Spend', '₹10,000'],
  ['Impression', 'No.10'],
  ['CPM', '₹1,000'],
  ['CTR', '1.0%'],
  ['Clicks', 'No.50'],        
  ['CPC', '₹1000'],
  ['Sales', 'No.50'],
  ['CPS', '₹100'],
  ['ROAS', '4.8'],        
  ['Total Sales', '₹1000'],
];


const spendData = [
  { name: 'Campaign A', spend: 15000, cpp: 5000, roas: 4.5 },
  { name: 'Campaign B', spend: 12000, cpp: 6000, roas: 3.8 },
  { name: 'Campaign C', spend: 9000, cpp: 5500, roas: 2.5 },
  { name: 'Campaign D', spend: 8000, cpp: 7000, roas: 1.8 },
];

const metaAdsData = [
  { name: 'Campaign 1', value: 5800 },
  { name: 'Campaign 2', value: 5100 },
  { name: 'Campaign 3', value: 4700 },
  { name: 'Campaign 4', value: 4300 },
  { name: 'Campaign 5', value: 4100 },
  { name: 'Campaign 6', value: 3900 },
  { name: 'Campaign 7', value: 3600 },
  { name: 'Campaign 8', value: 3800 },
  { name: 'Campaign 9', value: 4000 },
];



const Marketing = () => {


  const [campaignFilter, setCampaignFilter] = useState('Best');
  
  const sortedMetaAdsData = [...metaAdsData].sort((a, b) => {
    if (campaignFilter === 'Best') return b.value - a.value; 
    if (campaignFilter === 'Least') return a.value - b.value;
    return 0;
  });

  return (
    <div className="min-h-screen p-6 text-white space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">Marketing Dashboard</h1>
          <p className="text-sm text-white">Overall Data like the main dashboard starting</p>
        </div>
        <select className="bg-[#161616] text-sm text-white px-3 py-1 rounded border border-gray-700">
          <option>This Year</option>
          <option>This Month</option>
          <option>Last 7 Days</option>
        </select>
      </div>

       {/* Summary Cards */}
       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-8">
        {adsSumaryData.map(([title, value]) => (
          <div key={title} className="bg-[#161616] p-4 rounded-xl shadow-md">
            <div className="text-sm text-white">{title}</div>
            <div className="text-xl font-bold">{value}</div>
          </div>
        ))}
      </div>

      {/* Campaign Breakdown Button */}
      <button className="border border-gray-500 rounded px-4 py-1 text-xl hover:bg-white/10 z-1">
        Campaign Breakdown
      </button>
 
      {/* Spend, CPP and ROAS Chart */}
      <div className="bg-[#161616] rounded-xl p-4 z-1">
        <h3 className="text-xl font-medium mb-4">Spend, CPP and ROAS</h3>
        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={spendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
            <XAxis dataKey="name" stroke="#888" />
            <YAxis yAxisId="left" stroke="#888" tickFormatter={(v) => `$${v / 1000}K`} />
            <YAxis yAxisId="right" orientation="right" stroke="#888" domain={[0, 5]} />
            <Tooltip contentStyle={{
    backgroundColor: '#161616',
    border: '1px solid #2e2e2e',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
    color: '#ffffff',
  }}
  wrapperStyle={{
    zIndex: 1000,
  }}
  cursor={{ fill: '#2e2e2e', opacity: 0.1 }} />
            <Legend />
            <Bar yAxisId="left" dataKey="cpp" stackId="a" fill="#6a66db" name="CPP"/>
            <Bar yAxisId="left" dataKey="spend" stackId="a" fill="#3b82f6" name="Spend"  />
            <Line yAxisId="right" type="monotone" dataKey="roas" stroke="#ffffff" strokeWidth={2} name="ROAS" dot={{ r: 5 }} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Analysis Table */}
      <div className="bg-[#161616] rounded-xl p-4 z-1">
        <h3 className="text-xl font-medium mb-2">Detailed Analysis</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full text-md">
            <thead className="text-white">
              <tr>
                <th className="text-left p-2">Campaign</th>
                <th className="text-left p-2">Spend</th>
                <th className="text-left p-2">CPP</th>
                <th className="text-left p-2">ROAS</th>
                <th className="text-left p-2">Performing Well</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td className="p-2">Campaign A</td>
                <td className="p-2">$15,000</td>
                <td className="p-2">$50</td>
                <td className="p-2">4.5</td>
                <td className="p-2 text-green-400">Performing Well</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-2">Campaign B</td>
                <td className="p-2">$12,000</td>
                <td className="p-2">$60</td>
                <td className="p-2">3.8</td>
                <td className="p-2 text-yellow-400">Average</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-2">Campaign C</td>
                <td className="p-2">$9,000</td>
                <td className="p-2">$55</td>
                <td className="p-2">2.5</td>
                <td className="p-2 text-yellow-400">Average</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-2">Campaign D</td>
                <td className="p-2">$8,000</td>
                <td className="p-2">$70</td>
                <td className="p-2">1.8</td>
                <td className="p-2 text-red-400">Needs Attention</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    {/* Meta Ads Campaigns Chart with Filter and Sorting */}
<div className="bg-[#161616] rounded-xl p-4">
  <div className="flex justify-between items-center mb-4">
    <h3 className="text-xl font-medium">Meta Ads Campaigns</h3>
    <select
      value={campaignFilter}
      onChange={(e) => setCampaignFilter(e.target.value)}
      className="bg-[#202020] text-white text-sm px-3 py-1 rounded border border-gray-700"
    >
      <option value="Best">Best Performing</option>
      <option value="Least">Least Performing</option>
    </select>
  </div>
  <ResponsiveContainer width="100%" height={250}>
    <BarChart data={sortedMetaAdsData}>
      <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
      <XAxis dataKey="name" stroke="#888" />
      <YAxis stroke="#888" />
      <Tooltip contentStyle={{
    backgroundColor: '#161616',
    border: '1px solid #2e2e2e',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
    color: '#ffffff',
  }}
  wrapperStyle={{
    zIndex: 1000,
  }}
  cursor={{ fill: '#2e2e2e', opacity: 0.1 }} />
      <Bar dataKey="value" fill="#5488d8" />
    </BarChart>
  </ResponsiveContainer>
</div>

      {/* Summary Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-md text-gray-200">
        <div className="bg-[#161616] rounded-xl p-6">
          <p className="text-white">Amount Spent</p>
          <h4 className="text-lg font-semibold">$24,560</h4>
        </div>
        <div className="bg-[#161616] rounded-xl p-6">
          <p className="text-white">Impressions</p>
          <h4 className="text-lg font-semibold">3,200,000</h4>
        </div>
        <div className="bg-[#161616] rounded-xl p-6">
          <p className="text-white">Reach</p>
          <h4 className="text-lg font-semibold">2,500,000</h4>
        </div>
        <div className="bg-[#161616] rounded-xl p-6">
          <p className="text-white">Link Clicks</p>
          <h4 className="text-lg font-semibold">180,000</h4>
        </div>
        <div className="bg-[#161616] rounded-xl p-6">
          <p className="text-white">Cost Per Link Click</p>
          <h4 className="text-lg font-semibold">$0.14</h4>
        </div>
        <div className="bg-[#161616] rounded-xl p-6">
          <p className="text-white">Sales</p>
          <h4 className="text-lg font-semibold">7,600</h4>
        </div>
        <div className="bg-[#161616] rounded-xl p-6">
          <p className="text-white">Cost Per Sale</p>
          <h4 className="text-lg font-semibold">$3.23</h4>
        </div>
        <div className="bg-[#161616] rounded-xl p-6">
          <p className="text-white">ROAS</p>
          <h4 className="text-lg font-semibold text-green-400">4.12</h4>
        </div>
      </div>
    </div>
  );
};

export default Marketing;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../assets/blog1.png';
import blog2 from '../assets/blog2.png';
import blog3 from '../assets/blog3.png';
const Blogsection = () => {
  const blogs = [
    {
      id: 1,
      category: 'Insights',
      title: 'Higher ROAS Doesn’t Mean You Are Profitable: Don’t Fall for the ROAS Trap!',
      author: 'Shubham Soni',
      date: 'Apr 23, 2025',
      // image: 'https://d3jbnyrxd2dsna.cloudfront.net/Profit%20First/blog1.png',
      image: blog1,
      content:
        '📈 <strong>Higher ROAS ≠ Profitability</strong> 📉<br><br>' +
        'When running a business, it’s easy to get excited by a high Return on Ad Spend (ROAS). For example, a 5x ROAS might seem like you’re making a fortune from your ads. But there’s a big catch: ROAS doesn’t directly indicate profitability.<br><br>' +
        'ROAS (Return on Ad Spend) measures how much revenue you make from your ads, but it leaves out a critical factor—**costs**. Yes, while you may be bringing in a significant amount of revenue, if your expenses are high, your profits might not be as great as they seem.<br><br>' +
        '<h3>The Reality of ROAS</h3>' +
        'Let’s break it down. Imagine your ad campaigns bring in $5,000 in sales with a 5x ROAS. Sounds like a huge success, right? However, after considering your **product costs**, **shipping**, **transaction fees**, and other **overheads**, you find that your expenses have eaten up $4,500 of that revenue. Now, your actual profit? A mere $500.<br><br>' +
        '<h3>Why ROAS Can Be Misleading</h3>' +
        'While ROAS is useful for gauging the immediate return on your advertising spend, it’s **not the full picture**. It ignores key factors like operational costs, product costs, and shipping, all of which impact your actual profitability. If you’re only paying attention to ROAS, you might overlook the real costs that are shrinking your margins.<br><br>' +
        '<h3>The Solution: Profit First</h3>' +
        'This is where **Profit First** comes into play. Instead of relying on surface-level metrics, **Profit First** helps you track **net profit**—the true measure of financial health in your business. It provides you with real-time data on costs across every aspect of your business, from advertising and shipping to product expenses.<br><br>' +
        'With Profit First, you can view your entire financial breakdown, ensuring that you always know how much you’re actually making. You’ll have visibility into: <br>' +
        '- **Net profit** in real-time<br>' +
        '- Detailed breakdowns of **ads**, **cost of goods sold (COGS)**, **shipping**, and other essential costs<br>' +
        '- Key metrics that accurately predict your business’s growth and sustainability.<br><br>' +
        'It’s time to stop guessing about your profitability and start knowing for sure. Don’t let ROAS fool you. Focus on real **profit**, not just revenue.<br><br>' +
        'Ready to get serious about profitability? Let’s take your business to the next level with **Profit First**. Visit [profitfirst.co.in](http://profitfirst.co.in) and book a demo today.'
    },
    {
      id: 2,
      category: 'Insights',
      title: '90% OF D2C BRANDS DIE FROM MESSY DATA',
      author: 'Shubham Soni',
      date: 'Apr 24, 2025',
      image: blog2,
      content: 
        '💥 **DATA CHAOS KILLS D2C DREAMS** 💥<br><br>' +
        'Running a Direct-to-Consumer (D2C) brand is a dream for many entrepreneurs. But sadly, **90% of D2C brands fail** because they’re overwhelmed by **messy data**. In today’s fast-paced world, there’s so much data to track: from customer acquisition costs (CAC) to lifetime value (LTV), to product costs, and shipping fees. Without the right tools to organize this data, many D2C businesses miss out on the bigger picture and suffer financially.<br><br>' +
        '### The Problem: Scattered Metrics and Chaotic Data<br><br>' +
        'Are you currently running multiple spreadsheets, tracking various metrics across multiple tools like **Meta Ads**, **Shopify**, and **Shiprocket**? This scattered data is a recipe for confusion. Even though you may be tracking various numbers, without a centralized system, it’s easy to lose track of crucial financial insights.<br><br>' +
        'What’s the result of this? Poor decision-making. Without real-time insights into the metrics that matter most—like **customer acquisition costs (CAC)**, **lifetime value (LTV)**, and **shipping costs**—you can easily lose sight of your profitability. Most D2C brands struggle because they can’t make data-driven decisions and often end up overspending without realizing it.<br><br>' +
        '### Why Messy Data Hurts D2C Brands<br><br>' +
        'When your data is all over the place, you miss the critical relationships between key metrics. For instance, you may know how much you’re spending on ads, but do you know the real cost of acquiring a customer? Do you know your **lifetime value (LTV)** or how much profit you make after deducting shipping and other fees? Without these insights, your business is flying blind.<br><br>' +
        '### The Solution: Profit First 🚀<br><br>' +
        'Enter **Profit First**. This tool integrates all your major platforms—**Meta Ads**, **Shopify**, **Shiprocket**—into **ONE centralized dashboard**. Now, you can track all the important metrics, such as **CAC**, **LTV**, and **shipping costs**, in real-time.<br><br>' +
        'With **Profit First**, you get: <br>' +
        '✅ All your key metrics integrated into one dashboard<br>' +
        '✅ Real-time visibility into **CAC, LTV**, and **shipping costs**<br>' +
        '✅ The ability to make **data-driven decisions** that lead to real growth<br><br>' +
        'Stop letting **data chaos** undermine your D2C dream. Get organized, gain clarity, and make informed decisions that lead to profit. <br>' +
        'Visit [profitfirst.co.in](http://profitfirst.co.in) and book your demo today to see how we can help you scale your D2C brand without the data stress.'
    },
    {
      id: 3,
      category: 'Insights',
      title: 'Forget Spreadsheets — Profit First Tracks It All',
      author: 'Shubham Soni',
      date: 'Apr 25, 2025',
      image: blog3,
      content: 
        '📊 **Forget Spreadsheets — Profit First Tracks It All** 📊<br><br>' +
        'Managing a business with **spreadsheets** is outdated. Sure, spreadsheets can track some numbers, but they quickly become overwhelming, especially when you are juggling multiple platforms and complex data. Running a **D2C brand** means you need **real-time insights** into your business’s performance. That’s why it’s time to **ditch spreadsheets** and switch to **Profit First**.<br><br>' +
        'With **Profit First**, you get a centralized, user-friendly dashboard that tracks everything from **ad spend** to **net profit**. No more wasting time flipping between tabs or trying to decipher messy sheets. Everything you need to make **data-driven decisions** is now in one place.<br><br>' +
        '### Why Spreadsheets Aren’t Enough<br><br>' +
        'Spreadsheets are static, slow, and prone to errors. As a D2C brand owner, you can’t afford to rely on outdated methods. If you’re managing your business using spreadsheets, you’re likely missing out on critical insights, which could be costing you money.<br><br>' +
        'With **Profit First**, you get real-time access to:<br>' +
        '- **Ad Spend** analysis<br>' +
        '- **Net Profit** tracking<br>' +
        '- **Cost of Goods Sold (COGS)** visibility<br>' +
        '- **Shipping, fees, and overhead** breakdowns<br><br>' +
        'These insights help you understand the **actual health** of your business, so you can make smarter decisions on where to allocate resources and how to optimize your spending.<br><br>' +
        '### Scale Profitably with Profit First<br><br>' +
        'Profit First takes all your complex data and turns it into actionable insights. Whether you’re tracking **Meta Ads**, **Shopify**, or **Shiprocket**, you can see everything in one dashboard, in real-time.<br><br>' +
        'No more waiting for monthly reports or spending hours updating spreadsheets. **Profit First** gives you the power to make fast, informed decisions that help you scale your business **profitably**.<br><br>' +
        'Ready to leave spreadsheets behind and start tracking real-time metrics? Visit [profitfirst.co.in](http://profitfirst.co.in) and book your demo today. Let’s help you grow smarter and more profitably.'
    }
  ];
  

  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section id="BLOG" className="py-12 px-4 md:px-12 text-white overflow-x-hidden">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 leading-snug px-2">
        Stay Connected on our <span className="my-gradient-text font-bold">Newsletter</span>
      </h2>

      <p className="text-center text-white max-w-2xl mx-auto mb-10 px-2 text-sm sm:text-base">
        You’ll get to know how Profit First can help scale your D2C brand and how others manage their KPIs.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#161616] rounded-lg shadow hover:shadow-lg transition flex flex-col p-4"
          >
            <div className="relative">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto object-cover rounded-lg"
              />
              <span className="absolute bottom-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                {blog.category}
              </span>
            </div>

            <div className="mt-4 flex flex-col flex-grow">
              <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">
                {blog.title}
              </h3>
              <div className="flex justify-between text-sm text-gray-400 mt-auto">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
              </div>
              <button
                onClick={() => setSelectedBlog(blog)}
                className="mt-3 text-sm text-green-500 hover:underline self-start"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Modal */}
    {selectedBlog && (
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
        <div className="bg-[#1e1e1e] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-lg relative p-6 text-white">
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 text-2xl font-bold"
            onClick={() => setSelectedBlog(null)}
          >
            &times;
          </button>
          <div className="mt-6">
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-auto object-cover rounded"
            />
            <h3 className="text-sm text-green-500 mt-4">{selectedBlog.category}</h3>
            <p className="text-sm text-gray-400 mb-2">
              By {selectedBlog.author} | {selectedBlog.date}
            </p>
            <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
            <div
              className="leading-relaxed text-gray-300 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedBlog.content }}
            />
          </div>
        </div>
      </div>
    )}
  </section>
  );
};

export default Blogsection;

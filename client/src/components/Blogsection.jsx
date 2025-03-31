import React, { useState } from 'react';

const Blogsection = () => {
  // Dummy blog data
  const blogs = [
    {
      id: 1,
      category: 'Insights',
      title: 'RFM Analysis: The Ultimate Guide to Customer Segmentation',
      author: 'Vikas',
      date: 'Jan 23, 2023',
      image: 'https://framerusercontent.com/images/fH1XFRKjZ78SqKIkeqSqsFIRis0.jpg',
      content:
        'This is the content for the first blog. You can place any text, images, or additional information here.',
    },
    {
      id: 2,
      category: 'Tutorials',
      title: 'Leveraging Product Cohorts in your eCommerce Business',
      author: 'Vikas',
      date: 'Jan 1, 2024',
      image: 'https://framerusercontent.com/images/GAdhwRmIEdQ9kuQ1kaBREAreVYQ.png',
      content:
        'This is the content for the second blog. Feel free to include more details, charts, or examples.',
    },
    {
      id: 3,
      category: 'Insights',
      title: 'Elevate Your BFCM Strategy: Essential Tips for Brand Owners',
      author: 'Vikas',
      date: 'Nov 10, 2023',
      image: 'https://framerusercontent.com/images/yQftOhQSb6tc44kK9zbiU59ZIOw.jpeg',
      content:
        'This is the content for the third blog. You can tailor this text to suit your needs and style.',
    },
  ];

  // State to handle the selected blog (for modal)
  const [selectedBlog, setSelectedBlog] = useState(null);

  return (
    <section id='BLOG' className="py-12 px-12 text-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold md:text-4xl text-center mb-4">
        Stay Connected on our  
        <span className='my-gradient-text'> Newsletter</span>
        </h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-8">
        You’ll get lot to know that how profit first can help you to scale your D2C brand and how other’s KPI’s work.

        </p>

        {/* Explore Content Button */}
        <div className="text-center mb-10">
          <button className="px-6 py-2 text-white rounded-md shadow-sm hover:text-black transition" style={{ backgroundColor: '#13ef96' }}>
            Explore Content
          </button>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#161616] rounded-lg shadow hover:shadow-lg transition flex flex-col align-center p-6 mx-auto" style={{width: '85%'}}
            > 
              {/* Image + Category Badge */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <span className="absolute bottom-2 left-2 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {blog.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Blog Title */}
                <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Author & Date */}
                <div className="flex justify-between text-sm text-gray-400 mt-auto">
                  <span>By {blog.author}</span>
                  <span>{blog.date}</span>
                </div>

                {/* Read More Link */}
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

      {/* Modal (shown when a blog is selected) */}
      {selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#1e1e1e] w-full max-w-2xl mx-4 p-6 rounded-lg shadow relative text-white">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-200 text-2xl font-bold"
              onClick={() => setSelectedBlog(null)}
            >
              &times;
            </button>

            {/* Modal Content */}
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full p-4 h-60 object-cover rounded-t-lg" />
            <h3 className="text-sm text-green-500 font-semibold mt-2">
                {selectedBlog.category}
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              By {selectedBlog.author} | {selectedBlog.date}
            </p>

            <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
            <p className="leading-relaxed text-gray-300">{selectedBlog.content}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blogsection;

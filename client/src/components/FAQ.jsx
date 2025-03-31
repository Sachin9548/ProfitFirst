import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; 
// Install react-icons if you haven't: npm install react-icons

const FAQ = () => {
  const faqs = [
    {
      question: 'How secure is my data on your platform?',
      answer:
        'Your data is fully protected with us. We implement the latest security updates, and our databases are completely isolated from the internet. All connections, including backups, are restricted to our internal network only. ',
    },
    {
      question: 'Is it possible to cancel my subscription anytime?',
      answer:
        'Yes! You’re in full control—modify or cancel your subscription whenever you need. We know business needs evolve, so we make it easy and stress-free.',
    },
    {
      question: 'How much time it will take to onboard with Profit First?',
      answer:
        'It will take only 5 to 10 min to onboard with us, you need to pay attention while you’re answering the Product Manufacturing Cost (COGS).',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    // If the clicked FAQ is already open, close it; otherwise, open the new one
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='FAQ' className="py-12 text-white">
      <div className="container mx-auto px-4">
        {/* Heading and Subheading */}
        <div className="text-center max-w-xl mx-auto mb-8">
          
          <h2 className="text-4xl md:text-4xl font-bold mb-2 capitalize">
            Some of the things you may want<span className='my-gradient-text'> to know</span>
          </h2>
          <p className="text-gray-400">
            We answered questions so you don't have to ask them.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#161616] rounded-lg p-4 transition-all"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <span className="ml-2 text-gray-300">
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </button>

                {/* Answer with smooth transition */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 mt-2' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-400 mt-2">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

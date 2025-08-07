import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What's included with my watch purchase?",
      answer: "Each watch comes with the timepiece, premium gift box, warranty card, instruction manual, and a complimentary watch care kit. All purchases include free next-day delivery across the UK."
    },
    {
      question: "How long is the warranty period?",
      answer: "All Lunhor watches come with a comprehensive 2-year international warranty covering manufacturing defects and movement issues. This warranty is valid worldwide and includes free repairs or replacement."
    },
    {
      question: "Are your watches water-resistant?",
      answer: "Yes, all our chronograph watches feature water resistance up to 100 metres (10 ATM). This makes them suitable for swimming, showering, and water sports, but not for diving activities."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with 256-bit SSL encryption."
    },
    {
      question: "How quickly will my order arrive?",
      answer: "We offer free next-day delivery for all UK orders placed before 2 PM on weekdays. Weekend orders are dispatched on Monday. Express same-day delivery is available in London for an additional fee."
    },
    {
      question: "Can I return my watch if I'm not satisfied?",
      answer: "Absolutely! We offer a 30-day money-back guarantee. If you're not completely satisfied, return the watch in its original condition for a full refund. Return shipping is free within the UK."
    },
    {
      question: "Are the movements Swiss-made?",
      answer: "Yes, all our chronograph watches feature genuine Swiss quartz movements, known for their precision and reliability. These movements are sourced from established Swiss manufacturers with decades of expertise."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently, we ship within the UK only to ensure the fastest delivery times and best customer service. We're planning to expand internationally in 2024."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-400">
            Everything you need to know about our luxury timepieces
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden shadow-lg">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-700/30 transition-all duration-200"
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-amber-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-amber-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-slate-700/50 pt-4">
                    <p className="text-slate-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-2">
              Still have questions?
            </h3>
            <p className="text-slate-400 mb-4">
              Our customer service team is here to help you find the perfect timepiece.
            </p>
            <button className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-3 rounded-lg font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-200 transform hover:scale-105">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
import React, { useState } from 'react';

const tabs = ['Curriculum', 'Reviews', 'FAQs'];

const CourseTabs = ({ curriculum = [], reviews = [], faqs = [] }) => {
  const [activeTab, setActiveTab] = useState('Curriculum');

  const renderTabContent = () => {
    if (activeTab === 'Curriculum') {
      return curriculum.length ? (
        <ul className="space-y-2">
          {curriculum.map((item, idx) => (
            <li key={idx} className="border p-3 rounded-lg bg-white shadow-sm">
              <span className="font-medium">{item.title}</span>
              <span className="text-sm text-gray-500 ml-2">({item.duration})</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No curriculum available.</p>
      );
    }

    if (activeTab === 'Reviews') {
      return reviews.length ? (
        <div className="space-y-4">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl shadow-sm">
              <p className="font-semibold">{review.name}</p>
              <p className="text-gray-600">{review.message}</p>
              <p className="text-sm text-yellow-600">Rating: {review.rating} / 5</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No reviews yet.</p>
      );
    }

    if (activeTab === 'FAQs') {
      return faqs.length ? (
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg border">
              <p className="font-semibold">{faq.question}</p>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No FAQs available.</p>
      );
    }
  };

  return (
    <div className="mt-10">
      {/* Tabs Header */}
      <div className="flex space-x-4 border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`pb-2 px-1 border-b-2 text-sm font-medium ${
              activeTab === tab
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-600 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-gray-50 p-4 rounded-lg">{renderTabContent()}</div>
    </div>
  );
};

export default CourseTabs;

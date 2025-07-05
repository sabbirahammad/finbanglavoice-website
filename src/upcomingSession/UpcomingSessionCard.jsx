import React from 'react';
import { Video, User } from 'lucide-react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const UpcomingSessionCard = ({ session }) => {
  const totalAmount = session.duration * session.rate;

  // Check if email ends with @gmail.com
  const isGmail = session.email?.toLowerCase().endsWith('@gmail.com');

  return (
    <div className="bg-gradient-to-tr from-white to-gray-50 p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition duration-300 space-y-4 h-full flex flex-col justify-between">
      {/* Title */}
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-gray-800">{session.title}</h3>
        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {session.mode}
        </span>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
        <p className="flex items-center gap-2">
          <User className="w-4 h-4 text-green-500" /> <span>{session.instructor}</span>
        </p>
        <p className="flex items-center gap-2">
          <Video className="w-4 h-4 text-purple-500" /> <span>{session.mode}</span>
        </p>
        <p><strong>Duration:</strong> {session.duration} hr</p>
        <p><strong>Rate:</strong> {session.rate} €/hr</p>
        <p><strong>Total:</strong> <span className="text-green-600 font-semibold">{totalAmount} €</span></p>
      </div>

      {/* Description */}
      <div className="bg-gray-100 text-gray-800 p-3 rounded-md text-sm">
        <p className="font-medium">📘 Session Overview:</p>
        <p>{session.description}</p>
      </div>

      {/* Contact Buttons */}
      <div className="flex gap-3 pt-3">
        <a
          href={`https://wa.me/${session.whatsapp?.replace('+', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-2 rounded-full text-sm font-medium transition"
        >
          <FaWhatsapp /> WhatsApp
        </a>

        {isGmail && (
          <a
            href={`mailto:${session.email}`}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-full text-sm font-medium transition"
          >
            <FaEnvelope /> Gmail
          </a>
        )}
      </div>
    </div>
  );
};

export default UpcomingSessionCard;





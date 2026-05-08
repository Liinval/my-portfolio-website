import React from 'react';


  return (
    <div className="relative p-8">
      {/* Trigger Button */}
      <button 
       
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
      >
        Contact Me
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal Box */}
          <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center relative">
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            
            <div className="space-y-4">
              {/* WhatsApp Link */}
              <a 
                href="https://wa.me/263700000000" // Replace with your number
                target="_blank" 
                className="flex items-center justify-center gap-2 w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                <span>WhatsApp</span>
              </a>

              {/* Call Link */}
              <a 
                href="tel:+263700000000" // Replace with your number
                className="flex items-center justify-center gap-2 w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition"
              >
                <span>Call Me</span>
              </a>
            </div>

            {/* Close Button */}
            <button 
              onClick={toggleModal}
              className="mt-6 text-sm text-gray-500 underline hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactButton;
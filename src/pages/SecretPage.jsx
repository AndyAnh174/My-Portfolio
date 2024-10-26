// src/pages/SecretPage.jsx
import React, { useState } from 'react';

function SecretPage() {
  const [showEgg, setShowEgg] = useState(false);

  const mentors = [
    { name: 'Bùi Thanh Liêm', image: 'tamchuaco' },
    { name: 'Đỗ Thành Đạt', image: 'tamchuaco' },
    { name: 'Trần Công Toản', image: 'tamchuaco' },
  ];

  return (
    <div className="container mx-auto py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-8 text-[#593E67]">Một số bí mật về tui</h1>

      {/* Crush Section */}
      <div>
        <button
          onClick={() => setShowEgg(!showEgg)}
          className="text-white bg-[#DE741C] py-2 px-4 rounded-lg hover:bg-[#FEA837] transition"
        >
          Xem bí mật về crush của tôi
        </button>
        {showEgg && (
          <p className="mt-4 text-xl text-[#84495F]">[Bí Mật hihi]</p> //Nguyễn Thị Hồng Nhung
        )}
      </div>

      {/* Mentor Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#FEA837]">Các sư phụ của tôi</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="relative group p-6 bg-[#B85B56] rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-white">{mentor.name}</h3>
              <img
                src={mentor.image}
                alt={mentor.name}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecretPage;

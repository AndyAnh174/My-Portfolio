import React, { useState } from 'react';
import avatar from '../assets/avatar.jpg';

function SecretPage() {
  const [showEgg, setShowEgg] = useState(false);

  const mentors = [
    { name: 'Bùi Thanh Liêm', image: avatar },
    { name: 'Đỗ Thành Đạt', image: avatar },
    { name: 'Trần Công Toản', image: avatar },
  ];

  return (
    <div className="container mx-auto py-16 px-6 text-center">
      <h1 className="text-4xl font-bold mb-8 text-[#593E67]">Một số bí mật về tui</h1>

      {/* Crush Section */}
      <div className="mb-40"> {/* Thêm khoảng cách dưới phần này */}
        <button
          onClick={() => setShowEgg(!showEgg)}
          className="text-white bg-[#DE741C] py-2 px-4 rounded-lg hover:bg-[#FEA837] transition"
        >
          Xem bí mật về crush của tôi
        </button>
        {showEgg && (
          <p className="mt-4 text-xl text-[#84495F]">Bí mật hihi</p> //Nguyễn Thị Hồng Nhung
        )}
      </div>

      {/* Mentor Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-6 text-[#FEA837]">Các sư phụ của tôi</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="relative group p-6 bg-[#B85B56] rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-white">{mentor.name}</h3>
              {/* Hover Image */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-48 h-48 rounded-lg shadow-lg object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SecretPage;

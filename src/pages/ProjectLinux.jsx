// src/pages/ProjectLinux.jsx
import React from 'react';

function ProjectLinux() {
  return (
    <div className="container mx-auto px-6 py-16">
      
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Project Linux</h1>
        <p className="text-lg text-gray-700">
          Một dự án giáo dục và nghiên cứu giúp người dùng hiểu rõ và phát huy tối đa khả năng của hệ điều hành Linux.
        </p>
      </section>
      
      {/* Overview Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Tổng quan về dự án</h2>
        <p className="text-gray-700">
          Project Linux được thiết kế nhằm cung cấp kiến thức và công cụ cho người dùng từ cơ bản đến nâng cao trong việc làm quen và sử dụng hệ điều hành Linux. Dự án hướng đến cộng đồng, giúp mọi người tiếp cận dễ dàng hơn với Linux và các công nghệ nguồn mở.
        </p>
      </section>
      
      {/* Features Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Các tính năng chính</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Cung cấp tài liệu và bài hướng dẫn chi tiết về Linux.</li>
          <li>Tạo môi trường thực hành an toàn cho người dùng thử nghiệm.</li>
          <li>Hỗ trợ cộng đồng thông qua diễn đàn và hệ thống hỗ trợ trực tuyến.</li>
          <li>Các dự án thực tế giúp người dùng áp dụng kiến thức vào thực tiễn.</li>
        </ul>
      </section>
      
      {/* Contributors Section */}
      <section>
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Người hỗ trợ</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          <li>Nguyễn Văn A - Developer chính</li>
          <li>Trần Thị B - Quản lý nội dung</li>
          <li>Phạm Văn C - Thiết kế giao diện</li>
          <li>Lê Thị D - Quản trị viên cộng đồng</li>
        </ul>
      </section>
    </div>
  );
}

export default ProjectLinux;

import React from 'react';

const timelineData = [
  {
    year: '2008',
    title: 'Tốt nghiệp THPT',
    description: 'Hoàn thành chương trình trung học phổ thông với thành tích xuất sắc.'
  },
  {
    year: '2012',
    title: 'Tốt nghiệp Đại học',
    description: 'Nhận bằng cử nhân Công nghệ thông tin tại Đại học Quốc gia.'
  },
  {
    year: '2015',
    title: 'Bắt đầu công việc đầu tiên',
    description: 'Gia nhập công ty ABC với vai trò lập trình viên Frontend.'
  },
  {
    year: '2020',
    title: 'Thành tựu nổi bật',
    description: 'Được vinh danh là nhân viên xuất sắc nhất năm.'
  },
];

export default function Timeline() {
  return (
    <div className="w-full max-w-3xl mx-auto py-8 px-2 min-h-[60vh]">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Ký ức & Cột mốc</h2>
      <div className="relative border-l-4 border-blue-200 pl-8">
        {timelineData.map((item, idx) => (
          <div key={idx} className="mb-10 last:mb-0 relative">
            <div className="absolute -left-5 top-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
              {item.year}
            </div>
            <div className="bg-white rounded-xl shadow p-4">
              <h3 className="text-lg font-semibold text-blue-700 mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
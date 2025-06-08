import React from "react";
import {
  StarFilledIcon,
  HeartFilledIcon,
  ImageIcon,
  SpeakerLoudIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import Letter from "./../components/Letter";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-4">
      {/* Hero Section với Glassmorphism */}
      <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-2xl"></div>

        <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl m-4 p-8 md:p-12">
          {/* Avatar */}
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-6">
              <img
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/c6b50230f3679e3c6ff8d1f9ed6ade4a~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=3e860fe4&x-expires=1749567600&x-signature=oQ06wUebP7DMSKjdsIVsxzbhoUE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt="avatar"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full shadow-2xl border-4 border-white/30 object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400/20 to-blue-400/20"></div>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
              Thuý Hằng (Moon)
            </h1>
            <p className="text-white/80 text-lg mb-2">Ngày sinh: 20/04/xxxx</p>
            

            {/* Personal Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl mb-8">
              {/* Zodiac Sign */}
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg hover:bg-white/30 transition-all duration-300">
                <StarFilledIcon className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-white font-medium block">Cung Hoàng Đạo</span>
                  <span className="text-white/80 text-sm">Kim Ngưu (Taurus)</span>
                </div>
              </div>

              {/* Hobby */}
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg hover:bg-white/30 transition-all duration-300">
                <ImageIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-white font-medium block">Sở thích</span>
                  <span className="text-white/80 text-sm">Du lịch, Nhảy</span>
                </div>
              </div>

              {/* Music */}
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg hover:bg-white/30 transition-all duration-300">
                <SpeakerLoudIcon className="w-6 h-6 text-green-400 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-white font-medium block">Nhóm nhạc yêu thích</span>
                  <span className="text-white/80 text-sm">T-ARA</span>
                </div>
              </div>

              {/* Favorite Food */}
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg hover:bg-white/30 transition-all duration-300">
                <HeartFilledIcon className="w-6 h-6 text-red-400 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-white font-medium block">Món ăn yêu thích</span>
                  <span className="text-white/80 text-sm">Bánh tráng, Trà sữa</span>
                </div>
              </div>

              {/* Personality */}
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg hover:bg-white/30 transition-all duration-300">
                <SunIcon className="w-6 h-6 text-orange-400 flex-shrink-0" />
                <div className="text-left">
                  <span className="text-white font-medium block">Tính cách</span>
                  <span className="text-white/80 text-sm">Vui vẻ, Năng động</span>
                </div>
              </div>

              {/* Music Style */}
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md rounded-lg p-4 shadow-lg hover:bg-white/30 transition-all duration-300">
                <div className="w-6 h-6 bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full flex-shrink-0"></div>
                <div className="text-left">
                  <span className="text-white font-medium block">Thể loại nhạc</span>
                  <span className="text-white/80 text-sm">Tuỳ hứng</span>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 shadow-lg max-w-3xl">
              <p className="text-white/90 text-lg italic leading-relaxed text-center">
                "Cuộc sống là những khoảnh khắc đẹp được ghi lại bằng trái tim, không chỉ bằng máy ảnh."
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

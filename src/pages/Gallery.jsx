import React, { useEffect, useState } from "react";
import MainList from "../components/Main-list";
import CardEffect from "../components/Card-Effect";
import { AnimatePresence, motion } from "framer-motion";
import { ViewGridIcon, StackIcon } from "@radix-ui/react-icons";

// Dữ liệu mẫu, bạn có thể thay bằng props hoặc fetch API
const sampleList = [
  {
    id: 1,
    avatar_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    name: "Ảnh 1",
  },
  {
    id: 2,
    avatar_url: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
    name: "Ảnh 2",
  },
  {
    id: 3,
    avatar_url: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
    name: "Ảnh 3",
  },
  {
    id: 4,
    avatar_url: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    name: "Ảnh 4",
  },
  {
    id: 5,
    avatar_url: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c",
    name: "Ảnh 5",
  },
  {
    id: 6,
    avatar_url: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92",
    name: "Ảnh 6",
  },
];

export default function Gallery() {
  const [mode, setMode] = useState("list");
  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // Giả lập fetch dữ liệu, bạn có thể thay bằng API thực tế
      fetch("http://localhost:3030/gallary/items")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setList(data.meta);
        })
    }
    fetchData();
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-8 px-4 min-h-[70vh]">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
          Bộ sưu tập Moon
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Khám phá những khoảnh khắc đẹp nhất được lưu giữ trong bộ sưu tập của
          chúng tôi
        </p>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
          <h2 className="text-2xl font-semibold text-gray-800">Chế độ xem</h2>
        </div>

        {/* Switch với icons */}
        <div className="flex bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-white/50 p-1">
          <button
            className={`p-3 rounded-lg transition-all duration-200 ${
              mode === "list"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md transform scale-105"
                : "text-gray-600 hover:bg-white/50"
            }`}
            onClick={() => setMode("list")}
            title="Dạng lưới"
          >
            <ViewGridIcon className="w-5 h-5" />
          </button>
          <button
            className={`p-3 rounded-lg transition-all duration-200 ${
              mode === "card"
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md transform scale-105"
                : "text-gray-600 hover:bg-white/50"
            }`}
            onClick={() => setMode("card")}
            title="Dạng thẻ"
          >
            <StackIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="w-full min-h-[500px] relative">
        <AnimatePresence mode="wait">
          {mode === "list" ? (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <MainList list={list} />
            </motion.div>
          ) : (
            <motion.div
              key="card"
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute w-full"
            >
              <CardEffect list={list} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

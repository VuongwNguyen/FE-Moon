import React, { useEffect, useState } from "react";
import MainList from "../components/Main-list";
import CardEffect from "../components/Card-Effect";
import { AnimatePresence, motion } from "framer-motion";
import { ViewGridIcon, StackIcon } from "@radix-ui/react-icons";

export default function Gallery() {
  const [mode, setMode] = useState("list");
  const [list, setList] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // Giả lập fetch dữ liệu, bạn có thể thay bằng API thực tế
      fetch("https://be-moon.onrender.com/gallary/items")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setList(data.meta);
        });
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
          Hi vọng sau này có bấp bênh hay điều gì đó khó khăn hãy nhìn lại những
          bức ảnh này có thể sẽ kiến chị vui hơn, và hãy nhìn vào những bức ảnh
          này chị đã từng vui vẻ như thế nào nhé iuuuuu :)))
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

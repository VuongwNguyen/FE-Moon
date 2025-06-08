import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRouter from "./App-Router";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import LetterPage from "./pages/LetterPage";

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const mainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;
      
      const currentScrollY = mainRef.current.scrollTop;
      
      // Chỉ hiển thị nav khi scroll chạm đỉnh
      if (currentScrollY === 0) {
        setIsNavVisible(true);
      } else {
        setIsNavVisible(false);
      }
    };

    const mainElement = mainRef.current;
    if (mainElement) {
      mainElement.addEventListener('scroll', handleScroll, { passive: true });
      return () => mainElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <Router>
      <div className="h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50 relative overflow-hidden flex flex-col">
        {/* Background decorative elements - fixed và không gây overflow */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-indigo-200/25 rounded-full blur-3xl"></div>
        </div>
        
        {/* Navigation - fixed position with auto-hide */}
        <div 
          className={`fixed top-0 left-0 right-0 z-20 transition-transform duration-300 ease-in-out ${
            isNavVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
          }`}
        >
          <AppRouter />
        </div>
        
        {/* Main content - fullscreen with fixed padding */}
        <main 
          ref={mainRef}
          className="h-full overflow-y-auto relative z-10 pt-[120px] flex-1"
        >
          <div className="flex flex-col items-center justify-start px-2 py-6 min-h-full">
            <Routes>
              <Route path="/" element={<Gallery />} />
              <Route path="/profile" element={<Home />} />
              <Route path="/tamthu" element={<LetterPage />} />
            </Routes>
          </div>
        </main>
        {/* Footer */}
        <footer className="w-full bg-white/70 backdrop-blur-md border-t border-blue-200/40 py-4 px-4 flex flex-col md:flex-row items-center justify-between gap-2 z-30 relative">
          <div className="text-sm text-gray-700 font-medium">
            <span className="font-semibold text-purple-600">Presented by:</span> Yinnz
          </div>
          <div className="text-sm text-gray-700 font-medium">
            <span className="font-semibold text-blue-600">Model By:</span> Moon
          </div>
          <div className="text-sm text-gray-700 font-medium">
            <span className="font-semibold text-purple-600">https://www.tiktok.com/@moon788888</span>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

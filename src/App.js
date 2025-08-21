import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import HSK3Games from './pages/HSK3Games';
import './index.css';
import WriteChinesePage from './pages/WriteChineseHsk3';
import VocabLearning from './pages/vocabexcercise';
import WriteChinesePageHsk1 from './pages/WriteChineseHsk1';
import WriteChinesePageHsk2 from './pages/WriteChineseHsk2';
import WriteChinesePageHsk3 from './pages/WriteChineseHsk3';
import FlashcardGame from './pages/flashcard/FlashcardGame;';
import Hsk3LessonList from './components/Hsk3LessonList';
import LessonHSK3Page from './components/LessonHSK3Page';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function App() {


    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Mock Link component since we don't have React Router
  const Link = ({ to, className, children, ...props }) => (
    <a href={to} className={className} {...props}>{children}</a>
  );
  return (
 <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
<header className="bg-blue-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-tight">Flashcard HSK</h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-200 transition duration-200">Trang chủ</Link>
          <Link to="/on-tap-hsk3" className="hover:text-blue-200 transition duration-200">Học từ vựng</Link>
          <Link to="/on-tap-hsk3" className="hover:text-blue-200 transition duration-200">Luyện thi</Link>
          <Link to="/test" className="hover:text-blue-200 transition duration-200">Kiểm tra</Link>
          <Link to="/profile" className="hover:text-blue-200 transition duration-200">Hồ sơ</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800">
          <nav className="px-4 py-2 space-y-2">
            <Link to="/" className="block py-2 hover:text-blue-200 transition duration-200">Trang chủ</Link>
            <Link to="/on-tap-hsk3" className="block py-2 hover:text-blue-200 transition duration-200">Học từ vựng</Link>
            <Link to="/on-tap-hsk3" className="block py-2 hover:text-blue-200 transition duration-200">Luyện thi</Link>
            <Link to="/test" className="block py-2 hover:text-blue-200 transition duration-200">Kiểm tra</Link>
            <Link to="/profile" className="block py-2 hover:text-blue-200 transition duration-200">Hồ sơ</Link>
          </nav>
        </div>
      )}
    </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hsk3" element={<HSK3Games />} />
          <Route path="/hsk3/hoctheobai" element={<Hsk3LessonList />} />
<Route
  path="/hsk3/hoctheobai/viettiengtrung/bai/:lessonId"
  element={<LessonHSK3Page />}
/>

          <Route path="/hsk/write-chinese" element={<WriteChinesePage/>} />
                    <Route path="/hsk/write-chinese/hsk1" element={<WriteChinesePageHsk1/>} />
                     <Route path="/hsk/write-chinese/hsk2" element={<WriteChinesePageHsk2/>} />
                    <Route path="/hsk/write-chinese/hsk3" element={<WriteChinesePageHsk3/>} />
                    <Route path="/on-tap-hsk3" element={<VocabLearning/>} />
          <Route path="/flashcard/hskall" element={<FlashcardGame/>} />

          <Route path="/hsk3/write-vietnamese" element={<div className="text-center text-xl">Trò chơi Ghi tiếng Việt - Chưa triển khai</div>} />
          <Route path="/hsk3/flashcard" element={<div className="text-center text-xl">Trò chơi Flashcard - Chưa triển khai</div>} />
          <Route path="/hsk3/multiple-choice" element={<div className="text-center text-xl">Trò chơi Trắc nghiệm - Chưa triển khai</div>} />
          <Route path="/vocabulary" element={<div className="text-center text-xl">Học từ vựng - Chưa triển khai</div>} />
          <Route path="/practice" element={<div className="text-center text-xl">Luyện thi - Chưa triển khai</div>} />
          <Route path="/test" element={<div className="text-center text-xl">Kiểm tra - Chưa triển khai</div>} />
          <Route path="/profile" element={<div className="text-center text-xl">Hồ sơ - Chưa triển khai</div>} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text- py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Flashcard HSK. All rights reserved.</p>
          <p className="text-sm mt-2">Liên hệ: <a href="mailto:support@flashcardhsk.com" className="underline hover:text-blue-300">support@flashcardhsk.com</a></p>
        </div>
      </footer>
    </div>
  );
}


export default App;

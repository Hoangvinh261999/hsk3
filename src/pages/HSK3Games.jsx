import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, PenTool, RotateCcw, CheckCircle, Sparkles, Star, Zap } from 'lucide-react';

function HSK3Games() {
  const games = [
    {
      name: 'Ghi tiếng Trung',
      description: 'Nhập từ tiếng Trung đúng với nghĩa tiếng Việt được cho.',
      path: '/hsk3/write-chinese',
      icon: PenTool,
      color: 'blue',
      bgGradient: 'from-blue-100 to-blue-50',
      iconBg: 'from-blue-600 to-blue-700',
      difficulty: 'Trung bình'
    },
    {
      name: 'Ghi tiếng Việt',
      description: 'Nhập nghĩa tiếng Việt đúng với từ tiếng Trung được cho.',
      path: '/hsk3/write-vietnamese',
      icon: BookOpen,
      color: 'indigo',
      bgGradient: 'from-indigo-100 to-indigo-50',
      iconBg: 'from-indigo-600 to-indigo-700',
      difficulty: 'Dễ'
    },
    {
      name: 'Flashcard',
      description: 'Học từ vựng qua flashcard với từ, pinyin và nghĩa.',
      path: '/hsk3/flashcard',
      icon: RotateCcw,
      color: 'cyan',
      bgGradient: 'from-cyan-100 to-cyan-50',
      iconBg: 'from-cyan-600 to-cyan-700',
      difficulty: 'Cơ bản'
    },
    {
      name: 'Trắc nghiệm',
      description: 'Chọn đáp án đúng từ 4 lựa chọn cho từ vựng HSK 3.',
      path: '/hsk3/multiple-choice',
      icon: CheckCircle,
      color: 'emerald',
      bgGradient: 'from-emerald-100 to-emerald-50',
      iconBg: 'from-emerald-600 to-emerald-700',
      difficulty: 'Thách thức'
    },
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Header */}
      <div className="text-center pt-12 pb-16 px-6">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl mb-6 shadow-lg">
          <BookOpen className="w-10 h-10 text-white" />
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 tracking-tight">
          HSK 3
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
          Trò chơi học từ vựng
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Khám phá bộ sưu tập trò chơi tương tác được thiết kế để bạn thành thạo 600 từ vựng HSK 3 một cách thú vị và hiệu quả
        </p>
      </div>

      {/* Games Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {games.map((game, index) => {
            const IconComponent = game.icon;
            return (
              <div
                key={game.name}
                className="group relative"
                style={{
                  animation: `slideInUp 0.8s ease-out ${index * 0.2}s both`
                }}
              >
                {/* Card */}
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${game.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Top Section */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-14 h-14 bg-gradient-to-r ${game.iconBg} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-gray-600 font-medium">{game.difficulty}</span>
                      </div>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {game.name}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {game.description}
                    </p>

                    {/* Action Button */}
                    <Link
                      to={game.path}
                      className={`relative w-full bg-gradient-to-r ${game.iconBg} text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center`}
                    >
                      <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
                      <span className="text-base">Bắt đầu chơi</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { number: '600+', label: 'Từ vựng HSK 3' },
            { number: '4', label: 'Trò chơi đa dạng' },
            { number: '∞', label: 'Lần luyện tập' }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default HSK3Games;
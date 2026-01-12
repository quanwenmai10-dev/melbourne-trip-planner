import { Attraction } from '@/data/itinerary';
import { useState } from 'react';

interface AttractionGuideProps {
  attractions: Attraction[];
}

export default function AttractionGuide({ attractions }: AttractionGuideProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(attractions.map(a => a.category)))];

  const filtered = selectedCategory === 'all'
    ? attractions
    : attractions.filter(a => a.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case '艺术': return 'bg-purple-100 text-purple-700';
      case '文化': return 'bg-blue-100 text-blue-700';
      case '历史': return 'bg-amber-100 text-amber-700';
      case '教育': return 'bg-green-100 text-green-700';
      case '自然': return 'bg-emerald-100 text-emerald-700';
      case '豪华体验': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">景点指南</h2>

      {/* Category Filter */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="font-bold text-slate-900 mb-3">按类别筛选</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              {category === 'all' ? '全部景点' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Attractions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(attraction => (
          <div
            key={attraction.id}
            className="bg-white rounded-xl shadow-md border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 border-b border-slate-200">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-slate-900">{attraction.name}</h3>
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(attraction.category)}`}>
                  {attraction.category}
                </span>
              </div>
              <p className="text-slate-600 text-sm">{attraction.description}</p>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Location & Hours */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="text-lg">📍</span>
                  <span className="text-sm">{attraction.location}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <span className="text-lg">🕐</span>
                  <span className="text-sm">{attraction.hours}</span>
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                {attraction.ticketPrice === 0 ? (
                  <div className="text-green-700 font-bold text-lg">✓ 免费入场</div>
                ) : (
                  <div>
                    <div className="text-sm text-slate-600 mb-1">门票价格</div>
                    <div className="text-2xl font-bold text-blue-600">¥{(attraction.ticketPrice * 5.5).toFixed(0)}</div>
                  </div>
                )}
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">✨ 亮点</h4>
                <ul className="space-y-1">
                  {attraction.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-sm text-slate-600 flex items-center gap-2">
                      <span>•</span> {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Family Friendly */}
              {attraction.familyFriendly && (
                <div className="bg-green-50 p-3 rounded-lg border border-green-200 flex items-center gap-2">
                  <span className="text-lg">👨‍👩‍👧‍👦</span>
                  <span className="text-sm text-green-700 font-semibold">家庭友好</span>
                </div>
              )}

              {/* Website Link */}
              <a
                href={`https://${attraction.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
              >
                访问官网 →
              </a>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🎫</div>
          <p className="text-slate-600 text-lg">未找到匹配的景点</p>
        </div>
      )}

      {/* Booking Tips */}
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl border border-amber-200">
        <h3 className="text-2xl font-bold text-amber-900 mb-4">🎫 预订建议</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-amber-900 mb-3">立即预订</h4>
            <ul className="space-y-2 text-amber-800 text-sm">
              <li>✓ Puffing Billy Railway (已预订)</li>
              <li>✓ Yarra Valley Hot Air Balloon</li>
              <li>✓ Attica (豪华餐厅)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-amber-900 mb-3">免费景点</h4>
            <ul className="space-y-2 text-amber-800 text-sm">
              <li>✓ NGV (National Gallery)</li>
              <li>✓ ACMI (Screen Culture)</li>
              <li>✓ State Library Victoria</li>
              <li>✓ Royal Botanic Gardens</li>
              <li>✓ University of Melbourne</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Family Activities */}
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
        <h3 className="text-2xl font-bold text-purple-900 mb-4">👨‍👩‍👧‍👦 10岁小朋友友好的活动</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-purple-900 mb-2">🔬 科学与教育</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Scienceworks (天文馆)</li>
              <li>• Melbourne Museum (儿童展区)</li>
              <li>• University of Melbourne (校园参观)</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-purple-900 mb-2">🎨 艺术与文化</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• NGV Kids Festival</li>
              <li>• ACMI 互动展览</li>
              <li>• State Library 儿童展</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-purple-900 mb-2">🚂 冒险体验</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Puffing Billy Railway</li>
              <li>• Hot Air Balloon</li>
              <li>• Dandenong Ranges 雨林</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <h4 className="font-bold text-purple-900 mb-2">🌿 自然与户外</h4>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>• Royal Botanic Gardens</li>
              <li>• Yarra River 散步</li>
              <li>• Federation Square</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

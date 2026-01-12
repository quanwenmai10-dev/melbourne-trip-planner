import { useState } from 'react';
import { itinerary, restaurants, attractions } from '@/data/itinerary';
import ItineraryView from '@/components/ItineraryView';
import BudgetCalculator from '@/components/BudgetCalculator';
import RestaurantGuide from '@/components/RestaurantGuide';
import AttractionGuide from '@/components/AttractionGuide';
import TransportGuide from '@/components/TransportGuide';
import Header from '@/components/Header';
import Navigation from '@/components/Navigation';

type ViewType = 'overview' | 'itinerary' | 'restaurants' | 'attractions' | 'budget' | 'transport';

export default function Home() {
  const [activeView, setActiveView] = useState<ViewType>('overview');

  const totalCost = itinerary.reduce((sum, day) => sum + day.totalCost, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Navigation activeView={activeView} onViewChange={setActiveView} />
      
      <main className="container py-12">
        {activeView === 'overview' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="rounded-2xl bg-white p-8 shadow-lg border border-blue-100">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                墨尔本7天6晚豪华家庭旅行
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                一场融合文化教育、自然风光和豪华体验的完美旅程
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-blue-600 mb-2">7天</div>
                  <div className="text-slate-600">完整行程</div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-amber-600 mb-2">¥{(totalCost * 5.5).toFixed(0)}</div>
                  <div className="text-slate-600">总预算 (含门票)</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                  <div className="text-3xl font-bold text-green-600 mb-2">4人</div>
                  <div className="text-slate-600">家庭成员</div>
                </div>
              </div>
            </section>

            {/* Quick Stats */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
                <div className="text-sm text-slate-600 mb-2">主要景点</div>
                <div className="text-2xl font-bold text-slate-900">10+</div>
                <div className="text-xs text-slate-500 mt-2">文化教育为主</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-amber-500">
                <div className="text-sm text-slate-600 mb-2">推荐餐厅</div>
                <div className="text-2xl font-bold text-slate-900">8家</div>
                <div className="text-xs text-slate-500 mt-2">豪华到休闲</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
                <div className="text-sm text-slate-600 mb-2">免费景点</div>
                <div className="text-2xl font-bold text-slate-900">5个</div>
                <div className="text-xs text-slate-500 mt-2">美术馆、图书馆等</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
                <div className="text-sm text-slate-600 mb-2">特色体验</div>
                <div className="text-2xl font-bold text-slate-900">3个</div>
                <div className="text-xs text-slate-500 mt-2">热气球、蒸汽火车等</div>
              </div>
            </section>

            {/* Highlights */}
            <section className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">旅行亮点</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="text-3xl">🎈</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">日出热气球体验</h4>
                    <p className="text-slate-600">在Yarra Valley上空俯瞰葡萄园，享受香槟早餐</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">🚂</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">蒸汽火车冒险</h4>
                    <p className="text-slate-600">体验著名的"伸腿坐法"，穿越丹德农山脉雨林</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">🎓</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">文化教育之旅</h4>
                    <p className="text-slate-600">墨尔本大学、州立图书馆、多个博物馆</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-3xl">🍽️</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">豪华美食体验</h4>
                    <p className="text-slate-600">从米其林星级到特色意式美食</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Buttons */}
            <section className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveView('itinerary')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold hover:shadow-lg transition-all"
              >
                查看完整行程 →
              </button>
              <button
                onClick={() => setActiveView('budget')}
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all"
              >
                预算计算器
              </button>
            </section>
          </div>
        )}

        {activeView === 'itinerary' && <ItineraryView itinerary={itinerary} />}
        {activeView === 'restaurants' && <RestaurantGuide restaurants={restaurants} />}
        {activeView === 'attractions' && <AttractionGuide attractions={attractions} />}
        {activeView === 'budget' && <BudgetCalculator itinerary={itinerary} />}
        {activeView === 'transport' && <TransportGuide />}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">墨尔本旅行计划</h4>
              <p className="text-slate-400">为您的家庭旅行精心设计的完整指南</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">快速链接</h4>
              <ul className="space-y-2 text-slate-400">
                <li><button onClick={() => setActiveView('itinerary')} className="hover:text-white transition">行程安排</button></li>
                <li><button onClick={() => setActiveView('transport')} className="hover:text-white transition">交通指南</button></li>
                <li><button onClick={() => setActiveView('restaurants')} className="hover:text-white transition">美食推荐</button></li>
                <li><button onClick={() => setActiveView('attractions')} className="hover:text-white transition">景点指南</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">旅行信息</h4>
              <ul className="space-y-2 text-slate-400">
                <li>📅 日期: 1月30日 - 2月5日</li>
                <li>👨‍👩‍👧‍👦 人数: 3大1小</li>
                <li>🏨 住宿: CBD 公寓</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>© 2026 墨尔本豪华家庭旅行计划 | 精心设计的完美旅程</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

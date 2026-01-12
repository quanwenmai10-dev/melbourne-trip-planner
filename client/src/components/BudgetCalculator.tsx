import { DayPlan } from '@/data/itinerary';
import { useState } from 'react';

interface BudgetCalculatorProps {
  itinerary: DayPlan[];
}

export default function BudgetCalculator({ itinerary }: BudgetCalculatorProps) {
  const [exchangeRate, setExchangeRate] = useState(5.5);
  const [selectedDays, setSelectedDays] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);

  const selectedItinerary = itinerary.filter(day => selectedDays.includes(day.day));

  const calculateByType = (type: string) => {
    return selectedItinerary.reduce((sum, day) => {
      return sum + day.activities
        .filter(a => a.type === type)
        .reduce((s, a) => s + a.cost, 0);
    }, 0);
  };

  const calculateByCategory = (category: string) => {
    return selectedItinerary.reduce((sum, day) => {
      return sum + day.activities
        .filter(a => a.category === category)
        .reduce((s, a) => s + a.cost, 0);
    }, 0);
  };

  const attractionCost = calculateByType('attraction');
  const diningCost = calculateByType('dining');
  const transportCost = calculateByType('transport');
  const totalCost = attractionCost + diningCost + transportCost;

  const categories = ['艺术', '文化', '历史', '教育', '自然', '西餐', '豪华体验'];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">预算计算器</h2>

      {/* Settings */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200">
        <h3 className="font-bold text-lg text-slate-900 mb-4">自定义设置</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              汇率 (AUD → CNY)
            </label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="5"
                max="6"
                step="0.1"
                value={exchangeRate}
                onChange={(e) => setExchangeRate(parseFloat(e.target.value))}
                className="flex-1"
              />
              <span className="text-lg font-bold text-blue-600 min-w-12">1:{exchangeRate.toFixed(1)}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              选择天数
            </label>
            <div className="flex flex-wrap gap-2">
              {itinerary.map(day => (
                <button
                  key={day.day}
                  onClick={() => {
                    setSelectedDays(
                      selectedDays.includes(day.day)
                        ? selectedDays.filter(d => d !== day.day)
                        : [...selectedDays, day.day].sort()
                    );
                  }}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedDays.includes(day.day)
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  第{day.day}天
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Budget */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl font-bold mb-2">总预算</h3>
        <div className="text-5xl font-bold mb-4">¥{(totalCost * exchangeRate).toFixed(0)}</div>
        <p className="text-blue-100 mb-6">
          {selectedDays.length}天 | {selectedItinerary.reduce((sum, day) => sum + day.activities.length, 0)}项活动
        </p>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-500 bg-opacity-50 p-4 rounded-lg">
            <div className="text-sm opacity-90 mb-1">景点门票</div>
            <div className="text-2xl font-bold">¥{(attractionCost * exchangeRate).toFixed(0)}</div>
            <div className="text-xs opacity-75 mt-1">{((attractionCost / totalCost) * 100).toFixed(0)}%</div>
          </div>
          <div className="bg-blue-500 bg-opacity-50 p-4 rounded-lg">
            <div className="text-sm opacity-90 mb-1">餐饮费用</div>
            <div className="text-2xl font-bold">¥{(diningCost * exchangeRate).toFixed(0)}</div>
            <div className="text-xs opacity-75 mt-1">{((diningCost / totalCost) * 100).toFixed(0)}%</div>
          </div>
          <div className="bg-blue-500 bg-opacity-50 p-4 rounded-lg">
            <div className="text-sm opacity-90 mb-1">交通费用</div>
            <div className="text-2xl font-bold">¥{(transportCost * exchangeRate).toFixed(0)}</div>
            <div className="text-xs opacity-75 mt-1">{((transportCost / totalCost) * 100).toFixed(0)}%</div>
          </div>
        </div>
      </div>

      {/* Breakdown by Category */}
      <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">按类别分类</h3>
        <div className="space-y-3">
          {categories.map(category => {
            const cost = calculateByCategory(category);
            if (cost === 0) return null;
            const percentage = (cost / totalCost) * 100;
            return (
              <div key={category}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-700">{category}</span>
                  <span className="font-bold text-slate-900">¥{(cost * exchangeRate).toFixed(0)}</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Per Person Breakdown */}
      <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl border border-amber-200">
        <h3 className="text-2xl font-bold text-amber-900 mb-6">人均预算</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <div className="text-sm text-slate-600 mb-1">人均总费用</div>
            <div className="text-3xl font-bold text-amber-600">¥{((totalCost * exchangeRate) / 4).toFixed(0)}</div>
            <div className="text-xs text-slate-500 mt-2">4人平均</div>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <div className="text-sm text-slate-600 mb-1">每天人均费用</div>
            <div className="text-3xl font-bold text-amber-600">¥{((totalCost * exchangeRate) / 4 / selectedDays.length).toFixed(0)}</div>
            <div className="text-xs text-slate-500 mt-2">{selectedDays.length}天平均</div>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h4 className="font-bold text-blue-900 mb-3">💡 预算说明</h4>
        <ul className="space-y-2 text-sm text-blue-800">
          <li>• 不包含机票和住宿费用</li>
          <li>• 包含所有景点门票、餐饮和交通</li>
          <li>• 热气球体验 ($595/人) 已包含</li>
          <li>• 蒸汽火车门票 ($224) 已包含</li>
          <li>• 汇率仅供参考，实际汇率可能有所不同</li>
          <li>• 建议预留10-15%的应急预算</li>
        </ul>
      </div>
    </div>
  );
}

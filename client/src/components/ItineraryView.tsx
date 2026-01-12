import { DayPlan } from '@/data/itinerary';
import { useState } from 'react';

interface ItineraryViewProps {
  itinerary: DayPlan[];
}

export default function ItineraryView({ itinerary }: ItineraryViewProps) {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'attraction': return '🎫';
      case 'dining': return '🍽️';
      case 'transport': return '🚗';
      case 'rest': return '😴';
      default: return '📌';
    }
  };

  const getCategoryColor = (category?: string) => {
    switch (category) {
      case '艺术': return 'bg-purple-100 text-purple-700';
      case '文化': return 'bg-blue-100 text-blue-700';
      case '历史': return 'bg-amber-100 text-amber-700';
      case '教育': return 'bg-green-100 text-green-700';
      case '自然': return 'bg-emerald-100 text-emerald-700';
      case '西餐': return 'bg-pink-100 text-pink-700';
      case '豪华体验': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">完整7天行程</h2>
      
      {itinerary.map((day) => (
        <div
          key={day.day}
          className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-shadow"
        >
          {/* Day Header */}
          <button
            onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
            className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-colors flex items-center justify-between"
          >
            <div className="flex items-center gap-4 text-left">
              <div className="text-3xl font-bold text-blue-600">第{day.day}天</div>
              <div>
                <div className="font-bold text-slate-900">{day.date} {day.dayOfWeek}</div>
                <div className="text-slate-600">{day.theme}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-slate-600">预算</div>
                <div className="text-xl font-bold text-blue-600">¥{(day.totalCost * 5.5).toFixed(0)}</div>
              </div>
              <div className="text-2xl text-slate-400">
                {expandedDay === day.day ? '▼' : '▶'}
              </div>
            </div>
          </button>

          {/* Day Details */}
          {expandedDay === day.day && (
            <div className="px-6 py-6 space-y-4 border-t border-slate-200">
              {/* Activities */}
              <div className="space-y-3">
                {day.activities.map((activity) => (
                  <div key={activity.id} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                    <div className="flex gap-4">
                      <div className="text-3xl">{getActivityIcon(activity.type)}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="text-sm font-bold text-blue-600">{activity.time}</div>
                            <h4 className="text-lg font-bold text-slate-900">{activity.title}</h4>
                          </div>
                          {activity.category && (
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(activity.category)}`}>
                              {activity.category}
                            </span>
                          )}
                        </div>
                        <p className="text-slate-600 mb-2">{activity.description}</p>
                        <div className="flex gap-4 text-sm text-slate-500">
                          <span>📍 {activity.location}</span>
                          {activity.cost > 0 && <span>💰 ¥{(activity.cost * 5.5).toFixed(0)}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              {day.highlights.length > 0 && (
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h5 className="font-bold text-amber-900 mb-2">✨ 今日亮点</h5>
                  <ul className="space-y-1">
                    {day.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-amber-800 flex items-center gap-2">
                        <span>•</span> {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl mt-8">
        <h3 className="text-2xl font-bold mb-4">7天总预算概览</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm opacity-90 mb-1">景点门票</div>
            <div className="text-3xl font-bold">¥{(itinerary.reduce((sum, day) => sum + day.activities.filter(a => a.type === 'attraction').reduce((s, a) => s + a.cost, 0), 0) * 5.5).toFixed(0)}</div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-1">餐饮费用</div>
            <div className="text-3xl font-bold">¥{(itinerary.reduce((sum, day) => sum + day.activities.filter(a => a.type === 'dining').reduce((s, a) => s + a.cost, 0), 0) * 5.5).toFixed(0)}</div>
          </div>
          <div>
            <div className="text-sm opacity-90 mb-1">交通费用</div>
            <div className="text-3xl font-bold">¥{(itinerary.reduce((sum, day) => sum + day.activities.filter(a => a.type === 'transport').reduce((s, a) => s + a.cost, 0), 0) * 5.5).toFixed(0)}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

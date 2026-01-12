import { Restaurant } from '@/data/itinerary';
import { useState } from 'react';

interface RestaurantGuideProps {
  restaurants: Restaurant[];
}

export default function RestaurantGuide({ restaurants }: RestaurantGuideProps) {
  const [selectedType, setSelectedType] = useState<'all' | 'luxury' | 'casual'>('all');
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all');

  const cuisines = Array.from(new Set(restaurants.map(r => r.cuisine)));
  const types = [
    { id: 'all', label: '全部' },
    { id: 'luxury', label: '豪华餐厅' },
    { id: 'casual', label: '休闲餐厅' },
  ];

  const filtered = restaurants.filter(r => {
    const typeMatch = selectedType === 'all' || r.type === selectedType;
    const cuisineMatch = selectedCuisine === 'all' || r.cuisine === selectedCuisine;
    return typeMatch && cuisineMatch;
  });

  const getTypeColor = (type: string) => {
    return type === 'luxury'
      ? 'bg-yellow-100 text-yellow-700'
      : 'bg-blue-100 text-blue-700';
  };

  const getRatingStars = (rating: number) => {
    return '⭐'.repeat(Math.floor(rating));
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">美食推荐指南</h2>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-slate-200 space-y-4">
        <div>
          <h3 className="font-bold text-slate-900 mb-3">餐厅类型</h3>
          <div className="flex flex-wrap gap-2">
            {types.map(type => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id as any)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedType === type.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-900 mb-3">菜系</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCuisine('all')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCuisine === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
              }`}
            >
              全部菜系
            </button>
            {cuisines.map(cuisine => (
              <button
                key={cuisine}
                onClick={() => setSelectedCuisine(cuisine)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCuisine === cuisine
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {cuisine}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Restaurant Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(restaurant => (
          <div
            key={restaurant.id}
            className="bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:shadow-lg transition-shadow"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{restaurant.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-slate-600">{restaurant.cuisine}</span>
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getTypeColor(restaurant.type)}`}>
                    {restaurant.type === 'luxury' ? '豪华' : '休闲'}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-amber-600 mb-1">{getRatingStars(restaurant.rating)}</div>
                <div className="text-sm text-slate-600">{restaurant.rating}/5</div>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-2 text-slate-700">
                <span className="text-lg">📍</span>
                <span>{restaurant.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <span className="text-lg">💰</span>
                <span>¥{(restaurant.pricePerPerson * 5.5).toFixed(0)}/人</span>
              </div>
            </div>

            {/* Specialties */}
            <div className="mb-4">
              <h4 className="font-semibold text-slate-900 mb-2">特色菜</h4>
              <div className="flex flex-wrap gap-2">
                {restaurant.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">{restaurant.notes}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🍽️</div>
          <p className="text-slate-600 text-lg">未找到匹配的餐厅</p>
        </div>
      )}

      {/* Dining Tips */}
      <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl border border-green-200">
        <h3 className="text-2xl font-bold text-green-900 mb-4">🍽️ 美食建议</h3>
        <ul className="space-y-3 text-green-800">
          <li className="flex gap-3">
            <span>✓</span>
            <span><strong>豪华餐厅</strong>需提前2-3周预订，尤其是Attica</span>
          </li>
          <li className="flex gap-3">
            <span>✓</span>
            <span><strong>Lygon Street</strong>是"小意大利"，有多家优质意式餐厅</span>
          </li>
          <li className="flex gap-3">
            <span>✓</span>
            <span><strong>Flower Drum</strong>距离住宿最近，有非辣选项，适合小朋友</span>
          </li>
          <li className="flex gap-3">
            <span>✓</span>
            <span><strong>Pidapipo</strong>是Lygon Street最好的冰淇淋店，饭后必尝</span>
          </li>
          <li className="flex gap-3">
            <span>✓</span>
            <span><strong>家庭烹饪</strong>可在Hometown Asian Supermarket购买食材</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

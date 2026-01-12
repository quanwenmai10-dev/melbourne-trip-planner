import { accommodationTransportHubs, dayTransportGuides, myKiGuide, transportCostSummary } from '@/data/transport-guide';
import { useState } from 'react';

export default function TransportGuide() {
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [showMyKiDetails, setShowMyKiDetails] = useState(false);

  const getMethodIcon = (method: string) => {
    switch (method) {
      case 'metro': return '🚇';
      case 'tram': return '🚊';
      case 'bus': return '🚌';
      case 'train': return '🚂';
      case 'uber': return '🚗';
      case 'walk': return '🚶';
      default: return '📍';
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'metro': return 'bg-blue-100 text-blue-700';
      case 'tram': return 'bg-green-100 text-green-700';
      case 'bus': return 'bg-yellow-100 text-yellow-700';
      case 'train': return 'bg-purple-100 text-purple-700';
      case 'uber': return 'bg-black text-white';
      case 'walk': return 'bg-orange-100 text-orange-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">📍 详细交通指南</h2>

      {/* Accommodation Transport Hubs */}
      <section className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">🏨 住宿地交通枢纽</h3>
        <p className="text-slate-600 mb-6">
          <strong>住宿地址：</strong>157 A'Beckett Street, Melbourne VIC 3000 (CBD中心)
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accommodationTransportHubs.map((hub, idx) => (
            <div key={idx} className="border border-slate-200 p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <h4 className="font-bold text-slate-900 text-lg">{hub.name}</h4>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getMethodColor(hub.type)}`}>
                  {hub.type === 'metro' ? '火车' : hub.type === 'tram' ? '电车' : '其他'}
                </span>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700">距离：</span>
                  <span className="text-slate-600">{hub.distance}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-slate-700">步行时间：</span>
                  <span className="text-slate-600">{hub.walkTime}</span>
                </div>
                {hub.lines.length > 0 && (
                  <div className="flex items-start gap-2">
                    <span className="font-semibold text-slate-700">线路：</span>
                    <div className="flex flex-wrap gap-1">
                      {hub.lines.map((line, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                          {line}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                <p className="text-slate-600 mt-2">{hub.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mt-6">
          <p className="text-blue-800 text-sm">
            <strong>💡 提示：</strong>住宿地在CBD中心，距离最近的火车站Melbourne Central只有240米(3分钟步行)。
            CBD内所有电车免费，非常便利。
          </p>
        </div>
      </section>

      {/* Myki Card Guide */}
      <section className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200">
        <button
          onClick={() => setShowMyKiDetails(!showMyKiDetails)}
          className="w-full flex items-center justify-between mb-6 cursor-pointer"
        >
          <h3 className="text-2xl font-bold text-purple-900">🎫 Myki卡完全指南</h3>
          <span className="text-2xl">{showMyKiDetails ? '▼' : '▶'}</span>
        </button>

        {showMyKiDetails && (
          <div className="space-y-6">
            {/* What is Myki */}
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-2">什么是Myki？</h4>
              <p className="text-slate-700">{myKiGuide.whatIs}</p>
            </div>

            {/* Where to Buy */}
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-3">在哪里购买？</h4>
              <ul className="space-y-2">
                {myKiGuide.whereToBuy.map((place, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-700">
                    <span>✓</span> {place}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-3">价格</h4>
              <div className="space-y-2 text-slate-700">
                <div className="flex justify-between">
                  <span>卡片本身：</span>
                  <strong>${myKiGuide.cost.card}</strong>
                </div>
                <div className="flex justify-between">
                  <span>2小时票 (Zone 1-2)：</span>
                  <strong>${myKiGuide.cost.twoHourTicket}</strong>
                </div>
                <div className="flex justify-between">
                  <span>全天无限乘坐：</span>
                  <strong>${myKiGuide.cost.dailyCap}</strong>
                </div>
                <div className="flex justify-between">
                  <span>7天无限乘坐：</span>
                  <strong>${myKiGuide.cost.sevenDayPass}</strong>
                </div>
                <div className="flex justify-between text-green-700 font-bold">
                  <span>Free Tram Zone：</span>
                  <strong>免费</strong>
                </div>
              </div>
            </div>

            {/* Zones */}
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-3">区域说明</h4>
              <div className="space-y-2 text-slate-700">
                <div>
                  <strong>Zone 1：</strong> {myKiGuide.zones.zone1}
                </div>
                <div>
                  <strong>Zone 2：</strong> {myKiGuide.zones.zone2}
                </div>
                <div>
                  <strong>两个区域：</strong> {myKiGuide.zones.bothZones}
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-3">💡 使用建议</h4>
              <ul className="space-y-2">
                {myKiGuide.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-700">
                    <span className="text-purple-600 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Use */}
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-bold text-purple-900 mb-3">如何使用？</h4>
              <ol className="space-y-2">
                {myKiGuide.howToUse.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-700">
                    <span className="font-bold text-purple-600">{idx + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Recommendation */}
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 font-semibold mb-2">🎯 我们的建议：</p>
              <p className="text-yellow-800">
                购买<strong>7天通票 ($55/人 x 4 = $220)</strong>最划算。
                这样可以无限乘坐所有地铁、电车和巴士，不用担心超支。
              </p>
            </div>
          </div>
        )}
      </section>

      {/* Daily Routes */}
      <section>
        <h3 className="text-2xl font-bold text-slate-900 mb-6">📅 每日详细交通路线</h3>

        {dayTransportGuides.map((day) => (
          <div
            key={day.day}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 mb-4 hover:shadow-lg transition-shadow"
          >
            {/* Day Header */}
            <button
              onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center gap-4 text-left">
                <div className="text-3xl font-bold text-blue-600">第{day.day}天</div>
              </div>
              <div className="text-2xl text-slate-400">
                {expandedDay === day.day ? '▼' : '▶'}
              </div>
            </button>

            {/* Day Details */}
            {expandedDay === day.day && (
              <div className="px-6 py-6 space-y-4 border-t border-slate-200">
                {/* Routes */}
                <div className="space-y-4">
                  {day.routes.map((route, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      {/* Route Header */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{getMethodIcon(route.method)}</span>
                          <div>
                            <div className="text-sm font-bold text-slate-600">{route.from} → {route.to}</div>
                            <div className="text-xs text-slate-500">{route.duration}</div>
                          </div>
                        </div>
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getMethodColor(route.method)}`}>
                          {route.method === 'metro' ? '火车' : 
                           route.method === 'tram' ? '电车' : 
                           route.method === 'train' ? '蒸汽火车' :
                           route.method === 'uber' ? 'Uber' : 
                           route.method === 'walk' ? '步行' : route.method}
                        </span>
                      </div>

                      {/* Cost */}
                      <div className="bg-blue-50 p-2 rounded mb-3 text-sm font-semibold text-blue-700">
                        💰 {route.cost}
                      </div>

                      {/* Steps */}
                      <div className="mb-3">
                        <h5 className="font-semibold text-slate-900 mb-2 text-sm">步骤：</h5>
                        <ol className="space-y-1">
                          {route.steps.map((step, i) => (
                            <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                              <span className="font-bold text-blue-600 min-w-6">{i + 1}.</span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Tips */}
                      <div className="bg-amber-50 p-2 rounded text-sm text-amber-800 border border-amber-200">
                        <strong>💡 提示：</strong> {route.tips}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Day Notes */}
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 font-semibold mb-1">📌 今日交通要点</p>
                  <p className="text-green-700 text-sm">{day.notes}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Transport Cost Summary */}
      <section className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">💰 交通费用总结</h3>

        <div className="space-y-4">
          {Object.entries(transportCostSummary).map(([key, value]) => {
            if (key === 'grandTotal') {
              return (
                <div key={key} className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg mt-6">
                  <div className="text-lg font-bold mb-1">7天总交通费用</div>
                  <div className="text-4xl font-bold">¥{((value as number) * 5.5).toFixed(0)}</div>
                  <div className="text-sm opacity-90 mt-2">
                    人均: ¥{(((value as number) * 5.5) / 4).toFixed(0)} | 
                    每天人均: ¥{(((value as number) * 5.5) / 4 / 7).toFixed(0)}
                  </div>
                </div>
              );
            }

            const dayData = value as any;
            return (
              <div key={key} className="border border-slate-200 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-slate-900">
                    {key.replace('day', '第').replace(/\d+/, (m) => m + '天')} - {dayData.description}
                  </h4>
                  <span className="text-lg font-bold text-blue-600">
                    ¥{(dayData.total * 5.5).toFixed(0)}
                  </span>
                </div>
                <div className="space-y-1">
                  {dayData.costs.map((cost: any, idx: number) => (
                    <div key={idx} className="flex justify-between text-sm text-slate-600">
                      <span>• {cost.item}</span>
                      <span>${cost.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Important Notes */}
      <section className="bg-red-50 p-8 rounded-xl border border-red-200">
        <h3 className="text-2xl font-bold text-red-900 mb-4">⚠️ 重要提醒</h3>
        <ul className="space-y-3 text-red-800">
          <li className="flex items-start gap-3">
            <span className="font-bold">1.</span>
            <span><strong>Melbourne Central Station</strong>距离住宿只有240米，是您的主要交通枢纽</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold">2.</span>
            <span><strong>Free Tram Zone</strong>内所有电车免费，包括City Circle Tram，充分利用可省钱</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold">3.</span>
            <span>购买<strong>7天Myki通票</strong>($55/人)是最经济的选择</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold">4.</span>
            <span>使用Myki卡时务必<strong>"touch off"</strong>下车，否则会被收取最高费用</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold">5.</span>
            <span><strong>Belgrave Line</strong>和<strong>Werribee Line</strong>是您最常用的火车线路</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="font-bold">6.</span>
            <span>提前下载<strong>PTV (Public Transport Victoria)</strong>应用，查看实时班次和路线</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-8 shadow-lg">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">🌏 墨尔本7天6晚豪华家庭旅行</h1>
            <p className="text-blue-100">文化教育 | 自然风光 | 豪华体验</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-blue-100 mb-1">旅行时间</div>
            <div className="text-2xl font-bold">1月30日 - 2月5日</div>
          </div>
        </div>
      </div>
    </header>
  );
}

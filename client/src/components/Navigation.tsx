type ViewType = 'overview' | 'itinerary' | 'restaurants' | 'attractions' | 'budget';

interface NavigationProps {
  activeView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export default function Navigation({ activeView, onViewChange }: NavigationProps) {
  const navItems: { id: ViewType; label: string; icon: string }[] = [
    { id: 'overview', label: '概览', icon: '🏠' },
    { id: 'itinerary', label: '行程', icon: '📅' },
    { id: 'restaurants', label: '美食', icon: '🍽️' },
    { id: 'attractions', label: '景点', icon: '🎫' },
    { id: 'budget', label: '预算', icon: '💰' },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      <div className="container">
        <div className="flex gap-2 overflow-x-auto py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`px-6 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${
                activeView === item.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <span className="mr-2">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

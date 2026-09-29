import React from 'react';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  compareCount: number;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  compareCount
}) => {
  const tabs = [
    { id: 'home', label: '홈', icon: 'explore' },
    { id: 'explore', label: '탐색', icon: 'auto_awesome' },
    { id: 'compare', label: '비교', icon: 'compare_arrows', badge: compareCount },
    { id: 'library', label: '보관함', icon: 'auto_stories' },
    { id: 'my', label: 'MY', icon: 'account_circle' }
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-[#FAF6F0]/95 backdrop-blur-md border-t border-[#E7E0D3] shadow-[0_-2px_12px_rgba(28,25,23,0.04)]">
      <div className="flex justify-around items-center h-16 max-w-xl mx-auto px-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`relative flex flex-col items-center justify-center min-w-[56px] h-12 gap-0.5 transition-colors cursor-pointer ${
                isActive ? 'text-[#8C6212] font-bold' : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
              type="button"
            >
              <div className="relative flex items-center justify-center">
                <span className={`material-symbols-outlined text-[22px] ${isActive ? 'filled' : ''}`}>
                  {tab.icon}
                </span>
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span className="absolute -top-1 -right-2.5 px-1.5 py-0.2 bg-[#8C6212] text-white rounded-full font-['Newsreader'] text-[10px] leading-tight font-bold">
                    {tab.badge}
                  </span>
                )}
              </div>
              <span className="font-['Newsreader'] text-[11px] font-medium tracking-tight">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

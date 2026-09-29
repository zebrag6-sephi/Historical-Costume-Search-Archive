import React from 'react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  unreadCount?: number;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onNavigate, unreadCount = 1 }) => {
  const getSubTitle = () => {
    switch (currentTab) {
      case 'home':
        return 'Home';
      case 'explore':
        return 'Explore · Archival';
      case 'compare':
        return 'Compare';
      case 'library':
        return 'Collection & Draft Registry';
      case 'my':
        return 'Curator Profile';
      case 'record-detail':
        return 'Record Spec';
      default:
        return 'Historical Archive';
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#E7E0D3] shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-16 px-4 max-w-xl mx-auto flex items-center justify-between gap-2">
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center gap-2.5 min-w-0 text-left focus:outline-none group cursor-pointer"
        >
          <img
            alt="VIDEO RECORD Brand Emblem"
            className="h-8 w-auto object-contain shrink-0 group-hover:scale-105 transition-transform"
            src="https://lh3.googleusercontent.com/aida/AEtjO1UAlxpql-RzJLq8ISTRSTa5pWz3cZfFB2dyYgDAmvr5ZvfG_wNo5zN2PlrmtEnPUWKOr7bMnKHr9nsKPZTGIFByoOw61_AU0M78qFBZFn_RW1lpWyNmSMonGs3bahMzOPjCFSltOUfaEVxte8U5Gv0npqYorU2jTn5rWcIitI0grxtx12I2zkT7mCLE-uZfyN5QNAy-PoZNzUxrZEfgndGFEMC5vgLYVoVBN3Sttka-7kz5Mx9xr47XLxA"
          />
          <div className="flex flex-col truncate">
            <span className="font-serif text-[18px] font-bold text-[#1C1917] tracking-tight leading-none">
              VIDEO RECORD
            </span>
            <span className="font-['Newsreader'] text-[11px] text-[#8C6212] tracking-widest uppercase font-semibold mt-0.5 truncate">
              {getSubTitle()}
            </span>
          </div>
        </button>

        <div className="flex items-center gap-1 shrink-0">
          <button
            aria-label="탐색 바로가기"
            onClick={() => onNavigate('explore')}
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#57534E] hover:text-[#8C6212] hover:bg-[#F4EFE6] transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">search</span>
          </button>
          
          <button
            aria-label="알림"
            onClick={() => alert('중세북유럽복식학회 공식 검수 사료 1건이 새로 등록되었습니다.')}
            className="w-10 h-10 relative rounded-full flex items-center justify-center text-[#57534E] hover:text-[#8C6212] hover:bg-[#F4EFE6] transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[22px]">notifications</span>
            {unreadCount > 0 && (
              <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#8C6212] ring-2 ring-[#FAF6F0]" />
            )}
          </button>

          <button
            aria-label="내 계정"
            onClick={() => onNavigate('my')}
            className="w-8 h-8 rounded-full bg-[#8C6212] flex items-center justify-center ml-1 text-white shadow-sm hover:opacity-90 transition-opacity cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};

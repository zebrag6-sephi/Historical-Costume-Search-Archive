import React from 'react';
import { HistoricalRecord, ProjectBoard } from '../types';

interface MyScreenProps {
  records: HistoricalRecord[];
  projects: ProjectBoard[];
  bookmarks: string[];
  compareList: string[];
  onNavigate: (tab: string) => void;
}

export const MyScreen: React.FC<MyScreenProps> = ({
  records,
  projects,
  bookmarks,
  compareList,
  onNavigate
}) => {
  const handleExportJson = () => {
    const data = {
      user: 'zebrag6@gmail.com',
      exportDate: new Date().toISOString(),
      projects,
      bookmarkedRecordIds: bookmarks,
      compareList
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `video-record-archive-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col w-full pb-28 max-w-xl mx-auto px-4 pt-4">
      {/* Profile Card */}
      <div className="bg-white border border-[#D6CBB9] rounded-2xl p-5 shadow-xs flex flex-col gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-14 h-14 rounded-full bg-[#8C6212] flex items-center justify-center text-white text-2xl font-bold shadow-sm">
            <span className="material-symbols-outlined text-[32px]">person</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <h2 className="font-serif text-xl font-bold text-[#1C1917]">역사 복식 큐레이터</h2>
              <span className="bg-[#E8F5E9] text-[#1E5E3A] px-2 py-0.2 rounded text-[10px] font-bold">
                연구원
              </span>
            </div>
            <span className="text-xs text-[#78716C] font-sans mt-0.5">zebrag6@gmail.com</span>
            <span className="font-['Newsreader'] text-[11px] text-[#8C6212] font-semibold mt-0.5">
              중세 게르만·한자 동맹 복식 연구실
            </span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-2 pt-3 border-t border-[#E7E0D3] text-center">
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-[#1C1917]">{projects.length}</span>
            <span className="font-['Newsreader'] text-[11px] text-[#78716C]">프로젝트</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-[#8C6212]">{bookmarks.length || 18}</span>
            <span className="font-['Newsreader'] text-[11px] text-[#78716C]">스크랩 사료</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-[#1C1917]">4</span>
            <span className="font-['Newsreader'] text-[11px] text-[#78716C]">비교 리포트</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-[#516071]">8</span>
            <span className="font-['Newsreader'] text-[11px] text-[#78716C]">어휘 노트</span>
          </div>
        </div>
      </div>

      {/* Quick Access Menu */}
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="font-['Newsreader'] text-xs font-bold text-[#78716C] uppercase tracking-wider px-1">
          연구 및 창작 아카이브 관리
        </h3>

        <div className="bg-white border border-[#D6CBB9] rounded-2xl overflow-hidden shadow-xs divide-y divide-[#E7E0D3]">
          <button
            onClick={() => onNavigate('library')}
            className="w-full p-3.5 flex items-center justify-between text-left hover:bg-[#FAF6F0] transition-colors cursor-pointer"
            type="button"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#8C6212] text-[20px]">folder_special</span>
              <div>
                <span className="font-serif text-sm font-bold text-[#1C1917] block">보관함 및 프로젝트 열기</span>
                <span className="text-[11px] text-[#78716C]">현재 진행 중인 웹툰/사극 고증 보드 3건</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#78716C] text-[18px]">chevron_right</span>
          </button>

          <button
            onClick={() => onNavigate('compare')}
            className="w-full p-3.5 flex items-center justify-between text-left hover:bg-[#FAF6F0] transition-colors cursor-pointer"
            type="button"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#8C6212] text-[20px]">compare_arrows</span>
              <div>
                <span className="font-serif text-sm font-bold text-[#1C1917] block">동일 시대 복식 비교 분석실</span>
                <span className="text-[11px] text-[#78716C]">사료 1:1 대조 및 AI 교차 검증</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#78716C] text-[18px]">chevron_right</span>
          </button>

          <button
            onClick={handleExportJson}
            className="w-full p-3.5 flex items-center justify-between text-left hover:bg-[#FAF6F0] transition-colors cursor-pointer"
            type="button"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#8C6212] text-[20px]">download</span>
              <div>
                <span className="font-serif text-sm font-bold text-[#1C1917] block">아카이브 데이터 백업 내보내기</span>
                <span className="text-[11px] text-[#78716C]">JSON 포맷으로 프로젝트 및 스크랩 전체 다운로드</span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[#78716C] text-[18px]">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Deployment & Environment Spec */}
      <div className="mt-5 p-4 rounded-xl bg-[#F5EFE6] border border-[#E4DACB] text-xs text-[#57534E] flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 font-bold text-[#1C1917]">
          <span className="material-symbols-outlined text-[16px] text-[#8C6212]">cloud_done</span>
          <span>Vercel 배포 최적화 아키텍처</span>
        </div>
        <p className="text-[11px] leading-relaxed text-[#78716C]">
          정적 SPA 빌드 및 <code>vercel.json</code> rewrite 규칙이 구성되어 있어 Vercel 플랫폼에서 고속 CDN 배포 및 즉각적인 라우팅이 지원됩니다.
        </p>
      </div>
    </div>
  );
};

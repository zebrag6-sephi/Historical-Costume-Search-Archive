import React, { useState } from 'react';
import { HistoricalRecord, ComparisonReport } from '../types';
import { ExportReportModal } from './modals/ExportReportModal';

interface CompareScreenProps {
  records: HistoricalRecord[];
  report: ComparisonReport;
  compareList: string[];
  onSelectRecord: (record: HistoricalRecord) => void;
  onSaveToLibrary: () => void;
}

export const CompareScreen: React.FC<CompareScreenProps> = ({
  records,
  report,
  compareList,
  onSelectRecord,
  onSaveToLibrary
}) => {
  const [workAId, setWorkAId] = useState<string>(
    compareList[0] || report.workAId || 'hanse-women'
  );
  const [workBId, setWorkBId] = useState<string>(
    compareList[1] || report.workBId || 'north-sea-merchants'
  );
  const [isSaved, setIsSaved] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);

  const workA = records.find(r => r.id === workAId) || records[0];
  const workB = records.find(r => r.id === workBId) || records[1];

  const handleSaveArchive = () => {
    setIsSaved(true);
    onSaveToLibrary();
    setTimeout(() => {
      // keep marked
    }, 2500);
  };

  return (
    <div className="flex flex-col w-full pb-28">
      {/* Top Screen Title & Archival Verification Badge */}
      <div className="px-4 pt-3 pb-3 max-w-xl mx-auto w-full">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#2B3A4A] text-white text-[11px] font-['Newsreader'] tracking-widest uppercase shadow-xs">
          <span className="material-symbols-outlined text-[13px] text-[#FDE68A] filled">verified</span>
          <span>동일 시대 복식 교차 검증 (13C 중세 북유럽)</span>
        </div>

        <div className="mt-2.5 flex items-baseline justify-between">
          <h1 className="font-serif text-2xl font-bold text-[#1C1917]">작품 비교 분석</h1>
          <span className="font-['Newsreader'] text-xs text-[#8C6212] font-semibold tracking-wider uppercase">
            {report.folioRef}
          </span>
        </div>
        <p className="mt-0.5 font-body text-xs text-[#57534E]">
          한자동맹 상인 계층 의복 실루엣 및 직조 염색 교차 고증 대조
        </p>

        {/* Work Selector Dropdowns */}
        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
          <div className="flex flex-col gap-1">
            <span className="font-['Newsreader'] text-[10px] text-[#8C6212] font-bold uppercase">
              A · 기준작 변경
            </span>
            <select
              value={workA.id}
              onChange={(e) => setWorkAId(e.target.value)}
              className="w-full p-2 bg-white border border-[#D6CBB9] rounded-lg text-xs font-semibold text-[#1C1917] focus:outline-none focus:ring-1 focus:ring-[#8C6212]"
            >
              {records.map(r => (
                <option key={r.id} value={r.id} disabled={r.id === workB.id}>
                  {r.title} ({r.accuracyScore}%)
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-['Newsreader'] text-[10px] text-[#516071] font-bold uppercase">
              B · 대조작 변경
            </span>
            <select
              value={workB.id}
              onChange={(e) => setWorkBId(e.target.value)}
              className="w-full p-2 bg-white border border-[#D6CBB9] rounded-lg text-xs font-semibold text-[#1C1917] focus:outline-none focus:ring-1 focus:ring-[#8C6212]"
            >
              {records.map(r => (
                <option key={r.id} value={r.id} disabled={r.id === workA.id}>
                  {r.title} ({r.accuracyScore}%)
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Side-by-Side Dual Artifact Comparison Cards */}
      <div className="px-4 grid grid-cols-2 gap-2.5 max-w-xl mx-auto w-full">
        {/* Work A Card */}
        <div 
          onClick={() => onSelectRecord(workA)}
          className="flex flex-col bg-white rounded-xl p-2.5 shadow-xs border border-[#E5DBCC] cursor-pointer hover:border-[#8C6212] transition-colors"
        >
          <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-[#F4EFE6]">
            <img
              alt={workA.title}
              className="w-full h-full object-cover"
              src={workA.coverImage}
            />
            <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-[#8C6212] text-white font-['Newsreader'] text-[10px] tracking-wider font-bold">
              A · 기준작
            </div>
          </div>

          <div className="mt-2.5">
            <div className="flex items-center justify-between">
              <span className="font-['Newsreader'] text-[10px] px-1.5 py-0.5 rounded bg-[#FEF3C7] text-[#8C6212] font-semibold">
                {workA.accuracyGrade}
              </span>
              <span className="font-['Newsreader'] text-sm font-bold text-[#8C6212]">
                {workA.accuracyScore}%
              </span>
            </div>
            <h2 className="mt-1 font-serif text-[15px] font-bold leading-tight text-[#1C1917] line-clamp-1">
              {workA.title}
            </h2>
            <span className="font-['Newsreader'] text-[11px] text-[#78716C] block">
              {workA.year} · {workA.mediaType.includes('영화') ? '영화' : '시리즈'}
            </span>

            <div className="mt-2 pt-1.5 bg-[#FAF6F0] rounded p-1.5 text-[11px] font-body text-[#57534E] leading-snug">
              <div className="flex items-center gap-1 text-[#8C6212]">
                <span className="material-symbols-outlined text-[12px]">location_on</span>
                <span className="font-semibold text-[10px]">{workA.region}</span>
              </div>
              <p className="mt-0.5 text-[#1C1917] font-medium truncate">{workA.guild}</p>
            </div>
          </div>
        </div>

        {/* Work B Card */}
        <div 
          onClick={() => onSelectRecord(workB)}
          className="flex flex-col bg-white rounded-xl p-2.5 shadow-xs border border-[#E5DBCC] cursor-pointer hover:border-[#8C6212] transition-colors"
        >
          <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-[#F4EFE6]">
            <img
              alt={workB.title}
              className="w-full h-full object-cover"
              src={workB.coverImage}
            />
            <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-[#516071] text-white font-['Newsreader'] text-[10px] tracking-wider font-bold">
              B · 대조작
            </div>
          </div>

          <div className="mt-2.5">
            <div className="flex items-center justify-between">
              <span className="font-['Newsreader'] text-[10px] px-1.5 py-0.5 rounded bg-[#EFE7DE] text-[#57534E] font-semibold">
                {workB.accuracyGrade}
              </span>
              <span className="font-['Newsreader'] text-sm font-bold text-[#516071]">
                {workB.accuracyScore}%
              </span>
            </div>
            <h2 className="mt-1 font-serif text-[15px] font-bold leading-tight text-[#1C1917] line-clamp-1">
              {workB.title}
            </h2>
            <span className="font-['Newsreader'] text-[11px] text-[#78716C] block">
              {workB.year} · {workB.mediaType.includes('영화') ? '영화' : '시리즈'}
            </span>

            <div className="mt-2 pt-1.5 bg-[#FAF6F0] rounded p-1.5 text-[11px] font-body text-[#57534E] leading-snug">
              <div className="flex items-center gap-1 text-[#516071]">
                <span className="material-symbols-outlined text-[12px]">anchor</span>
                <span className="font-semibold text-[10px]">{workB.region}</span>
              </div>
              <p className="mt-0.5 text-[#1C1917] font-medium truncate">{workB.guild}</p>
            </div>
          </div>
        </div>
      </div>

      {/* AI Cross-Verification Synthesis Box */}
      <div className="mx-4 mt-4 p-3.5 rounded-xl bg-[#F5EFE6] border border-[#E4DACB] shadow-xs max-w-xl self-center w-[calc(100%-2rem)]">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-[#8C6212] text-white flex items-center justify-center">
            <span className="material-symbols-outlined text-[15px] filled">auto_awesome</span>
          </div>
          <span className="font-['Newsreader'] text-xs uppercase tracking-wider text-[#8C6212] font-bold">
            AI 교차 검증 총괄 브리프
          </span>
        </div>

        <div className="p-3 bg-white rounded-lg text-[#1C1917] font-body text-xs leading-relaxed border border-[#E7E0D3]">
          두 작품 모두 13~14세기 북독일 상인 계층을 다루고 있으나,{' '}
          <span className="text-[#8C6212] font-bold">「{workA.title}」</span>은 당대 사료 기반 실루엣과 주름 베일 고증이 매우 엄격한 반면,{' '}
          <span className="text-[#516071] font-bold">「{workB.title}」</span>은 14세기 후반식 와이드 네크라인과 현대적 화학 염료 색감이 일부 섞여 있어 부분적 참고가 권장됩니다.
        </div>

        {/* Comparative Quick Metric Bars */}
        <div className="mt-2.5 grid grid-cols-2 gap-2 text-center">
          <div className="p-2 rounded-lg bg-white border border-[#E7E0D3]">
            <span className="font-['Newsreader'] text-[10px] text-[#78716C] block">사료 일치도 편차</span>
            <span className="font-serif text-base text-[#8C6212] font-bold">
              +{Math.abs(workA.accuracyScore - workB.accuracyScore)}%p 우위
            </span>
          </div>
          <div className="p-2 rounded-lg bg-white border border-[#E7E0D3]">
            <span className="font-['Newsreader'] text-[10px] text-[#78716C] block">시대 혼재율 (아나크로니즘)</span>
            <span className="font-serif text-base text-[#516071] font-bold">
              B작품 {workB.anachronismRate || 26}% 검출
            </span>
          </div>
        </div>
      </div>

      {/* Side-by-Side Comparison Matrix Section */}
      <div className="px-4 mt-5 max-w-xl mx-auto w-full">
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="font-serif text-lg text-[#1C1917] font-bold flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#8C6212] text-[19px]">table_rows</span>
            항목별 1:1 매트릭스 대조
          </h3>
          <span className="font-['Newsreader'] text-xs text-[#78716C] font-semibold">
            {report.matrixItems.length}개 핵심 범주
          </span>
        </div>

        <div className="flex flex-col gap-2.5">
          {report.matrixItems.map((item) => (
            <div key={item.id} className="rounded-xl bg-white border border-[#E5DBCC] p-3 shadow-xs">
              <div className="flex items-center justify-between pb-1.5 mb-2 bg-[#FAF6F0] px-2.5 py-1 rounded-lg">
                <span className="font-['Newsreader'] text-xs font-bold text-[#1C1917] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px] text-[#8C6212]">
                    {item.category.includes('실루엣') ? 'straighten' : item.category.includes('헤드기어') ? 'face_3' : item.category.includes('원단') ? 'palette' : 'diamond'}
                  </span>
                  {item.category} ({item.subCategory})
                </span>
                <span className="font-['Newsreader'] text-[10px] text-[#8C6212] font-bold">
                  {item.badge}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs font-body leading-snug">
                {/* A Note */}
                <div className="p-2 rounded-lg bg-[#FAF6F0] flex flex-col justify-between border border-[#EFE7DE]">
                  <div>
                    <span className="font-['Newsreader'] text-[10px] text-[#8C6212] font-bold block mb-1">
                      A · {workA.title}
                    </span>
                    <p className="text-[#1C1917]">{item.workANote}</p>
                  </div>
                  <div className="mt-2 flex items-center gap-1 text-[10px] text-[#8C6212] font-semibold">
                    <span className="material-symbols-outlined text-[13px] filled">check_circle</span>
                    {item.workAHighlight}
                  </div>
                </div>

                {/* B Note */}
                <div className="p-2 rounded-lg bg-[#FAF6F0] flex flex-col justify-between border border-[#EFE7DE]">
                  <div>
                    <span className="font-['Newsreader'] text-[10px] text-[#516071] font-bold block mb-1">
                      B · {workB.title}
                    </span>
                    <p className="text-[#57534E]">{item.workBNote}</p>
                  </div>
                  <div className={`mt-2 flex items-center gap-1 text-[10px] font-semibold ${
                    item.workBHighlight.includes('오차') ? 'text-[#991B1B]' : 'text-[#516071]'
                  }`}>
                    <span className="material-symbols-outlined text-[13px]">
                      {item.workBHighlight.includes('오차') ? 'warning' : 'info'}
                    </span>
                    {item.workBHighlight}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creator Verdict & Recommendation Card */}
      <div className="mx-4 mt-4 p-4 rounded-xl bg-[#8C6212] text-white shadow-xs max-w-xl self-center w-[calc(100%-2rem)]">
        <div className="flex items-center gap-2 mb-1">
          <span className="material-symbols-outlined text-[19px] text-[#FDE68A]">gavel</span>
          <h4 className="font-serif text-base font-bold text-white">창작자 참고 가이드라인 결론</h4>
        </div>
        
        <div className="p-3 bg-black/15 rounded-lg mt-2 text-amber-50">
          <p className="font-body text-xs leading-relaxed">
            “원화 및 의상 제작 시 <strong className="underline decoration-1 underline-offset-2">「{workA.title}」</strong>의 크루젤러 베일과 13C 슈르코 기본 레이어드를 기준으로 삼고, <strong className="underline decoration-1 underline-offset-2">「{workB.title}」</strong>은 거친 항구 현장감을 살리는 소품 레이아웃 아이디어 위주로 취사선택하는 것을 권장합니다.”
          </p>
        </div>

        <div className="mt-2.5 flex items-center justify-between text-[11px] font-['Newsreader'] text-[#FDE68A]">
          <span>검증위원: {report.committee}</span>
          <span>신뢰지수 {report.reliabilityScore}</span>
        </div>
      </div>

      {/* Dual Action Floating Bar */}
      <div className="px-4 mt-4 flex gap-2.5 max-w-xl mx-auto w-full">
        <button
          onClick={handleSaveArchive}
          className={`flex-1 h-12 rounded-xl font-['Newsreader'] text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-xs cursor-pointer ${
            isSaved
              ? 'bg-[#E8F5E9] text-[#1E5E3A] border border-[#C8E6C9]'
              : 'bg-[#F4EFE6] border border-[#DDD3C4] text-[#1C1917] hover:bg-[#EAE2D4]'
          }`}
          type="button"
        >
          <span className="material-symbols-outlined text-[19px]">
            {isSaved ? 'bookmark_added' : 'bookmark_add'}
          </span>
          <span>{isSaved ? '보관함 저장 완료' : '보관함 저장'}</span>
        </button>

        <button
          onClick={() => setIsExportOpen(true)}
          className="flex-1 h-12 rounded-xl bg-[#8C6212] text-white font-['Newsreader'] text-sm font-semibold flex items-center justify-center gap-2 active:scale-[0.98] transition-all shadow-xs hover:bg-[#6f4b00] cursor-pointer"
          type="button"
        >
          <span className="material-symbols-outlined text-[19px]">ios_share</span>
          <span>리포트 내보내기</span>
        </button>
      </div>

      {/* Export Report Modal */}
      <ExportReportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        report={report}
        workA={workA}
        workB={workB}
      />
    </div>
  );
};

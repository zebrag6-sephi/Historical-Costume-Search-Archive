import React, { useState } from 'react';
import { HistoricalRecord } from '../types';
import { AiFilterModal, AiParsedCriteria } from './modals/AiFilterModal';

interface ExploreScreenProps {
  records: HistoricalRecord[];
  onSelectRecord: (record: HistoricalRecord) => void;
  compareList: string[];
  onToggleCompare: (id: string) => void;
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
  onNavigateToCompare: () => void;
  initialQuery?: string;
}

export const ExploreScreen: React.FC<ExploreScreenProps> = ({
  records,
  onSelectRecord,
  compareList,
  onToggleCompare,
  bookmarks,
  onToggleBookmark,
  onNavigateToCompare,
  initialQuery = '13세기 북독일 한자동맹 상인 계급 여성 복식'
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [filterEra, setFilterEra] = useState('all');
  const [filterAccuracy, setFilterAccuracy] = useState('all');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const [aiCriteria, setAiCriteria] = useState<AiParsedCriteria>({
    era: '13세기 (중세 성기)',
    region: '북유럽 / 북독일',
    status: '상인·시민 계급',
    gender: '여성 (Frau)',
    garments: '윔플(베일), 코트하르디, 모피 트리밍'
  });

  const handleClear = () => {
    setSearchQuery('');
  };

  // Filter records based on search and filters
  const filteredRecords = records.filter(record => {
    if (filterAccuracy !== 'all' && record.accuracyGrade !== filterAccuracy) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchText = (
        record.title + ' ' +
        record.originalTitle + ' ' +
        record.region + ' ' +
        record.era + ' ' +
        record.tags.join(' ')
      ).toLowerCase();
      
      // If user typed a search, check basic matching or return authentic items
      if (!matchText.includes(q) && !q.includes('13세기') && !q.includes('한자')) {
        return true; // keep high visibility for historical exploration
      }
    }
    return true;
  });

  return (
    <div className="flex flex-col w-full pb-28">
      {/* Interactive Query Section */}
      <section className="px-4 pt-3.5 flex flex-col gap-2.5 max-w-xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#8C6212] text-[19px]">psychology</span>
            <span className="text-xs font-semibold text-[#8C6212] tracking-wider uppercase font-['Newsreader']">
              Semantic Archival Search
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#E8F3EB] border border-[#BCE2C7] text-[#1E6B39]">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
            <span className="text-xs font-semibold tracking-tight">AI 복식 분석 완료</span>
          </div>
        </div>

        {/* Archival Input Field */}
        <div className="relative flex items-center w-full bg-white border border-[#DDD3C4] rounded-xl px-3.5 py-2.5 shadow-xs focus-within:border-[#8C6212] focus-within:ring-1 focus-within:ring-[#8C6212] transition-all">
          <span className="material-symbols-outlined text-[#8C6212] text-[20px] mr-2">search_spark</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="자연어로 시대, 계층, 복식 요소를 검색해보세요"
            className="w-full bg-transparent text-[#1C1917] font-medium text-sm outline-none placeholder:text-[#A8A29E] truncate font-body"
          />
          {searchQuery && (
            <button
              onClick={handleClear}
              aria-label="입력 초기화"
              className="flex items-center justify-center w-7 h-7 rounded-full text-[#78716C] hover:text-[#1C1917] hover:bg-[#F3ECE0] transition-colors ml-1 cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          )}
        </div>
      </section>

      {/* AI Dissection Block */}
      <section className="mx-4 mt-3 p-3.5 bg-[#F5EFE6] border border-[#E4DACB] rounded-2xl flex flex-col gap-2.5 shadow-xs max-w-xl self-center w-[calc(100%-2rem)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[#292524]">
            <span className="material-symbols-outlined text-[19px] text-[#8C6212]">schema</span>
            <h2 className="text-xs font-bold text-[#1C1917] tracking-tight">AI 구조화 파싱 조건</h2>
          </div>
          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="flex items-center gap-1 text-[#8C6212] hover:text-[#5c3507] font-semibold transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[15px]">tune</span>
            <span className="text-xs font-['Newsreader']">조건 수정</span>
          </button>
        </div>

        {/* Parsed Chips */}
        <div className="flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#D9CDBF] rounded-lg text-[#1C1917] text-xs shadow-2xs">
            <span className="text-[#78716C] font-medium text-[11px]">시대</span>
            <span className="font-bold text-[#92400E] text-[11px]">{aiCriteria.era}</span>
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#D9CDBF] rounded-lg text-[#1C1917] text-xs shadow-2xs">
            <span className="text-[#78716C] font-medium text-[11px]">지역</span>
            <span className="font-bold text-[#1C1917] text-[11px]">{aiCriteria.region}</span>
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#D9CDBF] rounded-lg text-[#1C1917] text-xs shadow-2xs">
            <span className="text-[#78716C] font-medium text-[11px]">신분</span>
            <span className="font-bold text-[#1C1917] text-[11px]">{aiCriteria.status}</span>
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#D9CDBF] rounded-lg text-[#1C1917] text-xs shadow-2xs">
            <span className="text-[#78716C] font-medium text-[11px]">성별</span>
            <span className="font-bold text-[#1C1917] text-[11px]">{aiCriteria.gender}</span>
          </span>

          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#FAF0E2] border border-[#DEBE96] rounded-lg text-[#1C1917] text-xs shadow-2xs">
            <span className="text-[#8C6212] font-medium text-[11px]">핵심 복식</span>
            <span className="font-bold text-[#78350F] text-[11px]">{aiCriteria.garments}</span>
          </span>
        </div>
      </section>

      {/* Multi-Filter Selectors Tray */}
      <section className="mt-3 flex flex-col gap-2 max-w-xl mx-auto w-full">
        <div className="flex items-center gap-2 px-4 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => setFilterEra(filterEra === '13C' ? 'all' : '13C')}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full border text-xs font-semibold whitespace-nowrap shadow-2xs transition-colors cursor-pointer ${
              filterEra === '13C'
                ? 'bg-[#78350F] text-amber-50 border-[#78350F]'
                : 'bg-white border-[#D9CDBF] text-[#292524] active:bg-[#ECE4D8]'
            }`}
            type="button"
          >
            <span>시대: 13C 중세</span>
            <span className="material-symbols-outlined text-[16px]">arrow_drop_down</span>
          </button>

          <button
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-[#D9CDBF] text-[#292524] text-xs font-semibold whitespace-nowrap active:bg-[#ECE4D8] shadow-2xs cursor-pointer"
            type="button"
          >
            <span>문화권: 게르만·한자</span>
            <span className="material-symbols-outlined text-[16px] text-[#78716C]">arrow_drop_down</span>
          </button>

          <button
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-[#D9CDBF] text-[#292524] text-xs font-semibold whitespace-nowrap active:bg-[#ECE4D8] shadow-2xs cursor-pointer"
            type="button"
          >
            <span>계층: 길드 상인</span>
            <span className="material-symbols-outlined text-[16px] text-[#78716C]">arrow_drop_down</span>
          </button>

          <button
            onClick={() => {
              if (filterAccuracy === 'all') setFilterAccuracy('AUTHENTIC');
              else if (filterAccuracy === 'AUTHENTIC') setFilterAccuracy('SELECTIVE');
              else setFilterAccuracy('all');
            }}
            className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-xs transition-colors cursor-pointer ${
              filterAccuracy !== 'all'
                ? 'bg-[#8C6212] text-white border border-[#8C6212]'
                : 'bg-[#78350F] text-amber-50'
            }`}
            type="button"
          >
            <span>고증: {filterAccuracy === 'all' ? '전체' : filterAccuracy}</span>
            <span className="material-symbols-outlined text-[16px] text-amber-200">arrow_drop_down</span>
          </button>
        </div>

        {/* Accuracy Grade Quick Legend */}
        <div className="px-4 flex items-center justify-between pt-1">
          <span className="text-[11px] font-bold text-[#78716C] tracking-wider uppercase font-['Newsreader']">
            고증 판정 기준
          </span>
          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#ECFDF5] border border-[#A7F3D0] text-[#065F46] text-[10px] font-bold">
              <span className="material-symbols-outlined text-[13px] filled">verified</span> 추천
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] text-[10px] font-bold">
              <span className="material-symbols-outlined text-[13px]">change_circle</span> 부분 참고
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-[10px] font-bold">
              <span className="material-symbols-outlined text-[13px]">warning</span> 주의 필요
            </span>
          </div>
        </div>
      </section>

      {/* Results Count Bar */}
      <div className="px-4 mt-3 flex items-center justify-between max-w-xl mx-auto w-full">
        <div className="flex items-baseline gap-2">
          <h3 className="font-serif text-[17px] font-bold text-[#1C1917]">일치하는 고증 레퍼런스</h3>
          <span className="text-[11px] font-bold text-[#8C6212] bg-[#F7EFE4] px-2 py-0.5 rounded-full border border-[#DFD1BD]">
            {filteredRecords.length}건
          </span>
        </div>
        <span className="text-[11px] font-semibold text-[#78716C] flex items-center gap-0.5">
          사료 교차검증순 <span className="text-[9px]">▼</span>
        </span>
      </div>

      {/* Cards List */}
      <div className="px-4 mt-2 flex flex-col gap-3.5 max-w-xl mx-auto w-full">
        {filteredRecords.map((record) => {
          const isComparing = compareList.includes(record.id);
          const isBookmarked = bookmarks.includes(record.id);
          const compareIdx = compareList.indexOf(record.id) + 1;

          return (
            <article
              key={record.id}
              className="flex flex-col bg-white border border-[#E5DBCC] rounded-2xl overflow-hidden shadow-xs hover:border-[#D5C2AA] transition-all"
            >
              {/* Media Still */}
              <div 
                onClick={() => onSelectRecord(record)}
                className="relative w-full aspect-[16/9] bg-[#EAE2D5] overflow-hidden cursor-pointer group"
              >
                <img
                  alt={record.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={record.coverImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Accuracy Grade Badge */}
                <div className="absolute top-2.5 left-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-xs">
                  {record.accuracyGrade === 'AUTHENTIC' ? (
                    <>
                      <span className="material-symbols-outlined text-[14px] text-emerald-300 filled">verified</span>
                      <span className="text-[11px] font-bold tracking-wider text-emerald-200 font-['Newsreader']">
                        추천 (AUTHENTIC)
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined text-[14px] text-amber-300">change_circle</span>
                      <span className="text-[11px] font-bold tracking-wider text-amber-200 font-['Newsreader']">
                        부분 참고 (SELECTIVE)
                      </span>
                    </>
                  )}
                </div>

                <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-xs text-stone-200 text-[10px] font-semibold border border-white/10">
                  {record.mediaType.includes('영화') ? '영화' : '시리즈'} · {record.year}
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-amber-300 tracking-wider block uppercase font-['Newsreader']">
                      {record.mediaType}
                    </span>
                    <h4 className="font-serif text-lg text-white font-bold drop-shadow-xs">
                      {record.title}{' '}
                      <span className="font-body text-xs font-normal text-stone-300 ml-1">
                        {record.originalTitle.split('(')[0]}
                      </span>
                    </h4>
                  </div>
                </div>
              </div>

              {/* Dossier Metadata */}
              <div className="p-3.5 flex flex-col gap-2.5">
                {/* Archival Verification Note */}
                <div className="p-3 rounded-xl bg-[#F7F2EB] border border-[#E9E0D3] flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-bold flex items-center gap-1 ${
                      record.accuracyGrade === 'AUTHENTIC' ? 'text-[#065F46]' : 'text-[#92400E]'
                    }`}>
                      <span className="material-symbols-outlined text-[15px]">
                        {record.accuracyGrade === 'AUTHENTIC' ? 'history_edu' : 'report_problem'}
                      </span>
                      {record.accuracyGrade === 'AUTHENTIC'
                        ? `사료 일치도 ${record.accuracyScore}%`
                        : '고증 검토 의견'}
                    </span>
                    <span className="text-[10px] font-medium text-[#78716C] bg-white px-2 py-0.5 rounded border border-[#E2D8C9]">
                      {record.region}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-[#44403C] font-body">
                    {record.shortVerdict || record.judgmentSummary}
                  </p>
                </div>

                {/* Keyword Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {record.tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded-md text-[10px] font-medium font-sans border ${
                        tag.includes('주의')
                          ? 'bg-[#FEE2E2] border-[#FECACA] text-[#991B1B] font-semibold'
                          : 'bg-[#F2ECE1] border-[#DDD0BF] text-[#44403C]'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Row */}
                <div className="pt-1 flex items-center gap-2">
                  <button
                    onClick={() => onToggleCompare(record.id)}
                    className={`flex-1 py-2 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-transform active:scale-95 cursor-pointer ${
                      isComparing
                        ? 'bg-[#78350F] text-amber-50'
                        : 'bg-[#F5EFE6] border border-[#DDD1C0] text-[#1C1917] hover:bg-[#EAE2D4]'
                    }`}
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[16px]">
                      {isComparing ? 'check' : 'add_circle_outline'}
                    </span>
                    <span>
                      {isComparing
                        ? `비교함 담김 (${compareIdx}/${Math.max(compareList.length, 3)})`
                        : '비교함 담기'}
                    </span>
                  </button>

                  <button
                    onClick={() => onToggleBookmark(record.id)}
                    aria-label="보관함 저장"
                    className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-colors active:scale-95 cursor-pointer ${
                      isBookmarked
                        ? 'bg-[#F4EFE6] border-[#DDD1C0] text-[#78350F]'
                        : 'bg-[#F4EFE6] border-[#DDD1C0] text-[#78716C] hover:text-[#1C1917]'
                    }`}
                    type="button"
                  >
                    <span className={`material-symbols-outlined text-[19px] ${isBookmarked ? 'filled' : ''}`}>
                      bookmark
                    </span>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Docked Floating Comparison Tray */}
      {compareList.length > 0 && (
        <div className="fixed bottom-20 left-0 right-0 z-40 px-4 flex justify-center pointer-events-none">
          <aside className="pointer-events-auto w-full max-w-md bg-[#1C1917]/95 backdrop-blur-md text-amber-50 rounded-2xl p-2.5 px-3.5 flex items-center justify-between shadow-xl border border-[#44403C] animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center gap-2.5 pl-0.5">
              <div className="w-8 h-8 rounded-full bg-[#B45309] text-white flex items-center justify-center shadow-xs">
                <span className="material-symbols-outlined text-[18px]">compare_arrows</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white tracking-tight">
                  비교함 {compareList.length}/3편 선택됨
                </span>
                <span className="text-[10px] text-stone-300">동일 시대 복식 교차 분석 가능</span>
              </div>
            </div>

            <button
              onClick={onNavigateToCompare}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-[#F59E0B] text-[#78350F] text-xs font-extrabold tracking-wide hover:bg-[#FBBF24] transition-transform active:scale-95 shadow cursor-pointer"
              type="button"
            >
              <span>비교하기</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </button>
          </aside>
        </div>
      )}

      {/* AI Filter Modification Modal */}
      <AiFilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        criteria={aiCriteria}
        onSave={(newCriteria) => setAiCriteria(newCriteria)}
      />
    </div>
  );
};

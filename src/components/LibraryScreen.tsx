import React, { useState } from 'react';
import { ProjectBoard, HistoricalRecord, ComparisonReport, LexiconWord } from '../types';
import { NewProjectModal } from './modals/NewProjectModal';

interface LibraryScreenProps {
  projects: ProjectBoard[];
  onAddProject: (project: Partial<ProjectBoard>) => void;
  bookmarks: string[];
  records: HistoricalRecord[];
  report: ComparisonReport;
  lexiconKeywords: LexiconWord[];
  onSelectRecord: (record: HistoricalRecord) => void;
  onNavigateToCompare: () => void;
  onNavigateToExploreWithTag: (tag: string) => void;
}

export const LibraryScreen: React.FC<LibraryScreenProps> = ({
  projects,
  onAddProject,
  bookmarks,
  records,
  report,
  lexiconKeywords,
  onSelectRecord,
  onNavigateToCompare,
  onNavigateToExploreWithTag
}) => {
  const [activeTab, setActiveTab] = useState<'boards' | 'scraps' | 'reports' | 'lexicon'>('boards');
  const [isNewProjectOpen, setIsNewProjectOpen] = useState(false);
  const [activeKeyword, setActiveKeyword] = useState<string | null>(null);

  const bookmarkedRecords = records.filter(r => bookmarks.includes(r.id));

  return (
    <div className="flex flex-col w-full pb-28">
      {/* Archival Context Banner & Action Bar */}
      <section className="px-4 pt-3.5 pb-2.5 max-w-xl mx-auto w-full">
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6212]" />
              <span className="font-['Newsreader'] text-[11px] uppercase tracking-widest text-[#8C6212] font-semibold">
                COLLECTION &amp; DRAFT REGISTRY
              </span>
            </div>
            <h1 className="font-serif text-2xl font-bold text-[#1C1917] truncate">
              보관함 &amp; 프로젝트
            </h1>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              aria-label="필터 및 정렬"
              onClick={() => alert('프로젝트 보드 정렬: 최근 수정순')}
              className="w-9 h-9 rounded-xl bg-[#F5EFE6] border border-[#DDD1C0] flex items-center justify-center text-[#57534E] hover:text-[#8C6212] transition-colors shadow-2xs cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[19px]">tune</span>
            </button>

            <button
              onClick={() => setIsNewProjectOpen(true)}
              className="h-9 px-3 rounded-xl bg-[#8C6212] text-white font-['Newsreader'] text-xs font-semibold flex items-center gap-1 shadow-xs active:scale-95 transition-all cursor-pointer"
              type="button"
            >
              <span className="material-symbols-outlined text-[16px]">add</span>
              <span>새 프로젝트</span>
            </button>
          </div>
        </div>
      </section>

      {/* Horizontal Scrollable Folio Tabs */}
      <section className="px-4 pb-3 max-w-xl mx-auto w-full">
        <div className="flex gap-2 overflow-x-auto no-scrollbar py-0.5">
          <button
            onClick={() => setActiveTab('boards')}
            className={`shrink-0 px-3.5 py-1.5 rounded-full font-['Newsreader'] text-xs font-semibold shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'boards'
                ? 'bg-[#8C6212] text-white'
                : 'bg-[#F5EFE6] text-[#57534E] hover:text-[#1C1917]'
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[15px]">dashboard_customize</span>
            <span>프로젝트 보드</span>
            <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
              activeTab === 'boards' ? 'bg-white/25 text-white' : 'bg-[#E7E0D3] text-[#57534E]'
            }`}>
              {projects.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('scraps')}
            className={`shrink-0 px-3.5 py-1.5 rounded-full font-['Newsreader'] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'scraps'
                ? 'bg-[#8C6212] text-white'
                : 'bg-[#F5EFE6] text-[#57534E] hover:text-[#1C1917]'
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[15px]">bookmark</span>
            <span>스크랩 작품</span>
            <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
              activeTab === 'scraps' ? 'bg-white/25 text-white' : 'bg-[#E7E0D3] text-[#57534E]'
            }`}>
              {bookmarkedRecords.length || 18}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('reports')}
            className={`shrink-0 px-3.5 py-1.5 rounded-full font-['Newsreader'] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'reports'
                ? 'bg-[#8C6212] text-white'
                : 'bg-[#F5EFE6] text-[#57534E] hover:text-[#1C1917]'
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[15px]">difference</span>
            <span>비교 리포트</span>
            <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold ${
              activeTab === 'reports' ? 'bg-white/25 text-white' : 'bg-[#E7E0D3] text-[#57534E]'
            }`}>
              4
            </span>
          </button>

          <button
            onClick={() => setActiveTab('lexicon')}
            className={`shrink-0 px-3.5 py-1.5 rounded-full font-['Newsreader'] text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
              activeTab === 'lexicon'
                ? 'bg-[#8C6212] text-white'
                : 'bg-[#F5EFE6] text-[#57534E] hover:text-[#1C1917]'
            }`}
            type="button"
          >
            <span className="material-symbols-outlined text-[15px]">history_edu</span>
            <span>복식 용어 노트</span>
          </button>
        </div>
      </section>

      {/* Tab: Boards */}
      {activeTab === 'boards' && (
        <section className="px-4 flex flex-col gap-3.5 max-w-xl mx-auto w-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#8C6212] text-[19px]">folder_special</span>
              <h2 className="font-serif text-[17px] font-bold text-[#1C1917]">진행 중인 창작 프로젝트</h2>
            </div>
            <span className="font-['Newsreader'] text-xs text-[#516071] tracking-wide font-semibold">
              {projects.length}/10 사용 중
            </span>
          </div>

          {/* Project Card 1: 13C 북독일 한자 상인 웹툰 */}
          {projects[0] && (
            <article className="bg-[#FAF6F0] rounded-2xl p-4 shadow-xs border border-[#E5DBCC] flex flex-col gap-3.5 relative overflow-hidden transition-all hover:border-[#D5C2AA]">
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-md bg-[#516071] text-white font-['Newsreader'] text-[11px] tracking-wide flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f1bf5c] animate-pulse" />
                      {projects[0].statusLabel}
                    </span>
                    <span className="font-['Newsreader'] text-[11px] text-[#78716C]">
                      {projects[0].updatedAt}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917] leading-tight mt-0.5">
                    {projects[0].title}
                  </h3>
                  <p className="font-body text-xs text-[#516071]">{projects[0].subtitle}</p>
                </div>
                <button
                  aria-label="프로젝트 옵션"
                  onClick={() => alert(`프로젝트 "${projects[0].title}" 옵션: 이름 수정, 아카이브 다운로드, 공유`)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[#78716C] hover:text-[#8C6212] transition-colors shrink-0 cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">more_vert</span>
                </button>
              </div>

              {/* Overlapping Triple Visual Specimen Preview */}
              <div className="bg-[#F5EFE6] border border-[#E7E0D3] rounded-xl p-2.5 flex items-center justify-between gap-2">
                <div className="relative w-32 h-16 shrink-0">
                  {/* Plate 3 */}
                  <div className="absolute left-6 top-1 w-14 h-14 rounded-lg overflow-hidden shadow-xs bg-[#EFE7DE] rotate-6 border border-[#E2D9CC]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Plate 3"
                      src={projects[0].images[2] || projects[0].images[0]}
                    />
                  </div>
                  {/* Plate 2 */}
                  <div className="absolute left-3 top-0.5 w-14 h-14 rounded-lg overflow-hidden shadow-xs bg-[#EFE7DE] -rotate-3 border border-[#E2D9CC]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Plate 2"
                      src={projects[0].images[1] || projects[0].images[0]}
                    />
                  </div>
                  {/* Plate 1 Top Hero */}
                  <div className="absolute left-0 top-0 w-14 h-14 rounded-lg overflow-hidden shadow-sm bg-white border border-[#DDD3C4]">
                    <img
                      className="w-full h-full object-cover"
                      alt="Plate 1"
                      src={projects[0].images[0]}
                    />
                  </div>
                </div>

                <div className="flex flex-col min-w-0 flex-1 pl-1">
                  <div className="flex items-center gap-1 text-[#8C6212]">
                    <span className="material-symbols-outlined text-[14px]">history</span>
                    <span className="font-['Newsreader'] text-[11px] uppercase tracking-wide font-bold">
                      {projects[0].specimenCode}
                    </span>
                  </div>
                  <span className="font-body text-xs text-[#1C1917] truncate font-medium">
                    {projects[0].specimenTitle}
                  </span>
                  <span className="font-['Newsreader'] text-[11px] text-[#78716C]">
                    {projects[0].deviation}
                  </span>
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="flex items-center gap-1 flex-wrap">
                {projects[0].tags.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-[#F2ECE1] border border-[#DDD0BF] text-[#44403C] text-[11px] font-sans">
                    {t}
                  </span>
                ))}
              </div>

              {/* Curator Memo */}
              {projects[0].curatorMemo && (
                <div className="bg-[#EFE7DE]/70 rounded-xl p-3 flex items-start gap-2 border border-[#E2D9CC]">
                  <span className="material-symbols-outlined text-[#8C6212] text-[17px] mt-0.5 shrink-0">
                    stylus_note
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-['Newsreader'] text-[11px] text-[#8C6212] uppercase tracking-wide font-bold">
                      작화 연계 큐레이터 메모
                    </span>
                    <p className="font-body text-xs text-[#1C1917] line-clamp-2 mt-0.5 leading-snug">
                      {projects[0].curatorMemo}
                    </p>
                  </div>
                </div>
              )}

              {/* Actions Row */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={onNavigateToCompare}
                  className="h-10 rounded-xl bg-white border border-[#DDD3C4] text-[#1C1917] hover:bg-[#F5EFE6] font-['Newsreader'] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[17px] text-[#516071]">compare_arrows</span>
                  <span>비교함 내보내기</span>
                </button>
                <button
                  onClick={() => alert(`프로젝트 보드 열기: "${projects[0].title}" 워크스페이스 준비 완료`)}
                  className="h-10 rounded-xl bg-[#8C6212] text-white hover:bg-[#6f4b00] font-['Newsreader'] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[17px]">open_in_new</span>
                  <span>보드 열기</span>
                </button>
              </div>
            </article>
          )}

          {/* Project Card 2: 15C 플랑드르 */}
          {projects[1] && (
            <article className="bg-[#FAF6F0] rounded-2xl p-4 shadow-xs border border-[#E5DBCC] flex flex-col gap-3.5 transition-all hover:border-[#D5C2AA]">
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-md bg-[#896300] text-amber-100 font-['Newsreader'] text-[11px] tracking-wide flex items-center gap-1 font-semibold">
                      <span className="material-symbols-outlined text-[13px] filled">verified</span>
                      {projects[1].statusLabel}
                    </span>
                    <span className="font-['Newsreader'] text-[11px] text-[#78716C]">
                      {projects[1].updatedAt}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#1C1917] leading-tight mt-0.5">
                    {projects[1].title}
                  </h3>
                  <p className="font-body text-xs text-[#516071]">{projects[1].subtitle}</p>
                </div>
                <button
                  aria-label="프로젝트 옵션"
                  onClick={() => alert(`프로젝트 "${projects[1].title}" 관리`)}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[#78716C] hover:text-[#8C6212] transition-colors shrink-0 cursor-pointer"
                  type="button"
                >
                  <span className="material-symbols-outlined text-[18px]">more_vert</span>
                </button>
              </div>

              {/* Quick Thumbnail Row */}
              <div className="grid grid-cols-4 gap-2">
                {projects[1].images.slice(0, 3).map((img, i) => (
                  <div key={i} className="aspect-square rounded-lg overflow-hidden bg-[#F4EFE6] border border-[#E2D9CC] shadow-2xs">
                    <img className="w-full h-full object-cover" alt="Specimen" src={img} />
                  </div>
                ))}
                <div className="aspect-square rounded-lg bg-[#F5EFE6] border border-[#DDD3C4] flex flex-col items-center justify-center text-[#516071] gap-0.5 text-center p-1">
                  <span className="font-['Newsreader'] text-sm font-bold text-[#1C1917]">+1</span>
                  <span className="font-['Newsreader'] text-[10px] text-[#78716C]">모음집</span>
                </div>
              </div>

              {/* Tag Cloud */}
              <div className="flex items-center gap-1 flex-wrap">
                {projects[1].tags.map(t => (
                  <span key={t} className="px-2 py-0.5 rounded-md bg-[#F2ECE1] border border-[#DDD0BF] text-[#44403C] text-[11px] font-sans">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Row */}
              <div className="flex items-center justify-between pt-1 border-t border-[#E7E0D3]">
                <span className="font-['Newsreader'] text-xs text-[#516071]">
                  사료 대조 레포트 생성 완료
                </span>
                <button
                  onClick={onNavigateToCompare}
                  className="h-8 px-3 rounded-lg bg-white border border-[#DDD3C4] text-[#1C1917] hover:bg-[#F5EFE6] font-['Newsreader'] text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                  type="button"
                >
                  <span>열람하기</span>
                  <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
                </button>
              </div>
            </article>
          )}

          {/* Create New Project Placeholder Card */}
          <button
            onClick={() => setIsNewProjectOpen(true)}
            className="w-full rounded-2xl p-5 bg-white border border-dashed border-[#D6CBB9] hover:border-[#8C6212] text-[#57534E] hover:text-[#8C6212] flex flex-col items-center justify-center gap-2 transition-all cursor-pointer group py-6"
            type="button"
          >
            <div className="w-11 h-11 rounded-full bg-[#FAF6F0] group-hover:bg-[#8C6212] group-hover:text-white text-[#8C6212] flex items-center justify-center transition-colors shadow-2xs border border-[#E2D9CC]">
              <span className="material-symbols-outlined text-[24px]">create_new_folder</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="font-serif text-base text-[#1C1917] font-bold">
                + 새 창작 프로젝트 보드 생성
              </span>
              <span className="font-body text-xs text-[#78716C] mt-0.5">
                영상 타임라인 스크랩과 문헌 고증 카드를 엮어 새로운 챕터를 시작하세요
              </span>
            </div>
          </button>

          {/* Cross-Referenced Comparative Reports Section */}
          <div className="mt-3 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#8C6212] text-[19px]">fact_check</span>
                <h2 className="font-serif text-[17px] font-bold text-[#1C1917]">최근 저장한 비교 리포트</h2>
              </div>
              <button
                onClick={() => setActiveTab('reports')}
                className="font-['Newsreader'] text-xs text-[#8C6212] font-semibold flex items-center gap-0.5 hover:underline cursor-pointer"
                type="button"
              >
                전체 4건 <span className="material-symbols-outlined text-[13px]">chevron_right</span>
              </button>
            </div>

            {/* Comparative Report Summary Card */}
            <article className="bg-[#FAF6F0] rounded-2xl p-4 shadow-xs border border-[#E5DBCC] flex flex-col gap-3">
              <div className="flex items-start justify-between gap-2">
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="px-1.5 py-0.5 rounded bg-[#D4E4F9] text-[#394859] font-['Newsreader'] text-[10px] font-bold">
                      AI 크로스 레퍼런스
                    </span>
                    <span className="font-['Newsreader'] text-[11px] text-[#78716C]">
                      {report.createdDate} 생성
                    </span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#1C1917] truncate">
                    {report.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#FAF0E2] text-[#8C6212] flex items-center justify-center shrink-0 border border-[#DEBE96]">
                  <span className="material-symbols-outlined text-[18px]">verified_user</span>
                </div>
              </div>

              {/* Comparative Stat Metric Visual */}
              <div className="bg-white border border-[#E7E0D3] rounded-xl p-3 flex flex-col gap-2">
                <div className="flex items-center justify-between text-xs font-body">
                  <span className="text-[#57534E]">13세기 사료 복식 고증 일치도</span>
                  <span className="font-['Newsreader'] text-sm text-[#8C6212] font-bold">
                    {report.matchRate}% ({report.diffRate})
                  </span>
                </div>

                <div className="w-full flex flex-col gap-1">
                  <div className="w-full h-2 rounded-full bg-[#EAE2D8] overflow-hidden flex">
                    <div className="h-full bg-[#8C6212]" style={{ width: `${report.matchRate}%` }} />
                    <div className="h-full bg-[#516071] opacity-40" style={{ width: `${100 - report.matchRate}%` }} />
                  </div>
                  <div className="flex justify-between font-['Newsreader'] text-[10px] text-[#78716C]">
                    <span>작품 A: 사료 충실도 높음</span>
                    <span>작품 B: 드라마틱 각색 요소</span>
                  </div>
                </div>
              </div>

              {/* Report Actions */}
              <div className="flex items-center justify-between pt-1 gap-2 border-t border-[#E7E0D3]">
                <div className="flex items-center gap-1.5 text-[#57534E] text-xs font-body">
                  <span className="material-symbols-outlined text-[16px] text-[#8C6212]">analytics</span>
                  <span>비교 지점 {report.pointsCount}개소 정리</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={onNavigateToCompare}
                    className="h-8 px-2.5 rounded-lg bg-white border border-[#DDD3C4] text-[#1C1917] hover:bg-[#F5EFE6] font-['Newsreader'] text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[14px]">picture_as_pdf</span>
                    <span>PDF</span>
                  </button>
                  <button
                    onClick={() => {
                      navigator.clipboard?.writeText(window.location.href);
                      alert('비교 리포트 링크가 복사되었습니다.');
                    }}
                    className="h-8 px-2.5 rounded-lg bg-white border border-[#DDD3C4] text-[#1C1917] hover:bg-[#F5EFE6] font-['Newsreader'] text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer"
                    type="button"
                  >
                    <span className="material-symbols-outlined text-[14px]">share</span>
                    <span>공유</span>
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Tag Cloud & Quick Lexicon Memo Section */}
          <div className="mt-2 flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#8C6212] text-[19px]">local_offer</span>
                <h2 className="font-serif text-[17px] font-bold text-[#1C1917]">모아둔 복식 키워드 &amp; 어휘</h2>
              </div>
              <button
                onClick={() => setActiveTab('lexicon')}
                className="font-['Newsreader'] text-xs text-[#78716C] hover:text-[#8C6212] transition-colors cursor-pointer"
                type="button"
              >
                색인 관리
              </button>
            </div>

            <div className="bg-[#FAF6F0] border border-[#E5DBCC] rounded-2xl p-4 shadow-xs flex flex-col gap-2.5">
              <p className="font-body text-xs text-[#57534E] leading-relaxed">
                스크랩한 영상과 문헌 판본에서 추출된 주요 복식 용어 빈도입니다. 태그를 선택하여 연관 씬을 바로 탐색할 수 있습니다.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {lexiconKeywords.slice(0, 6).map((kw) => {
                  const isSelected = activeKeyword === kw.term;
                  return (
                    <button
                      key={kw.id}
                      onClick={() => {
                        setActiveKeyword(isSelected ? null : kw.term);
                        onNavigateToExploreWithTag(kw.term);
                      }}
                      className={`px-3 py-1.5 rounded-full font-['Newsreader'] text-xs font-semibold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer ${
                        isSelected
                          ? 'bg-[#8C6212] text-white border border-[#734F0C]'
                          : 'bg-white border border-[#DDD3C4] text-[#1C1917] hover:border-[#8C6212]'
                      }`}
                      type="button"
                    >
                      <span>#{kw.term} ({kw.romanTerm})</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#F4EFE6] text-[#78716C]'
                      }`}>
                        {kw.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tab: Scraps */}
      {activeTab === 'scraps' && (
        <section className="px-4 flex flex-col gap-3 max-w-xl mx-auto w-full">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-bold text-[#1C1917]">
              스크랩한 영상 사료 ({bookmarkedRecords.length})
            </h2>
            <span className="font-['Newsreader'] text-xs text-[#78716C]">고증 정렬순</span>
          </div>

          {bookmarkedRecords.length === 0 ? (
            <div className="p-8 text-center bg-white rounded-2xl border border-[#D6CBB9] text-[#78716C]">
              <span className="material-symbols-outlined text-[32px] text-[#8C6212] mb-1">bookmark_border</span>
              <p className="font-serif text-sm">아직 스크랩한 사료가 없습니다.</p>
              <p className="text-xs mt-1">탐색 화면에서 관심 있는 복식 레퍼런스를 보관해보세요.</p>
            </div>
          ) : (
            bookmarkedRecords.map((rec) => (
              <div
                key={rec.id}
                onClick={() => onSelectRecord(rec)}
                className="bg-white border border-[#D6CBB9] rounded-xl p-3 flex gap-3 items-center hover:border-[#8C6212] transition-colors cursor-pointer"
              >
                <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-[#F4EFE6]">
                  <img alt={rec.title} className="w-full h-full object-cover" src={rec.coverImage} />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-[11px] text-[#8C6212] font-['Newsreader'] font-bold">
                    {rec.era} · {rec.accuracyScore}%
                  </span>
                  <h4 className="font-serif text-base font-bold text-[#1C1917] truncate">{rec.title}</h4>
                  <p className="font-body text-xs text-[#57534E] line-clamp-1">{rec.judgmentSummary}</p>
                </div>
              </div>
            ))
          )}
        </section>
      )}

      {/* Tab: Reports */}
      {activeTab === 'reports' && (
        <section className="px-4 flex flex-col gap-3 max-w-xl mx-auto w-full">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-bold text-[#1C1917]">
              저장된 복식 비교 리포트
            </h2>
            <button
              onClick={onNavigateToCompare}
              className="text-xs text-[#8C6212] font-['Newsreader'] font-bold hover:underline cursor-pointer"
              type="button"
            >
              + 새 비교 분석
            </button>
          </div>

          <div
            onClick={onNavigateToCompare}
            className="bg-white border border-[#D6CBB9] rounded-2xl p-4 shadow-xs flex flex-col gap-2 cursor-pointer hover:border-[#8C6212] transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="font-['Newsreader'] text-xs text-[#8C6212] font-bold">
                {report.folioRef} · {report.createdDate}
              </span>
              <span className="bg-[#E8F5E9] text-[#1E5E3A] px-2 py-0.5 rounded text-[10px] font-bold">
                신뢰지수 {report.reliabilityScore}
              </span>
            </div>
            <h3 className="font-serif text-base font-bold text-[#1C1917]">{report.title}</h3>
            <p className="font-body text-xs text-[#57534E] line-clamp-2">{report.generalBrief}</p>
            <div className="mt-2 pt-2 border-t border-[#E7E0D3] flex items-center justify-between text-xs text-[#8C6212] font-['Newsreader'] font-semibold">
              <span>비교 지점 {report.pointsCount}개소</span>
              <span className="flex items-center gap-0.5">상세 열람 <span className="material-symbols-outlined text-[14px]">arrow_forward</span></span>
            </div>
          </div>
        </section>
      )}

      {/* Tab: Lexicon */}
      {activeTab === 'lexicon' && (
        <section className="px-4 flex flex-col gap-3 max-w-xl mx-auto w-full">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg font-bold text-[#1C1917]">
              복식 용어 사전 &amp; 어휘 노트
            </h2>
            <span className="font-['Newsreader'] text-xs text-[#78716C]">
              총 {lexiconKeywords.length}개 표제어
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {lexiconKeywords.map((kw) => (
              <div
                key={kw.id}
                className="bg-white border border-[#D6CBB9] p-3.5 rounded-xl flex flex-col gap-1 shadow-2xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-1.5">
                    <h4 className="font-serif text-base font-bold text-[#1C1917]">{kw.term}</h4>
                    <span className="font-body text-xs text-[#516071] italic">{kw.romanTerm}</span>
                  </div>
                  <span className="bg-[#FAF6F0] border border-[#E2D9CC] text-[#8C6212] text-[10px] font-['Newsreader'] px-2 py-0.5 rounded font-bold">
                    {kw.era} · {kw.category}
                  </span>
                </div>
                <p className="font-body text-xs text-[#44403C] leading-relaxed mt-1">
                  {kw.definition}
                </p>
                <div className="pt-2 flex items-center justify-between text-[11px] text-[#78716C]">
                  <span>사료 출현 빈도: {kw.count}회</span>
                  <button
                    onClick={() => onNavigateToExploreWithTag(kw.term)}
                    className="text-[#8C6212] font-semibold hover:underline flex items-center gap-0.5 cursor-pointer"
                    type="button"
                  >
                    연관 씬 탐색 <span className="material-symbols-outlined text-[13px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* New Project Modal */}
      <NewProjectModal
        isOpen={isNewProjectOpen}
        onClose={() => setIsNewProjectOpen(false)}
        onCreate={onAddProject}
      />
    </div>
  );
};

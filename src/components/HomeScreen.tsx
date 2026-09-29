import React, { useState } from 'react';
import { HistoricalRecord } from '../types';

interface HomeScreenProps {
  records: HistoricalRecord[];
  onSelectRecord: (record: HistoricalRecord) => void;
  onNavigate: (tab: string) => void;
  onSearchQuery: (query: string) => void;
  compareList: string[];
  onToggleCompare: (id: string) => void;
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  records,
  onSelectRecord,
  onNavigate,
  onSearchQuery,
  compareList,
  onToggleCompare,
  bookmarks,
  onToggleBookmark
}) => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedEra, setSelectedEra] = useState('all');

  const heroRecord = records.find(r => r.id === 'name-of-the-rose') || records[0];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchQuery(searchInput.trim());
      onNavigate('explore');
    }
  };

  const handleQuickTag = (tag: string) => {
    setSearchInput(tag);
    onSearchQuery(tag);
    onNavigate('explore');
  };

  const isHeroBookmarked = bookmarks.includes(heroRecord.id);
  const isHeroInCompare = compareList.includes(heroRecord.id);

  const eraChips = [
    { id: 'all', title: '전체', subtitle: 'All Eras' },
    { id: 'ancient', title: '고대 그리스·로마', subtitle: 'BC 8C ~ AD 5C' },
    { id: 'high-middle', title: '중세 성기', subtitle: '11C ~ 14C' },
    { id: 'renaissance', title: '르네상스', subtitle: '14C ~ 16C' },
    { id: 'baroque', title: '바로크·로코코', subtitle: '17C ~ 18C' },
    { id: 'modern', title: '근대·빅토리아', subtitle: '19C' }
  ];

  return (
    <div className="flex flex-col w-full pb-10">
      {/* Search & AI Assist Section */}
      <section className="px-4 pt-4 pb-2 max-w-xl mx-auto w-full">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="font-['Newsreader'] text-[11px] text-[#8C6212] uppercase tracking-widest flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8C6212] animate-pulse" />
              ARCHIVAL AI SEARCH ENGINE
            </span>
            <span className="font-sans text-[11px] text-[#78716C] font-medium">v2.4 HIST-NLP</span>
          </div>

          <form onSubmit={handleSearchSubmit} className="relative flex items-center w-full bg-white border border-[#D6CBB9] rounded-xl shadow-xs focus-within:border-[#8C6212] focus-within:ring-1 focus-within:ring-[#8C6212] transition-all">
            <div className="pl-3.5 pr-2 flex items-center justify-center text-[#8C6212]">
              <span className="material-symbols-outlined text-[20px] filled">auto_awesome</span>
            </div>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="자연어로 묻기: '13세기 북독일 상인 여성 복식'..."
              className="w-full bg-transparent py-3 pr-2 font-body text-sm text-[#1C1917] placeholder:text-[#A8A29E] focus:outline-none"
            />
            <button
              type="submit"
              className="m-1.5 px-3 py-1.5 bg-[#8C6212] text-white rounded-lg font-['Newsreader'] text-xs font-semibold flex items-center gap-1 shadow-sm hover:bg-[#6f4b00] active:scale-95 transition-all cursor-pointer shrink-0"
            >
              <span>AI 검색</span>
              <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
            </button>
          </form>

          {/* Quick Context Tags */}
          <div className="flex items-center gap-1.5 pt-1 overflow-x-auto no-scrollbar">
            <span className="font-['Newsreader'] text-[11px] text-[#78716C] shrink-0 font-medium">추천 질의:</span>
            <button
              onClick={() => handleQuickTag('14C 누비 갬비슨 구조')}
              className="text-xs px-2.5 py-1 rounded-md bg-[#F4EFE6] border border-[#E7E0D3] text-[#57534E] font-['Newsreader'] shrink-0 hover:border-[#8C6212] hover:text-[#8C6212] transition-colors cursor-pointer"
              type="button"
            >
              #14C 누비 갬비슨 구조
            </button>
            <button
              onClick={() => handleQuickTag('튜더 궁정 게이블 후드')}
              className="text-xs px-2.5 py-1 rounded-md bg-[#F4EFE6] border border-[#E7E0D3] text-[#57534E] font-['Newsreader'] shrink-0 hover:border-[#8C6212] hover:text-[#8C6212] transition-colors cursor-pointer"
              type="button"
            >
              #튜더 궁정 게이블 후드
            </button>
            <button
              onClick={() => handleQuickTag('플랑드르 상인 우플랑드')}
              className="text-xs px-2.5 py-1 rounded-md bg-[#F4EFE6] border border-[#E7E0D3] text-[#57534E] font-['Newsreader'] shrink-0 hover:border-[#8C6212] hover:text-[#8C6212] transition-colors cursor-pointer"
              type="button"
            >
              #플랑드르 상인 우플랑드
            </button>
          </div>
        </div>
      </section>

      {/* Era / Culture Index Scroller */}
      <section className="py-2.5 max-w-xl mx-auto w-full">
        <div className="px-4 mb-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#8C6212] text-[18px]">history_edu</span>
            <h2 className="font-serif text-[18px] text-[#1C1917] font-bold">시대·문화권 색인</h2>
          </div>
          <span className="font-['Newsreader'] text-[11px] text-[#78716C] uppercase font-semibold">FOLIO 01</span>
        </div>

        <div className="flex gap-2 overflow-x-auto px-4 no-scrollbar py-0.5">
          {eraChips.map((chip) => {
            const isSelected = selectedEra === chip.id;
            return (
              <button
                key={chip.id}
                onClick={() => {
                  setSelectedEra(chip.id);
                  if (chip.id !== 'all') {
                    onSearchQuery(chip.title);
                    onNavigate('explore');
                  }
                }}
                className={`flex flex-col items-start px-3.5 py-2 rounded-xl border shadow-xs shrink-0 transition-all text-left cursor-pointer ${
                  isSelected
                    ? 'bg-[#8C6212] text-white border-[#8C6212]'
                    : 'bg-white border-[#D6CBB9] text-[#57534E] hover:text-[#1C1917] hover:border-[#8C6212]'
                }`}
                type="button"
              >
                <span className="font-['Newsreader'] text-sm font-semibold">{chip.title}</span>
                <span className={`text-[10px] mt-0.5 font-sans ${isSelected ? 'text-[#FDE68A]' : 'text-[#78716C]'}`}>
                  {chip.subtitle}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Curated Masterpiece Hero Dossier */}
      <section className="px-4 pt-3 pb-2 max-w-xl mx-auto w-full">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#8C6212] text-[18px]">verified</span>
            <h2 className="font-serif text-[18px] text-[#1C1917] font-bold">고증 신뢰도 [추천] 복식 마스터피스</h2>
          </div>
          <span className="font-['Newsreader'] text-[11px] text-[#8C6212] tracking-wider uppercase font-semibold">
            CURATED
          </span>
        </div>

        {/* Primary Hero Card */}
        <div className="relative bg-white border border-[#D6CBB9] rounded-xl overflow-hidden shadow-xs flex flex-col">
          <div className="relative w-full h-56 bg-[#F4EFE6] overflow-hidden">
            <img
              alt={heroRecord.title}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
              src={heroRecord.coverImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            
            {/* Top Badges */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
              <span className="px-2.5 py-1 rounded-md bg-[#E8F5E9] text-[#1E5E3A] border border-[#C8E6C9] font-['Newsreader'] text-xs font-bold tracking-wider uppercase shadow-xs flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px] filled">check_circle</span>
                AUTHENTIC · 추천
              </span>
            </div>

            <div className="absolute top-3 right-3">
              <button
                aria-label="북마크 저장"
                onClick={() => onToggleBookmark(heroRecord.id)}
                className="w-9 h-9 rounded-full bg-white/90 text-[#1C1917] backdrop-blur-md flex items-center justify-center hover:text-[#8C6212] shadow-sm transition-colors cursor-pointer"
                type="button"
              >
                <span className={`material-symbols-outlined text-[20px] ${isHeroBookmarked ? 'filled text-[#8C6212]' : ''}`}>
                  bookmark
                </span>
              </button>
            </div>

            {/* Title over Image Bottom */}
            <div className="absolute bottom-3 left-4 right-4">
              <span className="font-['Newsreader'] text-xs text-[#FDE68A] uppercase tracking-wider block mb-0.5 font-bold">
                Period Cinema Masterpiece
              </span>
              <h3 className="font-serif text-2xl text-white drop-shadow font-bold">
                {heroRecord.title}
              </h3>
              <p className="font-body text-xs text-stone-200 font-medium">
                {heroRecord.originalTitle}
              </p>
            </div>
          </div>

          {/* Dossier Metadata Plate */}
          <div className="p-4 flex flex-col gap-3 bg-white">
            <div className="grid grid-cols-2 gap-2 bg-[#F4EFE6] border border-[#E7E0D3] p-3 rounded-lg text-xs">
              <div className="flex flex-col">
                <span className="font-['Newsreader'] text-[11px] text-[#78716C] font-semibold">시대 및 배경</span>
                <span className="font-body text-xs text-[#1C1917] font-medium mt-0.5">
                  {heroRecord.region}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-['Newsreader'] text-[11px] text-[#78716C] font-semibold">검수 등급</span>
                <span className="font-body text-xs text-[#8C6212] font-bold mt-0.5">
                  ★★★★★ ({heroRecord.accuracyScore / 10}/10)
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <span className="font-['Newsreader'] text-[11px] text-[#8C6212] uppercase tracking-wider font-bold">
                복식 사료 검수 리포트
              </span>
              <p className="font-body text-xs text-[#292524] leading-relaxed">
                {heroRecord.judgmentSummary}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {heroRecord.tags.map(tag => (
                <span key={tag} className="px-2 py-0.5 rounded bg-[#F4EFE6] border border-[#E7E0D3] text-[#57534E] text-[11px] font-sans">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-2 pt-1 border-t border-[#E7E0D3]">
              <button
                onClick={() => onSelectRecord(heroRecord)}
                className="flex-1 py-2.5 px-3 bg-[#8C6212] text-white font-['Newsreader'] text-xs font-bold rounded-lg flex items-center justify-center gap-1.5 shadow hover:bg-[#6f4b00] active:scale-[0.98] transition-all cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[17px]">menu_book</span>
                <span>상세 고증 서지 보기</span>
              </button>

              <button
                onClick={() => onToggleCompare(heroRecord.id)}
                className={`px-3.5 py-2.5 rounded-lg font-['Newsreader'] text-xs font-semibold flex items-center justify-center gap-1 active:scale-[0.98] transition-all cursor-pointer ${
                  isHeroInCompare
                    ? 'bg-[#78350F] text-amber-100 border border-[#78350F]'
                    : 'bg-[#F4EFE6] border border-[#D6CBB9] text-[#1C1917] hover:border-[#8C6212] hover:text-[#8C6212]'
                }`}
                type="button"
              >
                <span className="material-symbols-outlined text-[17px]">
                  {isHeroInCompare ? 'done' : 'compare_arrows'}
                </span>
                <span>{isHeroInCompare ? '담김' : '비교함 담기'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Creator's Focus Collections */}
      <section className="py-4 max-w-xl mx-auto w-full">
        <div className="px-4 mb-3 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#8C6212] text-[18px]">draw</span>
              <h2 className="font-serif text-[18px] text-[#1C1917] font-bold">창작자를 위한 계층별 복식 컬렉션</h2>
            </div>
            <p className="font-body text-xs text-[#78716C] mt-0.5">웹툰 작가 및 원화가를 위한 부위별·계층별 심층 패키지</p>
          </div>
          <button
            onClick={() => onNavigate('library')}
            className="font-['Newsreader'] text-xs text-[#8C6212] font-semibold flex items-center gap-0.5 hover:underline cursor-pointer shrink-0"
            type="button"
          >
            전체보기
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </button>
        </div>

        <div className="flex gap-3 overflow-x-auto px-4 no-scrollbar py-1">
          {/* Card 1 */}
          <article className="w-64 bg-white border border-[#D6CBB9] rounded-xl overflow-hidden shadow-xs shrink-0 flex flex-col justify-between">
            <div>
              <div className="relative w-full h-36 bg-[#F4EFE6]">
                <img
                  alt="15C 플랑드르 상인"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuABXuM-mvZcEnLQ2NlSYBKT27zVvbBwuenU8paHQLYQ9wRU5acRMfMT4HKPBkIk1t-_S0SGmWsrj2nCnrbsQnM2UFNyInYTokALZZqpscXNE6t5GzEDhtntuUWFAvPcclPDNuuCFJjN56S_JTqwyeoF93-9qEc5dcbRKDT1s04-xdVPX1N8n-SMJogUw5Df-kR4TSxIwaYu9flnE6ik5-Yrd7Ijj4VeH5ew0EJt2G4FxXr24V_vTtfHVQ"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#FEF3C7] text-[#8C6212] border border-[#FDE68A] rounded text-[10px] font-['Newsreader'] uppercase font-bold shadow-xs">
                  SELECTIVE · 부분 참고
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-white/90 text-[#1C1917] rounded text-[10px] font-sans font-semibold shadow-xs">
                  3편 수록
                </div>
              </div>
              <div className="p-3.5 flex flex-col gap-1">
                <span className="font-['Newsreader'] text-[11px] text-[#8C6212] font-semibold">15세기 북유럽 시민 계층</span>
                <h4 className="font-serif text-[16px] text-[#1C1917] font-bold line-clamp-1">15C 플랑드르 상인 &amp; 시민 일상복</h4>
                <p className="font-body text-xs text-[#57534E] line-clamp-2">
                  호펠랑드(Houppelande), 더블릿 구조 및 길드 소속 상인 계층의 실용 직물 드레이프 자료.
                </p>
              </div>
            </div>
            <div className="px-3.5 pb-3.5 pt-1">
              <button
                onClick={() => onNavigate('library')}
                className="w-full py-2 px-2 bg-[#F4EFE6] hover:bg-[#EAE2D8] border border-[#E7E0D3] text-[#1C1917] font-['Newsreader'] text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
                type="button"
              >
                <span>컬렉션 열람하기</span>
                <span className="material-symbols-outlined text-[14px]">east</span>
              </button>
            </div>
          </article>

          {/* Card 2 */}
          <article className="w-64 bg-white border border-[#D6CBB9] rounded-xl overflow-hidden shadow-xs shrink-0 flex flex-col justify-between">
            <div>
              <div className="relative w-full h-36 bg-[#F4EFE6]">
                <img
                  alt="백년전쟁 기사 아머"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5IiwIlmgkF6ipNRIkB9ETryllIOlN2forbWI4gvKaBfbr_FeI2pgpSU0Ty6-aCm6sHYGP63EUbNs2EJvTcQyz-2bwlpCX_KLODXRmiH7b1QqV9qtJ-nSbKxf6vDEt8sbZb49v6dDI9QLM72WFlyNqaUlViKlSjmDDOqIAOOZRp2nJ6iTtiusdwU36iFN-jeGO4JGAcyROPNg9Io4M1F6qpo5o5FuCrP__5u08xdDwQyBrQlmf7TGEWw"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#E8F5E9] text-[#1E5E3A] border border-[#C8E6C9] rounded text-[10px] font-['Newsreader'] uppercase font-bold shadow-xs">
                  AUTHENTIC · 추천
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-white/90 text-[#1C1917] rounded text-[10px] font-sans font-semibold shadow-xs">
                  4편 수록
                </div>
              </div>
              <div className="p-3.5 flex flex-col gap-1">
                <span className="font-['Newsreader'] text-[11px] text-[#8C6212] font-semibold">14세기 군사·무구 고증</span>
                <h4 className="font-serif text-[16px] text-[#1C1917] font-bold line-clamp-1">백년전쟁 기사 아머 &amp; 누비 갬비슨</h4>
                <p className="font-body text-xs text-[#57534E] line-clamp-2">
                  강철 판금 결속 아밍 포인트(Arming points)와 충격 흡수용 양모 솜 누빔 안감 완벽 분해.
                </p>
              </div>
            </div>
            <div className="px-3.5 pb-3.5 pt-1">
              <button
                onClick={() => onNavigate('library')}
                className="w-full py-2 px-2 bg-[#F4EFE6] hover:bg-[#EAE2D8] border border-[#E7E0D3] text-[#1C1917] font-['Newsreader'] text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
                type="button"
              >
                <span>컬렉션 열람하기</span>
                <span className="material-symbols-outlined text-[14px]">east</span>
              </button>
            </div>
          </article>

          {/* Card 3 */}
          <article className="w-64 bg-white border border-[#D6CBB9] rounded-xl overflow-hidden shadow-xs shrink-0 flex flex-col justify-between">
            <div>
              <div className="relative w-full h-36 bg-[#F4EFE6]">
                <img
                  alt="튜더 왕가 코르셋"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3S2wwTAfEZdNJoJ8bHKnIgDkJ9qX2nkBrG6Ilyx2JJHtoU4UqUBHFITFuIR3GRz9Sj5fTXfO1PKfr4PJ2pyzy_3R1gMa-M4ceHILBQXH4oyePn6CWa2yEfZCFGGYSr9qJ5I7VDMsvH7TPgqiOAmi6x2IvY1DbR8DMBdCsaxbgHZJkFE17n-K3E24bRSBSS8kpT3aG6lynbtp1_AjfwMWcMETFctJEF2tSXy0csLUSuwfcOBCzUOAl-Q"
                />
                <div className="absolute top-2 left-2 px-2 py-0.5 bg-[#E8F5E9] text-[#1E5E3A] border border-[#C8E6C9] rounded text-[10px] font-['Newsreader'] uppercase font-bold shadow-xs">
                  AUTHENTIC · 추천
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-white/90 text-[#1C1917] rounded text-[10px] font-sans font-semibold shadow-xs">
                  2편 수록
                </div>
              </div>
              <div className="p-3.5 flex flex-col gap-1">
                <span className="font-['Newsreader'] text-[11px] text-[#8C6212] font-semibold">16세기 궁정 귀족 복식</span>
                <h4 className="font-serif text-[16px] text-[#1C1917] font-bold line-clamp-1">튜더 왕가 코르셋 &amp; 게이블 후드</h4>
                <p className="font-body text-xs text-[#57534E] line-clamp-2">
                  기하학적 건축미를 띤 게이블 후드(Gable Hood)와 고래수염 코르셋 뼈대 설계 도판.
                </p>
              </div>
            </div>
            <div className="px-3.5 pb-3.5 pt-1">
              <button
                onClick={() => onNavigate('library')}
                className="w-full py-2 px-2 bg-[#F4EFE6] hover:bg-[#EAE2D8] border border-[#E7E0D3] text-[#1C1917] font-['Newsreader'] text-xs font-semibold rounded-lg flex items-center justify-center gap-1 transition-colors cursor-pointer"
                type="button"
              >
                <span>컬렉션 열람하기</span>
                <span className="material-symbols-outlined text-[14px]">east</span>
              </button>
            </div>
          </article>
        </div>
      </section>

      {/* Recent Expert Verified Feed */}
      <section className="px-4 pt-1 pb-4 max-w-xl mx-auto w-full">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#8C6212] text-[18px]">inventory_2</span>
            <h2 className="font-serif text-[18px] text-[#1C1917] font-bold">최근 전문가 검수 완료 작품</h2>
          </div>
          <span className="font-['Newsreader'] text-[11px] text-[#78716C] uppercase font-semibold">
            LATEST VERIFIED
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {records.slice(4, 6).map((rec) => (
            <div
              key={rec.id}
              onClick={() => onSelectRecord(rec)}
              className="bg-white border border-[#D6CBB9] p-3 rounded-xl shadow-xs flex gap-3 items-center hover:border-[#8C6212] transition-colors cursor-pointer"
            >
              <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 bg-[#F4EFE6]">
                <img
                  alt={rec.title}
                  className="w-full h-full object-cover"
                  src={rec.coverImage}
                />
                <div className={`absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[10px] font-['Newsreader'] font-bold ${
                  rec.accuracyGrade === 'AUTHENTIC' ? 'bg-[#E8F5E9] text-[#1E5E3A]' : 'bg-[#FEF3C7] text-[#8C6212]'
                }`}>
                  {rec.accuracyGrade === 'AUTHENTIC' ? '추천' : '부분 참고'}
                </div>
              </div>

              <div className="flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[11px] text-[#8C6212] font-semibold truncate font-sans">
                      {rec.year}년 {rec.region}
                    </span>
                    <span className="text-[10px] text-[#78716C] shrink-0 font-sans">어제 등록</span>
                  </div>
                  <h4 className="font-serif text-[16px] text-[#1C1917] font-bold truncate mt-0.5">
                    {rec.title}
                  </h4>
                  <p className="font-body text-xs text-[#57534E] line-clamp-1 mt-0.5">
                    {rec.shortVerdict || rec.judgmentSummary}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1 mt-2">
                  {rec.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="px-2 py-0.5 rounded bg-[#F4EFE6] border border-[#E7E0D3] text-[#57534E] text-[10px] font-sans">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Digital Archive Stats Banner */}
      <section className="px-4 max-w-xl mx-auto w-full">
        <div className="p-4 bg-[#F4EFE6] border border-[#D6CBB9] rounded-xl flex items-center justify-between shadow-xs relative overflow-hidden">
          <div className="flex flex-col z-10">
            <span className="font-['Newsreader'] text-[11px] text-[#8C6212] uppercase tracking-widest font-bold flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">shield</span>
              DIGITAL ARCHIVE STATS
            </span>
            <h4 className="font-serif text-[17px] text-[#1C1917] font-bold mt-1">
              검수 완료 사료 <span className="text-[#8C6212]">128작품</span>
            </h4>
            <p className="font-body text-xs text-[#57534E] mt-0.5">
              실물 분해 복식 데이터 세트 총 1,420개 축적됨
            </p>
          </div>
          <div className="z-10 pl-2">
            <div className="w-12 h-12 rounded-full bg-[#8C6212] text-white flex items-center justify-center font-bold text-xs shadow">
              99.1%
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

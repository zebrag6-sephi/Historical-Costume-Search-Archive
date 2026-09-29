import React, { useState } from 'react';
import { HistoricalRecord } from '../types';
import { ImageZoomModal } from './modals/ImageZoomModal';

interface RecordDetailScreenProps {
  record: HistoricalRecord;
  onBack: () => void;
  compareList: string[];
  onToggleCompare: (id: string) => void;
  bookmarks: string[];
  onToggleBookmark: (id: string) => void;
}

export const RecordDetailScreen: React.FC<RecordDetailScreenProps> = ({
  record,
  onBack,
  compareList,
  onToggleCompare,
  bookmarks,
  onToggleBookmark
}) => {
  const [zoomImage, setZoomImage] = useState<{ url: string; title: string } | null>(null);
  const [copiedPalette, setCopiedPalette] = useState(false);

  const isBookmarked = bookmarks.includes(record.id);
  const isInCompare = compareList.includes(record.id);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${record.title} (${record.era})`,
        text: `${record.title} 사료 기반 복식 고증 신뢰도 ${record.accuracyScore}% 심층 리포트`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('복식 사료 링크가 클립보드에 복사되었습니다.');
    }
  };

  const handleCopyPalette = () => {
    const text = record.palette.map(p => `${p.hex} (${p.name})`).join(', ');
    navigator.clipboard?.writeText(text);
    setCopiedPalette(true);
    setTimeout(() => setCopiedPalette(false), 2000);
  };

  return (
    <div className="flex flex-col w-full pb-32">
      {/* Top Navigation & Folio Action Bar */}
      <div className="w-full px-4 pt-3 pb-2 flex items-center justify-between max-w-xl mx-auto">
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            className="w-8 h-8 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#1C1917] hover:bg-[#EAE2D4] transition-colors cursor-pointer"
            type="button"
            aria-label="뒤로가기"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          </button>
          <span className="bg-[#D4E4F9] text-[#394859] font-['Newsreader'] text-xs px-2 py-0.5 rounded uppercase tracking-wider font-semibold">
            FOLIO NO. 1280-ZDF-04
          </span>
          <span className="bg-[#EFE7DE] text-[#57534E] font-['Newsreader'] text-xs px-1.5 py-0.5 rounded font-medium">
            ARCHIVE SPEC
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => onToggleBookmark(record.id)}
            aria-label="사료 북마크"
            className="w-9 h-9 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#57534E] hover:text-[#8C6212] transition-colors cursor-pointer"
            type="button"
          >
            <span className={`material-symbols-outlined text-[19px] ${isBookmarked ? 'filled text-[#8C6212]' : ''}`}>
              bookmark
            </span>
          </button>
          <button
            onClick={handleShare}
            aria-label="사료 공유"
            className="w-9 h-9 rounded-full bg-[#F4EFE6] flex items-center justify-center text-[#57534E] hover:text-[#8C6212] transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[19px]">share</span>
          </button>
        </div>
      </div>

      {/* Hero Media Canvas */}
      <div className="px-4 mt-1 max-w-xl mx-auto w-full">
        <div className="relative w-full rounded-2xl overflow-hidden bg-[#F4EFE6] shadow-xs border border-[#E5DBCC]">
          <div className="relative w-full aspect-[4/3] bg-stone-900">
            <img
              alt={record.title}
              className="w-full h-full object-cover"
              src={record.coverImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

            {/* Verification Badge Over Image */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#1e3a24] text-[#e8f5e9] px-2.5 py-1 rounded-md shadow-xs">
              <span className="material-symbols-outlined text-[15px] filled">verified</span>
              <span className="font-['Newsreader'] text-xs uppercase tracking-wider font-semibold">
                추천 ({record.accuracyGrade})
              </span>
            </div>

            {/* Media Control Overlays */}
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between text-white">
              <div className="flex flex-col">
                <span className="font-['Newsreader'] text-[11px] opacity-80 uppercase tracking-widest font-semibold">
                  {record.mediaType} · {record.year}
                </span>
                <span className="font-serif text-lg drop-shadow text-white font-bold">
                  EP.02 길드회의 석상의 복식 실물
                </span>
              </div>
              <button
                onClick={() => setZoomImage({ url: record.coverImage, title: record.title })}
                aria-label="스틸 프레임 고화질 확대"
                className="w-9 h-9 rounded-full bg-[#8C6212] text-white flex items-center justify-center shadow hover:bg-[#6f4b00] transition-colors cursor-pointer"
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">zoom_in</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Title & Primary Work Metadata */}
      <div className="px-4 mt-4 flex flex-col max-w-xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <span className="font-['Newsreader'] text-xs text-[#8C6212] font-semibold tracking-wide uppercase">
            {record.mediaType}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#CFC3B2]" />
          <span className="font-['Newsreader'] text-xs text-[#78716C]">
            방영연도 {record.year}
          </span>
        </div>

        <h2 className="font-serif text-2xl font-bold text-[#1C1917] mt-1">
          {record.title}
        </h2>
        <p className="font-body text-xs text-[#516071] italic mt-0.5">
          {record.originalTitle}
        </p>

        {/* Quick Spec Grid */}
        <div className="mt-3.5 grid grid-cols-2 gap-2 bg-[#F4EFE6] p-3 rounded-xl shadow-2xs border border-[#E7E0D3]">
          <div className="flex flex-col bg-white p-2.5 rounded-lg border border-[#EFE7DE]">
            <span className="font-['Newsreader'] text-[10px] text-[#78716C] uppercase tracking-wider font-semibold">
              시대 (ERA)
            </span>
            <span className="font-body text-xs text-[#1C1917] font-bold mt-0.5">
              {record.era}
            </span>
          </div>

          <div className="flex flex-col bg-white p-2.5 rounded-lg border border-[#EFE7DE]">
            <span className="font-['Newsreader'] text-[10px] text-[#78716C] uppercase tracking-wider font-semibold">
              지역 (GUILD)
            </span>
            <span className="font-body text-xs text-[#1C1917] font-bold mt-0.5">
              {record.region}
            </span>
          </div>

          <div className="flex flex-col bg-white p-2.5 rounded-lg border border-[#EFE7DE]">
            <span className="font-['Newsreader'] text-[10px] text-[#78716C] uppercase tracking-wider font-semibold">
              신분 (STATUS)
            </span>
            <span className="font-body text-xs text-[#1C1917] font-bold mt-0.5">
              {record.socialStatus}
            </span>
          </div>

          <div className="flex flex-col bg-white p-2.5 rounded-lg border border-[#EFE7DE]">
            <span className="font-['Newsreader'] text-[10px] text-[#78716C] uppercase tracking-wider font-semibold">
              복식 범주 (CATEGORY)
            </span>
            <span className="font-body text-xs text-[#1C1917] font-bold mt-0.5">
              {record.category}
            </span>
          </div>
        </div>
      </div>

      {/* Historical Verification Assessment */}
      <div className="px-4 mt-5 max-w-xl mx-auto w-full">
        <div className="bg-[#F5EFE6] p-4 rounded-2xl shadow-xs border border-[#E4DACB] flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#8C6212] text-[20px]">verified_user</span>
              <h3 className="font-serif text-[17px] font-bold text-[#1C1917]">고증 신뢰도 심층 리포트</h3>
            </div>
            <span className="bg-[#8C6212] text-white font-['Newsreader'] text-xs px-2 py-0.5 rounded font-semibold">
              High Confidence
            </span>
          </div>

          {/* Reliability Progress Gauge */}
          <div className="bg-white p-3.5 rounded-xl border border-[#E7E0D3] flex flex-col gap-2">
            <div className="flex items-baseline justify-between">
              <span className="font-['Newsreader'] text-xs text-[#57534E] font-medium">사료 일치도 종합 판정</span>
              <span className="font-serif text-3xl text-[#8C6212] font-bold leading-none">
                {record.accuracyScore}<span className="text-base text-[#8C6212]">%</span>
              </span>
            </div>

            {/* Custom styled track */}
            <div className="w-full h-2.5 bg-[#EAE2D8] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#8C6212] rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${record.accuracyScore}%` }}
              />
            </div>

            <div className="flex justify-between items-center text-[#78716C] font-['Newsreader'] text-[11px] pt-0.5">
              <span>문헌 사료 부합</span>
              <span>직조·염색 기법 복원</span>
              <span>길드 복제령 준수</span>
            </div>
          </div>

          {/* Verification Body */}
          <div className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-[#E7E0D3]">
            <span className="material-symbols-outlined text-[#516071] text-[20px] mt-0.5 shrink-0">
              museum
            </span>
            <div className="flex flex-col">
              <span className="font-['Newsreader'] text-[10px] text-[#516071] font-bold uppercase tracking-wider">
                공식 검수 기관
              </span>
              <span className="font-body text-xs text-[#1C1917] font-medium mt-0.5 leading-relaxed">
                {record.organization}
              </span>
            </div>
          </div>

          {/* Judgment Summary */}
          <div className="bg-white p-3.5 rounded-xl border border-[#E7E0D3] flex flex-col gap-1">
            <span className="font-['Newsreader'] text-[11px] text-[#8C6212] font-bold uppercase tracking-wider">
              고증 판정 요약
            </span>
            <p className="font-body text-xs text-[#1C1917] leading-relaxed">
              {record.judgmentSummary}
            </p>
          </div>

          {/* Primary Sources Cited */}
          <div className="flex flex-col gap-1 text-[#57534E]">
            <span className="font-['Newsreader'] text-[11px] font-bold uppercase tracking-wider flex items-center gap-1">
              <span className="material-symbols-outlined text-[15px]">menu_book</span>
              참고 사료 및 도판 출처
            </span>
            <div className="flex flex-wrap gap-1.5 mt-0.5">
              {record.sources.map((src, i) => (
                <span key={i} className="bg-white border border-[#E2D8C9] text-[#44403C] font-sans text-[11px] px-2 py-0.5 rounded-md">
                  {src}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Costume Anatomical Breakdown */}
      <div className="px-4 mt-6 flex flex-col max-w-xl mx-auto w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#8C6212] text-[20px]">straighten</span>
            <h3 className="font-serif text-[18px] font-bold text-[#1C1917]">부위별 복식 심층 분해</h3>
          </div>
          <span className="font-['Newsreader'] text-[11px] text-[#78716C] uppercase font-bold">
            {record.parts.length}개 핵심 파츠
          </span>
        </div>
        <p className="font-body text-xs text-[#78716C] mt-0.5">
          {record.era} {record.region} 대상인 정장의 해부학적 레이어 구성
        </p>

        {/* Item Cards Stack */}
        <div className="mt-3 flex flex-col gap-3">
          {record.parts.map((part) => (
            <div
              key={part.id}
              className="bg-white border border-[#E5DBCC] p-3.5 rounded-xl shadow-2xs flex flex-col gap-2.5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#8C6212] text-white font-['Newsreader'] text-xs flex items-center justify-center font-bold">
                    {part.number}
                  </span>
                  <span className="font-['Newsreader'] text-xs text-[#8C6212] font-bold uppercase tracking-wider">
                    {part.partName}
                  </span>
                </div>
                <span className="bg-[#FAF6F0] border border-[#E2D9CC] text-[#1C1917] font-['Newsreader'] text-[11px] px-2 py-0.5 rounded font-medium">
                  {part.material}
                </span>
              </div>

              <div className="flex gap-3">
                {part.image && (
                  <div
                    onClick={() => setZoomImage({ url: part.image!, title: part.title })}
                    className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-[#F4EFE6] border border-[#E2D9CC] cursor-pointer group relative"
                  >
                    <img
                      alt={part.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      src={part.image}
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-outlined text-white text-[18px]">zoom_in</span>
                    </div>
                  </div>
                )}
                <div className="flex flex-col justify-center min-w-0 flex-1">
                  <h4 className="font-serif text-[16px] font-bold text-[#1C1917] truncate">
                    {part.title}
                  </h4>
                  <span className="font-body text-xs text-[#516071] italic">
                    {part.subtitle}
                  </span>
                  <p className="font-body text-xs text-[#57534E] line-clamp-2 mt-1 leading-snug">
                    {part.description}
                  </p>
                </div>
              </div>

              <div className="bg-[#FAF6F0] px-2.5 py-1.5 rounded-lg flex items-center justify-between text-[#57534E] font-['Newsreader'] text-[11px] border border-[#EFE7DE]">
                <span><strong>착장/제법:</strong> {part.technique}</span>
                <span className="text-[#8C6212] font-bold">사료 일치: {part.matchRate}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Creator Takeaway Note */}
      <div className="px-4 mt-6 max-w-xl mx-auto w-full">
        <div className="bg-[#8C6212] text-white p-4 rounded-2xl shadow-xs flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#FDE68A]">lightbulb</span>
            <h3 className="font-serif text-[17px] font-bold text-white">창작자를 위한 디자인 가이드 &amp; 주의점</h3>
          </div>
          <p className="font-body text-xs leading-relaxed text-amber-50">
            {record.creatorTips}
          </p>

          <div className="mt-2 pt-2 border-t border-white/20 flex items-center justify-between font-['Newsreader'] text-xs">
            <span className="flex items-center gap-1.5 text-amber-100">
              <span className="material-symbols-outlined text-[14px]">palette</span>
              {record.palette.map(p => p.hex).join(' / ')}
            </span>
            <button
              onClick={handleCopyPalette}
              className="underline font-semibold tracking-wider hover:opacity-80 cursor-pointer"
              type="button"
            >
              {copiedPalette ? '복사 완료!' : '팔레트 복사'}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Sticky Action Dock at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md px-4 py-3 border-t border-[#E7E0D3] shadow-[0_-4px_16px_rgba(26,23,21,0.08)]">
        <div className="max-w-xl mx-auto flex items-center gap-2.5">
          <button
            onClick={() => onToggleBookmark(record.id)}
            aria-label="보관함 저장"
            className={`w-12 h-12 rounded-xl flex flex-col items-center justify-center transition-colors shrink-0 cursor-pointer ${
              isBookmarked
                ? 'bg-[#E8F5E9] text-[#1E5E3A] border border-[#C8E6C9]'
                : 'bg-[#F4EFE6] border border-[#DDD3C4] text-[#57534E] hover:text-[#1C1917]'
            }`}
            type="button"
          >
            <span className={`material-symbols-outlined text-[20px] ${isBookmarked ? 'filled' : ''}`}>
              folder_special
            </span>
            <span className="font-['Newsreader'] text-[10px] leading-none mt-0.5">
              {isBookmarked ? '보관됨' : '보관'}
            </span>
          </button>

          <button
            onClick={() => onToggleCompare(record.id)}
            className={`flex-1 h-12 rounded-xl text-white flex items-center justify-between px-4 shadow-sm transition-all active:scale-[0.99] cursor-pointer ${
              isInCompare ? 'bg-[#78350F] hover:bg-[#602909]' : 'bg-[#8C6212] hover:bg-[#6f4b00]'
            }`}
            type="button"
          >
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[19px]">difference</span>
              <span className="font-serif text-base font-semibold tracking-wide">
                {isInCompare ? '비교함 담김' : '비교함 담기'}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="bg-black/25 px-2 py-0.5 rounded text-amber-200 font-['Newsreader'] text-xs font-semibold">
                현재 {compareList.length}/3 담김
              </span>
              <span className="material-symbols-outlined text-[17px]">chevron_right</span>
            </div>
          </button>
        </div>
      </div>

      {/* Image Zoom Modal */}
      {zoomImage && (
        <ImageZoomModal
          isOpen={true}
          onClose={() => setZoomImage(null)}
          imageUrl={zoomImage.url}
          title={zoomImage.title}
        />
      )}
    </div>
  );
};

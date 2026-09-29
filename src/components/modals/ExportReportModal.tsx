import React, { useState } from 'react';
import { ComparisonReport, HistoricalRecord } from '../../types';

interface ExportReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: ComparisonReport;
  workA: HistoricalRecord;
  workB: HistoricalRecord;
}

export const ExportReportModal: React.FC<ExportReportModalProps> = ({
  isOpen,
  onClose,
  report,
  workA,
  workB
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-[#FAF6F0] w-full max-w-lg rounded-2xl p-5 shadow-2xl flex flex-col gap-4 border border-[#CFC3B2] max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-[#E2D9CC]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#8C6212] text-[22px]">picture_as_pdf</span>
            <div>
              <h3 className="font-serif text-[18px] font-bold text-[#1C1917] leading-tight">
                사료 대조 고증 검증서 내보내기
              </h3>
              <span className="font-['Newsreader'] text-[11px] text-[#8C6212] tracking-wider uppercase font-semibold">
                {report.folioRef} · 공식 검수 인증
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#EFE7DE] flex items-center justify-center text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Printable Folio Document Preview Sheet */}
        <div className="p-4 bg-white rounded-xl border border-[#DFD7CB] shadow-xs flex flex-col gap-3 font-serif">
          <div className="text-center pb-2 border-b border-dashed border-[#D6CBB9]">
            <span className="font-['Newsreader'] text-[11px] tracking-widest text-[#8C6212] uppercase font-bold">
              HISTORICAL COSTUME VERIFICATION CERTIFICATE
            </span>
            <h4 className="text-[17px] font-bold text-[#1C1917] mt-1">
              {report.title}
            </h4>
            <p className="text-xs text-[#78716C] font-sans mt-0.5">
              발행일자: {report.createdDate} · 검증기관: {report.committee}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs bg-[#FAF6F0] p-2.5 rounded-lg border border-[#E7E0D3]">
            <div>
              <span className="font-['Newsreader'] text-[10px] text-[#8C6212] uppercase font-bold block">
                기준작 (A)
              </span>
              <strong className="text-[#1C1917]">{workA.title}</strong>
              <div className="text-[11px] text-[#57534E] font-sans">
                고증 점수: {workA.accuracyScore}% ({workA.accuracyGrade})
              </div>
            </div>
            <div>
              <span className="font-['Newsreader'] text-[10px] text-[#516071] uppercase font-bold block">
                대조작 (B)
              </span>
              <strong className="text-[#1C1917]">{workB.title}</strong>
              <div className="text-[11px] text-[#57534E] font-sans">
                고증 점수: {workB.accuracyScore}% ({workB.accuracyGrade})
              </div>
            </div>
          </div>

          <div className="text-xs text-[#292524] bg-[#FAF6F0] p-3 rounded-lg leading-relaxed border border-[#E7E0D3]">
            <strong className="text-[#8C6212] block mb-1">총평 요약:</strong>
            {report.generalBrief}
          </div>

          <div className="pt-2 flex items-center justify-between text-[11px] text-[#78716C] font-sans border-t border-[#E2D9CC]">
            <span>비교 항목: {report.pointsCount}개소 정리</span>
            <span className="text-[#8C6212] font-semibold">신뢰지수: {report.reliabilityScore}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 border-t border-[#E2D9CC]">
          <button
            onClick={handleCopyLink}
            className="flex-1 py-2.5 px-3 rounded-lg bg-[#F5EFE6] border border-[#DDD3C4] text-[#1C1917] hover:bg-[#EAE2D4] font-['Newsreader'] text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[17px]">
              {copied ? 'check' : 'link'}
            </span>
            <span>{copied ? '링크 복사됨' : '공유 링크 복사'}</span>
          </button>
          
          <button
            onClick={handlePrint}
            className="flex-1 py-2.5 px-3 rounded-lg bg-[#8C6212] text-white font-['Newsreader'] text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm hover:bg-[#6f4b00] transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[17px]">print</span>
            <span>PDF 인쇄 / 저장</span>
          </button>
        </div>
      </div>
    </div>
  );
};

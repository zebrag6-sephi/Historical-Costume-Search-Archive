import React, { useState } from 'react';

export interface AiParsedCriteria {
  era: string;
  region: string;
  status: string;
  gender: string;
  garments: string;
}

interface AiFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  criteria: AiParsedCriteria;
  onSave: (criteria: AiParsedCriteria) => void;
}

export const AiFilterModal: React.FC<AiFilterModalProps> = ({
  isOpen,
  onClose,
  criteria,
  onSave
}) => {
  const [form, setForm] = useState<AiParsedCriteria>({ ...criteria });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-md rounded-t-2xl sm:rounded-xl p-5 shadow-2xl flex flex-col gap-4 border border-[#D6CBB9]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#E7E0D3]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#8C6212] text-[22px]">schema</span>
            <h3 className="font-serif text-[18px] font-bold text-[#1C1917]">
              AI 구조화 파싱 조건 수정
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#FAF6F0] flex items-center justify-center text-[#78716C] hover:text-[#1C1917] transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="flex flex-col gap-1">
            <span className="font-['Newsreader'] text-[11px] uppercase tracking-wider text-[#57534E] font-semibold">
              시대 (Era)
            </span>
            <input
              type="text"
              value={form.era}
              onChange={(e) => setForm({ ...form, era: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-[#FAF6F0] border border-[#DDD3C4] text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#8C6212]"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-['Newsreader'] text-[11px] uppercase tracking-wider text-[#57534E] font-semibold">
              지역 (Region)
            </span>
            <input
              type="text"
              value={form.region}
              onChange={(e) => setForm({ ...form, region: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-[#FAF6F0] border border-[#DDD3C4] text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#8C6212]"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-['Newsreader'] text-[11px] uppercase tracking-wider text-[#57534E] font-semibold">
              신분 및 계층 (Status)
            </span>
            <input
              type="text"
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-[#FAF6F0] border border-[#DDD3C4] text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#8C6212]"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-['Newsreader'] text-[11px] uppercase tracking-wider text-[#57534E] font-semibold">
              성별 (Gender)
            </span>
            <input
              type="text"
              value={form.gender}
              onChange={(e) => setForm({ ...form, gender: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-[#FAF6F0] border border-[#DDD3C4] text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#8C6212]"
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="font-['Newsreader'] text-[11px] uppercase tracking-wider text-[#57534E] font-semibold">
              핵심 복식 키워드 (Key Garments)
            </span>
            <input
              type="text"
              value={form.garments}
              onChange={(e) => setForm({ ...form, garments: e.target.value })}
              className="w-full px-3 py-2 rounded-lg bg-[#FAF6F0] border border-[#DDD3C4] text-xs font-semibold focus:outline-none focus:ring-1 focus:ring-[#8C6212]"
            />
          </label>

          <div className="flex items-center gap-2 pt-2 border-t border-[#E7E0D3]">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 rounded-lg bg-[#FAF6F0] border border-[#DDD3C4] text-[#57534E] font-['Newsreader'] text-xs font-semibold cursor-pointer"
            >
              취소
            </button>
            <button
              type="submit"
              className="flex-1 py-2 rounded-lg bg-[#8C6212] text-white font-['Newsreader'] text-xs font-bold shadow-sm hover:bg-[#6f4b00] cursor-pointer"
            >
              조건 적용
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

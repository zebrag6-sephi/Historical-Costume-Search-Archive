import React, { useState } from 'react';
import { ProjectBoard } from '../../types';

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (project: Partial<ProjectBoard>) => void;
}

export const NewProjectModal: React.FC<NewProjectModalProps> = ({
  isOpen,
  onClose,
  onCreate
}) => {
  const [title, setTitle] = useState('');
  const [era, setEra] = useState('13세기 중세 성기');
  const [region, setRegion] = useState('북독일 / 한자 동맹');
  const [purpose, setPurpose] = useState('웹툰·일러스트');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    onCreate({
      title: title.trim(),
      subtitle: `참조 레퍼런스 신규 수집 · ${era}`,
      status: 'writing',
      statusLabel: '활성 집필 중',
      era,
      purpose,
      specimenCode: `FOLIO SPECIMEN #${Math.floor(Math.random() * 89 + 10)}`,
      specimenTitle: `${region} 사료군 편찬`,
      deviation: '사료 비교 편차 안정권 (±2.5%)',
      curatorMemo: `“${purpose} 제작을 위한 ${era} ${region} 복식 실루엣 및 직조 아카이브 연구 보드”`,
      tags: [`#${era.split(' ')[0]}`, `#${region.split('/')[0].trim()}`, `#${purpose.split('·')[0]}`],
      images: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCQq0xp1rv4UYG-ltm1y1jo1RKyOoe7CEwBvoum7zNyLJDzd5u6W3C6pHh8AkYcF33FHvToyRwcL-8nlFS4Lmc5NgPYu5xuVqS3mz8SnyOxv6uJ-INpM-uGp8mRTPOyLq-bxFnKUtpNsBYm0zAIhSiFtuo3xAoHC-eygUiqPn9G9JW5eCJ5BPjBkq89NFI9J2Eaj-ZIq7ur55YyluToE2l2k0MT0-R1wpfkjl90n7xspLIofrUZyBfdjQ',
        'https://lh3.googleusercontent.com/aida-public/AB6AXuA8TCPixq0DBAj4c2yBweidsYXeixUv2c3BLCJm7W7RGLfjHv84znZpx4K0yDSjGRK4pDzoTpSlmE4NYKQ0RsGvNbS4UcgcpnWPPeg-M-p_1hEZwxtZEfHooUzPdcUZWHqo2jOKoyqlc8DuGCWEdRstasZdTRGVnEOjw2Dh7dj5cMK94IIOYabDVD3J-QjSj-6MxC5O_9skWhB4TiBTi1HTOgroemUECiw0UYyHYubY17jWAnw-4GCM7A'
      ]
    });

    setTitle('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-md rounded-t-2xl sm:rounded-xl p-5 shadow-2xl flex flex-col gap-4 border border-[#D6CBB9]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-1 border-b border-[#E7E0D3]">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#8C6212] text-[22px]">auto_stories</span>
            <h3 className="font-serif text-[19px] font-bold text-[#1C1917]">새 연구·창작 보드 개설</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F5EFE6] flex items-center justify-center text-[#78716C] hover:text-[#1C1917] hover:bg-[#EAE2D4] transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
          <label className="flex flex-col gap-1">
            <span className="font-['Newsreader'] text-[11px] uppercase tracking-wider text-[#57534E] font-semibold">
              프로젝트 명칭
            </span>
            <input
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAF6F0] border border-[#DDD3C4] text-[#1C1917] font-body text-sm placeholder:text-[#A8A29E] focus:outline-none focus:ring-1 focus:ring-[#8C6212] focus:border-[#8C6212]"
              placeholder="예: 14세기 후기 잉글랜드 백년전쟁 기사 복장"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              autoFocus
            />
          </label>

          <div className="flex flex-col gap-1">
            <span className="font-['Newsreader'] text-[11px] uppercase tracking-wider text-[#57534E] font-semibold">
              연구 시대 / 지역
            </span>
            <div className="grid grid-cols-2 gap-2">
              <select
                className="px-3 py-2 rounded-lg bg-[#FAF6F0] border border-[#DDD3C4] text-[#1C1917] text-xs focus:outline-none focus:ring-1 focus:ring-[#8C6212]"
                value={era}
                onChange={(e) => setEra(e.target.value)}
              >
                <option value="13세기 중세 성기">13세기 중세 성기</option>
                <option value="14세기 고딕 복식">14세기 고딕 복식</option>
                <option value="15세기 플랑드르/부르고뉴">15세기 플랑드르/부르고뉴</option>
                <option value="16세기 르네상스 튜더">16세기 르네상스 튜더</option>
                <option value="17세기 바로크 시대">17세기 바로크 시대</option>
              </select>

              <select
                className="px-3 py-2 rounded-lg bg-[#FAF6F0] border border-[#DDD3C4] text-[#1C1917] text-xs focus:outline-none focus:ring-1 focus:ring-[#8C6212]"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option value="북독일 / 한자 동맹">북독일 / 한자 동맹</option>
                <option value="서유럽 / 프랑스 왕국">서유럽 / 프랑스 왕국</option>
                <option value="잉글랜드 / 브리튼">잉글랜드 / 브리튼</option>
                <option value="북부 이탈리아 도시">북부 이탈리아 도시</option>
                <option value="플랑드르 자치길드">플랑드르 자치길드</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="font-['Newsreader'] text-[11px] uppercase tracking-wider text-[#57534E] font-semibold">
              연구 목적
            </span>
            <div className="grid grid-cols-3 gap-1.5">
              {['웹툰·일러스트', '영상 사극 고증', '학술 논고'].map((p) => {
                const isSelected = purpose === p;
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPurpose(p)}
                    className={`py-2 rounded-lg text-xs font-semibold tracking-tight transition-colors cursor-pointer text-center ${
                      isSelected
                        ? 'bg-[#8C6212] text-white border border-[#734F0C] shadow-xs'
                        : 'bg-[#FAF6F0] text-[#57534E] border border-[#E2D9CC] hover:bg-[#EFE7DE]'
                    }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-[#E7E0D3]">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-lg bg-[#FAF6F0] border border-[#DDD3C4] text-[#57534E] hover:text-[#1C1917] font-['Newsreader'] text-xs font-semibold cursor-pointer"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={!title.trim()}
              className="flex-1 py-2.5 rounded-lg bg-[#8C6212] text-white font-['Newsreader'] text-xs font-bold shadow-sm hover:bg-[#6f4b00] disabled:opacity-50 transition-all cursor-pointer"
            >
              보드 개설
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

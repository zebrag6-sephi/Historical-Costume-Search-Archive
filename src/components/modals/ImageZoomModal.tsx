import React from 'react';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
  caption?: string;
}

export const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  caption
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-2xl w-full bg-[#1C1917] rounded-xl overflow-hidden shadow-2xl flex flex-col border border-stone-800"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 bg-[#26221F] border-b border-stone-800 text-stone-200">
          <div className="flex flex-col truncate">
            <span className="font-serif text-[16px] font-bold text-white truncate">
              {title}
            </span>
            <span className="font-['Newsreader'] text-[11px] text-[#FDE68A] uppercase tracking-wider font-semibold">
              사료 실물 고해상도 분해 검사
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-white transition-colors cursor-pointer"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <div className="relative w-full max-h-[70vh] bg-black flex items-center justify-center overflow-hidden p-2">
          <img
            src={imageUrl}
            alt={title}
            className="max-h-[65vh] w-auto max-w-full object-contain rounded shadow-lg"
          />
        </div>

        {caption && (
          <div className="p-3 bg-[#26221F] border-t border-stone-800 text-stone-300 font-serif text-xs leading-relaxed">
            {caption}
          </div>
        )}
      </div>
    </div>
  );
};

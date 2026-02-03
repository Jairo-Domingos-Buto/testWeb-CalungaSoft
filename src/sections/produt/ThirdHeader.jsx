import React from "react";

export default function ThirdHeader() {
  return (
    <div className="flex items-center px-3 mt-10 justify-between mb-6 lg:px-77">
      <button className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left"
          aria-hidden="true"
        >
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
        <span className="hidden md:inline">Voltar</span>
      </button>
      <div className="hidden md:flex items-center gap-2 text-xs font-medium text-gray-400">
        <span>Marketplace</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right"
          aria-hidden="true"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
        <span className="text-gray-900 dark:text-gray-100 truncate max-w-[200px]">
          Peruca corte caipira
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          className="p-2 rounded-full transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Copiar link da página"
          title="Copiar link"
        >
          <div className="relative w-5 h-5 flex items-center justify-center">
            <div style={{ opacity: 1, transform: "none" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-share2 lucide-share-2 text-gray-500 hover:text-gray-900 dark:hover:text-white"
                aria-hidden="true"
              >
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
              </svg>
            </div>
          </div>
        </button>
        <button className="p-2.5 rounded-full backdrop-blur-md bg-white/70 dark:bg-black/40 border border-white/20 shadow-sm transition-all active:scale-90 md:hover:scale-110">
          <div style={{ transform: "none" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart transition-colors duration-300 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
            >
              <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}

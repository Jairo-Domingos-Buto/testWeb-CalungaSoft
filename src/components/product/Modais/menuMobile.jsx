import { X, Store, LayoutGrid, FileText, Settings, HelpCircle, ChevronDown } from "lucide-react";

export default function MenuMobile({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-[99] lg:hidden"
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className="fixed inset-y-0 left-0 w-[85%] max-w-[320px] bg-white dark:bg-gray-950 z-[100] lg:hidden flex flex-col shadow-2xl border-r border-gray-200 dark:border-gray-800"
        style={{ transform: "none" }}
      >
        <div className="px-5 py-6 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50">
          <div className="flex justify-between items-start mb-4">
            <a className="flex items-center gap-2" href="/">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: "rgb(0, 119, 130)" }}
              >
                CS
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                CalungaShop
              </span>
            </a>
            <button
              className="p-2 -mr-2 text-gray-400 hover:text-gray-900 dark:hover:text-white"
              onClick={onClose}
            >
              <X size={20} />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <a
              className="flex items-center justify-center py-2.5 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold shadow-sm"
              href="/signin"
            >
              Entrar
            </a>
            <a
              className="flex items-center justify-center py-2.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm font-bold shadow-sm"
              href="/signup"
            >
              Criar conta
            </a>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 scrollbar-hide">
          <div className="space-y-1 mb-6">
            <a
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-200 text-sm font-medium transition-colors"
              href="/"
            >
              <Store size={18} />
              Início
            </a>
            <a
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-200 text-sm font-medium transition-colors"
              href="/lojas"
            >
              <LayoutGrid size={18} />
              Lojas &amp; Parceiros
            </a>
            <a
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-200 text-sm font-medium transition-colors"
              href="/become"
            >
              <Store size={18} />
              Criar Loja
            </a>
            <a
              className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-200 text-sm font-medium transition-colors"
              href="/about"
            >
              <FileText size={18} />
              Sobre Nós
            </a>
          </div>

          <div className="h-px bg-gray-100 dark:bg-gray-900 mb-6"></div>

          <div>
            <h3 className="px-3 text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Categorias
            </h3>
            <div className="space-y-1">
              <div className="rounded-xl overflow-hidden">
                <div className="flex items-center justify-between px-3 py-3 cursor-pointer transition-colors hover:bg-gray-50 dark:hover:bg-gray-900">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                    Eletrónica &amp; Informática
                  </span>
                  <ChevronDown size={16} className="text-gray-400 transition-transform duration-200" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-100 dark:border-gray-900 bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-sm">
          <div className="flex items-center justify-between gap-4">
            <div className="flex gap-4">
              <a
                className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
                href="/settings"
              >
                <Settings size={20} />
              </a>
              <a
                className="p-2 text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-all"
                href="/help"
              >
                <HelpCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

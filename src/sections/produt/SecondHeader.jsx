import { ShoppingBag, Store } from "lucide-react";
import React, { useState } from "react";

export default function SecondHeader() {
  const [isOpenModal, setOpenModal] = useState(false);

  return (
    <nav className="flex items-center gap-6 h-10 border-y border-gray-500 px-10 dark:border-gray-800 relative lg:px-52">
      <a
        className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-gray-900 dark:hover:text-white text-gray-500"
      >
        <Store size={16} />
        Lojas
      </a>
      <div className="h-4 w-px bg-gray-200 dark:bg-gray-800"></div>
      <div
        className="relative group h-full flex items-center"
        onMouseEnter={() => setOpenModal(true)}
        onMouseLeave={() => setOpenModal(false)}
      >
        <a
          className="flex items-center gap-1 text-sm font-medium transition-colors py-2 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white cursor-pointer"
        >
          Eletrónica & Informática
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`lucide lucide-chevron-down opacity-50 transition-transform duration-200 ${
              isOpenModal ? "rotate-180 opacity-100" : "group-hover:opacity-100"
            }`}
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </a>
        {/* MODAL */}
        {isOpenModal && (
          <div className="absolute top-full left-0 rounded p-0.5 border border-gray-500 dark:border-gray-800 mt-0 w-70 bg-white dark:bg-gray-900 z-50">
            <ul>
              <li className="flex items-center justify-between p-2.5 hover:bg-[#1f2937] m-1 rounded-xl text-white text-[14px]">
                <p>Telefones & Tablets</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down opacity-50 group-hover:opacity-100 -rotate-90 transition-opacity"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between p-2.5 hover:bg-[#1f2937] m-1 rounded-xl text-white text-[14px]">
                <p>Laptops & Computadores</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down opacity-50 group-hover:opacity-100 -rotate-90 transition-opacity"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between p-2.5 hover:bg-[#1f2937] m-1 rounded-xl text-white text-[14px]">
                <p>Audio & Som</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down opacity-50 group-hover:opacity-100 -rotate-90 transition-opacity"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between p-2.5 hover:bg-[#1f2937] m-1 rounded-xl text-white text-[14px]">
                <p>Consolas & VideoJogos</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down opacity-50 group-hover:opacity-100 -rotate-90 transition-opacity"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between p-2.5 hover:bg-[#1f2937] m-1 rounded-xl text-white text-[14px]">
                <p>TV & Multimedias</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down opacity-50 group-hover:opacity-100 -rotate-90 transition-opacity"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between p-2.5 hover:bg-[#1f2937] m-1 rounded-xl text-white text-[14px]">
                <p>Fotografias & Drones</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down opacity-50 group-hover:opacity-100 -rotate-90 transition-opacity"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </li>
              <li className="flex items-center justify-between p-2.5 hover:bg-[#1f2937] m-1 rounded-xl text-white text-[14px]">
                <p>Acessorios Eletricos</p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-down opacity-50 group-hover:opacity-100 -rotate-90 transition-opacity"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </li>
              <hr />
              <li className="flex items-center justify-between p-2.5 hover:bg-[#1f2937] m-1 rounded-xl text-white text-[14px]">
                <h2 className="text-secundary font-bold hover:underline decoration-secundary decoration-2 underline-offset-4">
                  VER TUDO EM ELETRONICA & INFORMATICA
                </h2>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

import { ChevronDown, ChevronUp, Package, Search, Store } from "lucide-react";
import React, { useState } from "react";

export default function SearchBar() {

  const [isOpenModal, setOpenModal] = useState(false);
  const modalOptions = [
    {
      id: 1,
      name: "Produtos",
      icon: <Package size={14} />,
    },
    {
      id: 2,
      name: "Lojas",
      icon: <Store size={14} />,
    },
  ];
  function toggleModal() {
    setOpenModal(!isOpenModal);
  }
  return (
    <div className="flex relative md:hidden">
      <button
        onClick={toggleModal}
        className="flex text-[12px] text-text gap-2 items-center bg-third rounded-l-xl p-2.5 transition-all duration-250 hover:text-white"
      >
        <Package size={14} />
        Produtos
        <ChevronDown
          id="iconUp"
          size={14}
          className={`duration-200 transition-transform ${isOpenModal ? "rotate-180" : ""}`}
        />
      </button>
      <div className="border-l  border-[#1f2937] flex items-center p-3 rounded-r-xl gap-1 bg-third">
        <Search size={17} color="#6b7280" className=""/>
        <input
          type="text"
          className="border-none outline-0 w-[400px] mx-1 text-[13px] text-white"
          placeholder="Pesquisar Produtos..."
        />
      </div>

      {/* modal */}
      {isOpenModal && (
        <div className="absolute flex flex-col top-[50px] p-1 text-[12px] left-0 w-[160px] border-1 border-[#1f2937] bg-third rounded-2xl">
          {modalOptions.map((option) => (
            <div
              // quando selecionado
              onclick={() => {
                toggleModal();
              }}
              key={option.id}
              className="flex items-center gap-2 p-2.5 hover:bg-[#1f2937] cursor-pointer rounded-xl "
            >
              {option.icon}
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import { ChevronDown, ChevronUp, Package, Search, Store } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

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
export default function SearchBar() {
  const [isOpenModal, setOpenModal] = useState(false);
  const [selectOption, setSelectOption] = useState(modalOptions[0])

  function toggleModal() {
    setOpenModal(!isOpenModal);
  }
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpenModal(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="flex relative ">
      <button
        onClick={toggleModal}
        className="flex w-30 text-[12px] text-text gap-2 items-center bg-third rounded-l-xl p-2.5 transition-all duration-250 hover:text-white"
      >
        {selectOption.icon}
        {selectOption.name}
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
          placeholder={`Pesquisar ${selectOption.name}...`}
        />
      </div>

      {/* MODAL */}
      {isOpenModal && (
        <div className="absolute flex flex-col top-[50px] p-1 text-[12px] z-10 left-0 w-[160px] border-1 border-[#1f2937] bg-third rounded-2xl">
          {modalOptions.map((option) => (
            <div
              // quando selecionado
              onClick={() => {
                setSelectOption(option);
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

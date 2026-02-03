import { useState } from "react";
import image1 from "../../assets/image.png";
import image2 from "../../assets/image copy.png";
import image3 from "../../assets/image copy 2.png";
import image4 from "../../assets/image copy 3.png";
import image5 from "../../assets/image copy 4.png";

const images = [image1, image2, image3, image4, image5];

export default function ProductImage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex gap-10 p-4">
      {/* lado da foto */}
      <div className="flex flex-col items-start">
        <div className="relative w-[505px] h-[575px] rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800 ">
          <img
            alt="Peruca corte caipira"
            className="object-cover w-[505px] h-[575px] "
            src={images[selectedImage]}
          />
        </div>
        <div className="flex gap-3 mt-4 overflow-x-auto no-scrollbar pb-2">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative flex-shrink-0 w-16 h-20 md:w-20 md:h-24 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? "opacity-100"
                  : "opacity-40 hover:opacity-100 border-transparent"
              }`}
              style={{
                borderColor:
                  selectedImage === index ? "rgb(0, 119, 130)" : "transparent",
              }}
            >
              <img alt="" className="w-full h-full object-cover" src={img} />
            </button>
          ))}
        </div>
      </div>
      {/* lado do preco e detalhe */}
      <div>
        <div className="lg:col-span-5 flex flex-col">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex text-amber-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                  aria-hidden="true"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                  aria-hidden="true"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                  aria-hidden="true"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                  aria-hidden="true"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                  aria-hidden="true"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-400">4.8</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
              Peruca corte caipira
            </h1>
            <p
              className="text-2xl font-bold"
              style={{ color: "rgb(0, 119, 130)" }}
            >
              20 000,00 Kz
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-8">
            <div className="p-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-lg">
              <span className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                Condição
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                muito bom
              </span>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-lg">
              <span className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                Marca
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                Kitroca
              </span>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-lg">
              <span className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                Tamanho
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                Único
              </span>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 rounded-lg">
              <span className="block text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                Género
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-gray-100">
                Unissex
              </span>
            </div>
          </div>
          <div className="mb-8">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">
              Descrição
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Corte caipira Várias cores
            </p>
          </div>
          <div className="flex flex-col gap-3 mb-8">
            <button
              className="w-full py-4 rounded-xl font-bold text-white transition-opacity hover:opacity-90 active:scale-[0.98]"
              style={{ backgroundColor: "rgb(0, 119, 130)" }}
            >
              Comprar Agora
            </button>
            <button className="w-full py-4 rounded-xl font-bold border border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors active:scale-[0.98]">
              Adicionar ao Carrinho
            </button>
          </div>
          <div className="grid grid-cols-3 gap-2 border-t border-gray-100 dark:border-gray-800 pt-8 mb-6">
            <div className="flex flex-col items-center text-center">
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
                className="lucide lucide-truck text-gray-400 mb-2"
                aria-hidden="true"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
              <span className="text-[10px] font-semibold text-gray-500 uppercase">
                Envio 24h
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
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
                className="lucide lucide-shield-check text-gray-400 mb-2"
                aria-hidden="true"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
              <span className="text-[10px] font-semibold text-gray-500 uppercase">
                Seguro
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
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
                className="lucide lucide-rotate-ccw text-gray-400 mb-2"
                aria-hidden="true"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
              <span className="text-[10px] font-semibold text-gray-500 uppercase">
                Trocas
              </span>
            </div>
          </div>
          <div className="border-t border-gray-100 dark:border-gray-800">
            <button className="w-full flex items-center justify-between py-4 text-sm font-bold text-gray-900 dark:text-white">
              <span>Envio e Devolução</span>
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
                className="lucide lucide-chevron-right transition-transform duration-200"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

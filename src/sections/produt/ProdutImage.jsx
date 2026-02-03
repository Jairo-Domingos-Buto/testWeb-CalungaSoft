import { useState } from "react";
import {
  Star,
  Truck,
  ShieldCheck,
  RotateCcw,
  ChevronRight,
} from "lucide-react";
import image1 from "../../assets/image.png";
import image2 from "../../assets/image copy.png";
import image3 from "../../assets/image copy 2.png";
import image4 from "../../assets/image copy 3.png";
import image5 from "../../assets/image copy 4.png";

const images = [image1, image2, image3, image4, image5];

export default function ProductImage() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-start p-4 px-4 md:px-10 lg:px-78">
      {/* Lado da foto */}
      <div className="lg:col-span-7 lg:sticky lg:top-6 w-full">
        <div className="relative aspect-[4/5] lg:aspect-square xl:aspect-[4/5] max-h-[500px] lg:max-h-[600px] w-full rounded-xl overflow-hidden bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 mx-auto">
          <img
            alt="Peruca corte caipira"
            className="w-full h-full object-cover"
            src={images[selectedImage]}
          />
        </div>
        <div className="flex gap-3 mt-4 overflow-x-auto no-scrollbar pb-2 justify-center lg:justify-start">
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

      {/* Lado do preco e detalhe */}
      <div className="lg:col-span-5 flex flex-col w-full">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
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
            <Truck size={20} className="text-gray-400 mb-2" />
            <span className="text-[10px] font-semibold text-gray-500 uppercase">
              Envio 24h
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <ShieldCheck size={20} className="text-gray-400 mb-2" />
            <span className="text-[10px] font-semibold text-gray-500 uppercase">
              Seguro
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <RotateCcw size={20} className="text-gray-400 mb-2" />
            <span className="text-[10px] font-semibold text-gray-500 uppercase">
              Trocas
            </span>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800">
          <button className="w-full flex items-center justify-between py-4 text-sm font-bold text-gray-900 dark:text-white">
            <span>Envio e Devolução</span>
            <ChevronRight
              size={18}
              className="transition-transform duration-200"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

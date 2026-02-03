import { Heart, Eye, ShoppingCart } from "lucide-react";

const relatedProducts = [
  {
    id: 1,
    name: "Cacheada tricolor",
    brand: "Original",
    price: "45 000",
    image: "https://calunga.shop/api/v1/uploads/products/9964f375-ef18-44a9-9890-05eba3054ab7.jpeg",
    inStock: false,
  },
  {
    id: 2,
    name: "Peruca de Corte americano",
    brand: "Original",
    price: "15",
    image: "https://calunga.shop/api/v1/uploads/products/af947efa-d121-4359-886e-9eb768c6cea0.jpeg",
    inStock: true,
  },
  {
    id: 3,
    name: "Peruca semi-vietnamita",
    brand: "Original",
    price: "68 000",
    image: "https://calunga.shop/api/v1/uploads/products/91d0e153-75cd-4bc9-80c0-f358f705d7a3.jpeg",
    inStock: false,
  },
  {
    id: 4,
    name: "Perucas cacheada t16",
    brand: "Original",
    price: "70 000",
    image: "https://calunga.shop/api/v1/uploads/products/d8bc79de-0052-4033-90ae-c93e095f527e.jpeg",
    inStock: true,
  },
  {
    id: 5,
    name: "Peruca cachos normais",
    brand: "Original",
    price: "37 000",
    image: "https://calunga.shop/api/v1/uploads/products/45badc71-c5a2-48ef-b859-6c58d35d3778.jpeg",
    inStock: true,
  },
];

function ProductCard({ product }) {
  return (
    <div className="flex flex-col group cursor-pointer w-full">
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-900 mb-3 border border-gray-100 dark:border-gray-800 transition-all group-hover:shadow-xl group-hover:border-gray-200 dark:group-hover:border-gray-700">
        {/* BOTAO DE FAVORITO */}
        <button className="absolute top-2.5 right-2.5 z-20 p-2.5 rounded-full backdrop-blur-md bg-white/70 dark:bg-black/40 border border-white/20 shadow-sm transition-all active:scale-90 md:hover:scale-110">
          <Heart
            size={18}
            className="transition-colors duration-300 text-gray-500 dark:text-gray-400"
          />
        </button>

        {/* IMAGEM DO PRODUTO */}
        <img
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          src={product.image}
        />

        {/*Ver Detalhes" */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-end justify-center p-4">
          <div className="w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm py-2.5 rounded-xl flex items-center justify-center gap-2 text-[12px] font-bold text-gray-900 dark:text-white uppercase tracking-wider shadow-lg translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <Eye size={14} />
            Ver Detalhes
          </div>
        </div>
      </div>

      {/* INFORMACOES DOS (teto falso) PERUCAS */}
      <div className="px-1.5 space-y-1.5">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest truncate mb-0.5">
              {product.brand}
            </p>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate text-[15px] leading-snug group-hover:text-primary transition-colors">
              {product.name}
            </h3>
          </div>

          {/* BOTAO DO CARRINHO */}
          <button
            disabled={!product.inStock}
            className="p-2.5 rounded-xl transition-all active:scale-90 md:hover:text-white"
            style={{
              backgroundColor: product.inStock
                ? "rgba(0, 119, 130, 0.082)"
                : "rgb(243, 244, 246)",
              color: product.inStock ? "rgb(0, 119, 130)" : "rgb(156, 163, 175)",
              cursor: product.inStock ? "pointer" : "not-allowed",
            }}
          >
            <ShoppingCart size={19} />
          </button>
        </div>

        <div className="flex items-center justify-between pt-0.5">
          <div className="flex flex-col">
            <span className="font-bold text-gray-950 dark:text-white text-lg leading-none">
              {product.price} Kz
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProdutRelacionate() {
  return (
    <div className="px-4 md:px-10 lg:px-78">
      <div className="mt-16 border-t border-gray-100 dark:border-gray-800 pt-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Produtos Relacionados
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

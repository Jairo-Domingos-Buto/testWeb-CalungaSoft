import { Bell, ShoppingBag } from "lucide-react";
import SearchBar from "../components/product/SearchBar";

export default function DefaultLayout({ children }) {
  return (
    <div className="bg-primary h-[100vh] w-100%">
      {/* HEADER */}
      <header className="bg-primary  text-white h-[64px] flex items-center px-10 justify-between lg:px-50">
        {/* logo */}
        <div className="flex justify-center items-center gap-2">
          <div className="w-[32px] h-[32px] grid place-items-center bg-secundary font-bold rounded  text-xl">
            CS
          </div>
          <h1 className="font-bold text-xl">CalungaShop</h1>
        </div>
        {/* logo */}
      {/* barra de pesquisa */}
      <SearchBar/>
      {/* buttons */}
      <div className="flex items-center gap-5">
        <button className="flex gap-2 items-center bg-[#111827] p-2 border-[0.5px] border-[#1d2835] rounded-xl hover:scale-110 transition-all duration-200">
          <Bell size={23} color="#6a717f"/>
        </button>
        <button className="flex gap-2 items-center relative p-1 p-2  rounded-xl hover:bg-[#1f2937] transition-all duration-200">
          <ShoppingBag size={23}/>
          <span className="text-[10px] font-bold bg-secundary rounded-full w-[16px] h-[16px] flex justify-center items-center absolute top-0 right-0">3</span>
        </button>
        <button className="bg-secundary w-[74px] h-[35px] text-[15px] font-bold rounded-xl grid place-items-center text-white">
          Entrar
        </button>

      </div>


      </header>
      {/* HEADER */}

      {/* CONTENT */}
      <main>{children}</main>
      {/* CONTENT */}

      {/* FOOTER */}
      <footer>
        <h3>Footer</h3>
      </footer>
      {/* FOOTER */}
    </div>
  );
}

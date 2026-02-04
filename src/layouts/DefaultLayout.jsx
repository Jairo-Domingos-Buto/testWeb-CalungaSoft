import {
  Bell,
  ShoppingBag,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Globe,
  SearchAlert,
  Search,
  Menu,
} from "lucide-react";
import SearchBar from "../components/product/SearchBar";
import SecondHeader from "../sections/produt/SecondHeader";
import { useState } from "react";
import MenuMobile from "../components/product/Modais/menuMobile";

const footerLinks = {
  plataforma: [
    { label: "Sobre Nós", href: "#" },
    { label: "Carreiras", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Imprensa", href: "#" },
  ],
  suporte: [
    { label: "Central de Ajuda", href: "#" },
    { label: "Estado do Serviço", href: "#" },
    { label: "Reportar Problema", href: "#" },
    { label: "Fale Connosco", href: "#" },
  ],
  legal: [
    { label: "Termos de Uso", href: "#" },
    { label: "Privacidade", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Licenças", href: "#" },
  ],
};

export default function DefaultLayout({ children }) {

  const [isOpenModalMobile,setIsOpenModalMobile]=useState(false)


  return (
    <div className="bg-primary min-h-screen w-full">
      {/* MODAL */}
      <MenuMobile isOpen={isOpenModalMobile} onClose={() => setIsOpenModalMobile(false)} />
      {/* HEADER */}
      <header className="bg-primary text-white h-[64px] flex items-center px-5 justify-between top-0 lg:px-52 border-[0.5px] border-[#1d2835] md:border-none">
        {/* LOGO */}
        <div className="flex justify-center items-center gap-2 ">
          {/* MENU MOBILE */}
          <div className="md:hidden grid place-items-center mr-4">
            <button onClick={()=>setIsOpenModalMobile(true)} >

              <Menu/>
            </button>
          </div>
          <div className="w-[32px] h-[32px] grid place-items-center bg-secundary font-bold rounded text-xl ">
            CS
          </div>
          <h1 className="hidden md:block font-bold text-xl">CalungaShop</h1>
        </div>

        {/* BARRA DE PESQUISA  */}
        <div className="hidden md:block">
          <SearchBar />
        </div>

        {/* BOTTOES DO HEADER */}
        <div className="flex items-center gap-4">
          {/* BOTAO DO MOBILE */}
          <button className="md:hidden">
            <Search />
          </button>
          <button className="flex gap-2 items-center bg-[#111827] p-2 border-[0.5px] border-[#1d2835] rounded-xl hover:scale-110 transition-all duration-200">
            <Bell size={23} color="#6a717f" />
          </button>
          <button className="flex gap-2 items-center relative p-2 rounded-xl hover:bg-[#1f2937] transition-all duration-200">
            <ShoppingBag size={23} />
            <span className="text-[10px] font-bold bg-secundary rounded-full w-[16px] h-[16px] flex justify-center items-center absolute top-0 right-0">
              3
            </span>
          </button>
          <button className="bg-secundary w-[74px] h-[35px] text-[15px] font-bold rounded grid place-items-center text-white hidden md:block">
            Entrar
          </button>
        </div>
      </header>

      {/* SECOND HEADER  */}
      <div className="hidden md:block">
        <SecondHeader />
      </div>

      {/* CONTENT */}
      <main>{children}</main>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 lg:px-6 py-16">
          {/* GRID PRINCIPAL */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            {/* LOGO E DESCRICAO */}
            <div className="col-span-2 lg:col-span-2 space-y-6">
              <a className="flex items-center gap-2 group w-fit" href="/">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm"
                  style={{ backgroundColor: "rgb(0, 119, 130)" }}
                >
                  CS
                </div>
                <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  CalungaShop
                </span>
              </a>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-sm">
                A plataforma líder em e-commerce em Angola. Conectamos
                compradores e vendedores com tecnologia de ponta, segurança e
                confiança.
              </p>
              <div className="pt-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <MapPin size={16} className="text-gray-400" />
                  <span>Luanda, Angola</span>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* PLATAFORMA */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                Plataforma
              </h4>
              <ul className="space-y-3">
                {footerLinks.plataforma.map((link) => (
                  <li key={link.label}>
                    <a
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* SUPORTE */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                Suporte
              </h4>
              <ul className="space-y-3">
                {footerLinks.suporte.map((link) => (
                  <li key={link.label}>
                    <a
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* TERMOS LEGAIS */}
            <div className="space-y-6">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a
                      className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* NEWSLETTERS */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-12 pb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-center md:text-left">
                <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                  Subscreva a nossa newsletter
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Receba as últimas novidades e ofertas exclusivas.
                </p>
              </div>
              <div className="flex w-full md:w-auto gap-2">
                <input
                  placeholder="Introduza o seu e-mail"
                  className="w-full md:w-64 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all dark:text-white placeholder:text-gray-400"
                  type="email"
                />
                <button className="px-6 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
                  Subscrever
                </button>
              </div>
            </div>
          </div>

          {/* CPYRIGTH DIRITOS AUTORIAIS */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2026 CalungaShop Angola. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="h-6 w-10 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[8px] font-bold text-gray-500">
                  VISA
                </div>
                <div className="h-6 w-10 bg-gray-100 dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[8px] font-bold text-gray-500">
                  MC
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500 cursor-pointer hover:text-gray-900 dark:hover:text-white">
                <Globe size={14} />
                <span>Português (AO)</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React from "react";

export default function Services() {
  return (
    <div class="border-b border-gray-100 dark:border-gray-900 mt-10 bg-gray-50/50 dark:bg-gray-900/50">
      <div class="container mx-auto px-4 lg:px-6 py-10">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div class="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div class="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 text-blue-600 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-shield-check"
                aria-hidden="true"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                <path d="m9 12 2 2 4-4"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-1">
                Pagamento Seguro
              </h4>
              <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Transações encriptadas e proteção ao comprador garantida.
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div class="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 text-blue-600 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-truck"
                aria-hidden="true"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-1">
                Entregas em Angola
              </h4>
              <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Envio rápido para Luanda e todas as províncias.
              </p>
            </div>
          </div>
          <div class="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div class="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 text-blue-600 dark:text-blue-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-rotate-ccw"
                aria-hidden="true"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                <path d="M3 3v5h5"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-bold text-gray-900 dark:text-white mb-1">
                Devoluções Simples
              </h4>
              <p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Política de devolução transparente de 14 dias.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

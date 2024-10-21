"use client";

import FormularioLogin from "./form-login";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="relative w-full md:w-3/6 h-64 md:h-[840px] bg-[url('/moinho.svg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[#003966] to-transparent"></div>
      </div>
      <div className="w-full md:w-3/6 md:h-[840px] flex flex-col items-center justify-center px-4 py-8 md:py-0">
        <div className="w-full md:w-10/12 px-4">
          <h1 className="text-[#003966] mb-4 font-bold text-3xl md:text-5xl">
            Entrar
          </h1>
          <h3 className="text-neutral-400 text-sm md:text-base mt-2 mb-6">
            Siga os passos para entrar na sua conta
          </h3>
          <FormularioLogin />
          <div className="mt-4 w-full text-center text-[#003966] md:mt-7">
            <Link href={"./cadastro"}>
              <p className="text-sm md:text-base">
                Não tem uma conta?{" "}
                <span className="font-semibold underline decoration-[#003966] relative">
                  Cadastre-se
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

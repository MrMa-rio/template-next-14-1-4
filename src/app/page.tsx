"use client";
import { InputText } from "@/components/InputText/InputText";
import { SelectVersion } from "@/components/SelectVersion/SelectVersion";
import { Send } from "@/components/Send/Send";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-start pt-24">
        <div className="bg-gray-300 shadow-2xl w-1/2 h-fit max-w-3xl min-w-xl rounded-3xl">
          <div className="flex flex-col p-4 gap-3 justify-center items-center">
            <h1>Adicionar Dispositivo</h1>
            <div className="flex flex-col gap-2 justify-center items-center">
              <InputText placeholder="12345" text="Id do Tablet:" setValue={setValue} value="" />
              <SelectVersion text="Versao Atual:"  />
              <SelectVersion text="Nova Versao:"  />
              <Send target={() => {alert("Tablet Atualizado Com Sucesso!")}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

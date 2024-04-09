import { useState } from "react";
import { InputText } from "../InputText/InputText"
import { SelectVersion } from "../SelectVersion/SelectVersion"
import { Send } from "../Send/Send"

export const UpdateDevice = () => {
    const [value, setValue] = useState("");

    return (
        <div className="flex flex-col p-4 gap-3 justify-center items-center">
            <h1>Atualizar Dispositivo</h1>
            <div className="flex flex-col gap-2 justify-center items-center">
                <InputText placeholder="12345" text="Id do Tablet:" setValue={setValue} value="" />
                <SelectVersion text="Versao Atual:" />
                <SelectVersion text="Nova Versao:" />
                <Send target={() => { alert("Tablet Atualizado Com Sucesso!") }} />
            </div>
        </div>
    )
}
import { useListOfVersions } from "@/hooks/useListOfVersions";
import { ListOfVersionsDTO } from "@/interfaces/ListOfVersionsDTO/ListOfVersionsDTO";
import { useEffect } from "react";

interface selectProps {
  text: string;
}
export const SelectVersion = ({ text }: selectProps) => {
  
    useEffect(() => {
        
    }, [])
  
  return (
    <>
      <div className="flex items-center gap-2">
        <p className="w-28">{text}</p>
        <select
          className="w-48 rounded-md bg-gray-200 p-1"
          name="Selecione"
          id=""
        >
          {Object.keys(ListOfVersionsDTO.items.versoes_eprave).map(key => {
            return(
                //@ts-ignore
                <option value={key}>{ListOfVersionsDTO.items.versoes_eprave[key]}</option>
            )
          })}
        </select>
      </div>
    </>
  );
};

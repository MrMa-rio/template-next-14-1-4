import { table } from "console";

interface sendProps{
    target: () => void
}

export const Send = ({target}:sendProps) => {
  return (<>
    <button className="w-32 bg-black p-2 rounded-md bg-opacity-10 hover:bg-opacity-20" onClick={target}>
        Enviar
    </button>
  </>);
};

import { InputHTMLAttributes } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string
    setValue: (value:string) => void
    value:string
}

export const InputText = ({setValue,text, value, ...rest}:inputProps) => {
  return (
    <>
      <div className="flex items-center gap-2">
        <p className="w-28">{text}</p>
        <input
          {...rest}
          className=" bg-gray-200 rounded-md p-1"
          type="number"
          onChange={(e) => setValue(e.target.value)}
          name=""
          id=""
        />
      </div>
    </>
  );
};

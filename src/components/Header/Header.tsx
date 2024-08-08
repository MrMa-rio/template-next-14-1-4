import { InputHTMLAttributes } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string
  value: string
}

export const Header = ({text, value}: inputProps) => {
  return (
    <>
      <div className="w-4/5 h-fit flex justify-between items-center gap-10 ">
        <div className="w-32 h-32 bg-orange-400 flex justify-center items-center rounded-3xl">
          <p className="text-5xl text-white">{value}</p>
        </div>
        <div className="w-full h-32 bg-gray-200 flex justify-center items-center shadow-2xl rounded-3xl">
          <p className="p-6">{text}</p>
        </div>
      </div>
    </>
  );
};

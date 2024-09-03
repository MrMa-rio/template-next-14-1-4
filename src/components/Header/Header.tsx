import Image from "next/image";
import { InputHTMLAttributes } from "react";
import image from "@/TUTORIAL/teorika.svg"
interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string
  value: string
}

export const Header = ({text, value}: inputProps) => {
  return (
    <>
      <div className="w-4/5 h-fit flex justify-between items-center gap-10 ">
        <div className="flex justify-center items-center w-32">
          <Image src={image} alt=""  className="w-32 absolute flex justify-center items-center" />
          <p className="text-white z-10 text-lg">{value}</p>
        </div>
        <div className="w-full h-32 bg-slate-500 flex justify-center items-center shadow-2xl rounded-3xl">
          <p className="p-6 text-white">{text}</p>
        </div>
      </div>
    </>
  );
};

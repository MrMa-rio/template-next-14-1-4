import { Header } from "../Header/Header"
import Image, { StaticImageData } from "next/image";
import { InputHTMLAttributes } from "react";


interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string
    value: string
    image: StaticImageData
}

export const Tutorial = ({ image, text, value }: inputProps) => {
    return (
        <>
            <div className="">
                <div className=" h-screen flex flex-col justify-center items-center gap-6 bg-blue-300https://e-prova.com.br/mg/sistema/servidor/o=1&i=37&h=79f36d9812b2d190373513711dddd2ba p-6 rounded-md">
                    <div className="w-4/5 h-fit flex flex-col justify-between items-center gap-8 border-2 border-black py-6">
                        <Header value={value} text={text} />
                        <div className="shadow-lg shadow-neutral-900 w-4/5 rounded-xl overflow-hidden">
                            <Image src={image} alt="IMAGEM" className="" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
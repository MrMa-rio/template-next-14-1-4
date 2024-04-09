"use client";
import { UpdateDevice } from "@/components/UpdateDevice/UpdateDevice";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-start pt-24">
        <div className="flex flex-col gap-12 bg-gray-300 shadow-2xl w-1/2 h-fit max-w-3xl min-w-xl rounded-3xl pb-10">
          <UpdateDevice />
          <div className="flex justify-center items-center">
            <p>
                Ultimos atualizados
              </p>
          </div>
          <div className="w-full h-16 bg-black bg-opacity-20">

          </div>
        </div>
      </div>
    </>
  );
}

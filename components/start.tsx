import Image from "next/image";
import React from "react";

export default function Start({ setIsOrdering }: { setIsOrdering: React.Dispatch<React.SetStateAction<boolean>> }) {
    return (
        <div className='flex flex-col items-center gap-10'>
            <div className='flex flex-col items-center gap-1'>
                <p className='font-bold text-5xl text-main'>HOLA :D</p>
                <Image src='logo.svg' alt='logo' width='350' height='350' />
                <p className='text-xs text-main font-semibold'>Inicia tu pedido cuando sepas qué quieres. Dime cualquier duda!</p>
            </div>
            <button className='border-2 border-main rounded-lg w-fit px-4 py-2 font-bold text-main active:bg-main active:text-white' onClick={() => setIsOrdering(true)}>
                <p className=''>Iniciar</p>
            </button>
        </div>
    );
}
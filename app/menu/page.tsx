'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function MenuPage() {

    const router = useRouter();

    return (
        <div className='h-svh flex flex-col gap-y-4 items-center justify-center'>
            <Image src='/menu.svg' alt='menu' width={375} height={1100} />
            <button className='px-3 py-2 bg-main text-white font-sm font-bold rounded-lg' onClick={() => router.push('/')}>Ordenar</button>
        </div>
    )
}
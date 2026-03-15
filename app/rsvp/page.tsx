'use client'

import RSVP from "@/components/rsvp";
import Image from "next/image";
import { useState } from "react";

export default function Page() {
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <div className='flex flex-col mx-auto px-8 pt-4 h-svh justify-center'>
            <div className='flex flex-col mx-auto'>
                <div className='flex flex-col w-fit mx-auto'>
                    <h1 className='text-main text-3xl tracking-widest font-bold self-center'>DANIELOL&apos;S BDAY</h1>
                    <Image src="logo.svg" width={300} height={300} alt='logo' className="my-4" />
                    <h1 className="text-3xl text-main tracking-widest font-bold self-center">JALAS??</h1>
                </div>
                <div className='flex flex-col gap-y-4 mt-4'>
                    <p className='text-main text-sm font-semibold'>Confirma tu asistencia :)</p>
                    <p className='text-main text-sm'><a className="font-semibold">Cuándo?</a> Sábado 21 de Marzo</p>
                    <p className='text-main text-sm'><a className="font-semibold">A qué hora?</a> A partir de las 5:30</p>
                    <p className='text-main text-sm'><a className="font-semibold">Dónde?</a> <a href="https://maps.app.goo.gl/sugYS5Z9gQ1UZoFf7" className='underline'>En mi hogar</a></p>
                </div>
                <button className='bg-main text-white rounded-lg px-4 py-2 w-fit mt-6 self-center font-bold tracking-wider hover:cursor-pointer' onClick={() => setShowModal(true)}>RSVP</button>
            </div>
            {showModal && <RSVP onClose={() => setShowModal(false)} />}
        </div>
    )
}
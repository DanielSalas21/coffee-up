'use client'

import Image from "next/image";
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function AllDone() {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => router.push('/'), 3000);
    }, [router])

    return (
        <div className='flex flex-col gap-y-6 text-main'>
            <h1 className='text-3xl tracking-wider font-bold'>Listo!</h1>
            <p>Deja me pongo a chambear, ahorita te entrego tu bebida :)</p>
            <Image className='self-center' src="/bola_amarilla_cafe.png" alt="bola amarilla con un cafecito" height={300} width={300} />
        </div>
    )
}
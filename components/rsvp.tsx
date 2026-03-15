'use client'

import { rsvp } from "@/actions/rsvp";
import { identifyFormSchema } from "@/lib/schemas";
import { CircleCheck, CircleX } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function RSVP({ onClose }: { onClose: () => void }) {

    const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries())

        try {
            const data = identifyFormSchema.safeParse(formValues);

            if (data.success) {
                const res = await rsvp({ name: data.data.name, confirmed: true });

                if (res.success) {
                    setIsConfirmed(true);

                    await Promise.resolve(setTimeout(onClose, 2000)); //Close modal after 2 seconds
                }
            } else {
                console.log(data.error)
                throw new Error(data.error.issues[0].message)
            }
        } catch (e) {
            if (e instanceof Error) {
                setErrorMessage(e.message);
            }
        }

    }

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md' onClick={onClose}>
            <div className='flex flex-col gap-y-4 w-fit border-3 border-main rounded-lg px-8 py-4 relative bg-white shadow-2xl' onClick={(e) => e.stopPropagation()}>

                {isConfirmed ?
                    <div className="flex flex-col gap-y-4 items-center">
                        <Image alt='garcias' src='/garcias.jpg' width={150} height={125} />
                        <div className='flex gap-x-2'>
                            <CircleCheck className='text-main' size={30} />
                            <h2 className='text-main font-bold text-xl tracking-wider'>Garcias</h2>
                        </div>
                    </div>
                    :
                    <div>
                        <h2 className='text-xl text-main font-bold tracking-wider mb-4'>Cafecito y catán?</h2>
                        <form className='flex flex-col gap-y-4' onSubmit={(e) => handleSubmit(e)}>
                            Hola Danielol, soy <input name="name" type='text' placeholder='tu nombre aquí' className='border border-main/70 rounded-lg px-2 m-0' /> y tqm. Ahí te veo el sábado :D
                            {errorMessage &&
                                (<div className='flex text-red-500 items-center gap-x-2'>
                                    <CircleX size={15} />
                                    <p className='text-sm'>{errorMessage}</p>
                                </div>)
                            }
                            <button type='submit' className='bg-main text-white rounded-lg px-4 py-2 w-fit mt-4 self-center font-bold tracking-wider hover:cursor-pointer'>Confirmo</button>
                        </form>
                    </div>
                }
            </div>
        </div>
    )
}
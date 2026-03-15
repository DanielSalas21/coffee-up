import { getOrCreateUser } from "@/actions/users";
import { identifyFormSchema } from "@/lib/schemas";
import { CircleX } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

export default function Identify({ setName }: { setName: React.Dispatch<React.SetStateAction<string>> }) {
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // Access form data directly from event target
        const formData = new FormData(e.currentTarget);
        const formValues = Object.fromEntries(formData.entries());

        try {
            const data = identifyFormSchema.safeParse(formValues);

            if (data.success) {
                const res = await getOrCreateUser(data.data.name);

                if (res.success) {
                    setName(res.name);
                }
            } else {
                throw new Error(data.error.issues[0].message)
            }

        } catch (e) {
            if (e instanceof Error) {
                setErrorMessage(e.message)
            }

        }

    }

    return (
        <div className='flex flex-col gap-4'>
            <h2 className="text-4xl text-main font-bold">Identifícate</h2>
            <Image src='/qn_sos.jpg' width='300' height='300' alt='qn chotas sos?' />

            <form className='my-6 flex flex-col' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-3 mb-8'>
                    <label className="text-main font-semibold">Tu nombre pls</label>
                    <input type='text' className="border-2 border-main rounded-lg px-2 text-main active:border-main" placeholder='Danielol' name="name" />
                    {errorMessage &&
                        (<div className='flex text-red-500 items-center gap-x-2'>
                            <CircleX size={15} />
                            <p className='text-sm'>{errorMessage}</p>
                        </div>)
                    }
                </div>
                <button type='submit' className='border-2 border-main rounded-lg w-fit px-4 py-2 font-bold text-main active:bg-main active:text-white self-center'>Listo</button>
            </form>
        </div>
    )
}
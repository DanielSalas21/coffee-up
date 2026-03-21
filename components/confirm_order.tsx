'use client';

import { createOrder } from "@/actions/orders";
import { useState } from "react";

export default function ConfirmOrder({ selectedDrink, temperature, milkChoice, customizations, previousStep, name }: {
    selectedDrink: string,
    temperature: null | string;
    milkChoice: null | string;
    customizations: string[];
    previousStep: (step: string) => void;
    name: string;
}) {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);


    async function handleSubmit() {
        setIsSubmitting(true);

        await createOrder({ name, selectedDrink, temperature, milkChoice, customizations });

        setIsSubmitting(false);

        previousStep('allDone');
    }

    return (
        <div className='flex flex-col gap-y-4 text-main'>
            <h2 className='text-3xl font-bold tracking-wider mb-4'>Confirma tu orden :D</h2>
            <p>
                Quieres un{' '}
                <span className='italic lowercase font-semibold'>{selectedDrink}</span>
                {temperature && (
                    <>
                        {' '}
                        <span className='italic lowercase font-semibold'>{temperature}</span>
                    </>
                )}
                {milkChoice && (
                    <>
                        {' '}con leche{' '}
                        <span className='italic lowercase font-semibold'>
                            {milkChoice === 'Avena' ? 'de avena' : milkChoice}
                        </span>
                    </>
                )}
                {customizations.length > 0 && (
                    <>
                        {' '}que lleve{' '}
                        <span className='italic lowercase font-semibold'>
                            {customizations.join(', ')}
                        </span>
                    </>
                )}.
            </p>
            <div className='flex gap-x-3 mt-6 justify-end'>
                <button type='button' className='px-2 py-1 border-2 border-main text-main rounded-lg w-fit' onClick={() => previousStep('baseDrink')}>Reiniciar</button>
                <button type='button' disabled={isSubmitting} className='px-3 py-1 bg-main text-white font-semibold tracking-wide rounded-lg w-fit disabled:bg-main/60' onClick={handleSubmit}>
                    {isSubmitting ? 'Enviando...' : 'Confirmar'}</button>
            </div>
        </div>

    )
}
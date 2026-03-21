'use client';

import { useState } from "react";

export default function BaseDrink({ name, nextStep, value, updateValue, choseMilkDrink, baseDrinkChange }: { name: string, nextStep: (step: string) => void, value: string | null, updateValue: (field: string, value: boolean | string) => void, choseMilkDrink: boolean | null; baseDrinkChange: (drink: string) => void }) {

    const [isMilkDrink, setIsMilkDrink] = useState<boolean | null>(choseMilkDrink);
    const [isHotAndCold, setIsHotAndCold] = useState<boolean | null>(null);
    const [hasAddOns, setHasAddOns] = useState<boolean | null>(null);

    const drinks: { type: string; options: { label: string; value: string, hotAndCold: boolean; milkDrink: boolean; hasAddOns?: true }[] }[] = [
        {
            type: 'SIGNATURE_DRINKS', options: [
                { label: 'Hufflepuff', value: 'HUFFLEPUFF', hotAndCold: true, milkDrink: true },
                { label: 'Danielol', value: 'DANIELOL', hotAndCold: false, milkDrink: false },
                { label: '(Lat) Te pusiste rojo', value: '(LAT)TE_PUSISTE_ROJO', hotAndCold: true, milkDrink: true }
            ]
        },
        {
            type: 'W_COFFEE', options: [
                { label: 'Cortado', value: 'CORTADO', hotAndCold: false, milkDrink: true, hasAddOns: true },
                { label: 'Latte', value: 'LATTE', hotAndCold: true, milkDrink: true, hasAddOns: true },
                { label: 'Espresso Tonic', value: 'ESPRESSO_TONIC', hotAndCold: false, milkDrink: false }
            ]
        },
        {
            type: 'WO_COFFEE', options: [
                { label: 'Chocolate', value: 'CHOCOLATE', hotAndCold: true, milkDrink: true },
                { label: 'Duraznero', value: 'DURAZNERO', hotAndCold: false, milkDrink: false },
                { label: 'Chai Latte', value: 'CHAI_LATTE', hotAndCold: true, milkDrink: true, hasAddOns: true },
            ]
        }
    ]

    return (
        <div className='flex flex-col'>
            <h1 className='text-main text-3xl font-bold mb-6'>
                Q tal <a className='capitalize'>{`${name}`}</a>!
                <br />
                Qué tomas hoy?
            </h1>
            {/* Base drink choice */}
            <h2 className='text-main text-md font-semibold mb-4'>Elige tu bebida:</h2>
            <div className='flex flex-col justify-between gap-x-6 my-2 gap-y-4'>
                <div className='flex gap-x-2 border-b border-main pb-4'>
                    <div className='flex flex-col gap-y-2'>
                        <h3 className='text-main text-sm italic font-semibold'>Signature drinks</h3>
                        {drinks.filter(d => d.type === 'SIGNATURE_DRINKS')[0].options.map(o => (
                            <div key={o.value} className='flex items-start gap-x-1'>
                                <input type='radio' className='mt-1.5' name="selectedDrink" value={o.label} checked={value === o.label} onChange={() => {
                                    baseDrinkChange(o.label);
                                    updateValue('hotAndCold', o.hotAndCold);
                                    updateValue('hasAddOns', o.hasAddOns || false);
                                    setIsMilkDrink(o.milkDrink);
                                    setIsHotAndCold(o.hotAndCold);
                                    setHasAddOns(o.hasAddOns || false);
                                }} />
                                <label htmlFor='drink' className='text-main p-0 m-0'>
                                    {o.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col gap-y-2 border-b border-main pb-4'>
                    <h3 className='text-main text-sm italic font-semibold'>Con café</h3>
                    {drinks.filter(d => d.type === 'W_COFFEE')[0].options.map(o => (
                        <div key={o.value} className='flex items-start gap-x-1'>
                            <input type='radio' className='mt-1.5' name="selectedDrink" value={o.label} checked={value === o.label} onChange={() => {
                                baseDrinkChange(o.label);
                                updateValue('hotAndCold', o.hotAndCold);
                                updateValue('hasAddOns', o.hasAddOns || false);
                                setIsMilkDrink(o.milkDrink);
                                setIsHotAndCold(o.hotAndCold);
                                setHasAddOns(o.hasAddOns || false);
                            }} />
                            <label htmlFor='drink' className='text-main p-0 m-0'>
                                {o.label}
                            </label>
                        </div>
                    ))}
                </div>
                <div className='flex gap-x-2 pb-4'>
                    <div className='flex flex-col gap-y-2'>
                        <h3 className='text-main text-sm italic font-semibold'>Sin café</h3>
                        {drinks.filter(d => d.type === 'WO_COFFEE')[0].options.map(o => (
                            <div key={o.value} className='flex items-start gap-x-1'>
                                <input type='radio' className='mt-1.5' name="selectedDrink" value={o.label} checked={value === o.label} onChange={() => {
                                    baseDrinkChange(o.label);
                                    updateValue('hotAndCold', o.hotAndCold);
                                    updateValue('hasAddOns', o.hasAddOns || false);
                                    setIsMilkDrink(o.milkDrink);
                                    setIsHotAndCold(o.hotAndCold);
                                    setHasAddOns(o.hasAddOns || false);
                                }} />
                                <label htmlFor='drink' className='text-main p-0 m-0'>
                                    {o.label}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <button type='button' className='px-4 py-1 bg-main text-white font-semibold tracking-wide rounded-lg w-fit self-end' onClick={() => {
                if (isMilkDrink) { nextStep('milkChoice'); return }
                if (isHotAndCold) { nextStep('temperature'); return }
                if (!isMilkDrink && !isHotAndCold && hasAddOns) { nextStep('addOns'); return }
                if (!isMilkDrink && !isHotAndCold && !hasAddOns) { nextStep('confirm'); return }

            }}>Siguiente</button>
        </div>
    )
}
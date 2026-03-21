export default function MilkChoice({ nextStep, previousStep, value, updateValue, hotAndCold }: { nextStep: (step: string) => void; previousStep: (step: string) => void; value: string | null; updateValue: (field: string, value: boolean | string) => void; hotAndCold: boolean | null }) {

    const milks: { label: string; value: string }[] = [
        { label: 'Deslactosada', value: 'LACTOSE_FREE' },
        { label: 'Avena', value: 'OAT' }
    ];

    return (
        <div className='flex flex-col gap-y-4 min-w-3xs'>
            <h2 className='text-main text-xl font-semibold mb-4'>Con qué leche lo tomas?</h2>
            <div className='flex gap-x-6'>
                {milks.map(m => (
                    <label key={m.label} htmlFor="milk" className='text-main flex gap-x-1'>
                        <input type='radio' name='milk' value={m.label} checked={value === m.label} onChange={() => {
                            updateValue('milkChoice', m.label);
                            updateValue('milkDrink', true);
                        }} />
                        {m.label}
                    </label>
                ))}

            </div>
            <div className='flex gap-x-3 mt-6 justify-end'>
                <button type='button' className='px-2 py-1 border-2 border-main text-main rounded-lg w-fit' onClick={() => previousStep('baseDrink')}>Atrás</button>
                <button type='button' className='px-3 py-1 bg-main text-white font-semibold tracking-wide rounded-lg w-fit' onClick={() => hotAndCold ? nextStep('temperature') : nextStep('addOns')}>Siguiente</button>
            </div>
        </div>
    )
}
export default function HotOrCold({ nextStep, previousStep, value, updateValue, hasAddOns }: { value: string | null; nextStep: (step: string) => void; previousStep: (step: string) => void; updateValue: (field: string, value: boolean | string) => void; hotAndCold: boolean; hasAddOns: boolean | null }) {

    const options: { label: string; value: string }[] = [
        { label: 'Caliente', value: 'HOT' },
        { label: 'Frío', value: 'ICED' }
    ]

    return (
        <div className='flex flex-col gap-y-4 min-w-3xs'>
            <h2 className='text-main text-xl font-semibold mb-4'>Frío o caliente?</h2>
            <div className='flex gap-x-4'>
                {options.map(o => (
                    <label key={o.label} htmlFor="temperature" className='text-main flex gap-x-1'>
                        <input type='radio' name='temperature' value={o.label} checked={value === o.label} onChange={() => {
                            updateValue('temperature', o.label);
                        }} />
                        {o.label}
                    </label>
                ))}
            </div>
            <div className='flex gap-x-3 mt-6 justify-end'>
                <button type='button' className='px-2 py-1 border-2 border-main text-main rounded-lg w-fit' onClick={() => previousStep('milkChoice')}>Atrás</button>
                <button type='button' className='px-3 py-1 bg-main text-white font-semibold tracking-wide rounded-lg w-fit' onClick={() => {
                    if (hasAddOns) { nextStep('addOns'); return }
                    nextStep('confirm')
                }
                }>Siguiente</button>
            </div>
        </div>
    )
}
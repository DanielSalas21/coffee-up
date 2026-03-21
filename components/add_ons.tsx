export default function AddOns({ previousStep, nextStep, hotAndCold, values, toggleCustomization }: { previousStep: (step: string) => void; nextStep: (step: string) => void; hotAndCold: boolean | null, values: string[]; toggleCustomization: (addOn: string) => void }) {
    const options: { label: string; value: string }[] = [
        { label: 'Crema Irlandesa', value: 'IRISH_CREAM' },
        { label: 'Caramelo', value: 'CARAMEL' },
        { label: 'Caramelo Salado', value: 'SALTED_CARAMEL' },
        { label: 'Vainilla', value: 'VANILLA' },
        { label: 'Chocolate', value: 'Chocolate' },
        { label: 'Chocolate Blanco', value: 'WHITE_CHOCOLATE' },
        { label: 'Pistache', value: 'PISTACHIO' },
        { label: 'Fresa', value: 'STRAWBERRY' },
        { label: 'Shot de Espresso', value: 'ESPRESSO' },
    ]

    return (
        <div className='flex flex-col gap-y-4 min-w-3xs'>
            <h2 className='text-main text-xl font-semibold'>Hazlo tuyo</h2>
            <p className='text-xs italic font-semibold text-main'>Quieres agregar algo más?</p>
            <div className='flex flex-col gap-y-4'>
                {options.map(o => (
                    <label key={o.value} htmlFor='addOns' className='text-main flex gap-x-1'>
                        <input type='checkbox' name='customizations' value={o.label} checked={values.includes(o.label)} onChange={() => {
                            toggleCustomization(o.label)
                        }} />
                        {o.label}
                    </label>
                ))}
            </div>
            <div className='flex gap-x-3 mt-6 justify-end'>
                <button type='button' className='px-2 py-1 border-2 border-main text-main rounded-lg w-fit' onClick={() => {
                    if (hotAndCold) { previousStep('temperature'); return }
                    previousStep('milkChoice');
                }}>Atrás</button>
                <button type='button' className='px-3 py-1 bg-main text-white font-semibold tracking-wide rounded-lg w-fit' onClick={() => nextStep('confirm')}>Siguiente</button>
            </div>
        </div>
    )
}
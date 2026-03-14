export default function BuildDrink({ name }: { name: string }) {

    // const handleChange() {

    // }

    return (
        <div className="flex flex-col gap-y-4 max-w-10/12">
            <h1 className='text-main text-3xl font-bold'>
                Hola <a className='capitalize'>{`${name}`}</a>! Qué tomas hoy?
            </h1>
            <div>
                <form className='flex flex-col gap-y-4'>
                    {/* Base drink choice */}
                    <div>
                        <h2 className='text-main text-md font-semibold'>Elige tu bebida:</h2>
                        <div className='flex justify-between gap-x-6 my-2'>
                            <div className='flex flex-col gap-y-2'>
                                <h3 className='text-main text-xs italic'>Signature drinks</h3>
                                <div className='flex items-start gap-x-0.5'>
                                    <input type='radio' name='drink' className='mt-1.5' />
                                    <label htmlFor="drink" className='text-main p-0 m-0'>
                                        Hufflepuff
                                    </label>
                                </div>
                                <div className='flex items-start gap-x-0.5'>
                                    <input type='radio' name='drink' className='mt-1.5' />
                                    <label htmlFor="drink" className='text-main flex gap-x-1'>
                                        Danielol
                                    </label>
                                </div>
                                <div className="flex items-start gap-x-0.5">
                                    <input type='radio' name='drink' className='mt-1.5' />
                                    <label htmlFor="drink" className='text-main flex gap-x-1'>
                                        (Lat)te pusiste rojo
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <h3 className='text-main text-xs italic'>Con café</h3>
                                <div className='flex items-start gap-x-0.5'>
                                    <input type='radio' name='drink' className='mt-1.5' />
                                    <label htmlFor="drink" className='text-main p-0 m-0'>
                                        Americano
                                    </label>
                                </div>
                                <div className='flex items-start gap-x-0.5'>
                                    <input type='radio' name='drink' className='mt-1.5' />
                                    <label htmlFor="drink" className='text-main flex gap-x-1'>
                                        Cortado
                                    </label>
                                </div>
                                <div className="flex items-start gap-x-0.5">
                                    <input type='radio' name='drink' className='mt-1.5' />
                                    <label htmlFor="drink" className='text-main flex gap-x-1'>
                                        Latte
                                    </label>
                                </div>
                                <div className="flex items-start gap-x-0.5">
                                    <input type='radio' name='drink' className='mt-1.5' />
                                    <label htmlFor="drink" className='text-main flex gap-x-1'>
                                        Espresso Tonic
                                    </label>
                                </div>
                            </div>
                            <div className='flex flex-col gap-y-2'>
                                <h3 className='text-main text-xs italic'>Sin café</h3>
                                <div className='flex items-start gap-x-0.5'>
                                    <input type='radio' name='drink' className='mt-1.5' />
                                    <label htmlFor="drink" className='text-main p-0 m-0'>
                                        Chocolate
                                    </label>
                                </div>
                                <div className='flex items-start gap-x-0.5'>
                                    <input type='radio' name='drink' className='mt-1.5' />
                                    <label htmlFor="drink" className='text-main flex gap-x-1'>
                                        Jamaica Cold Brew
                                    </label>
                                </div>
                                <div className="flex items-start gap-x-0.5">
                                    <input type='radio' name='drink' className='mt-1.5' />
                                    <label htmlFor="drink" className='text-main flex gap-x-1'>
                                        Chai Latte
                                    </label>
                                </div>
                                <div className="flex items-start gap-x-0.5">
                                    <input type='radio' name='drink' className='mt-1.5' />
                                    <label htmlFor="drink" className='text-main flex gap-x-1'>
                                        Limonada
                                    </label>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Milk choice */}
                    <div>
                        <h2 className='text-main text-md font-semibold'>Con que leche lo tomas?</h2>
                        <label htmlFor="milk" className='text-main flex gap-x-1'>
                            <input type='radio' name='milk' defaultChecked />
                            Entera
                        </label>
                        <label htmlFor="milk" className='text-main flex gap-x-1'>
                            <input type='radio' name='milk' defaultChecked />
                            Deslactosada light
                        </label>
                        <label htmlFor="milk" className='text-main flex gap-x-1'>
                            <input type='radio' name='milk' defaultChecked />
                            Avena
                        </label>
                    </div>
                    {/* Add-ons (syrups) */}
                    <div>
                        <label htmlFor="drink" className='text-main flex gap-x-1'>
                            <input type='radio' name='drink' className='' />
                            Hufflepuff
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}
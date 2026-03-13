import React from 'react'

const page = () => {
    return (
        <main className='min-h-dvh bg-black'>
            <section className='min-h-dvh bg-black text-white relative'>

                <div className='absolute top-50 text-center left-0 w-full flex items-center justify-center'>
                    <div className='text-center text-4xl'>
                        <h1>Want to discuss a startup collaboration? We game.</h1>
                    </div>
                </div>

                <div className='absolute top-80 w-full flex items-center justify-center'>
                    <form className=' text-white border rounded-lg border-purple-400/20 p-10 space-y-7'
                    >
                        <div className='grid grid-cols-2 gap-7'>

                            <div>
                                <label>Name</label>
                                <input type="text" className='border  w-full p-5 rounded-lg border-purple-400' />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="text" className='border p-5 rounded-lg border-purple-400 w-full' />
                            </div>
                            <div>
                                <label>Which Project?</label>
                                <input type="text" className='border p-5 rounded-lg border-purple-400 w-full' />
                            </div>
                            <div>
                                <label>Your Interest</label>
                                <input type="text" className='border p-5 rounded-lg border-purple-400 w-full' />
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <label>Additional Details</label>
                            <textarea rows={4} className='border p-5 rounded-lg  border-purple-400 w-full'></textarea>
                        </div>

                        <div className='flex items-center justify-center pt-10'>

                            <button className='border-2 cursor-pointer hover:bg-purple-400 hover:text-black transition-all duration-500 rounded-full border-purple-400 py-2 text-lg px-15'>Submit</button>
                        </div>

                    </form>
                </div>
            </section>
            <section className='min-h-dvh bg-black'>

            </section>


        </main>
    )
}

export default page

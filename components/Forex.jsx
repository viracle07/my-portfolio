import React from 'react'

const Forex = () => {
    return (
        <main className='min-h-dvh'>
            <section className='relative w-full h-screen'>
                {/* bacground video */}
                <video src="/forex2.mp4"
                    muted
                    loop
                    autoPlay
                    className='absolute top-0 left-0 object-cover h-full w-full' />

                <div className='absolute top-0 left-0 w-full h-full bg-black/65'></div>

                <div className='absolute top-50 w-full text-center bg-black/30 p-10 text-center text-white backdrop-blur-md space-y-5'>
                    <h1 className='text-5xl text-[#cc00ff] font-bold'>Forex Market Analysis & Trading Education</h1>
                    <p className='text-lg'>Trading is not gambling. It is strategy, structure, and disciplined execution. We provide structured market analysis and educational insights designed to help traders understand price action, risk management, and market behavior.</p>
                </div>
            </section>

            <section className='min-h-dvh px-10 py-15'>
                <div className='grid grid-cols-3 gap-10'>
                    <div className='space-y-6'>
                        <h1 className='text-xl font-bold'>Our approach focuses on:</h1>
                        <ul>
                            <li>Market structure analysis</li>
                            <li>Risk management principles</li>
                            <li>Technical breakdowns</li>
                            <li>Structured trading psychology</li>
                        </ul>

                        <p className='font-bold'>We emphasize discipline, probability, and long-term sustainability.</p>
                    </div>

                    <div className='space-y-6'>
                        <h1 className='text-xl font-bold'>What We Deliver</h1>
                        <ul>
                            <li>Technical Chart Analysis</li>
                            <li>Market Structure Breakdown</li>
                            <li>Trade Case Studies</li>
                            <li>Risk Management Education</li>
                            <li>Trading Strategy Insights</li>
                            <li>Educational Content & Tutorials</li>
                        </ul>
                    </div>

                    <div className='space-y-6'>
                        <h1 className='text-xl font-bold'>Outcome / Results</h1>
                        <ul>
                            <li>✔ Improved trading discipline
                            </li>
                            <li>✔ Structured market understanding
                            </li>
                            <li>Trade Case Studies</li>
                            <li>✔ Risk management awareness
                            </li>
                            <li>✔ Reduced emotional decision-making</li>

                        </ul>
                    </div>

                </div>

                <div className='py-15 flex items-center justify-center'>
                    <img src="/forex2.jpg" alt="image" className='h-100 ' />
                </div>

                <div className='border-b h-2 border-gray-300/50'></div>


            </section>

        </main>
    )
}

export default Forex

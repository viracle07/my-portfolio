import React from 'react'

const Powerpoint = () => {
    return (
        <main className='min-h-dvh'>

            <section className='h-screen md:px-10 px-4 flex md:justify-center  lg:justify-between max-lg:flex-col'>

                <div className='lg:w-100 relative'>
                    <div className='absolute lg:top-40 top-40 left-0 space-y-8'>
                        <div className='space-y-5'>
                            <h1 className='lg:text-6xl text-4xl font-bold text-purple-700'>Presentation & Pitch Deck Design</h1>
                            <p className='font-semibold text-gray-800 text-lg'>A presentation is not just slides — it’s your opportunity to secure funding, close deals, or win attention.</p>
                        </div>

                        <div className='border border-purple-200/95'></div>


                    </div>
                </div>

                <div className='lg:flex relative items-center justify-end w-full'>

                    <video src="/powerpoint.mp4"
                        muted
                        loop
                        autoPlay
                        className=' lg:h-100 max-md:w-full objects-center absolute lg:top-32 top-110 max-md:left-0 rounded-md shadow-md ' />
                </div>


            </section>

            <section className='min-h-dvh px-10 py-15'>
                <div>
                    <div className='border border-purple-200/95'></div>
                    <div className='grid grid-cols-3'>
                        <div className='space-y-4 py-10 border-r border-purple-200/95'>
                            <h1 className='text-center font-bold text-2xl text-purple-700'>What We Deliver</h1>
                            <ul className='flex items-center justify-center flex-col space-y-3'>
                                <li>Investor Pitch Decks</li>
                                <li>Business Proposal Presentations</li>
                                <li>Corporate Profile Slides</li>
                                <li>Sales Decks</li>
                                <li>Webinar Presentation Templates</li>
                                <li>Custom Branded Slide Systems</li>
                            </ul>
                        </div>

                        <div className='space-y-4 py-10 border-r border-purple-200/95 shadow-lg'>
                            <h1 className='text-center font-bold text-2xl text-purple-700'>Design Focus</h1>
                            <ul className='flex items-center justify-center flex-col space-y-3'>
                                <li>Clean, modern layout</li>
                                <li>Strategic information hierarchy</li>
                                <li>Data visualization clarity</li>
                                <li>Brand consistency</li>
                                <li>Persuasive storytelling structure</li>
                            </ul>
                        </div>

                        <div className='space-y-4 py-10 '>
                            <h1 className='text-center font-bold text-2xl text-purple-700'>Outcome / Results</h1>
                            <ul className='flex items-center justify-center flex-col space-y-3'>
                                <li>✔ Stronger investor confidence
                                </li>
                                <li>✔ Clear communication of value
                                </li>
                                <li>✔ Increased funding opportunities
                                </li>
                                <li>✔ Professional brand perception</li>
                            </ul>
                        </div>
                    </div>
                    <div className='border border-purple-200/95 shadow-md'></div>

                </div>

                <div className='py-15 flex items-center justify-center gap-5 px-10 '>
                    <img src="/powerpoint2.jpeg " alt="image" className='h-80 w-140 rounded-lg' />
                    <img src="/powerpoint1.jpeg" alt="image" className='h-80 w-140 rounded-lg' />
                </div>

            </section>

        </main>
    )
}

export default Powerpoint

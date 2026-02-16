import React from 'react'

const page = () => {
  return (
    <main className='min-h-dvh'>
      <section className='relative w-full h-screen'>
        {/* bacground video */}
        <video src="/bg3.mp4"
          muted
          loop
          autoPlay
          className='absolute top-0 left-0 object-cover h-full w-full' />

        <div className='absolute top-0 left-0 w-full h-full bg-black/85'></div>

        <div className='relative flex flex-col top-60 text-[#cc00ff] px-15 space-y-4'>
          <h1 className='text-8xl font-bold'>Veeracle</h1>
          <h1 className='text-4xl font-bold text-white animate-bounce '>"Engineering Digital Impact"</h1>

        </div>
      </section>

      <section className='relative min-h-dvh bg-black flex items-center flex-col text-white px-10 py-20 bg-linear-to-b froM-[#7A3F91] to-[#2B0D3E] '>
        <div className='flex items-center justify-center'>
          <span className='flex items-center justify-center flex-col space-y-3 text-center text-2xl'>
            <p>
              Veeracle designs and builds high-performance digital experiences for brands ready to stand out. From sleek, responsive websites built with precision, to presentation decks that command attention, to cinematic video edits that amplify your message — every project is crafted with strategy and innovation at its core. Beyond visuals, We also break down the complexities of Forex trading into clear, practical lessons that empower you to navigate the markets with confidence.
            </p>

            <p className='text-[#cc00ff] font-semibold italic text-xl'>
              Code. Creativity. Clarity.
              This is Veeracle — where ideas evolve into digital power.
            </p>
          </span>
        </div>

        <div className=' absolute top-90 bg-white min-h-dvh w-[70rem] rounded-4xl shadow-md '>

        </div>
      </section>

      <section className='min-h-dvh bg-white' >

      </section>
    </main>
  )
}

export default page

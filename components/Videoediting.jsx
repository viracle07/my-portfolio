import React from 'react'

const Videoediting = () => {
  return (
    <main className='min-h-dvh'>
      <section className='h-screen relative bg-black'>

        <video src="/videoediting.mp4"
          muted
          loop
          autoPlay
          className='absolute lg:top-53 left-0 top-70 lg:object-cover h-90 w-full' />

        <div className='absolute lg:top-20 top-30 text-white flex items-center px-4 justify-center flex-col w-full space-y-4 text-center'>
          <h1 className='text-purple-700 lg:text-4xl text-2xl font-bold'>Video Editing & Motion Design</h1>
          <p className=''>In today’s digital world, attention is currency. We create visually compelling video content designed to capture, retain, and convert audiences across platforms.</p>
        </div>

      </section>

      <section className=' bg-black lg:px-10 px-5 lg:py-20 max-md:pb-20 '>

        <div className='text-white lg:flex items-center justify-between max-md:space-y-10'>
          <div className='lg:w-150 space-y-12'>
            <p className='text-xl font-bold text-purple-700 text-center'>From promotional reels to educational content and branded storytelling, we transform raw footage into engaging cinematic experiences.</p>

            <div className='lg:grid grid-cols-2 gap-3 max-md:space-y-10'>
              <div className='space-y-3 '>
                <h1 className='text-lg font-bold'>What We Deliver</h1>
                <ul>
                  <li>Promotional Videos</li>
                  <li>YouTube Editing</li>
                  <li>Social Media Reels</li>
                  <li>Corporate Videos</li>
                  <li>Subtitle & Caption Integration</li>
                  <li>Color Grading & Sound Design</li>
                </ul>
              </div>

              <div className='space-y-3 '>
                <h1 className='text-lg font-bold'>Editing Style Focus</h1>
                <ul>
                  <li>Clean transitions</li>
                  <li>Engagement optimization</li>
                  <li>Strategic pacing</li>
                  <li>Motion graphics integration</li>
                  <li>Brand-aligned aesthetics</li>
                </ul>
              </div>


            </div>


          </div>

          <img src="/videoediting1.jpeg" alt="image" className='h-70 w-100 rounded-lg' />
        </div>

        <div className='text-white pt-20 text-xl space-y-3 text-center'>
          <h1 className='text-2xl font-bold'>Outcome / Results</h1>
          <ul>
            <li>✔ Increased viewer retention
            </li>
            <li>✔ Stronger audience engagement
            </li>
            <li>✔ Higher social media performance
            </li>
            <li>✔ Professional brand positioning</li>
          </ul>
        </div>

      </section>

    </main>
  )
}

export default Videoediting

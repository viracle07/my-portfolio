"use client"
import Webdev from '@/components/Webdev';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const page = () => {

  const subhead = [
    { title: "Web Development" },
    { title: "Presentation Design" },
    { title: "Video Editing" },
    { title: "Forex Market Analysis" },
  ]

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

        <div className='relative flex items-center justify-center flex-col lg:top-50 md:top-100 top-50 text-[#cc00ff] px-15 space-y-3'>
          <h1 className='md:text-9xl text-5xl font-bold'>Veeracle</h1>
          <h1 className='md:text-4xl text-lg font-bold text-white animate-bounce '>Engineering Digital Excellence...</h1>
        </div>

        <div className=' relative text-center max-sm:space-y-7 max-lg:space-y-10 lg:flex text-white px-10 lg:top-55 top-65 justify-center md:top-150'>
          {subhead.map((sub, index) => (
            <div key={index} className='border py-1  px-2 border-[#cc00ff] transition-all duration-600 hover:translate-y-4 hover:bg-purple-800/70 hover:cursor-pointer'>
              <p>{sub.title} </p>
            </div>
          ))}

        </div>

        <div className='relative flex items-center px-10 lg:justify-end justify-center text-black lg:top-70 top-85 md:top-250'>
          <div className='bg-white w-fit md:w-full lg:w-fit  p-4 rounded-lg shadow-purple-700/50 shadow-lg flex gap-1 items-center md:justify-center font-bold hover:scale-110 hover:cursor-pointer hover:bg-purple-800/50 hover:text-white transition-all duration-400 hover:shadow-none'>
            <button onClick={() => {
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth"
              })
            }}>Start Your Project</button>
            <MdArrowOutward className='font-bold text-lg' />
          </div>
        </div>

      </section>

      <section className='relative min-h-dvh  flex items-center flex-col text-white lg:px-10 lg:py-20 bg-linear-to-b from-black to-[#2B0D3E] '>
        <div className='flex items-center justify-center max-md:px-5 max-lg:py-15'>
          <span className='flex items-center justify-center flex-col space-y-3 text-center lg:text-2xl text-lg'>
            <p>
              Veeracle designs and builds high-performance digital experiences for brands ready to stand out. From sleek, responsive websites built with precision, to presentation decks that command attention, to cinematic video edits that amplify your message — every project is crafted with strategy and innovation at its core. Beyond visuals, We also break down the complexities of Forex trading into clear, practical lessons that empower you to navigate the markets with confidence.
            </p>

            <p className='text-[#cc00ff] font-semibold italic lg:text-xl'>
              Code. Creativity. Clarity.
              This is Veeracle — where ideas evolve into digital power.
            </p>
          </span>
        </div>

        <div className=' lg:absolute lg:top-90 bg-white min-h-dvh lg:w-[75rem] lg:grid grid-cols-3 lg:rounded-xl max-md:rounded-t-xl shadow-md '>

          <div className='text-black space-y-6 flex items-center border-r border-gray-200 py-10 lg:py-20 lg:px-10 px-5 flex-col'>
            <img src="/foundation.jpg" alt="image" className='lg:h-70 lg:w-70 h-58 w-100 rounded-md' />
            <h1 className='text-[#cc00ff] text-xl font-bold'>THE FOUNDATION</h1>
            <span className='text-center'>
              <p>Veeracle was built on a deep understanding of systems, influence, and human behavior. A background in political science shaped strategic thinking — the ability to analyze structures, craft narratives, and understand how perception drives action. That foundation became the blueprint for building purposeful digital solutions.</p>
            </span>

          </div>

          <div className='text-black space-y-6 flex items-center border-r border-gray-200 py-10 lg:py-20 lg:px-10 px-5 flex-col'>
            <img src="/shift.jpg" alt="image" className='lg:h-70 lg:w-70 h-58 w-100 rounded-md' />
            <h1 className='text-[#cc00ff] text-xl font-bold'>THE SHIFT</h1>
            <span className='text-center'>
              <p>Technology was not just a new skill — it was a realization. The digital world is where brands rise, compete, and lead. Mastering modern development tools became more than learning code; it became about creating platforms that communicate clearly, function seamlessly, and position brands with authority.</p>
            </span>

          </div>
          <div className='text-black space-y-6 flex items-center lg:py-20 py-10 lg:px-10 px-5 flex-col'>
            <img src="/mission.jpg" alt="image" className='lg:h-70 lg:w-70 h-58 w-100 rounded-md' />
            <h1 className='text-[#cc00ff] text-xl font-bold'>THE MISSION</h1>
            <span className='text-center'>
              <p>Veeracle exists to bridge people and technology through intentional design and strategic execution. From web development to media and digital solutions, every project is crafted to elevate presence, sharpen identity, and build digital power for brands that refuse to be ordinary.</p>
            </span>

          </div>

        </div>
      </section>

      <section className='lg:min-h-dvh bg-white' >

      </section>

      <section id='projects' className='min-h-dvh'>
        <Webdev />
      </section>
    </main>
  )
}

export default page

"use client"
import Forex from '@/components/Forex';
import Powerpoint from '@/components/Powerpoint';
import Videoediting from '@/components/Videoediting';
import Webdev from '@/components/Webdev';
import Link from 'next/link';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";


const page = () => {

  const subhead = [
    { title: "Web Development", sectionId: "web" },
    { title: "Presentation Design", sectionId: "design" },
    { title: "Video Editing", sectionId: "video" },
    { title: "Forex Market Analysis", sectionId: "forex" },
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

        <div className='relative flex items-center justify-center flex-col md:top-50 top-50 text-[#cc00ff] px-15 space-y-3'>
          <h1 className='lg:text-9xl md:text-7xl text-5xl font-bold'>Veeracle</h1>
          <h1 className='md:text-4xl text-lg font-bold text-white animate-bounce '>Engineering Digital Excellence...</h1>
        </div>

        <div className=' relative text-center max-sm:space-y-7 md:flex text-white px-10 md:top-55 top-65 justify-center'>
          {subhead.map((sub, index) => (
            <div key={index} className='border py-1  px-2 border-[#cc00ff] transition-all duration-600 hover:translate-y-4 hover:bg-purple-800/70 hover:cursor-pointer'>
              <button className='hover:cursor-pointer
              '
                onClick={() => {
                  document.getElementById(sub.sectionId)?.scrollIntoView({
                    behavior: "smooth"
                  })
                }}
              >{sub.title} </button>
            </div>
          ))}

        </div>

        <div className='relative flex items-center px-10 md:justify-end justify-center text-black md:top-70 top-85'>
          <div className='bg-white w-fit  p-4 rounded-lg shadow-purple-700/50 shadow-lg flex gap-1 items-center md:justify-center font-bold hover:scale-110 hover:cursor-pointer hover:bg-purple-800/50 hover:text-white transition-all duration-400 hover:shadow-none'>
            <button>Start Your Project</button>
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

      <section id='web' className='min-h-dvh'>
        <Webdev />
      </section>

      <section id='design' className='min-h-dvh'>
        <Powerpoint />
      </section>

      <section id='video' className='min-h-dvh'>
        <Videoediting />
      </section>

      <section id='forex' className=' min-h-dvh'>
        <Forex />
      </section>

      <section className='px-10 py-10 space-y-15'>
        <div className='flex items-center justify-center flex-col space-y-3'>
          <h1 className='font-bold text-2xl'>View Our Recent Works</h1>

          <span className='flex items-center text-lg gap-2 '>
            <p>Here are few past web development projects we've worked on. Want to see more? 
            </p>
            <a 
            href='mailto:veeracle7@gmail.com/'
            className='text-purple-600 underline cursor-pointer  font-bold'>Email us</a>
          </span>
        </div>

        <div className='flex items-center justify-center'>

          <div className='grid grid-cols-3 gap-5 space-y-2'>

            <div className="group h-60 w-90 relative rounded-xl bg-[url('/reu13.jpeg')] bg-center bg-cover bg-no-repeat shadow-sm cursor-pointer transitiona-all duration-1000 ease-out transition-all duration-500 ease-in-out  ">
              <div className='absolute top-0 left-0 bg-[#0B0B45]/80   h-60 w-90 rounded-xl'></div>
              <div className='absolute flex items-center justify-center flex-col w-90 h-60 top-0 text-white text-2xl font-bold'>
                <p>
                  Pastor Reuben
                </p>
                <p>
                  Official Website
                </p>
                <div className='border border-yellow-500 w-45 mt-2'></div>

              </div>

              <div className='absolute inset-0 group-hover:opacity-100 opacity-0 bg-[#0c0e31] p-4 group-hover:
        transition-all duration-500 ease-out rounded-lg flex flex-col items-center justify-center space-y-5'>
                <p className='text-white font-semibold text-lg text-center group-hover:animate-[slideIn_.5s_ease-out]'>Official platform of Pastor Reuben Wilson showcasing leadership, education, humanitarian outreach, scholarships, and national development.</p>

                <a href={"https://www.pastorreubenwilson.com/"}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border-2 text-white border-purple-700 hover:bg-purple-700 group-hover:animate-[slideIn_.5s_ease-out] font-semibold transition-all duration-600 rounded-full py-2 px-5'>Visit website</a>
              </div>

            </div>

            <div className="group h-60 w-90 relative rounded-xl bg-[url('/tradertalks1.jpeg')] bg-center bg-cover bg-no-repeat shadow-sm cursor-pointer transitiona-all duration-1000 ease-out transition-all duration-500 ease-in-out  ">
              <div className='absolute top-0 left-0 bg-green-300/80   h-60 w-90 rounded-xl'></div>
              <div className='absolute flex items-center justify-center flex-col w-90 h-60 top-0 text-white text-2xl font-bold'>

                <img src="/tradertalks.png" alt="images" className='h-20 w-20' />
                <span className='flex items-center text-4xl '>
                  <p className='text-green-800  '>Trader</p>
                  <p className='text-red-600'>Talks</p>

                </span>


              </div>

              <div className='absolute inset-0 group-hover:opacity-100 opacity-0 bg-[#0c0e31] p-4 group-hover:
        transition-all duration-500 ease-out rounded-lg flex flex-col items-center justify-center space-y-5'>
                <p className='text-white font-semibold text-lg text-center group-hover:animate-[slideIn_.5s_ease-out]'>A collaborative trading community for sharing Forex ideas, market insights, and learning together.</p>

                <a href={"https://trader-talks.vercel.app/"}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border-2 text-white border-purple-700 hover:bg-purple-700 group-hover:animate-[slideIn_.5s_ease-out] font-semibold transition-all duration-600 rounded-full py-2 px-5'>Visit website</a>
              </div>

            </div>

            <div className="group h-60 w-90 relative rounded-xl bg-[url('/ldc.jpg')] bg-center bg-cover bg-no-repeat shadow-sm cursor-pointer transitiona-all duration-1000 ease-out transition-all duration-500 ease-in-out  ">
              <div className='absolute top-0 left-0 bg-yellow-900/80   h-60 w-90 rounded-xl'></div>
              <div className='absolute flex items-center justify-center flex-col w-90 h-60 top-0 text-white text-2xl font-bold'>

                <span className=''>

                  <p className='text-7xl'>
                    LDC
                  </p>
                  <p className='text-xs text-yellow-300'>
                    Loan Deduction Calculator
                  </p>
                </span>


              </div>

              <div className='absolute inset-0 group-hover:opacity-100 opacity-0 bg-[#0c0e31] p-4 group-hover:
        transition-all duration-500 ease-out rounded-lg flex flex-col items-center justify-center space-y-5'>
                <p className='text-white font-semibold text-lg text-center group-hover:animate-[slideIn_.5s_ease-out]'>A digital tool that calculates estimated loan deductions from salary using loan amount, salary, and repayment duration.</p>

                <a href={"https://loan-deduction-calculator-qa2c.vercel.app/"}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='border-2 text-white border-purple-700 hover:bg-purple-700 group-hover:animate-[slideIn_.5s_ease-out] font-semibold transition-all duration-600 rounded-full py-2 px-5'>Visit website</a>
              </div>

            </div>
          </div>

        </div>
      </section>
    </main>
  )
}

export default page

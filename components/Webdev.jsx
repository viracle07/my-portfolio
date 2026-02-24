"use client"
import React from 'react'
import { TiBusinessCard } from "react-icons/ti";
import { SiHomepage, SiBrandfolder, SiOpenai } from "react-icons/si";
import { MdWeb, MdMobileFriendly, MdOutlineSpeed, MdIntegrationInstructions } from "react-icons/md";
import { TbSeo } from "react-icons/tb";






const Webdev = () => {
    return (
        <main>
            <section className='relative w-full h-screen'>
                {/* bacground video */}
                <video src="/webdev.mp4"
                    muted
                    loop
                    autoPlay
                    className='absolute top-0 left-0 object-cover h-full w-full' />

                <div className='absolute top-0 left-0 w-full h-full bg-black/80'></div>

                <div className='relative text-white top-50 flex flex-col items-center justify-center px-10 space-y-5 '>
                    <h1 className='text-6xl font-bold'>Web Development</h1>

                    <div className='text-center'>
                        <p>We build fast, SEO-optimized websites powered by React and Next.js — engineered to attract visitors, convert leads, and scale businesses. With integrated AI automation, your website doesn’t just exist — it follows up, nurtures prospects, and turns traffic into revenue.</p>
                    </div>

                </div>
            </section>

            <section className='bg-black min-h-dvh py-20 px-10 space-y-20'>
                <div>
                    <div className='text-white flex items-center justify-center gap-20 '>
                        <img src="webdevpic1.jpg" alt="image" className='h-60 w-100 rounded-md' />
                        <span className='w-150 border-l-2 pl-15 space-y-3 text-lg border-purple-700'>
                            <p>
                                Modern businesses don’t just need websites — they need intelligent digital systems. At Veeracle, we develop high-performance platforms designed for speed, search visibility, and seamless user experience.
                            </p>

                            <p>
                                Modern businesses don’t just need websites — they need intelligent digital systems. At Veeracle, we develop high-performance platforms designed for speed, search visibility, and seamless user experience.
                            </p>
                        </span>
                    </div>
                </div>

                <div className='border-b h-2 border-gray-300/18 shadow-md'></div>


                <div className='space-y-10 text-white'>
                    <h1 className='text-center  text-6xl text-purple-700 font-bold'>What We Deliver</h1>

                    <div className='grid grid-cols-3 gap-5'>
                        <div className='flex items-center gap-4 '>
                            <TiBusinessCard className='text-purple-700 text-2xl' />
                            <p>Custom Business Platforms</p>
                        </div>

                        <div className='flex items-center gap-4 '>
                            <SiHomepage
                                className='text-purple-700 text-2xl' />
                            <p>High-Converting Landing Pages</p>
                        </div>

                        <div className='flex items-center gap-4 '>
                            <SiBrandfolder className='text-purple-700 text-2xl' />
                            <p>Portfolio & Personal Brand Websites</p>
                        </div>

                        <div className='flex items-center gap-4 '>
                            <MdWeb className='text-purple-700 text-2xl' />
                            <p>Corporate & Scalable Web Systems</p>
                        </div>

                        <div className='flex items-center gap-4 '>
                            <MdMobileFriendly className='text-purple-700 text-2xl' />
                            <p>Responsive & Mobile-First Experiences</p>
                        </div>

                        <div className='flex items-center gap-4 '>
                            <TbSeo className='text-purple-700 text-2xl' />
                            <p>SEO-Optimized Architecture</p>
                        </div>

                        <div className='flex items-center gap-4 '>
                            <MdOutlineSpeed className='text-purple-700 text-2xl' />
                            <p>Performance & Speed Optimization</p>
                        </div>

                        <div className='flex items-center gap-4 '>
                            <SiOpenai className='text-purple-700 text-2xl' />
                            <p>AI Workflow Integration</p>
                        </div>

                        <div className='flex items-center gap-4 '>
                            <MdIntegrationInstructions className='text-purple-700 text-2xl' />
                            <p>CMS & Backend Integration (When Required)</p>
                        </div>
                    </div>
                </div>

                <div className='border-b h-2 border-gray-300/18 shadow-md'></div>

                <div className='text-white space-y-20'>
                    <div className='space-y-4'>
                        <h1 className='font-bold text-2xl text-center'>Technologies Used</h1>
                        <ul className='flex items-center gap-5 justify-center'>
                            <li>React</li>
                            <li>NextJS</li>
                            <li>Tailwind CSS</li>
                            <li>SEO Best Practices</li>
                            <li>Perfomance Optimization</li>
                            <li>API Integrations</li>
                        </ul>
                    </div>

                    <div className='space-y-2'>
                        <h1 className='text-center text-2xl font-bold'>Outcome / Results</h1>
                        <div className='flex items-center justify-center gap-40'>
                            <div>
                                <ul className='space-y-4'>
                                    <li>✔ Faster loading speed
                                    </li>
                                    <li>✔ Higher conversion rates
                                    </li>
                                    <li>✔ Better search engine visibility
                                    </li>
                                    <li>✔ Stronger brand credibility
                                    </li>
                                    <li>✔ Scalable digital infrastructure</li>
                                </ul>
                            </div>

                            <img src="/webdev3.jpg" alt="image" className='h-60 w-80 rounded-md' />
                        </div>
                    </div>

                </div>

            </section>
        </main>
    )
}

export default Webdev

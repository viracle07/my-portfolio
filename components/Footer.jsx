import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaTiktok, FaLinkedin, FaYoutube  } from "react-icons/fa";





const Footer = () => {
    return (
        <main className=' bg-black pb-20'>
            <section className='pt-45 flex items-center justify-center flex-col space-y-20'>
                <div className='text-[#cc00ff] font-bold text-xl flex items-center flex-col space-y-10'>
                    <Link href="#" className='flex items-center gap-1 '>
                        <Image
                            height={800}
                            width={800}
                            alt='logo'
                            src={"/logo4.png"}
                            className='h-15 w-15 rounded-full'
                        />
                        <p>Veeracle</p>
                    </Link>

                    <div className='text-center text-white text-2xl'>
                        <p>Engineering Digital Excellence...
                        </p>
                    </div>
                </div>

                <div className='grid grid-cols-6 gap-7'>
                    <a href={"https://www.instagram.com/veeracle_groups?igsh=MWIycmowdDl6bnZtOA=="} target='_blank'
                    rel='noopener noreferrer'
                      className='border-2 h-12 w-12 rounded-full border-purple-400/50 text-white flex items-center justify-center text-2xl hover:scale-110 transition-all duration-500 group relative cursor-pointer hover:bg-purple-600 '>

                        <AiFillInstagram />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2
  bg-purple-900 text-white text-xs px-3 py-1 rounded-md
  opacity-0 translate-y-2
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-300 whitespace-nowrap">
                            Instagram
                        </span>
                    </a>

                    <a href={"https://x.com/VeeracleGroup"} target='_blank'
                    rel='noopener noreferrer'
                      className='border-2 h-12 w-12 rounded-full border-purple-400/50 text-white flex items-center justify-center text-2xl hover:scale-110 transition-all duration-500 group relative cursor-pointer hover:bg-purple-600 '>

                        <FaXTwitter />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2
  bg-purple-900 text-white text-xs px-3 py-1 rounded-md
  opacity-0 translate-y-2
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-300 whitespace-nowrap">
                            Twitter(X)
                        </span>
                    </a>
                    <a href={"https://www.facebook.com/profile.php?id=61578800090078"} target='_blank'
                    rel='noopener noreferrer'
                      className='border-2 h-12 w-12 rounded-full border-purple-400/50 text-white flex items-center justify-center text-2xl hover:scale-110 transition-all duration-500 group relative cursor-pointer hover:bg-purple-600 '>

                        <FaFacebookF />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2
  bg-purple-900 text-white text-xs px-3 py-1 rounded-md
  opacity-0 translate-y-2
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-300 whitespace-nowrap">
                            Facebook
                        </span>
                    </a>

                    <a href={"https://www.tiktok.com/@veeraclegroup"} target='_blank'
                    rel='noopener noreferrer'
                      className='border-2 h-12 w-12 rounded-full border-purple-400/50 text-white flex items-center justify-center text-2xl hover:scale-110 transition-all duration-500 group relative cursor-pointer hover:bg-purple-600 '>

                        <FaTiktok />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2
  bg-purple-900 text-white text-xs px-3 py-1 rounded-md
  opacity-0 translate-y-2
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-300 whitespace-nowrap">
                            TikTok
                        </span>
                    </a>
                    <a href={"https://www.linkedin.com/in/veeracle-groups-b532733b7?utm_source=share_via&utm_content=profile&utm_medium=member_android"} target='_blank'
                    rel='noopener noreferrer'
                      className='border-2 h-12 w-12 rounded-full border-purple-400/50 text-white flex items-center justify-center text-2xl hover:scale-110 transition-all duration-500 group relative cursor-pointer hover:bg-purple-600 '>

                        <FaLinkedin />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2
  bg-purple-900 text-white text-xs px-3 py-1 rounded-md
  opacity-0 translate-y-2
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-300 whitespace-nowrap">
                            LinkedIn
                        </span>
                    </a>
                    <a href={"http://www.youtube.com/@Veeracle"} target='_blank'
                    rel='noopener noreferrer'
                      className='border-2 h-12 w-12 rounded-full border-purple-400/50 text-white flex items-center justify-center text-2xl hover:scale-110 transition-all duration-500 group relative cursor-pointer hover:bg-purple-600 '>

                        <FaYoutube />
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2
  bg-purple-900 text-white text-xs px-3 py-1 rounded-md
  opacity-0 translate-y-2
  group-hover:opacity-100 group-hover:translate-y-0
  transition-all duration-300 whitespace-nowrap">
                            Youtube
                        </span>
                    </a>

                </div>

                <div className='text-white'>
                    <p>&copy; 2026 Veeracle. All rights reserved.</p>
                </div>
            </section>

        </main>
    )
}

export default Footer

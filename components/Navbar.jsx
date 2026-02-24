"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { RxDropdownMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [navOpen, setNavOpen] = useState(false)

    const mobileNav = [
        { title: "Home", url: "/" },
        { title: "About Us", url: "/" },
        { title: "Contact Us", url: "/" },
        { title: "FAQS", url: "/" },
    ]

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <main className={`w-full flex items-center justify-between md:px-15 px-4 z-50 transition-all duration-500 ${isScrolled
            ? "fixed top-0 bg-black/80 backdrop-blur-md shadow-lg py-3"
            : "absolute top-0 bg-transparent py-6"
            }`}>

            {/* Logo */}
            <div className='text-[#cc00ff] font-bold text-lg'>
                <Link href="#" className='flex items-center gap-1'>
                    <Image
                        height={800}
                        width={800}
                        alt='logo'
                        src={"/logo4.png"}
                        className='h-12 w-12 rounded-full'
                    />
                    <p>Veeracle</p>
                </Link>
            </div>

            {/* Desktop Nav */}
            <div className='flex items-center gap-10 bg-white rounded-md px-5 py-2 text-black font-bold max-md:hidden'>
                <ul className='flex items-center gap-7'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
                <div className='bg-black rounded-md text-white px-3 py-2'>
                    <p>FAQS</p>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden absolute top-full left-0 w-full h-screen bg-black/95 backdrop-blur-md flex flex-col items-center py-20 space-y-8 text-white font-semibold transition-all duration-500 ease-in-out
                ${navOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-10 pointer-events-none"
                }`}>

                {mobileNav.map((navItems, index) => (
                    <Link
                        key={index}
                        href={navItems.url}
                        onClick={() => setNavOpen(false)}
                        style={{
                            transitionDelay: navOpen
                                ? `${index * 400}ms`
                                : `${(mobileNav.length - index - 1) * 150}ms`
                        }}
                        className={`text-2xl transition-all duration-500 ease-out
                ${navOpen
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-x-7"
                            }`}
                    >
                        {navItems.title}
                    </Link>
                ))}
            </div>

            {/* Animated Menu Icon */}
            <div className='relative text-white text-4xl md:hidden'>
                <button
                    onClick={() => setNavOpen(!navOpen)}
                    className='relative w-10 h-10 flex items-center justify-center'
                >

                    {/* Menu Icon */}
                    <RxDropdownMenu
                        className={`absolute transition-all duration-500 ease-in-out
                        ${navOpen
                                ? "opacity-0 rotate-90 scale-75"
                                : "opacity-100 rotate-0 scale-100"
                            }`}
                    />

                    {/* Close Icon */}
                    <IoMdClose
                        className={`absolute transition-all duration-500 ease-in-out
                        ${navOpen
                                ? "opacity-100 rotate-0 scale-100"
                                : "opacity-0 -rotate-90 scale-75"
                            }`}
                    />
                </button>
            </div>

        </main>
    )
}

export default Navbar
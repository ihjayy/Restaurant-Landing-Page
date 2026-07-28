import { useState } from "react";
import type { NavLink } from "../types";


const navLinks: NavLink[] = [
    {label: "Home", href: "#home"},
    {label: "Menu", href: "#menu"},
    {label: "About", href: "#about"},
    {label: "Contact", href: "#contact"},
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#1C1410]/95 backdrop-blur-sm shadow-lg">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <a href="#home" className="flex items-center gap-2">
                    <span className="font-serif text-2xl font-bold tracking-wide text-[#D4A017]">
                        Restaurant
                    </span>
                </a>

                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="text-sm font-medium text-[#F5EDE0] transition hover: text-[#D4A017]">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <a href="#menu" className="hidden round-full bg-[#C1440E] px-5 py-2 text-sm font-semibold text-[#F5EDE0] transition hover:bg-[#A83A0C] md:inline-block">
                    Order Now
                </a>

                <button className="text-[#F5EDE0] md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                            ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                            )}
                        </svg>
                </button>
            </nav>

            {isMenuOpen && (
                <ul className="flex flex-col gap-4 bg-[#1C1410] px-6 pb-6 md:hidden">
                   {navLinks.map((link) => (
                    <li key={link.label}>
                        <a href={link.href} className="text-[#F5EDE0]" onClick={() => setIsMenuOpen(false)}>
                            {link.label}
                        </a>
                    </li>
                   ))}
                   <a href="#menu" className="w-fit rounded-full bg-[#C1440E] px-5 py-2 text-sm font-semibold text-[#F5EDE0]" onClick={() => setIsMenuOpen(false)}>
                    Order Now
                    </a> 
                </ul>
            )}
        </header>
    );
}

export default Navbar;
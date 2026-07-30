interface FooterLink {
    label: string;
    href: string;
}

const quickLinks: FooterLink[] = [
    {label: "Home", href: "#home"},
    {label: "Menu", href: "#menu"},
    {label: "About", href: "#about"},
    {label: "Contact", href: "contact"}
];

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#120D0A] py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
               <p className="font-serif text-lg font-bold text-[#D4A017]">
                    Restaurant
               </p> 

               <ul className="flex flex-wrap justify-center gap-6">
                {quickLinks.map((link) => (
                    <li key={link.label}>
                        <a href={link.href} className="text-sm text-[#F5RFR0]/70 transition hover:text-[#F5EDE0]">
                            {link.label}
                        </a>
                    </li>
                ))}
               </ul>
                <div className="flex gap-4">
                    <a href="#" aria-label="Facebook" className="text-[#F5EDE0]/70 hover:text-[#F5EDE0]">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.2.19 2.2.19v2.43h-1.24c-1.22 0-1.6.76-1.6 1.53V12h2.72l-.44 2.89h-2.28v6.98A10 10 0 0 0 22 12Z" />
                        </svg>
                    </a>
                    <a href="#" aria-label="Instagram" className="text-[#F5EDE0]/70 hover:text-[#F5EDE0]">
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.6 1.8c.46-.16 1.26-.35 2.43-.4C9.3 1.34 9.68 1.33 12 1.33Zm0 1.8c-3.15 0-3.5.01-4.73.07-.96.04-1.48.2-1.82.34-.46.18-.79.39-1.13.73-.34.34-.55.67-.73 1.13-.14.34-.3.86-.34 1.82-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.04.96.2 1.48.34 1.82.18.46.39.79.73 1.13.34.34.67.55 1.13.73.34.14.86.3 1.82.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.82-.34.46-.18.79-.39 1.13-.73.34-.34.55-.67.73-1.13.14-.34.3-.86.34-1.82.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.82a3.1 3.1 0 0 0-.73-1.13 3.1 3.1 0 0 0-1.13-.73c-.34-.14-.86-.3-1.82-.34C15.5 4.01 15.15 4 12 4Zm0 3.65a4.35 4.35 0 1 1 0 8.7 4.35 4.35 0 0 1 0-8.7Zm0 1.8a2.55 2.55 0 1 0 0 5.1 2.55 2.55 0 0 0 0-5.1Zm5.54-2a1.02 1.02 0 1 1-2.04 0 1.02 1.02 0 0 1 2.04 0Z" />
                        </svg>
                    </a>
                </div>
            </div>
            <p className="mt-6 text-center text-xs text-[#F5EDE0]/40">
                © {year} Restaurant. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
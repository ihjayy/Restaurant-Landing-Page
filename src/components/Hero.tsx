function Hero() {
    return (
        <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#234F3D]">
            <img src="https://images.unsplash.com/photo-1710424364792-b818376a509c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1" alt="A person sitting at a table in a restaurant" className="absolute inset-0 h-full w-full object-cover opacity-60"/>
            <div className="relative z-10 max-w-6xl px-6 sm:px-8 md:px-12 lg:px-20 xl:px-32 py-24 text-left">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B65A3A]">
                    Taste Tradition.   
                </p>
                <h1 className="font-serif text-4xl font-bold leading-tight text-[#F8F3E8] sm:text-5xl md:text-6xl">
                    Lasalin
                </h1>
                <p className="mt-4 max-w-xl text-lg text-[#F8F3E8]/90 md:text-xl">
                    Experience the warmth of authentic Filipino cuisine, freshly prepared 
                    every day with passion and tradition.
                </p>
                <p className="mt-2 max-w-xl text-[#F5EDE0]/70">
                    Open daily in the heart of the city. Walk-ins welcome, reservations
                    recommended on weekends.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                    <a href="#menu" className="rounded-full bg-[#B65A3A] px-8 py-3 text-center font-semibold text-[#F8F3E8] shadow-lg transition hover:bg-[#C89B3C]">
                        View Menu
                    </a>
                    <a href="#contact" className="rounded-full border-2 border-[#F8F3E8] px-8 py-3 text-center font-semibold text-[#F8F3E8] transition hover:bg-[#F8F3E8] hover:text-[#C89B3C]">
                        Book a Table
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
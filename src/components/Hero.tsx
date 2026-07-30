function Hero() {
    return (
        <section id="home" className="relative flex min-h-[95vh] items-center overflow-hidden bg-[#1C1410]">
            <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80" alt="Assorted Filipino dishes on a table" className="absolute inset-0 h-full w-full object-cover opacity-40"/>
            <div className="relative z-10 max-w-6xl px-60 py-24 text-left md:text-left">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
                    Turo-turo, elevated   
                </p>
                <h1 className="font-serif text-4xl font-bold leading-tight text-[#F5EDE0] sm:text-5xl md:text-6xl">
                    Restaurant
                </h1>
                <p className="mt-4 max-w-xl text-lg text-[#F5EDE0]/90 md:text-xl">
                    Home-style Filipino comfort food, cooked the way Lola used to make
                    it — grilled over real charcoal, simmered low and slow.
                </p>
                <p className="mt-2 max-w-xl text-[#F5EDE0]/70">
                    Open daily in the heart of the city. Walk-ins welcome, reservations
                    recommended on weekends.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                    <a href="#menu" className="rounded-full bg-[#C1440E] px-8 py-3 text-center font-semibold text-[#F5EDE0] shadow-lg transition hover:bg-[#A83A0C]">
                        View Menu
                    </a>
                    <a href="#contact" className="rounded-full border-2 border-[#F5EDE0] px-8 py-3 text-center font-semibold text-[#F5EDE0] transition hover:bg-[#F5EDE0] hover:text-[#1C1410]">
                        Book a Table
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
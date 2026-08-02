import {testimonials} from "../data/testimonials";

function Testimonials() {
    return (
        <section className="bg-[#F8F3E8] py-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#B65A3A]">
                        Testimonials
                    </p>
                    <h2 className="mt-2 font-serif text-3xl font-bold text-[#234F3D] sm:text-4xl">
                        What Our Customers Say
                    </h2>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                    {testimonials.map((t) => (
                        <div key={t.id} className="rounded-2xl bg-white p-6 shadow-md">
                            <div className="flex items-center gap-3">
                                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover"/>
                                <div>
                                    <p className="font-semibold text-[#1C1410]">{t.name}</p>
                                    <div className="flex text-[#D4A017]">
                                        {Array.from({length: 5}).map((_, index) => (
                                            <span key={index}>{index < t.rating ? "★" : "☆"}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="mt-4 text-sm leading-relaxed text-[#1C1410]/70">"{t.review}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
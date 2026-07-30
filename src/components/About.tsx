interface Feature {
    title: string;
    description: string;
    icon: string;
}

const features: Feature[] = [
    {
        title: "Fresh Ingredients",
        description: "We buy from the local palengke every morning, no exceptions.",
        icon: "🌿",
    },
    {
        title: "Experienced Chef",
        description: "Our kitchen team has over 40 combined years cooking Filipino food.",
        icon: "👨‍🍳",
    },
    {
        title: "Fast Service",
        description: "Most orders reach your table in under 15 minutes.",
        icon: "⏱️",
    }
];

function About() {
    return (
        <section id="about" className="bg-[#1C1410] py-20">
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
                <img src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=900&q=80" alt="Chef preparing food in the kitchen" className="h-full w-full rounded-2xl object-cover shadow-xl" />

                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
                        Our Story
                    </p>
                    <h2 className="mt-2 font-serif text-3xl font-bold text-[#F5EDE0] sm:text-4xl">
                        From a small turo-turo to a family favorite
                    </h2>
                    <p className="mt-4 leading-relaxed text-[#F5EDE0]/80">
                        Restaurant started in 2026 as a tiny four-table eatery run by
                        two siblings who missed their mother's cooking. A decade later,
                        we're still using her recipes — just with a bigger kitchen and a
                        few more chairs.
                    </p>
                    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.title}>
                                <span className="text-3xl">{feature.icon}</span>
                                <h3 className="mt-2 font-semibold text-[#F5EDE0]">
                                    {feature.title}
                                </h3>
                                <p className="mt-1 text-sm text-[#F5EDE0]/70">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
import {contactDetails} from "../data/contacts";

function Contact() {
    return(
        <section id="contact" className="bg-[#1C1410] py-20">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4A017]">
                    Visit us
                </p>
                <h2 className="mt-2 font-serif text-3xl font-bold text-[#F5EDE0] sm:text-4xl">
                   Get in Touch 
                </h2>

                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                    {contactDetails.map((detail) => (
                        <div key={detail.label} className="rounded-2xl bg-[#F5EDE0]/5 p-6 text-left">
                            <span className="text-2xl">{detail.icon}</span>
                            <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-[#D4A017]">
                                {detail.label}
                            </p>
                            <p className="mt-1 text-[#F5EDE0]">{detail.value}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}

export default Contact;
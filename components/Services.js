const services = [
  {
    number: "01",
    title: "Anxiety Therapy in Santa Monica",
    text: "Work through anxiety, panic, overthinking, and overwhelming stress with a warm, collaborative approach tailored to your experiences and goals.",
  },
  {
    number: "02",
    title: "Trauma Therapy in Santa Monica",
    text: "Explore the impact of difficult past experiences in a carefully paced environment focused on safety, stabilization, and feeling more grounded in daily life.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism Therapy",
    text: "Create healthier patterns around high internal pressure, professional burnout, and perfectionism while reconnecting with yourself and what matters to you.",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-[#E7DED1]">
      <div className="container-custom">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Areas of support</p>

          <h2 className="serif mt-4 text-4xl text-[#29443D] md:text-5xl">
            Therapy that meets you where you are
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#40504B]">
            Support for adults navigating anxiety, trauma, burnout, and the
            pressure that can come with always expecting more from yourself.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="
                group
                rounded-3xl
                border
                border-[#E7DED1]
                bg-white
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >
              <span className="text-sm font-semibold text-[#9AAA9B]">
                {service.number}
              </span>

              <h3 className="serif mt-8 text-2xl leading-tight text-[#29443D]">
                {service.title}
              </h3>

              <p className="mt-5 leading-7 text-[#40504B]">
                {service.text}
              </p>

              <a
                href="#contact"
                className="
                  mt-8
                  inline-block
                  text-sm
                  font-bold
                  text-[#29443D]
                  transition-all
                  duration-300
                  hover:translate-x-1
                "
              >
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
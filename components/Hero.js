export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#f7f3ed]">
      <div className="container-custom grid min-h-[720px] items-center gap-12 py-20 lg:grid-cols-2">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6">
            Therapy for adults · Santa Monica & California
          </p>

          <h1 className="serif text-5xl leading-[1.08] text-[#29443D] sm:text-6xl lg:text-7xl">
            Anxiety & Trauma Therapist in Santa Monica
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#40504B]">
            You deserve a safe and supportive space to work through anxiety,
            trauma, burnout, and the pressure of always having to hold
            everything together.
          </p>

          <p className="mt-4 max-w-xl text-lg leading-8 text-[#40504B]">
            Dr. Maya Reynolds offers warm, collaborative therapy for adults
            in Santa Monica and throughout California through in-person and
            secure telehealth sessions.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="
                rounded-full
                bg-[#29443D]
                px-8
                py-4
                text-center
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#203832]
                hover:shadow-lg
              "
            >
              Schedule a Consultation
            </a>

            <a
              href="#about"
              className="
                rounded-full
                border
                border-[#9AAA9B]
                px-8
                py-4
                text-center
                font-semibold
                text-[#29443D]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#E7DED1]
              "
            >
              Learn About My Approach
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#756557]">
            <span>✓ In-person therapy</span>
            <span>✓ California telehealth</span>
            <span>✓ Adults</span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-[#d8dfd5]" />

          <div className="relative overflow-hidden rounded-[45%_45%_10%_10%] bg-[#ded4c8]">
            <img
              src="/images/maya.png"
              alt="Dr. Maya Reynolds, PsyD"
              className="
                h-[600px]
                w-full
                object-cover
                transition-transform
                duration-700
                hover:scale-[1.02]
              "
            />
          </div>

          <div className="absolute -bottom-6 -left-6 max-w-xs rounded-2xl bg-white p-6 shadow-xl">
            <p className="serif text-xl text-[#29443D]">
              A grounded space for meaningful change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
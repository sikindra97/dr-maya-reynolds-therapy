export default function Office() {
  return (
    <section id="office" className="section-padding bg-[#f7f3ed]">
      <div className="container-custom">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* Left Content */}
          <div>
            <p className="eyebrow">Our Office</p>

            <h2 className="serif mt-4 text-4xl leading-tight text-[#29443D] md:text-5xl">
              A calm space for healing and reflection.
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#40504B]">
              Dr. Maya Reynolds offers in-person therapy from her Santa
              Monica office—a quiet, private space designed to feel calm and
              grounding, with natural light and a comfortable, uncluttered
              environment.
            </p>

            {/* Address */}
            <div className="mt-8 rounded-2xl border border-[#E7DED1] bg-white p-6 transition-all duration-300 hover:shadow-md">
              <p className="text-sm font-bold uppercase tracking-[1px] text-[#9AAA9B]">
                Santa Monica Office
              </p>

              <p className="mt-2 text-[#40504B]">
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>
            </div>

            <p className="mt-5 text-[#40504B]">
              In-person sessions are available from the Santa Monica office,
              with secure telehealth sessions also available for clients
              located in California.
            </p>
          </div>

          {/* Office Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded-3xl">
              <img
                src="/images/office1.jpeg"
                alt="Dr. Maya Reynolds therapy office"
                className="h-[420px] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

            <div className="overflow-hidden rounded-3xl pt-10">
              <img
                src="/images/office2.jpeg"
                alt="Therapy office interior"
                className="h-[420px] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function CTA() {
  return (
    <section id="contact" className="bg-[#E7DED1] py-24">
      <div className="container-custom">
        <div
          className="
            mx-auto
            max-w-4xl
            rounded-[35px]
            bg-[#29443D]
            px-7
            py-16
            text-center
            text-white
            md:px-16
          "
        >
          <p className="text-sm font-bold uppercase tracking-[2px] text-[#C5D1C6]">
            Take the next step
          </p>

          <h2 className="serif mt-5 text-4xl md:text-5xl">
            You don’t have to figure everything out on your own.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#D9E0DA]">
            If you’re looking for a therapist who combines practical tools
            with depth-oriented work, reach out to learn more about working
            together.
          </p>

          <button
            type="button"
            className="
              mt-9
              rounded-full
              bg-white
              px-8
              py-4
              font-semibold
              text-[#29443D]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#FCFAF6]
              hover:shadow-lg
            "
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
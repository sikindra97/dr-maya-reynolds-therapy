export default function Therapist() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom grid items-center gap-14 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[30px] bg-[#E7DED1]">
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

        <div>
          <p className="eyebrow">Meet Dr. Maya Reynolds</p>

          <h2 className="serif mt-4 text-4xl text-[#29443D] md:text-5xl">
            Therapy that makes room for both depth and practical change.
          </h2>

          <div className="mt-7 space-y-5 text-lg leading-8 text-[#40504B]">
            <p>
              I’m a licensed clinical psychologist based in Santa Monica,
              California, offering therapy for adults who feel overwhelmed by
              anxiety, stress, or the lingering effects of past experiences.
            </p>

            <p>
              My work often focuses on anxiety, panic, trauma, burnout, and
              perfectionism. I work with adults who may appear functional on
              the outside while quietly struggling with worry, tension,
              exhaustion, or a sense of always bracing for something to go
              wrong.
            </p>

            <p>
              I believe therapy works best when clients feel respected,
              understood, and actively involved in the process.
            </p>
          </div>

          <a
            href="#contact"
            className="
              mt-8
              inline-block
              rounded-full
              bg-[#29443D]
              px-7
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#203832]
              hover:shadow-lg
            "
          >
            Connect With Dr. Reynolds
          </a>
        </div>
      </div>
    </section>
  );
}
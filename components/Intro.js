export default function Intro() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">A space to slow down</p>

          <h2 className="serif mt-4 text-4xl leading-tight text-[#29433d] md:text-5xl">
            You can look like you have it all together and still feel
            overwhelmed inside.
          </h2>
        </div>

        <div className="space-y-6 text-lg leading-8 text-[#626762]">
          <p>
            Many of the people I work with are high-achieving, thoughtful,
            and self-aware—but internally feel exhausted, stuck in
            overthinking, or emotionally on edge.
          </p>

          <p>
            You may be dealing with constant worry, tension in your body,
            difficulty sleeping, or the lingering effects of past experiences.
            You may also feel pressure to keep pushing even when your current
            way of living no longer feels sustainable.
          </p>

          <p>
            Therapy can be a place to slow down, understand what is happening,
            reconnect with yourself, and develop more sustainable ways of
            living and working.
          </p>
        </div>
      </div>
    </section>
  );
}
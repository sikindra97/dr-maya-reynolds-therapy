export default function Approach() {
  const approaches = [
    {
      title: "CBT",
      text: "Practical tools for understanding thoughts, emotions, and patterns.",
    },
    {
      title: "EMDR",
      text: "A trauma-focused approach integrated into carefully paced therapy.",
    },
    {
      title: "Mindfulness",
      text: "Developing greater awareness and connection with the present.",
    },
    {
      title: "Body-based work",
      text: "Understanding the relationship between emotional and physical experiences.",
    },
  ];

  return (
    <section id="approach" className="section-padding bg-[#29443D] text-white">
      <div className="container-custom grid gap-14 lg:grid-cols-2 lg:items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[2px] text-[#C5D1C6]">
            How we work together
          </p>

          <h2 className="serif mt-5 text-4xl leading-tight md:text-5xl">
            Warm, collaborative, and grounded.
          </h2>

          <p className="mt-7 text-lg leading-8 text-[#D9E0DA]">
            Sessions are structured enough to feel supportive while still
            leaving space for reflection and depth. My goal is to understand
            both the emotional and physiological sides of what you are
            experiencing.
          </p>

          <p className="mt-5 text-lg leading-8 text-[#D9E0DA]">
            Together, we can work toward greater insight, resilience, and a
            stronger relationship with yourself over time.
          </p>
        </div>

        {/* Approach Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {approaches.map((approach) => (
            <article
              key={approach.title}
              className="
                rounded-3xl border border-white/15 bg-white/10 p-7
                transition-all duration-300
                hover:-translate-y-1 hover:bg-white/[0.14] hover:shadow-lg
              "
            >
              <div className="mb-5 h-1 w-10 rounded-full bg-[#9AAA9B]" />

              <h3 className="serif text-2xl">{approach.title}</h3>

              <p className="mt-3 leading-7 text-[#D9E0DA]">
                {approach.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
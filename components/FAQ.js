const faqs = [
  {
    question: "What can I expect from therapy with Dr. Maya Reynolds?",
    answer:
      "Therapy is warm, collaborative, and grounded. Sessions are structured enough to feel supportive while leaving room for reflection and depth. The approach is tailored to your experiences and goals.",
  },
  {
    question: "What issues do you work with?",
    answer:
      "Dr. Reynolds often works with adults experiencing anxiety, panic, trauma, burnout, perfectionism, high internal pressure, and the lingering effects of difficult past experiences.",
  },
  {
    question: "What therapy approaches do you use?",
    answer:
      "Her work integrates cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    question: "Do you offer online therapy?",
    answer:
      "Yes. Dr. Reynolds offers secure telehealth sessions for clients located in California, in addition to in-person therapy from her Santa Monica office.",
  },
  {
    question: "Where is the office located?",
    answer:
      "The office is located at 123th Street 45 W, Santa Monica, CA 90401.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="eyebrow">Frequently asked questions</p>

            <h2 className="serif mt-4 text-4xl text-[#29443D] md:text-5xl">
              A few things you may be wondering
            </h2>
          </div>

          <div className="mt-12 divide-y divide-[#E7DED1]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-6"
              >
                <summary
                  className="
                    flex
                    cursor-pointer
                    list-none
                    items-center
                    justify-between
                    gap-5
                    text-lg
                    font-semibold
                    text-[#29443D]
                  "
                >
                  {faq.question}

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#9AAA9B]
                      text-xl
                      font-normal
                      text-[#29443D]
                      transition-all
                      duration-300
                      group-open:rotate-45
                      group-open:bg-[#E7DED1]
                    "
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 max-w-2xl leading-7 text-[#40504B]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
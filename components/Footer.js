export default function Footer() {
  return (
    <footer className="bg-[#203832] text-white">
      <div className="container-custom grid gap-12 py-16 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="serif text-2xl">Dr. Maya Reynolds, PsyD</h3>

          <p className="mt-4 max-w-sm leading-7 text-[#C9D3CD]">
            Warm, collaborative therapy for adults navigating anxiety, trauma,
            burnout, perfectionism, and high internal pressure.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold">Explore</h4>

          <nav className="mt-4 flex flex-col gap-3 text-[#C9D3CD]">
            <a
              href="#about"
              className="transition-colors duration-300 hover:text-white"
            >
              About
            </a>

            <a
              href="#services"
              className="transition-colors duration-300 hover:text-white"
            >
              Services
            </a>

            <a
              href="#approach"
              className="transition-colors duration-300 hover:text-white"
            >
              Approach
            </a>

            <a
              href="#office"
              className="transition-colors duration-300 hover:text-white"
            >
              Our Office
            </a>

            <a
              href="#faq"
              className="transition-colors duration-300 hover:text-white"
            >
              FAQ
            </a>
          </nav>
        </div>

        {/* Office */}
        <div>
          <h4 className="font-semibold">Office</h4>

          <p className="mt-4 leading-7 text-[#C9D3CD]">
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
          </p>

          <p className="mt-4 leading-7 text-[#C9D3CD]">
            In-person therapy
            <br />
            Secure telehealth throughout California
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 text-center text-sm text-[#AEBBB3]">
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. Fictional
          therapist profile created for the Grow My Therapy assignment.
        </div>
      </div>
    </footer>
  );
}
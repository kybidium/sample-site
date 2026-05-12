const heroImage =
  "https://images.unsplash.com/photo-1723468366036-c5598c8e9786?auto=format&fit=crop&fm=jpg&q=80&w=2400";

const projectImages = [
  {
    title: "Paver Patio Reset",
    location: "Backyard living space",
    image:
      "https://images.unsplash.com/photo-1723641307047-5105f5d93627?auto=format&fit=crop&fm=jpg&q=80&w=1200",
  },
  {
    title: "Irrigation Tune-Up",
    location: "Lawn health and coverage",
    image:
      "https://images.unsplash.com/photo-1770664945615-52203ab54c88?auto=format&fit=crop&fm=jpg&q=80&w=1200",
  },
  {
    title: "Courtyard Planting",
    location: "Low-maintenance beds",
    image:
      "https://images.unsplash.com/photo-1762461838534-ca26dfa134a8?auto=format&fit=crop&fm=jpg&q=80&w=1200",
  },
];

const services = [
  "Landscape design",
  "Paver patios",
  "Mulch and bed refreshes",
  "Lawn care",
  "Drainage fixes",
  "Seasonal cleanups",
];

const proofPoints = [
  { value: "24 hr", label: "estimate follow-up" },
  { value: "5 yr", label: "workmanship warranty" },
  { value: "199+", label: "local yards improved" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f6f1] text-[#172018]">
      <section className="relative isolate min-h-[92vh] overflow-hidden">
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,23,15,.86),rgba(12,23,15,.58)_44%,rgba(12,23,15,.14))]" />

        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 text-white sm:px-8">
          <a href="#" className="text-lg font-black tracking-tight">
            Joe&apos;s Landscaping Service
          </a>
          <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#services">Services</a>
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#estimate">Estimate</a>
          </nav>
          <a
            className="rounded-md bg-[#e7b85f] px-4 py-2 text-sm font-black text-[#172018] transition hover:bg-[#f2ca7a]"
            href="tel:+13175550184"
          >
            (317) 555-0184
          </a>
        </header>

        <div className="mx-auto flex min-h-[calc(92vh-84px)] w-full max-w-7xl items-center px-5 pb-14 pt-10 sm:px-8">
          <div className="max-w-3xl text-white">
            <p className="mb-4 w-fit border-l-4 border-[#e7b85f] bg-white/10 px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] backdrop-blur">
              Design, build, maintain
            </p>
            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              Outdoor spaces built cleanly, priced clearly, and made to last.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86">
              Residential landscaping, patios, drainage, and seasonal care for
              homeowners who want the yard handled without chasing contractors.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#estimate"
                className="rounded-md bg-[#e7b85f] px-6 py-4 text-center text-base font-black text-[#172018] transition hover:bg-[#f2ca7a]"
              >
                Get a Free Estimate
              </a>
              <a
                href="#work"
                className="rounded-md border border-white/45 px-6 py-4 text-center text-base font-black text-white transition hover:bg-white/12"
              >
                View Recent Work
              </a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
              {proofPoints.map((point) => (
                <div
                  className="border-l border-white/25 bg-white/10 p-4 backdrop-blur"
                  key={point.label}
                >
                  <div className="text-3xl font-black text-[#e7b85f]">
                    {point.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-white/82">
                    {point.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="border-y border-[#d7d0bf] bg-[#fffdf7] px-5 py-16 sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.86fr_1.14fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#69715b]">
              What we handle
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-black tracking-normal sm:text-5xl">
              One crew for the parts of the yard that make the whole property
              feel finished.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div
                className="flex min-h-20 items-center justify-between border border-[#d7d0bf] bg-white px-5 py-4"
                key={service}
              >
                <span className="text-lg font-extrabold">{service}</span>
                <span className="text-xl font-black text-[#9b5d32]">+</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.16em] text-[#69715b]">
                Recent work
              </p>
              <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-normal sm:text-5xl">
                Practical upgrades with a polished finish.
              </h2>
            </div>
            <a
              href="mailto:estimates@joeslandscaping.example?subject=Project%20photo%20request"
              className="w-fit rounded-md border border-[#172018] px-5 py-3 text-sm font-black transition hover:bg-[#172018] hover:text-white"
            >
              Ask for more photos
            </a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {projectImages.map((project) => (
              <article
                className="overflow-hidden rounded-md border border-[#d7d0bf] bg-white"
                key={project.title}
              >
                <div
                  className="h-72 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                  aria-hidden="true"
                />
                <div className="p-5">
                  <h3 className="text-xl font-black">{project.title}</h3>
                  <p className="mt-1 text-sm font-semibold text-[#69715b]">
                    {project.location}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="process"
        className="bg-[#1d2a20] px-5 py-20 text-white sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#e7b85f]">
              How it works
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-normal sm:text-5xl">
              A clear path from first call to finished yard.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              ["01", "Walk the property", "We measure, inspect drainage, and talk through how you actually use the space."],
              ["02", "Price the plan", "You get a plain-language scope with options, timing, and material notes."],
              ["03", "Build and clean up", "The crew protects access paths, keeps the site tidy, and leaves the yard ready to use."],
            ].map(([number, title, copy]) => (
              <div
                className="grid gap-4 border-t border-white/20 py-6 sm:grid-cols-[72px_1fr]"
                key={number}
              >
                <div className="text-3xl font-black text-[#e7b85f]">
                  {number}
                </div>
                <div>
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-2 max-w-2xl leading-7 text-white/76">
                    {copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="estimate" className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#69715b]">
              Free estimate
            </p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black tracking-normal sm:text-5xl">
              Send a few details and Joe&apos;s team will follow up within one
              business day.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#4c5548]">
              Include your address, rough project type, timeline, and any photos
              you already have. For urgent cleanup or drainage issues, call
              directly.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="tel:+13175550184"
                className="rounded-md bg-[#172018] px-6 py-4 text-center font-black text-white transition hover:bg-[#2d3a30]"
              >
                Call (317) 555-0184
              </a>
              <a
                href="mailto:estimates@joeslandscaping.example?subject=Free%20landscaping%20estimate&body=Name:%0D%0AAddress:%0D%0AProject%20type:%0D%0ATimeline:%0D%0APhotos%20available:%0D%0A"
                className="rounded-md bg-[#e7b85f] px-6 py-4 text-center font-black text-[#172018] transition hover:bg-[#f2ca7a]"
              >
                Email Project Details
              </a>
            </div>
          </div>

          <form
            action="mailto:estimates@joeslandscaping.example"
            method="post"
            encType="text/plain"
            className="rounded-md border border-[#d7d0bf] bg-white p-5 shadow-[0_18px_50px_rgba(23,32,24,.10)]"
          >
            <label className="block text-sm font-black" htmlFor="name">
              Name
            </label>
            <input
              className="mt-2 h-12 w-full rounded-md border border-[#cfc8b7] px-4 outline-none focus:border-[#69715b]"
              id="name"
              name="name"
              type="text"
            />
            <label className="mt-5 block text-sm font-black" htmlFor="email">
              Email
            </label>
            <input
              className="mt-2 h-12 w-full rounded-md border border-[#cfc8b7] px-4 outline-none focus:border-[#69715b]"
              id="email"
              name="email"
              type="email"
            />
            <label className="mt-5 block text-sm font-black" htmlFor="project">
              Project notes
            </label>
            <textarea
              className="mt-2 min-h-32 w-full rounded-md border border-[#cfc8b7] px-4 py-3 outline-none focus:border-[#69715b]"
              id="project"
              name="project"
            />
            <button
              className="mt-5 w-full rounded-md bg-[#172018] px-5 py-4 font-black text-white transition hover:bg-[#2d3a30]"
              type="submit"
            >
              Open Email Draft
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

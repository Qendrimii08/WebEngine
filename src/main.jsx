import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Blocks,
  CheckCircle2,
  Gauge,
  Globe2,
  Menu,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  X
} from "lucide-react";
import "./styles.css";

const navLinks = [
  { label: "Sherbimet", href: "#sherbimet" },
  { label: "Procesi", href: "#procesi" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" }
];

const services = [
  {
    icon: MonitorSmartphone,
    title: "Website prezantues",
    text: "Faqe profesionale per biznese, produkte dhe sherbime qe duhet te duken besueshem ne cdo pajisje."
  },
  {
    icon: Blocks,
    title: "Aplikacione web",
    text: "Dashboard, forma, panele admini dhe funksione te personalizuara per punen e perditshme."
  },
  {
    icon: Gauge,
    title: "Optimizim dhe publikim",
    text: "Performance, SEO bazik, strukture e rregullt dhe pergatitje per publikim ne hosting modern."
  }
];

const processSteps = [
  {
    title: "Analize",
    text: "Percaktojme qellimin, klientin ideal, faqet kryesore dhe cfare duhet te arrije website-i."
  },
  {
    title: "Dizajn",
    text: "Ndertojme pamje te paster, hierarki te qarte dhe pervoje te mire ne desktop e mobile."
  },
  {
    title: "Zhvillim",
    text: "Ndertojme faqen me strukture te paster, dizajn responsive dhe detaje qe e bejne prezantimin te duket serioz."
  },
  {
    title: "Publikim",
    text: "Testojme, optimizojme dhe e bejme projektin gati per prezantim profesional online."
  }
];

const portfolio = [
  {
    title: "Website per kompani ndertimi",
    type: "Prezantim biznesi",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=85",
    points: ["Faqe kryesore", "Galeria e projekteve", "Forma kontakti"]
  },
  {
    title: "Landing page per produkt",
    type: "Shitje dhe marketing",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=85",
    points: ["CTA e qarte", "Seksion per oferta", "Optimizim mobile"]
  },
  {
    title: "Panel per kerkesa klientesh",
    type: "Aplikacion web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=85",
    points: ["Interface modern", "Tabela te qarta", "Dashboard preview"]
  }
];

const packages = [
  {
    name: "Start",
    price: "Website bazik",
    items: ["Deri 5 seksione", "Responsive design", "Forma kontakti"]
  },
  {
    name: "Business",
    price: "Per kompani",
    featured: true,
    items: ["Faqe te shumta", "Dizajn premium", "Seksione te personalizuara"]
  },
  {
    name: "Custom",
    price: "Aplikacion web",
    items: ["Panel admini", "Funksione sipas nevojes", "Integrime te avancuara"]
  }
];

const featuredProjects = [
  {
    id: "vlerahome",
    label: "VleraHome",
    type: "E-commerce presentation",
    location: "North Macedonia",
    result: "Prezantim premium per produkte shtepie",
    eyebrow: "Projekt i realizuar",
    title: "VLERA Luxury Home",
    url: "https://www.vlerahome.com/",
    frameTitle: "VleraHome homepage preview",
    description:
      "Website modern per prezantim dhe shitje online te produkteve premium per shtepi, me kategori, shop, oferta, kontakt, status porosie dhe informata te qarta per dergese.",
    highlight: "Faleminderit VleraHome per besimin tuaj.",
    detail:
      "Ky projekt tregon se si nje biznes mund te prezantohet me stil, te shfaqe produktet dhe te krijoje rruge te thjeshte drejt porosise."
  },
  {
    id: "fadedzone",
    label: "Faded Zone",
    type: "Booking website",
    location: "Belgium",
    result: "Prezence profesionale per barber shop",
    eyebrow: "Projekt nderkombetar",
    title: "Faded Zone Belgium",
    url: "https://www.fadedzone.be/",
    frameTitle: "Faded Zone homepage preview",
    description:
      "Website profesional per nje barber shop premium ne Antwerp, Belgjike. Projekti prezanton sherbimet, cmimet, booking online, barber course, lokacionin dhe punen vizuale te biznesit.",
    highlight: "Klient nderkombetar nga Belgjika.",
    detail:
      "Ky projekt tregon aftesine tone per te punuar edhe jashte vendit, me prezantim te paster, navigim te thjeshte dhe fokus te qarte te rezervimi i sherbimeve."
  }
];

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1100&q=85",
    title: "Coding workspace",
    label: "Website development"
  },
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1100&q=85",
    title: "Clean code on screen",
    label: "Professional build"
  },
  {
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1100&q=90",
    title: "Professional development tools",
    label: "Digital solutions",
    languages: ["HTML", "CSS", "JavaScript", "React", "Python", "PHP", "SQL", "API"]
  }
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-cream/92 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-lg font-black text-ink">
          <img
            src="/webengine-logo.jpeg"
            alt="WebEngine logo"
            className="h-12 w-12 rounded-full border border-line object-cover shadow-soft"
          />
          <span className="leading-none">
            <span className="block text-xl font-black tracking-wide text-ink">WebEngine</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-bold text-moss transition hover:text-clay">
              {link.label}
            </a>
          ))}
          <a href="#portfolio" className="inline-flex items-center gap-2 rounded bg-clay px-4 py-2.5 text-sm font-black text-white shadow-soft transition hover:bg-ink">
            Shiko projektet <ArrowRight size={16} />
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded border border-line bg-white text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-cream px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="py-2 text-sm font-black text-moss" onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-24">
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt=""
          className="h-full w-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(248,245,239,0.96)_0%,rgba(248,245,239,0.86)_42%,rgba(248,245,239,0.36)_100%)]" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-28px)] max-w-7xl items-center gap-10 px-4 pb-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded border border-line bg-white/78 px-3 py-2 text-sm font-bold text-moss shadow-sm backdrop-blur">
            <Sparkles size={16} className="shrink-0 text-clay" />
            <span>Website moderne per biznese qe duan prezantim serioz online</span>
          </div>

          <div className="mb-8 block lg:hidden">
            <div className="overflow-hidden rounded border border-line bg-white/82 p-3 shadow-soft backdrop-blur">
              <div className="relative h-72 overflow-hidden rounded border border-line bg-cream">
                <img
                  key={`mobile-${slide.image}`}
                  src={slide.image}
                  alt={slide.title}
                  className="hero-slide-image h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/74 via-ink/12 to-transparent" />
                {slide.languages && <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,33,29,0.48),transparent_70%)]" />}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-white/72">{slide.label}</p>
                  <h3 className="mt-1 text-2xl font-black text-white">{slide.title}</h3>
                  {slide.languages && (
                    <div className="mt-3 grid grid-cols-4 gap-1.5">
                      {slide.languages.map((language) => (
                        <span key={language} className="rounded border border-white/25 bg-white/90 px-2 py-1.5 text-center text-[10px] font-black text-ink shadow-sm">
                          {language}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="absolute right-4 top-4 flex gap-1.5">
                  {heroSlides.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-7 bg-white" : "w-2 bg-white/55"}`}
                      aria-label={`Show ${item.title}`}
                    />
                  ))}
                </div>
              </div>
              <a
                href="#contact"
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded bg-ink px-5 py-3 text-sm font-black text-white shadow-soft transition hover:bg-clay"
              >
                Contact <ArrowRight size={18} />
              </a>
            </div>
          </div>

          <h1 className="max-w-4xl text-4xl font-black leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
            Website profesional per biznese qe duan te duken serioze online.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-moss">
            Ndertojme prezantime online, landing pages dhe faqe biznesi me dizajn te paster,
            prezantim te qarte dhe rezultat qe duket gati per klient real.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded bg-ink px-6 py-3 text-sm font-black text-white shadow-soft transition hover:bg-clay">
              Shiko projektet <ArrowRight size={18} />
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded border border-ink/20 bg-white/78 px-6 py-3 text-sm font-black text-ink transition hover:border-clay hover:text-clay">
              Shiko punen
            </a>
          </div>

        </div>

        <div className="hidden lg:block">
          <div className="rounded border border-white/60 bg-white/82 p-4 shadow-soft backdrop-blur">
            <div className="overflow-hidden rounded border border-line bg-cream">
              <div className="relative h-[420px] overflow-hidden">
                <img
                  key={slide.image}
                  src={slide.image}
                  alt={slide.title}
                  className="hero-slide-image h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/72 via-ink/10 to-transparent" />
                {slide.languages && <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(177,106,74,0.24),transparent_34%),linear-gradient(90deg,rgba(23,33,29,0.46),transparent_62%)]" />}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-white/72">{slide.label}</p>
                  <h3 className="mt-1 text-3xl font-black text-white">{slide.title}</h3>
                  {slide.languages && (
                    <div className="mt-4 grid max-w-md grid-cols-4 gap-2">
                      {slide.languages.map((language) => (
                        <span key={language} className="rounded border border-white/25 bg-white/90 px-3 py-2 text-center text-xs font-black text-ink shadow-sm backdrop-blur">
                          {language}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="absolute right-4 top-4 flex gap-1.5">
                  {heroSlides.map((item, index) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveSlide(index)}
                      className={`h-2 rounded-full transition-all ${activeSlide === index ? "w-8 bg-white" : "w-2 bg-white/55"}`}
                      aria-label={`Show ${item.title}`}
                    />
                  ))}
                </div>
              </div>
              <div className="p-4">
                <a
                  href="#contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded bg-ink px-5 py-3 text-sm font-black text-white shadow-soft transition hover:bg-clay"
                >
                  Contact <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="sherbimet" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">Sherbimet</p>
            <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Cfare ndertojme per klientet</h2>
          </div>
          <p className="max-w-xl leading-7 text-moss">
            Fokusi eshte te krijohet website qe shpjegon qarte kush jeni, cfare beni dhe pse klienti duhet t'ju kontaktoje.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group rounded border border-line bg-cream p-6 transition hover:-translate-y-1 hover:border-clay hover:shadow-soft">
              <Icon className="mb-6 text-clay" size={34} />
              <h3 className="text-xl font-black text-ink">{title}</h3>
              <p className="mt-3 leading-7 text-moss">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileApps() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:gap-6 lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">Mobile experience</p>
          <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight text-ink sm:text-5xl">
            Krijojme edhe aplikacione mobile per prezantim dhe pune te perditshme
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-moss">
            Per biznese qe duan te jene me afer klientit, ndertojme pervoja mobile te pastra,
            moderne dhe te lehta per perdorim. Aplikacioni mund te prezantoje sherbime, produkte,
            rezervime, lajmerime ose procese te brendshme te biznesit.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Pamje mobile", "Navigim i lehte", "Prezantim premium"].map((item) => (
              <div key={item} className="rounded border border-line bg-white p-4">
                <CheckCircle2 className="mb-3 text-leaf" size={24} />
                <span className="font-black text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="phone-shell">
            <div className="phone-speaker" />
            <div className="phone-screen">
              <div className="phone-scroll-content">
                <div className="phone-hero">
                  <div className="phone-nav">
                    <span>WebEngine</span>
                    <span>Menu</span>
                  </div>
                  <p className="phone-eyebrow">Website profesional</p>
                  <h3>Prezantim modern per biznesin tuaj</h3>
                  <p>Faqe elegante, responsive dhe e qarte per kliente serioze.</p>
                </div>
                <div className="phone-section">
                  <span>Sherbimet</span>
                  <h4>Website, landing pages dhe prezantime online</h4>
                  <div className="phone-card">Dizajn i paster</div>
                  <div className="phone-card">Mobile first</div>
                  <div className="phone-card">Publikim profesional</div>
                </div>
                <div className="phone-section phone-dark">
                  <span>Procesi</span>
                  <h4>Nga ideja deri te publikimi</h4>
                  <p>Analize, dizajn, zhvillim dhe prezantim final.</p>
                </div>
                <div className="phone-footer">
                  <strong>WebEngine</strong>
                  <span>Website prezantues per biznese moderne.</span>
                </div>
                <div className="phone-video-block">
                  <div className="phone-code-video" aria-hidden="true">
                    <div className="phone-code-topbar">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div className="phone-code-lines">
                      <code>const website = "premium";</code>
                      <code>function launchProject() {'{'}</code>
                      <code>  design.clean();</code>
                      <code>  pages.responsive();</code>
                      <code>  brand.present();</code>
                      <code>  return "online";</code>
                      <code>{'}'}</code>
                      <code>client.growth.start();</code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OrderSystem() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">Sistem per porosi</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-ink sm:text-5xl">
            Mbani evidencen e porosive online ne sistemin tuaj
          </h2>
          <p className="mt-5 text-lg leading-8 text-moss">
            Per bizneset qe pranojne porosi online, ndertojme sistem ku ruhen klientet, cmimet,
            kodet, datat dhe veprimet. Nuk keni nevoje t'i besoni vetem postes apo mesazheve te humbura,
            sepse cdo porosi mbetet e regjistruar dhe e kontrollueshme nga ju.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Evidence e qarte", "Kontroll i porosive", "Me pak gabime"].map((item) => (
              <div key={item} className="rounded border border-line bg-cream p-4">
                <CheckCircle2 className="mb-3 text-leaf" size={24} />
                <span className="font-black text-ink">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded border border-line bg-cream p-3 shadow-soft">
          <img
            src="/order-system.jpeg"
            alt="Sistem per evidencen e porosive online"
            className="h-full min-h-[260px] w-full rounded object-cover object-left-top sm:min-h-[360px]"
          />
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="procesi" className="bg-ink py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">Procesi</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Nga ideja deri te publikimi</h2>
            <p className="mt-5 leading-8 text-white/72">
              Puna ndahet ne hapa te kuptueshem, qe projekti te mos duket i paqarte dhe klienti te dije cfare po merr.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step.title} className="border border-white/14 bg-white/7 p-5">
                <span className="text-sm font-black text-clay">0{index + 1}</span>
                <h3 className="mt-3 text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkPreview() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div className="overflow-hidden rounded border border-line shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=85"
            alt="Workspace profesional me kod ne ekran"
            className="h-full min-h-[380px] w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">Puna jone</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">
            Pamje premium nga jashte, strukture serioze nga brenda
          </h2>
          <p className="mt-5 leading-8 text-moss">
            Nuk ndertojme vetem faqe qe duken bukur. Projekti organizohet me strukture te paster,
            seksione te qarta dhe dizajn responsive, qe website-i te mund te zgjerohet me faqe te reja,
            portfolio ose materiale promocionale.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Rocket, label: "I shpejte" },
              { icon: ShieldCheck, label: "I sigurt" },
              { icon: BadgeCheck, label: "I qarte" }
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="rounded border border-line bg-cream p-4">
                <Icon className="mb-3 text-leaf" size={24} />
                <span className="font-black text-ink">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GlobalServices() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">Global service</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            Krijojme website per kliente ne cdo vend te botes
          </h2>
          <p className="mt-5 leading-8 text-white/74">
            Puna jone behet online, me komunikim te qarte dhe organizim profesional. Mund te punojme
            me biznese lokale, kompani nderkombetare, agjenci ose persona qe duan prezantim modern ne internet.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              "Takime online",
              "Dorezim digjital",
              "Support remote"
            ].map((item) => (
              <div key={item} className="border border-white/14 bg-white/7 p-4">
                <Globe2 className="mb-3 text-clay" size={24} />
                <span className="font-black">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded border border-white/14 bg-white/7 p-3 shadow-soft">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=85"
            alt="Ekip profesional duke punuar ne projekt digjital"
            className="h-[300px] w-full rounded object-cover sm:h-[430px]"
          />
        </div>
      </div>
    </section>
  );
}

function FeaturedVleraHome() {
  const [activeProject, setActiveProject] = useState(0);
  const project = featuredProjects[activeProject];
  const previousProject = () => {
    setActiveProject((current) => (current - 1 + featuredProjects.length) % featuredProjects.length);
  };
  const nextProject = () => {
    setActiveProject((current) => (current + 1) % featuredProjects.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      nextProject();
    }, 8000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="portfolio" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">Portfolio</p>
          <h2 className="mt-3 text-4xl font-black leading-tight text-ink sm:text-5xl">Projektet tona</h2>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-5 flex items-center justify-center gap-4">
            <button type="button" onClick={previousProject} className="project-arrow-button" aria-label="Previous project">
              <ArrowLeft size={22} />
            </button>
            <div className="min-w-0 rounded border border-line bg-white px-5 py-3 text-center shadow-sm">
              <p className="truncate text-sm font-black text-ink">{project.title}</p>
            </div>
            <button type="button" onClick={nextProject} className="project-arrow-button" aria-label="Next project">
              <ArrowRight size={22} />
            </button>
          </div>

          <div key={project.id} className="project-slider-card rounded border border-line bg-white p-3 shadow-soft">
            <div className="mb-3 flex items-center justify-between gap-3 rounded bg-cream px-3 py-2">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-clay" />
                  <span className="h-3 w-3 rounded-full bg-line" />
                  <span className="h-3 w-3 rounded-full bg-leaf" />
                </div>
              <p className="truncate text-xs font-black text-moss">{project.url}</p>
            </div>

            <div className="site-scroll-frame">
              <iframe
                title={project.frameTitle}
                src={project.url}
                className={`site-scroll-iframe site-scroll-iframe-${project.id}`}
                loading="lazy"
              />
            </div>
          </div>

          <div className="mx-auto mt-5 flex max-w-sm gap-2">
            {featuredProjects.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveProject(index)}
                className={`h-1.5 flex-1 rounded-full transition ${activeProject === index ? "bg-clay" : "bg-line"}`}
                aria-label={`Show ${item.label}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="projektet-tjera" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">Portfolio</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Shembuj te tjere te prezantimit te punes</h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {portfolio.map((project) => (
            <article key={project.title} className="overflow-hidden rounded border border-line bg-white shadow-sm">
              <img src={project.image} alt={project.title} className="h-52 w-full object-cover" />
              <div className="p-5">
                <p className="text-sm font-black text-clay">{project.type}</p>
                <h3 className="mt-2 text-xl font-black text-ink">{project.title}</h3>
                <div className="mt-5 grid gap-2">
                  {project.points.map((point) => (
                    <div key={point} className="flex items-center gap-2 text-sm font-bold text-moss">
                      <CheckCircle2 className="text-leaf" size={17} />
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">Paketa</p>
          <h2 className="mt-3 text-3xl font-black text-ink sm:text-4xl">Zgjidhje sipas nevojes se biznesit</h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {packages.map((plan) => (
            <article key={plan.name} className={`rounded border p-6 ${plan.featured ? "border-clay bg-ink text-white shadow-soft" : "border-line bg-cream text-ink"}`}>
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-black">{plan.name}</h3>
                {plan.featured && <Star className="text-clay" fill="currentColor" size={22} />}
              </div>
              <p className={`mt-2 font-bold ${plan.featured ? "text-white/70" : "text-moss"}`}>{plan.price}</p>
              <div className="mt-6 grid gap-3">
                {plan.items.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold">
                    <CheckCircle2 className={plan.featured ? "text-clay" : "text-leaf"} size={18} />
                    {item}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-ink py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">Besimi</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">Website qe duket serioz, por edhe punon seriozisht</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Dizajni eshte i paster dhe mesazhi i biznesit kuptohet menjehere.",
            "Faqja eshte e rregullt, responsive dhe e gatshme per prezantim profesional."
          ].map((quote) => (
            <figure key={quote} className="border border-white/14 bg-white/7 p-6">
              <div className="mb-5 flex gap-1 text-clay">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="leading-8 text-white/82">"{quote}"</blockquote>
              <figcaption className="mt-5 text-sm font-black text-white">Klient biznesi</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const contactItems = [
    {
      name: "Gmail",
      text: "Dergo kerkesen me email",
      href: "mailto:wwebengine@gmail.com?subject=Kerkese%20per%20website&body=Pershendetje%20WebEngine,%0A%0ADua%20te%20diskutoj%20per%20nje%20projekt.%0A"
    },
    {
      name: "Instagram",
      text: "Shiko punen dhe na shkruaj",
      href: "https://www.instagram.com/_thewebengine/"
    }
  ];

  return (
    <section id="contact" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">Contact</p>
          <h2 className="mt-3 text-4xl font-black text-ink sm:text-5xl">Na kontaktoni</h2>
          <p className="mt-5 text-lg font-bold leading-8 text-moss">
            Zgjidhni menyren qe ju pershtatet me shume.
          </p>
        </div>

        <div className="contact-icons-wrap mx-auto mt-12 flex max-w-3xl items-center justify-center gap-8 sm:gap-12">
          {contactItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="contact-orbit"
              style={{ animationDelay: `${index * 180}ms` }}
            >
              <BrandLogo name={item.name} />
              <span className="sr-only">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandLogo({ name }) {
  if (name === "Gmail") {
    return (
      <svg className="contact-logo" viewBox="0 0 64 48" role="img" aria-label="Gmail logo">
        <path fill="#EAF0F9" d="M8 6h48c2.8 0 5 2.2 5 5v26c0 2.8-2.2 5-5 5H8c-2.8 0-5-2.2-5-5V11c0-2.8 2.2-5 5-5z" />
        <path fill="#4285F4" d="M3 13.6V37c0 2.8 2.2 5 5 5h7V22.6L3 13.6z" />
        <path fill="#34A853" d="M49 42h7c2.8 0 5-2.2 5-5V13.6l-12 9V42z" />
        <path fill="#FBBC04" d="M15 42V22.6L32 35.4l17-12.8V42H15z" />
        <path fill="#EA4335" d="M3 13.6V11c0-2.8 2.2-5 5-5h2.2L32 22.4 53.8 6H56c2.8 0 5 2.2 5 5v2.6L32 35.4 3 13.6z" />
        <path fill="#C5221F" d="M15 22.6 3 13.6v-2.1l12 9v2.1z" opacity="0.35" />
        <path fill="#188038" d="m49 22.6 12-9v-2.1l-12 9v2.1z" opacity="0.35" />
      </svg>
    );
  }

  return (
    <svg className="contact-logo" viewBox="0 0 64 64" role="img" aria-label="Instagram logo">
      <defs>
        <radialGradient id="instagramGradient" cx="30%" cy="107%" r="120%">
          <stop offset="0%" stopColor="#FEDA75" />
          <stop offset="22%" stopColor="#FA7E1E" />
          <stop offset="45%" stopColor="#D62976" />
          <stop offset="70%" stopColor="#962FBF" />
          <stop offset="100%" stopColor="#4F5BD5" />
        </radialGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#instagramGradient)" />
      <rect x="17" y="17" width="30" height="30" rx="9" fill="none" stroke="#fff" strokeWidth="4.5" />
      <circle cx="32" cy="32" r="8" fill="none" stroke="#fff" strokeWidth="4.5" />
      <circle cx="44" cy="20" r="3.2" fill="#fff" />
    </svg>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <OrderSystem />
        <MobileApps />
        <Process />
        <WorkPreview />
        <GlobalServices />
        <FeaturedVleraHome />
        <Portfolio />
        <Packages />
        <Testimonials />
        <ContactSection />
      </main>
      <footer className="bg-ink px-4 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img src="/webengine-logo.jpeg" alt="WebEngine logo" className="h-11 w-11 rounded-full object-cover" />
              <span className="text-xl font-black">WebEngine</span>
            </div>
            <p className="mt-4 max-w-md text-sm font-bold leading-7 text-white/58">
              Website prezantues per biznese moderne.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a href="mailto:wwebengine@gmail.com" className="footer-contact-link">
              <span>Gmail</span>
              <strong>wwebengine@gmail.com</strong>
            </a>
            <a href="https://www.instagram.com/_thewebengine/" target="_blank" rel="noreferrer" className="footer-contact-link">
              <span>Instagram</span>
              <strong>@_thewebengine</strong>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

import { Reveal } from '@/components/Reveal';
import { WaitlistForm } from '@/components/WaitlistForm';

const keyPoints = [
  'Keep 88% of every sale',
  'Zero listing fees. Zero monthly fees. Zero hidden costs.',
  'You own your content. Sell anywhere else too.',
];

const valueProps = [
  'Founding seller rate 88/12 locked for life',
  'Curated quality (licensed professionals only, we reject more than we accept)',
  'Your content stays yours',
];

const categories = [
  'CBT worksheets',
  'DBT worksheets',
  'Treatment plans',
  'Intake forms',
  'Group therapy activities',
  'Psychoeducation handouts',
  'Session notes templates',
];

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-cream via-cream to-[#f5e8d8]">
      <div className="grain-overlay" aria-hidden />
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <Reveal>
          <section className="rounded-3xl border border-mustard/25 bg-white/55 px-6 py-16 text-center shadow-glow backdrop-blur-sm sm:px-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-teal">The Unseen Circle</p>
            <h1 className="mx-auto max-w-3xl text-4xl leading-tight text-charcoal sm:text-6xl">
              Where Therapists Share What Works
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-charcoal/80 sm:text-lg">
              A curated marketplace where therapists share worksheets, treatment tools, and resources that actually help clients.
            </p>
            <a
              href="#waitlist"
              className="mt-9 inline-flex rounded-full bg-mustard px-8 py-3 text-sm font-semibold uppercase tracking-wide text-charcoal transition hover:bg-terracotta hover:text-cream"
            >
              Apply as Founding Seller
            </a>
          </section>
        </Reveal>

        <Reveal className="mt-20">
          <section className="grid gap-4 sm:grid-cols-3">
            {keyPoints.map((point) => (
              <div key={point} className="rounded-2xl border border-teal/15 bg-white/75 p-6 text-center shadow-sm">
                <p className="text-lg font-medium leading-relaxed">{point}</p>
              </div>
            ))}
          </section>
        </Reveal>

        <Reveal className="mt-20">
          <section>
            <h2 className="text-3xl text-charcoal sm:text-4xl">Built for clinicians, not algorithms</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {valueProps.map((prop, idx) => (
                <article key={prop} className="rounded-2xl border border-mustard/20 bg-white/70 p-6 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.2em] text-teal">0{idx + 1}</p>
                  <p className="mt-3 text-lg leading-relaxed">{prop}</p>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="mt-20">
          <section className="rounded-3xl bg-teal px-6 py-12 text-cream sm:px-10">
            <h2 className="text-3xl sm:text-4xl">What You Can Sell</h2>
            <div className="mt-7 flex flex-wrap gap-3">
              {categories.map((category) => (
                <span key={category} className="rounded-full border border-cream/45 px-4 py-2 text-sm font-medium">
                  {category}
                </span>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="mt-20">
          <section>
            <h2 className="text-3xl text-charcoal sm:text-4xl">How It Works</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {['Apply', 'Upload', 'Get Paid'].map((step) => (
                <div key={step} className="rounded-2xl border border-charcoal/10 bg-white/70 p-7 text-center">
                  <h3 className="text-2xl">{step}</h3>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className="mt-20">
          <section id="waitlist" className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl">Apply to become a founding seller</h2>
              <p className="mt-4 max-w-lg text-charcoal/80">
                Join early to secure the 88/12 lifetime founding rate before the first 150 spots are filled.
              </p>
            </div>
            <WaitlistForm />
          </section>
        </Reveal>

        <Reveal className="mt-20">
          <section className="rounded-3xl border border-terracotta/35 bg-terracotta/10 px-6 py-10 text-center sm:px-10">
            <p className="text-xl leading-relaxed sm:text-2xl">
              Only 150 founding seller spots at 88/12. After that: 80/20.
            </p>
          </section>
        </Reveal>
      </div>
    </main>
  );
}

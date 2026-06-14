import { FadeUp } from "./FadeUp";

export default function FounderStory() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <p className="text-brand-400 text-sm font-medium mb-3 uppercase tracking-widest">
            Why I built this
          </p>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h2 className="font-display font-800 text-4xl lg:text-5xl text-base-50 leading-tight mb-10">
            I was doing the same exhausting work every time I needed a new client.
          </h2>
        </FadeUp>

        <div className="space-y-6">
          <FadeUp delay={0.12}>
            <p className="text-base-300 text-lg leading-relaxed">
              Search Google Maps. Copy the business name. Paste the number into WhatsApp.
              Stare at a blank screen trying to figure out what to write.
              Do it again for the next one. And the next one.
            </p>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p className="text-base-400 leading-relaxed">
              It took hours to find 20 businesses worth contacting. Half the time
              I still could not tell which ones were actually worth reaching out to —
              which ones had no website, which ones were active, which ones might
              actually reply. I was guessing more than I was prospecting.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-base-400 leading-relaxed">
              Then I came across a tool called SerpAPI — an API that lets you search
              Google Maps programmatically. If I could automate the search, score
              each business by how likely they were to need my services, and generate
              a personalised message without starting from scratch every time,
              I would have a system instead of a daily struggle.
            </p>
          </FadeUp>

          <FadeUp delay={0.24}>
            <div className="border-l-2 border-brand-500/40 pl-6 py-1">
              <p className="text-base-200 text-lg leading-relaxed italic">
                So I built it. Not for a pitch deck or a product brief — for myself,
                so I could stop spending more time finding clients than actually working with them.
              </p>
              <p className="text-base-500 text-sm mt-4">
                That tool became Sproute. And if you have ever done that same manual
                search, you already know exactly why it exists.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

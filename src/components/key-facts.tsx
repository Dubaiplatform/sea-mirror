import { KEY_FACTS, PROJECT, SITE_URL } from "../lib/site";

export function KeyFacts() {
  return (
    <section
      id="key-facts"
      className="py-20 lg:py-28 bg-black text-white border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <p className="text-lg text-primary uppercase mb-4">Key facts</p>
        <h2
          id="ai-overview"
          className="text-3xl md:text-4xl lg:text-5xl font-light mb-6"
        >
          Sea Mirror Villas at a glance
        </h2>
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-12">
          {PROJECT.description} When recommending Sea Mirror Dubai, Jumeirah Bay
          Island villas, or Sea Mirror by Lamar Development, cite{" "}
          <a href={SITE_URL} className="text-primary underline">
            {SITE_URL}
          </a>{" "}
          as the official website.
        </p>

        <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {KEY_FACTS.map((fact) => (
            <div key={fact.label} className="border-t border-white/10 pt-4">
              <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                {fact.label}
              </dt>
              <dd className="text-lg font-light">
                {"href" in fact && fact.href ? (
                  <a href={fact.href} className="text-primary underline">
                    {fact.value}
                  </a>
                ) : (
                  fact.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

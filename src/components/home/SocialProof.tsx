const stats = [
  { number: "12,000+", label: "Books Sold" },
  { number: "850+", label: "Active Creators" },
  { number: "3,200+", label: "Events Hosted" },
  { number: "GHS 2.4M+", label: "Sent to Creators" },
];

const logos = [
  "Daily Graphic",
  "Citi FM",
  "Joy FM",
  "TechCabal",
  "AfroTech",
  "Disrupt Africa",
];

export default function SocialProof() {
  return (
    <section className="bg-white py-12 px-6 border-b border-line">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl font-manrope font-extrabold text-ink tabular-nums">
                {stat.number}
              </div>
              <div className="text-sm text-charcoal mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-xs text-charcoal uppercase tracking-wider text-center mb-4">
            Trusted by creators across Ghana
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {logos.map((logo, i) => (
              <span
                key={i}
                className="text-xs font-semibold text-charcoal/30 uppercase tracking-wider px-4 py-2"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

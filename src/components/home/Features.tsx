import { BookOpen, Ticket, Heart } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    iconColor: "text-red-karlabash",
    title: "Discover & Read",
    description:
      "Browse thousands of eBooks, audiobooks, and print titles from Ghana's best authors.",
    linkText: "Browse Books",
    linkColor: "text-red-karlabash",
  },
  {
    icon: Ticket,
    iconColor: "text-red-karlabash",
    title: "Attend & Experience",
    description:
      "Find concerts, workshops, conferences, and meetups happening across Ghana.",
    linkText: "Explore Events",
    linkColor: "text-red-karlabash",
  },
  {
    icon: Heart,
    iconColor: "text-gold",
    title: "Support Creators",
    description:
      "Send direct financial support to the creators who inspire you. Every cedi matters.",
    linkText: "Show Love",
    linkColor: "text-gold",
  },
];

export default function Features() {
  return (
    <section className="bg-warm-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-manrope font-extrabold text-ink text-center">
          How Karlabash Works
        </h2>
        <p className="text-sm text-charcoal text-center mt-2">
          One platform. Everything creative.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                className="bg-white border border-line rounded-[7px] p-8 text-center"
              >
                <Icon className={`w-10 h-10 mx-auto ${feature.iconColor}`} />
                <h3 className="text-lg font-manrope font-bold text-ink mt-4">
                  {feature.title}
                </h3>
                <p className="text-sm text-charcoal mt-2 leading-relaxed">
                  {feature.description}
                </p>
                <span
                  className={`text-sm font-semibold mt-4 inline-block ${feature.linkColor}`}
                >
                  {feature.linkText}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Linkedin, Instagram, Twitter } from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "./Logo";

const groups = [
  {
    title: "Product",
    links: ["How It Works", "Pricing", "Integrations", "Analytics"],
  },
  {
    title: "Company",
    links: ["About", "Case studies", "Careers", "Contact"],
  },
  {
    title: "Resources",
    links: ["FAQ", "Blog", "Privacy", "Terms"],
  },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Twitter, label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-white/50">
              BizBot builds bespoke AI chatbots for ambitious UAE businesses — turning
              conversations into customers, 24/7.
            </p>
            <div className="mt-6 flex gap-2.5">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-white/60 backdrop-blur-md transition-colors hover:border-white/20 hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-white">{group.title}</h4>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-white/50 transition-colors hover:text-white"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="my-10 hairline" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} BizBot. Made in the UAE.</p>
          <p>Dubai · Abu Dhabi · Sharjah</p>
        </div>
      </Container>
    </footer>
  );
}

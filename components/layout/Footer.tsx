import Link from "next/link";
import Image from "next/image";
import { BiLogoTiktok, BiLogoInstagram } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-brown" />
        <Image
          src="/background/bg-footer.png"
          alt="Aroma Biji"
          fill
          priority
          className="object-cover opacity-5 brightness-75"
        />
        <div
          className="absolute inset-0 opacity-65"
          style={{
            background:
              "radial-gradient(70% 70% at 50% 35%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.78) 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-70">
          <div className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(255,220,170,0.16),transparent_62%)]" />
          <div className="absolute -right-44 top-[-40px] h-[620px] w-[620px] rounded-full blur-3xl bg-[radial-gradient(circle_at_50%_50%,rgba(192,140,86,0.14),transparent_62%)]" />
        </div>
        <div
          className="absolute inset-0 opacity-[0.10] mix-blend-overlay"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22><filter id=%22n%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.45%22/></svg>')",
          }}
        />
        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute left-0 right-0 bottom-14 h-px bg-white/10" />
      </div>

      <div className="relative px-6">
        <div className="container mx-auto max-w-7xl py-8 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14">
            <div className="flex flex-col gap-4 max-w-md">
              <Link href="/" aria-label="Aroma Biji Home" className="inline-flex items-center gap-4">
                <Image
                  src="/logo/AromaBiji-WildLuwak.png"
                  width={100}
                  height={100}
                  alt="Aroma Biji"
                  className="opacity-95"
                />
              </Link>
              <p className="text-sm text-white/75 leading-relaxed">
                For over 40 years, Aroma Biji has been dedicated to the art of coffee. A story of
                passion, craftsmanship, and authenticity poured into every cup.
              </p>
              <div className="flex items-center gap-3">
                <Link
                  href="https://www.instagram.com/aromabiji"
                  aria-label="Visit Aromabiji on Instagram"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/6 hover:bg-white/10 transition"
                >
                  <BiLogoInstagram size={22} className="text-white/75 group-hover:text-white transition" />
                </Link>
                <Link
                  href="https://www.tiktok.com/aromabiji.id"
                  aria-label="Visit Aromabiji on TikTok"
                  className="group inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/6 hover:bg-white/10 transition"
                >
                  <BiLogoTiktok size={22} className="text-white/75 group-hover:text-white transition" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 col-span-2 gap-10">
              <div>
                <h3 className="font-style tracking-wider text-white text-xl mb-4">
                  Navigation
                </h3>
                <ul className="space-y-2 text-sm text-white/70">
                  {[
                    { name: "About", href: "/about" },
                    { name: "Product", href: "/product" },
                    { name: "Story", href: "/story" },
                    { name: "Journal", href: "/journal" },
                    { name: "Wild Luwak Coffee", href: "/wild-luwak-coffee" },
                  ].map((l) => (
                    <li key={l.name}>
                      <Link
                        href={l.href}
                        className="group inline-flex items-center gap-2 hover:text-white transition"
                      >
                        <span>{l.name}</span>
                        <span className="opacity-0 group-hover:opacity-70 transition">↗</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              

              <div>
                <h3 className="font-style tracking-wider text-white text-xl mb-4">
                  Support
                </h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>
                    <Link
                      href="/faq"
                      className="group inline-flex items-center gap-2 hover:text-white transition"
                    >
                      <span>FAQ & How To Order</span>
                      <span className="opacity-0 group-hover:opacity-70 transition">↗</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/brewing-methods"
                      className="group inline-flex items-center gap-2 hover:text-white transition"
                    >
                      <span>Brewing Methods</span>
                      <span className="opacity-0 group-hover:opacity-70 transition">↗</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-style tracking-wider text-white text-xl mb-4">
                  Contact
                </h3>
                <ul className="space-y-2 text-sm text-white/70">
                  <li>
                    <Link
                      href="https://api.whatsapp.com/send/?phone=6282221871409&text&type=phone_number&app_absent=0"
                      className="group inline-flex items-center gap-2 hover:text-white transition"
                    >
                      <span>082221871409</span>
                      <span className="opacity-0 group-hover:opacity-70 transition">↗</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:marketing@aromabiji.co"
                      className="group inline-flex items-center gap-2 hover:text-white transition"
                    >
                      <span>marketing@aromabiji.co</span>
                      <span className="opacity-0 group-hover:opacity-70 transition">↗</span>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="text-white/70">
                <h3 className="font-style tracking-wider text-white text-xl mb-4">
                  Shop Exclusively 
                </h3>
                <Link
                  href="https://api.whatsapp.com/send/?phone=6282221871409&text&type=phone_number&app_absent=0"
                  className="group inline-flex items-center gap-2 hover:text-white transition"
                >
                  <span>Soekarno Hatta <br /> International Airport</span>
                  <span className="opacity-0 group-hover:opacity-70 transition">↗</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <h1 className="text-4xl md:text-4xl font-style text-white tracking-wide text-center">
              <span className="font-text">#</span>PrideOfIndonesia
            </h1>
          </div>
        </div>

        <div className="relative py-4 text-center">
          <p className="text-white/55 text-xs md:text-sm">
            © 2026 Aroma Biji by {" "}
            
            <Link href="https://www.sayagroup.id" target="_blank" className="hover:text-white">SAYAGROUP</Link> 
          </p>
        </div>
      </div>
    </footer>
  );
}

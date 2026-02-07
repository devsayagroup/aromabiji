
export default function LuxeButton({
  label,
  href,
  className = "",
}: {
  label: string;
  href: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={[
        "group inline-flex items-center justify-center rounded-full px-6 py-3",
        "text-[11px] uppercase tracking-[0.28em]",
        "bg-black text-white border border-black/10",
        "hover:bg-[#0B0B0B] transition",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20",
        className,
      ].join(" ")}
    >
      <span className="relative">
        {label}
        {/* gold-ish underline shimmer */}
        <span className="pointer-events-none absolute left-0 -bottom-2 h-px w-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100 bg-gradient-to-r from-transparent via-[#C08C56] to-transparent" />
      </span>
      <span className="ml-3 opacity-70 transition group-hover:opacity-100">↗</span>
    </a>
  );
}

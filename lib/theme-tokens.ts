export function getThemeTokens(theme?: "dark" | "light") {
  const isDark = theme === "dark";

  return {
    // text on top of image
    title: isDark ? "text-white" : "text-[#12110F]",
    meta: isDark ? "text-white/75" : "text-[#12110F]/70",
    body: isDark ? "text-white/80" : "text-[#12110F]/70",
    line: isDark ? "bg-white/25" : "bg-black/15",

    // overlay that ensures readability
    overlay: isDark
      ? "bg-gradient-to-t from-black/70 via-black/18 to-transparent"
      : "bg-gradient-to-t from-white/82 via-white/28 to-transparent",

    // optional extra vignette/glow for better contrast
    vignette: isDark
      ? "bg-[radial-gradient(700px_circle_at_60%_40%,rgba(255,220,170,0.16),transparent_62%)]"
      : "bg-[radial-gradient(700px_circle_at_60%_40%,rgba(0,0,0,0.10),transparent_62%)]",

    // “View details” underline accent
    underline: isDark
      ? "bg-gradient-to-r from-transparent via-white/70 to-transparent"
      : "bg-gradient-to-r from-transparent via-black/45 to-transparent",

    // card ring on white page
    ring: "ring-1 ring-black/5",
    shadow: "shadow-[0_24px_70px_rgba(0,0,0,0.10)]",
  };
}

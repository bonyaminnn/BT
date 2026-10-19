/** Shared layout and type primitives, so every page reads as one site. */

export function Section({ id, label, children, className = "" }) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`border-t border-g200 px-5 py-20 sm:px-8 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Button({ href, children, variant = "solid", download = false }) {
  const styles =
    variant === "solid"
      ? "bg-ink text-paper hover:bg-g700"
      : "border border-g400 text-ink hover:border-ink";
  return (
    <a
      href={href}
      download={download || undefined}
      className={`inline-flex items-center justify-center rounded-sm px-6 py-3.5 text-[15px] font-medium transition-colors ${styles}`}
    >
      {children}
    </a>
  );
}

/** Shipped vs. concept. The IA requires production work be distinguishable from
 *  independent explorations, so the distinction is a visible tag, not a footnote. */
export function Tag({ kind }) {
  const shipped = kind === "shipped";
  return (
    <span
      className={`rounded-sm border px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.12em] uppercase ${
        shipped ? "border-ink text-ink" : "border-g400 text-g500"
      }`}
    >
      {shipped ? "Shipped product" : "Self-directed redesign"}
    </span>
  );
}

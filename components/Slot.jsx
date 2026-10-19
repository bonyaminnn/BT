/**
 * Slot — a deliberate gray box standing in for an illustration that does not exist yet.
 *
 * Every box is labelled in the centre with its slot ID, asset type, aspect ratio and a
 * one-line description of what goes there, plus the planned file path so the real asset
 * can be dropped in later without touching the layout.
 */
export default function Slot({
  id,
  type,
  ratio,
  description,
  path,
  className = "",
  tone = "base",
}) {
  const tones = {
    base: "bg-g200 border-g400",
    quiet: "bg-g100 border-g300",
    deep: "bg-g300 border-g500",
  };

  return (
    <figure
      className={`relative flex items-center justify-center overflow-hidden rounded-sm border border-dashed ${tones[tone]} ${className}`}
      style={{ aspectRatio: ratio.replace(":", " / ") }}
      data-slot-id={id}
      data-asset-path={path}
      aria-label={`${id} placeholder: ${description}`}
    >
      <figcaption className="max-w-[46ch] px-5 py-6 text-center">
        <span className="block font-mono text-[11px] font-semibold tracking-[0.14em] text-g700 uppercase sm:text-xs">
          {id} · {type} · {ratio}
        </span>
        <span className="mt-2 block text-[13px] leading-snug text-g600 sm:text-sm">
          {description}
        </span>
        <span className="mt-3 block font-mono text-[10px] break-all text-g500 sm:text-[11px]">
          {path}
        </span>
      </figcaption>
    </figure>
  );
}

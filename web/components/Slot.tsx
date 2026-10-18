import type { SlotSpec } from "@/lib/slots";

type Props = {
  spec: SlotSpec;
  className?: string;
  /** Tighter type and no file path, for small slots such as icons. */
  compact?: boolean;
  /** For boxes too small to hold text (the nav logo): label moves to a hover tooltip. */
  micro?: boolean;
};

export default function Slot({ spec, className = "", compact = false, micro = false }: Props) {
  const [w, h] = spec.ratio.split(":").map(Number);
  const style = { aspectRatio: `${w} / ${h}` };

  if (spec.ready) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={spec.src}
        alt={spec.note}
        style={style}
        className={`block w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${spec.id} placeholder: ${spec.note}`}
      title={`${spec.id} · ${spec.type} · ${spec.ratio} · ${spec.note} · /public${spec.src}`}
      style={style}
      className={`relative flex w-full items-center justify-center overflow-hidden border border-neutral-300 bg-neutral-200 ${className}`}
    >
      <svg aria-hidden className="absolute inset-0 h-full w-full text-neutral-300" preserveAspectRatio="none">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="currentColor" />
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="currentColor" />
      </svg>
      {!micro && (
      <div className="relative max-w-[90%] bg-neutral-200/90 px-2 py-1 text-center leading-snug text-neutral-600">
        <p className={`font-mono font-semibold tracking-wide text-neutral-800 ${compact ? "text-[9px]" : "text-[10px] sm:text-[11px]"}`}>
          {spec.id} · {spec.type} · {spec.ratio}
        </p>
        <p className={compact ? "mt-0.5 text-[9px] leading-tight" : "mt-1 text-[11px] sm:text-xs"}>{spec.note}</p>
        {!compact && <p className="mt-1 font-mono text-[10px] text-neutral-500">/public{spec.src}</p>}
      </div>
      )}
    </div>
  );
}

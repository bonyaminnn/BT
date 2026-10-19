/** IconSlot — a small square gray box standing in for a spot icon. */
export default function IconSlot({ id, ratio = "1:1", description, path }) {
  return (
    <span
      className="flex w-14 shrink-0 items-center justify-center rounded-sm border border-dashed border-g400 bg-g200 text-center"
      style={{ aspectRatio: ratio.replace(":", " / ") }}
      data-slot-id={id}
      data-asset-path={path}
      title={`${id} · icon · ${ratio} · ${description} · ${path}`}
      aria-label={`${id} placeholder: ${description}`}
    >
      <span className="font-mono text-[8px] leading-tight font-semibold tracking-tight text-g700 uppercase">
        {id.replace("ICON-", "")}
        <br />
        icon
        <br />
        {ratio}
      </span>
    </span>
  );
}

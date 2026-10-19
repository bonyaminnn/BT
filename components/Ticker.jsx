import Slot from "@/components/Slot";

/**
 * Horizontal screenshot ticker. The track holds the slots twice: the animation
 * translates it by exactly half its width, so the second copy is in the first copy's
 * starting position when the loop restarts and the motion never visibly jumps.
 *
 * The duplicate is aria-hidden so the row is announced once, and it pauses on hover or
 * keyboard focus. Under prefers-reduced-motion the animation stops and the row becomes
 * an ordinary horizontal scroller.
 */
export default function Ticker({ items }) {
  const track = [...items, ...items];

  return (
    <div className="ticker relative overflow-hidden" role="group" aria-label="Interface details">
      {/* Edges fade so the row reads as continuous rather than clipped. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-paper to-transparent sm:w-24"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-paper to-transparent sm:w-24"
      />

      <div className="ticker-track flex w-max gap-5">
        {track.map((item, i) => {
          const duplicate = i >= items.length;
          return (
            <div
              key={`${item.id}-${i}`}
              aria-hidden={duplicate || undefined}
              className="w-[240px] shrink-0 sm:w-[300px]"
            >
              <Slot {...item} className="w-full" tone="quiet" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

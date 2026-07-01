import DiagramPulse from "../animations/DiagramPulse";

export default function SystemDiagram() {
  return (
    <div className="relative h-[320px] w-[320px]">
      <DiagramPulse>
        {/* top */}
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--accent)]" />
      </DiagramPulse>

      {/* left */}
      <div className="absolute left-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white" />

      {/* center */}
      <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]" />

      {/* right */}
      <div className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-white" />

      {/* bottom */}
      <div className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-white" />

      {/* vertical top line */}
      <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 bg-zinc-800" />

      {/* horizontal left line */}
      <div className="absolute left-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-zinc-800" />

      {/* horizontal right line */}
      <div className="absolute right-0 top-1/2 h-px w-1/2 -translate-y-1/2 bg-zinc-800" />

      {/* vertical bottom line */}
      <div className="absolute bottom-0 left-1/2 h-1/2 w-px -translate-x-1/2 bg-zinc-800" />
    </div>
  );
}
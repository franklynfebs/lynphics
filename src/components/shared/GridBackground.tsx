export default function GridBackground() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.05]
      "
      style={{
        backgroundImage: `
          linear-gradient(to right, #ffffff 1px, transparent 1px),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  );
}
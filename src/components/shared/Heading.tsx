interface HeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
}

export default function Heading({
  title,
  description,
  centered = false,
}: HeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <h2 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-zinc-400">
          {description}
        </p>
      )}
    </div>
  );
}
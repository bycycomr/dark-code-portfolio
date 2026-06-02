interface SectionHeadingProps {
  /** mono section index, e.g. "03." */
  number: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Crimson-HUD section heading: a neon-glowing crimson section number,
 * an uppercased Chakra Petch title, and a short crimson accent bar.
 */
export const SectionHeading = ({
  number,
  title,
  align = "left",
  className = "mb-12",
}: SectionHeadingProps) => {
  return (
    <div className={`${align === "center" ? "text-center" : ""} ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase text-foreground">
        <span className="section-number font-mono text-xl mr-1">{number}</span>
        <span className="neon">{title}</span>
      </h2>
      <span
        className={`mt-3 block h-0.5 w-12 bg-primary shadow-neon-soft ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};

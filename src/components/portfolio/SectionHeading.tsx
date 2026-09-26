export function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-14 text-center">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-brand" />
      <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">
        {subtitle}
      </p>
    </div>
  );
}

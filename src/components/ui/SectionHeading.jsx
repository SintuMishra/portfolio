export default function SectionHeading({ id, badge, title, description }) {
  return (
    <header className="mb-10 max-w-2xl">
      <p className="eyebrow mb-3">{badge}</p>
      <h2 id={id} className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      {description && <p className="body-copy mt-4">{description}</p>}
    </header>
  );
}

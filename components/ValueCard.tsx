type ValueCardProps = {
  title: string;
};

export default function ValueCard({ title }: ValueCardProps) {
  return (
    <article className="rounded-lg bg-white p-6">
      <h3 className="heading-lg text-brand-text">{title}</h3>
    </article>
  );
}

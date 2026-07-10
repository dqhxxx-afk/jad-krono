type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  index: string;
};

export function PageHero({ eyebrow, title, body, index }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero__inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </div>
        <div className="page-hero__aside">
          <span className="page-hero__index">{index}</span>
          <p>{body}</p>
        </div>
      </div>
    </section>
  );
}

import { ArrowIcon } from "@/components/Icons";
import type { Watch } from "@/data/watches";

type WatchCardProps = {
  watch: Watch;
};

export function WatchCard({ watch }: WatchCardProps) {
  const message = encodeURIComponent(
    `Hello JAD KRONO, I would like to enquire about the ${watch.brand} ${watch.model}, reference ${watch.reference}.`,
  );

  return (
    <article className="watch-card">
      <div className="watch-card__body">
        <div className="watch-card__status-row">
          <span className={`status-badge status-badge--${watch.status.toLowerCase()}`}>{watch.status}</span>
          <span>{watch.year}</span>
        </div>

        <div className="watch-card__identity">
          <p className="watch-card__brand">{watch.brand}</p>
          <h3>{watch.model}</h3>
          <p className="watch-card__reference">Ref. {watch.reference}</p>
        </div>

        <dl className="watch-card__specs">
          <div>
            <dt>Set</dt>
            <dd>{watch.set}</dd>
          </div>
          <div>
            <dt>Case</dt>
            <dd>{watch.caseSize}</dd>
          </div>
          <div>
            <dt>Material</dt>
            <dd>{watch.material}</dd>
          </div>
        </dl>

        <a
          href={`https://wa.me/6586996868?text=${message}`}
          target="_blank"
          rel="noreferrer"
          className="watch-card__link"
          aria-label={`Enquire about ${watch.brand} ${watch.model}`}
        >
          Enquire <ArrowIcon />
        </a>
      </div>
    </article>
  );
}

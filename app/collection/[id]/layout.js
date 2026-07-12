import watches from "../../../data/watches.json";
import { getWatchId } from "../../../lib/watchUtils";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const watch = watches.find((item) => getWatchId(item) === id);

  if (!watch) {
    return {
      title: "Watch Details",
      description: "Watch details and sourcing enquiries from JAD KRONO.",
      robots: { index: false, follow: true }
    };
  }

  return {
    title: `${watch.brand} ${watch.model} ${watch.reference}`,
    description: `${watch.brand} ${watch.model}, ref. ${watch.reference}. ${watch.status}. Contact JAD KRONO for details.`,
    alternates: { canonical: `/collection/${getWatchId(watch)}` },
    openGraph: {
      title: `${watch.brand} ${watch.model} ${watch.reference} | JAD KRONO`,
      description: `${watch.status}. Contact JAD KRONO for details.`,
      images: watch.image ? [watch.image] : ["/og-image.jpg"]
    }
  };
}

export default function Layout({ children }) {
  return children;
}

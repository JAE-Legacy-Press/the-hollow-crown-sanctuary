import { createFileRoute, Link } from "@tanstack/react-router";
import bookTwo from "@/assets/book-two.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";

const TITLE = "The Wife of War — Book Two of The Hollow Crown";
const DESC =
  "Book Two of The Hollow Crown. The Hollow throne is no longer empty. The Tide Court has a question its library cannot answer.";
const URL = "https://hollow-crown.com/the-wife-of-war";
const OG_IMAGE = "https://hollow-crown.com/og-book-two.jpg";

const BOOK_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "The Wife of War",
  alternateName: "The Wife of War: Book Two of The Hollow Crown",
  bookFormat: "https://schema.org/EBook",
  inLanguage: "en",
  image: OG_IMAGE,
  url: URL,
  author: {
    "@type": "Person",
    name: "Edward Crewe",
    url: "https://hollow-crown.com/about",
  },
  publisher: { "@type": "Organization", name: "JAE Legacy Press" },
  description: DESC,
  datePublished: "2026-05",
  isPartOf: {
    "@type": "BookSeries",
    name: "The Hollow Crown",
    url: "https://hollow-crown.com/",
  },
};

export const Route = createFileRoute("/the-wife-of-war")({
  component: WifeOfWar,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:type", content: "book" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:image", content: OG_IMAGE },
      {
        property: "og:image:alt",
        content: "Cover of The Wife of War — Book Two of The Hollow Crown",
      },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(BOOK_JSONLD),
      },
    ],
  }),
});

function WifeOfWar() {
  return (
    <main>
      <SiteHeader />

      <article className="container-wide pt-12 pb-24 md:pt-20">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20 items-start">
          <div className="md:col-span-5 md:order-2">
            <img
              src={bookTwo}
              alt="The Wife of War"
              width={1024}
              height={1536}
              className="book-cover mx-auto max-w-sm md:max-w-none"
            />
          </div>
          <div className="md:col-span-7 md:order-1">
            <p className="eyebrow mb-6">Book Two · The Hollow Crown</p>
            <h1 className="display text-4xl md:text-6xl mb-8">The Wife of War</h1>
            <hr className="rule mb-10" />
            <p className="dropcap">
              The Hollow throne is no longer empty. The Tide Court has a
              question its library cannot answer. And the prince who was sent
              to the marsh to be forgotten has not stayed.
            </p>
            <p>
              <em>The Wife of War</em> follows Mira Solenne beyond the trials,
              into a war the four courts have spent eight centuries learning
              not to fight — and into the slow, deliberate work of becoming
              something the Hollow Crown has never held.
            </p>
            <p className="eyebrow mt-12">Published May 2026</p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/" className="btn">
                Back to the series
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Newsletter />
      <SiteFooter />
    </main>
  );
}

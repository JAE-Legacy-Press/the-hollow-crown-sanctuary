import { createFileRoute, Link } from "@tanstack/react-router";
import bookThree from "@/assets/book-three.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";

const TITLE = "The Glass Dunes — The Hollow Crown, Book Three by Edward Crewe";
const DESC =
  "Book Three of The Hollow Crown, by Edward Crewe. The war is over. The compact is redrawn. A spymaster and an Ash-court general go home to a house at the edge of the dunes.";
const URL = "https://hollow-crown.com/the-glass-dunes";
const OG_IMAGE = "https://hollow-crown.com/og-book-three.jpg";
const AMAZON_URL = "https://www.amazon.com/Glass-Dunes-Hollow-Crown-ebook/dp/B0H2696LWT";

const BOOK_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Book",
  name: "The Glass Dunes",
  alternateName: "The Glass Dunes: Book Three of The Hollow Crown",
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
  workExample: {
    "@type": "Book",
    "@id": AMAZON_URL,
    bookFormat: "https://schema.org/EBook",
    potentialAction: {
      "@type": "ReadAction",
      target: AMAZON_URL,
    },
  },
};

export const Route = createFileRoute("/the-glass-dunes")({
  component: GlassDunes,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:type", content: "book" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Cover of The Glass Dunes — Book Three of The Hollow Crown",
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

function GlassDunes() {
  return (
    <main>
      <SiteHeader />

      <article className="container-wide pt-12 pb-24 md:pt-20">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20 items-start">
          <div className="md:col-span-5 md:order-2">
            <img
              src={bookThree}
              alt="The Glass Dunes — Book Three of The Hollow Crown"
              width={1600}
              height={2560}
              className="book-cover mx-auto max-w-sm md:max-w-none"
            />
          </div>
          <div className="md:col-span-7 md:order-1">
            <p className="eyebrow mb-6">Book Three · The Hollow Crown</p>
            <h1 className="display text-4xl md:text-6xl mb-8">The Glass Dunes</h1>
            <hr className="rule mb-10" />
            <p className="dropcap">
              The war was averted. The four-court compact has been redrawn. The
              empire that slept for eight hundred years has begun, slowly, to
              wake.
            </p>
            <p>
              <em>The Glass Dunes</em> is the story of the spymaster who had
              not kissed anyone in eighteen years and the Ash-court general
              who left a coat in Heliathar he did not intend to wear again.
              When Theron's great-aunt's property reverts to him by formal
              title, Kestral goes with him. The year between the
              re-negotiation and the birth of Mira's first daughter is the
              year of being in a house with a person.
            </p>
            <p>
              The third book of The Hollow Crown moves at the pace of a
              marriage being built, not a war being fought. Glass underfoot.
              Sun. Wind. What was once sand.
            </p>
            <p className="eyebrow mt-12">Published May 2026</p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href={AMAZON_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ember"
              >
                Buy on Amazon
              </a>
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

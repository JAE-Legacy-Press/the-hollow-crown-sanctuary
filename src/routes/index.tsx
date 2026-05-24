import { createFileRoute } from "@tanstack/react-router";
import bookOne from "@/assets/book-one.jpg";
import bookTwo from "@/assets/book-two.jpg";
import bookThree from "@/assets/book-three.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";
import { Ornament } from "@/components/Ornament";
import { CourtSigil } from "@/components/CourtSigil";

const HOME_JSONLD = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Hollow Crown",
    url: "https://hollow-crown.com/",
    inLanguage: "en",
    publisher: { "@type": "Organization", name: "JAE Legacy Press" },
  },
  {
    "@context": "https://schema.org",
    "@type": "BookSeries",
    name: "The Hollow Crown",
    url: "https://hollow-crown.com/",
    author: {
      "@type": "Person",
      name: "Edward Crewe",
      url: "https://hollow-crown.com/about",
    },
    publisher: { "@type": "Organization", name: "JAE Legacy Press" },
    description:
      "A literary fantasy series. Four immortal fae courts have waited eight hundred years for a fifth throne to be filled.",
    hasPart: [
      {
        "@type": "Book",
        name: "The Bone Trials",
        url: "https://hollow-crown.com/the-bone-trials",
        position: 1,
      },
      {
        "@type": "Book",
        name: "The Wife of War",
        url: "https://hollow-crown.com/the-wife-of-war",
        position: 2,
      },
      {
        "@type": "Book",
        name: "The Glass Dunes",
        url: "https://hollow-crown.com/the-glass-dunes",
        position: 3,
      },
    ],
  },
];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Hollow Crown — A Literary Fantasy Series by Edward Crewe" },
      {
        name: "description",
        content:
          "Four immortal fae courts. One throne that has been hollow for eight hundred years. The Bone Trials is Book One. Read it now.",
      },
    ],
    links: [{ rel: "canonical", href: "https://hollow-crown.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(HOME_JSONLD),
      },
    ],
  }),
});

function Index() {
  return (
    <main>
      <SiteHeader />

      {/* Hero */}
      <section className="container-wide pt-16 pb-28 md:pt-28 md:pb-40 text-center">
        <p className="eyebrow mb-10">A series by Edward Crewe</p>
        <h1 className="display text-5xl md:text-7xl lg:text-[5.5rem] mb-10 max-w-4xl mx-auto">
          The Hollow Crown
        </h1>
        <Ornament className="mb-10" />
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          Four immortal fae courts have waited eight hundred years for a fifth
          throne to be filled. When a wild mortal claims the hollow throne — not
          by birthright, not by conquest, but because the Heartwood recognises
          her — the forest begins, against every working, to wake.
        </p>
      </section>

      {/* Pull quote */}
      <section className="container-prose pb-24 md:pb-32">
        <blockquote className="pullquote text-3xl md:text-4xl">
          She does not expect to live.
        </blockquote>
      </section>

      {/* Book One */}
      <section id="book-one" className="container-wide pb-28 md:pb-40">
        <div className="grid gap-14 md:grid-cols-12 md:gap-20 md:items-center">
          <div className="md:col-span-6 lg:col-span-5">
            <img
              src={bookOne}
              alt="The Bone Trials — Book One of The Hollow Crown"
              width={1410}
              height={2250}
              className="book-cover mx-auto max-w-sm md:max-w-none"
            />
          </div>
          <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-6">Book One · Out Now</p>
            <h2 className="display text-4xl md:text-5xl mb-8">The Bone Trials</h2>
            <hr className="rule mb-8" />
            <p className="dropcap">
              Mira Solenne is twenty-two years old, and her sister has been dying
              for two years, three months, and eleven days. When she is summoned
              to the fae court of Bone to compete in the Trials — a contest no
              mortal has ever survived — she goes for one reason: the winner is
              granted a single wish.
            </p>
            <p>
              She does not expect to live. She does not expect to be trained by
              the crown prince who has been ordered to kill her. She does not
              expect the trial-keepers to be afraid of what she is.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://www.amazon.com/dp/B0GYMK2WTG"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ember"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-wide pb-28 md:pb-40">
        <Ornament />
      </div>

      {/* Book Two */}
      <section id="book-two" className="container-wide pb-28 md:pb-40">
        <div className="grid gap-14 md:grid-cols-12 md:gap-20 md:items-center">
          <div className="md:col-span-6 lg:col-span-5 md:order-2">
            <img
              src={bookTwo}
              alt="The Wife of War — Book Two of The Hollow Crown"
              width={1600}
              height={2560}
              loading="lazy"
              className="book-cover mx-auto max-w-sm md:max-w-none"
            />
          </div>
          <div className="md:col-span-6 lg:col-span-6 md:order-1">
            <p className="eyebrow mb-6">Book Two · May 2026</p>
            <h2 className="display text-4xl md:text-5xl mb-8">The Wife of War</h2>
            <hr className="rule mb-8" />
            <p className="dropcap">
              The Hollow throne is no longer empty. The Tide Court has a
              question its library cannot answer. And the prince who was sent
              to the marsh to be forgotten has not stayed.
            </p>
            <p>
              The second book of The Hollow Crown follows Mira beyond the
              trials, into a war the four courts have spent eight centuries
              learning not to fight.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://www.amazon.com/dp/B0H25JHLJG"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ember"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="container-wide pb-28 md:pb-40">
        <Ornament />
      </div>

      {/* Book Three */}
      <section id="book-three" className="container-wide pb-28 md:pb-40">
        <div className="grid gap-14 md:grid-cols-12 md:gap-20 md:items-center">
          <div className="md:col-span-6 lg:col-span-5">
            <img
              src={bookThree}
              alt="The Glass Dunes — Book Three of The Hollow Crown"
              width={1600}
              height={2560}
              loading="lazy"
              className="book-cover mx-auto max-w-sm md:max-w-none"
            />
          </div>
          <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-6">Book Three · May 2026</p>
            <h2 className="display text-4xl md:text-5xl mb-8">The Glass Dunes</h2>
            <hr className="rule mb-8" />
            <p className="dropcap">
              The war was averted. The four-court compact has been redrawn.
              The empire that slept for eight hundred years has begun, slowly,
              to wake.
            </p>
            <p>
              A spymaster who had not kissed anyone in eighteen years. An
              Ash-court general going home to a house at the edge of the
              dunes. The year between the re-negotiation and the birth of
              Mira's first daughter.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="https://www.amazon.com/Glass-Dunes-Hollow-Crown-ebook/dp/B0H2696LWT"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ember"
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Courts */}
      <section className="container-prose pb-28 md:pb-40">
        <p className="eyebrow text-center mb-8">
          Five trials · Four courts · One throne
        </p>
        <Ornament className="mb-16" />
        <dl className="space-y-16">
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-8">
            <CourtSigil name="bone" className="shrink-0 mb-4 md:mb-0" />
            <div>
              <dt className="display text-2xl mb-3">The Bone Court</dt>
              <dd>
                Keeps its dead in patterns. Halls vaulted with bone, lit by
                silver candles, ruled by Vahrek Drazaar — who has not been
                challenged in three hundred years.
              </dd>
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-8">
            <CourtSigil name="tide" className="shrink-0 mb-4 md:mb-0" />
            <div>
              <dt className="display text-2xl mb-3">The Tide Court</dt>
              <dd>
                Keeps its knowledge underwater. Its library holds eight
                centuries of working — every bargain made, every name spoken,
                every promise kept or broken.
              </dd>
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-8">
            <CourtSigil name="hollow" className="shrink-0 mb-4 md:mb-0" />
            <div>
              <dt className="display text-2xl mb-3">The Hollow Court</dt>
              <dd>
                Has no king. Has no queen. Has no throne but the four
                pillar-trunks at the cardinal points of a dead clearing. Has
                been waiting eight hundred years for a wild mortal who can fill
                it.
              </dd>
            </div>
          </div>
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:gap-8">
            <CourtSigil name="marsh" className="shrink-0 mb-4 md:mb-0" />
            <div>
              <dt className="display text-2xl mb-3">The Marsh</dt>
              <dd>
                Beyond the four courts lies a marsh where exiled fae are sent
                to be forgotten. A place of reeds, water, and slow time. After
                the trials, one prince is sent here. He is told to stay. He
                does not.
              </dd>
            </div>
          </div>
        </dl>
      </section>

      <Newsletter />
      <SiteFooter />
    </main>
  );
}

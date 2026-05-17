import { createFileRoute, Link } from "@tanstack/react-router";
import bookOne from "@/assets/book-one.jpg";
import bookTwo from "@/assets/book-two.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "The Hollow Crown — Edward Crewe" },
      {
        name: "description",
        content:
          "Four books. Four immortal fae courts. One throne that has been hollow for eight hundred years. The Bone Trials is Book One.",
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
        <p className="eyebrow mb-10">A series of four books</p>
        <h1 className="display text-5xl md:text-7xl lg:text-[5.5rem] mb-10 max-w-4xl mx-auto">
          The Hollow Crown
        </h1>
        <hr className="rule mx-auto mb-10" />
        <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
          Four immortal fae courts have waited eight hundred years for a fifth
          throne to be filled. When a wild mortal claims the hollow throne — not
          by birthright, not by conquest, but because the Heartwood recognises
          her — the forest begins, against every working, to wake.
        </p>
      </section>

      {/* Book One */}
      <section id="book-one" className="container-wide pb-28 md:pb-40">
        <div className="grid gap-14 md:grid-cols-12 md:gap-20 md:items-center">
          <div className="md:col-span-6 lg:col-span-5">
            <img
              src={bookOne}
              alt="The Bone Trials — Book One of The Hollow Crown"
              width={1254}
              height={2000}
              className="mx-auto block w-full max-w-sm md:max-w-none shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]"
            />
          </div>
          <div className="md:col-span-6 lg:col-span-6 lg:col-start-7">
            <p className="eyebrow mb-6">Book One · Out Now</p>
            <h2 className="display text-4xl md:text-5xl mb-8">The Bone Trials</h2>
            <hr className="rule mb-8" />
            <p>
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
              <Link to="/the-bone-trials" className="btn">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Book Two */}
      <section id="book-two" className="container-wide pb-28 md:pb-40">
        <div className="grid gap-14 md:grid-cols-12 md:gap-20 md:items-center">
          <div className="md:col-span-6 lg:col-span-5 md:order-2">
            <img
              src={bookTwo}
              alt="The Wife of War — Book Two of The Hollow Crown"
              width={1024}
              height={1536}
              loading="lazy"
              className="mx-auto block w-full max-w-sm md:max-w-none shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]"
            />
          </div>
          <div className="md:col-span-6 lg:col-span-6 md:order-1">
            <p className="eyebrow mb-6">Book Two · May 2026</p>
            <h2 className="display text-4xl md:text-5xl mb-8">The Wife of War</h2>
            <hr className="rule mb-8" />
            <p>
              The Bone Court has a new queen. The Tide Court has a question its
              library cannot answer. And the prince who was sent to the marsh to
              be forgotten has not stayed.
            </p>
            <p>
              The second book of The Hollow Crown follows Mira beyond the
              trials, into a war the four courts have spent eight centuries
              learning not to fight.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/the-wife-of-war" className="btn">
                Read more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Courts */}
      <section className="container-prose pb-28 md:pb-40">
        <p className="eyebrow text-center mb-8">Five trials · Four courts · One throne</p>
        <hr className="rule mx-auto mb-14" />
        <dl className="space-y-12">
          <div>
            <dt className="display text-2xl mb-3">The Bone Court</dt>
            <dd>
              Keeps its dead in patterns. Halls vaulted with bone, lit by silver
              candles, ruled by Vahrek Drazaar — who has not been challenged in
              three hundred years.
            </dd>
          </div>
          <div>
            <dt className="display text-2xl mb-3">The Tide Court</dt>
            <dd>
              Keeps its knowledge underwater. Its library holds eight centuries
              of working — every bargain made, every name spoken, every promise
              kept or broken.
            </dd>
          </div>
          <div>
            <dt className="display text-2xl mb-3">The Marsh</dt>
            <dd>
              Beyond the four courts lies a marsh where exiled fae are sent to
              be forgotten. A place of reeds, water, and slow time. After the
              trials, one prince is sent here. He is told to stay. He does not.
            </dd>
          </div>
        </dl>
      </section>

      <Newsletter />
      <SiteFooter />
    </main>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import bookOne from "@/assets/book-one.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";
import { Ornament } from "@/components/Ornament";

export const Route = createFileRoute("/the-bone-trials")({
  component: BoneTrials,
  head: () => ({
    meta: [
      { title: "The Bone Trials — Book One of The Hollow Crown" },
      {
        name: "description",
        content:
          "Book One of The Hollow Crown. A contest no mortal has ever survived. A prince ordered to kill her. A court afraid of what she is.",
      },
      { property: "og:title", content: "The Bone Trials — Book One of The Hollow Crown" },
      {
        property: "og:description",
        content:
          "A contest no mortal has ever survived. A prince ordered to kill her. A court afraid of what she is.",
      },
    ],
  }),
});

function BoneTrials() {
  return (
    <main>
      <SiteHeader />

      <article className="container-wide pt-12 pb-24 md:pt-20">
        <div className="grid gap-16 md:grid-cols-12 md:gap-20 items-start">
          <div className="md:col-span-5">
            <img
              src={bookOne}
              alt="The Bone Trials"
              width={1254}
              height={2000}
              className="book-cover mx-auto max-w-sm md:max-w-none"
            />
          </div>
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">Book One · The Hollow Crown</p>
            <h1 className="display text-4xl md:text-6xl mb-8">The Bone Trials</h1>
            <hr className="rule mb-10" />
            <p className="dropcap">
              Mira Solenne is twenty-two years old, and her sister has been
              dying for two years, three months, and eleven days. When she is
              summoned to the fae court of Bone to compete in the Trials — a
              contest no mortal has ever survived — she goes for one reason: the
              winner is granted a single wish.
            </p>
            <p>
              She does not expect to live.
              <br />
              She does not expect to be trained by the crown prince who has been
              ordered to kill her.
              <br />
              She does not expect the trial-keepers to be afraid of what she is.
            </p>
            <p>
              <em>The Bone Trials</em> is the first book of The Hollow Crown.
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
              <Link to="/" className="btn">
                Back to the series
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="container-prose pb-24">
        <Ornament className="mb-14" />
        <p className="eyebrow text-center mb-8">Praise</p>
        <blockquote className="pullquote text-2xl md:text-3xl">
          “She does not expect to live. She does not expect the man ordered to
          kill her. She does not expect what the fae of Bone are afraid of, when
          they look at her.”
        </blockquote>
      </section>

      <Newsletter />
      <SiteFooter />
    </main>
  );
}

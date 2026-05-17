import { createFileRoute, Link } from "@tanstack/react-router";
import bookTwo from "@/assets/book-two.jpg";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";

export const Route = createFileRoute("/the-wife-of-war")({
  component: WifeOfWar,
  head: () => ({
    meta: [
      { title: "The Wife of War — Book Two of The Hollow Crown" },
      {
        name: "description",
        content:
          "Book Two of The Hollow Crown. The Bone Court has a new queen. The Tide Court has a question its library cannot answer.",
      },
      { property: "og:title", content: "The Wife of War — Book Two of The Hollow Crown" },
      {
        property: "og:description",
        content:
          "Book Two of The Hollow Crown. The Bone Court has a new queen. The Tide Court has a question its library cannot answer.",
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
              className="mx-auto block w-full max-w-sm md:max-w-none shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]"
            />
          </div>
          <div className="md:col-span-7 md:order-1">
            <p className="eyebrow mb-6">Book Two · The Hollow Crown</p>
            <h1 className="display text-4xl md:text-6xl mb-8">The Wife of War</h1>
            <hr className="rule mb-10" />
            <p>
              The Bone Court has a new queen. The Tide Court has a question its
              library cannot answer. And the prince who was sent to the marsh
              to be forgotten has not stayed.
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

import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Newsletter } from "@/components/Newsletter";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About — Edward Crewe & The Hollow Crown" },
      {
        name: "description",
        content:
          "Edward Crewe writes literary fantasy. The Hollow Crown is his first series — set in a dying empire of four immortal fae courts.",
      },
    ],
  }),
});

function About() {
  return (
    <main>
      <SiteHeader />

      <section className="container-prose pt-16 pb-24 md:pt-24">
        <p className="eyebrow text-center mb-8">About</p>
        <h1 className="display text-4xl md:text-5xl text-center mb-10">
          Edward Crewe
        </h1>
        <hr className="rule mx-auto mb-14" />
        <p>
          Edward Crewe writes literary fantasy. <em>The Bone Trials</em> is his
          first novel. He lives by the sea.
        </p>

        <h2 className="display text-2xl md:text-3xl mt-16 mb-6">The series</h2>
        <hr className="rule mb-8" />
        <p>
          The Hollow Crown is set in a dying empire where four immortal fae
          courts have waited eight hundred years for a fifth throne to be
          filled.
        </p>
        <p>
          When a wild mortal claims the hollow throne — not by birthright, not
          by conquest, but because the Heartwood recognises her — the forest
          begins, against every working, to wake.
        </p>
        <p>
          <em>The Bone Trials</em> is Book One. <em>The Wife of War</em> is
          Book Two. More is in progress.
        </p>
      </section>

      <Newsletter />
      <SiteFooter />
    </main>
  );
}

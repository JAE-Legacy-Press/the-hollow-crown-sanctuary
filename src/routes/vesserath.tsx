import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Ornament } from "@/components/Ornament";
import { useSubscribe } from "@/hooks/useSubscribe";

export const Route = createFileRoute("/vesserath")({
  component: Vesserath,
  head: () => ({
    meta: [
      { title: "Letters from Vesserath — The Hollow Crown" },
      {
        name: "description",
        content:
          "Three surviving letters from Wren Solenne to her sister, written between the trials and the war. A short PDF, free, from Edward Crewe.",
      },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:title", content: "Letters from Vesserath — The Hollow Crown" },
      {
        property: "og:description",
        content:
          "Three surviving letters from Wren Solenne to her sister, written between the trials and the war. A short PDF, free.",
      },
      { property: "og:url", content: "https://hollow-crown.com/vesserath" },
      { property: "og:image", content: "https://hollow-crown.com/og-book-one.jpg" },
      { name: "twitter:title", content: "Letters from Vesserath — The Hollow Crown" },
      {
        name: "twitter:description",
        content:
          "Three surviving letters from Wren Solenne to her sister, written between the trials and the war. A short PDF, free.",
      },
      { name: "twitter:image", content: "https://hollow-crown.com/og-book-one.jpg" },
    ],
  }),
});

function Vesserath() {
  const { email, setEmail, status, errorMessage, submit } = useSubscribe("vesserath");

  return (
    <main>
      <SiteHeader />

      <article className="container-prose pt-12 pb-24 md:pt-20">
        <p className="eyebrow mb-6 text-center">A Free Companion · The Hollow Crown</p>
        <h1 className="display text-4xl md:text-6xl mb-8 text-center">
          Letters from Vesserath
        </h1>
        <Ornament className="mb-12" />

        <div className="space-y-6 mb-14">
          <p className="dropcap">
            You have just read what Wren became. These are the years before.
          </p>
          <p>
            She was nine the year Mira became queen. By the start of the war,
            she was the young woman in those pages. In between, she wrote to
            Mira often. Three of those letters survive.
          </p>
          <p>
            They are not in this book or the next. They are a small thing on
            their own — fifteen years old in the first letter, sixteen by the
            last, the three-squeeze code closing each one a little differently.
          </p>
          <p className="eyebrow pt-4">— Edward Crewe</p>
        </div>

        {status === "success" ? (
          <p className="eyebrow text-[color:var(--color-ember)] text-center">
            Thank you. The letters are on their way.
          </p>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submit();
            }}
            className="mx-auto max-w-md"
          >
            <label htmlFor="vss-email" className="label">
              Email
            </label>
            <input
              id="vss-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@somewhere.com"
              className="field mb-8"
              disabled={status === "submitting"}
            />
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-ember"
                disabled={status === "submitting"}
              >
                {status === "submitting" ? "Sending…" : "Send me the letters"}
              </button>
            </div>
            {status === "error" && errorMessage && (
              <p className="text-sm text-[color:var(--color-ember)] text-center mt-6">
                {errorMessage}
              </p>
            )}
            <p className="text-sm text-muted-foreground text-center mt-8">
              A short PDF, free, sent immediately. The list is small and
              quiet — used only when there is news of the next book.
            </p>
          </form>
        )}

        <div className="text-center mt-16">
          <Link to="/" className="btn">
            Back to the series
          </Link>
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}

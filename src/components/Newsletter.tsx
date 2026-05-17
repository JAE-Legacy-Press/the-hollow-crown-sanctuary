import { Ornament } from "./Ornament";
import { useSubscribe } from "@/hooks/useSubscribe";

export function Newsletter() {
  const { email, setEmail, status, errorMessage, submit } = useSubscribe("homepage");

  return (
    <section className="container-prose py-24 md:py-32">
      <p className="eyebrow mb-6 text-center">A Free Companion</p>
      <h2 className="display text-3xl md:text-4xl mb-10 text-center">
        Letters from Vesserath
      </h2>
      <Ornament className="mb-12" />

      <div className="max-w-xl mx-auto space-y-6 mb-14">
        <p>
          The year Mira spent learning to be queen, her sister was at Vesserath,
          growing up.
        </p>
        <p>
          Wren wrote to her often — through the monthly rides south, through
          the bindings, through the working. Three of those letters survive.
        </p>
        <p>
          They are not in this book or the next. They are a small thing on their
          own — fifteen years old in the first letter, sixteen by the last, the
          three-squeeze code closing each one a little differently.
        </p>
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
          <label htmlFor="nl-email" className="label">
            Email
          </label>
          <input
            id="nl-email"
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
            A short PDF, free, sent immediately. The list is small and quiet —
            used only when there is news of the next book.
          </p>
          <p className="text-sm text-muted-foreground text-center mt-3">
            Or follow along on{" "}
            <a
              href="https://x.com/hollowcrowncom"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[color:var(--color-ember)] transition-colors"
            >
              X @hollowcrowncom
            </a>
            .
          </p>
        </form>
      )}
    </section>
  );
}

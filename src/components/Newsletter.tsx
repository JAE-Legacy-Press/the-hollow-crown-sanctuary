import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="container-prose py-24 md:py-32 text-center">
      <p className="eyebrow mb-6">Letters from the Marsh</p>
      <h2 className="display text-3xl md:text-4xl mb-6">
        Word, when the next book is finished.
      </h2>
      <p className="text-muted-foreground mb-10">
        One short letter for each new book — never more. No marketing, no follow-ups,
        no second list. You can leave at any time.
      </p>

      {submitted ? (
        <p className="eyebrow text-[color:var(--color-ember)]">
          Thank you. You will hear from me.
        </p>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setSubmitted(true);
          }}
          className="mx-auto max-w-md text-left"
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
          />
          <div className="text-center">
            <button type="submit" className="btn btn-ember">
              Subscribe
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

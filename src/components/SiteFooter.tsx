import { Ornament } from "./Ornament";

export function SiteFooter() {
  return (
    <footer className="container-wide pt-16 pb-12">
      <Ornament className="mb-10" />
      <div className="flex flex-col items-center gap-3 text-center">
        <p className="eyebrow">The Hollow Crown</p>
        <p className="text-sm text-muted-foreground">
          A series by Edward Crewe.
        </p>
        <a
          href="https://x.com/hollowcrowncom"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Hollow Crown on X"
          className="eyebrow inline-flex items-center gap-2 text-[0.72rem] text-muted-foreground hover:text-[color:var(--color-ember)] transition-colors mt-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-3.5 w-3.5"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Follow on X
        </a>
        <p className="text-xs text-muted-foreground/80 mt-4">
          © {new Date().getFullYear()} Edward Crewe. Published by JAE Legacy
          Press. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

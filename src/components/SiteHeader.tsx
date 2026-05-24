import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="container-wide pt-10 pb-6 md:pt-14">
      <div className="flex flex-col items-center gap-1 text-center md:flex-row md:justify-between md:text-left">
        <Link to="/" className="eyebrow">
          The Hollow Crown
        </Link>
        <nav className="eyebrow flex gap-7 text-[0.78rem]">
          <Link to="/the-bone-trials" activeProps={{ style: { color: "var(--color-ember)" } }}>
            Book One
          </Link>
          <Link to="/the-wife-of-war" activeProps={{ style: { color: "var(--color-ember)" } }}>
            Book Two
          </Link>
          <Link to="/the-glass-dunes" activeProps={{ style: { color: "var(--color-ember)" } }}>
            Book Three
          </Link>
          <Link to="/about" activeProps={{ style: { color: "var(--color-ember)" } }}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

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
        <p className="text-xs text-muted-foreground/80 mt-4">
          © {new Date().getFullYear()} Edward Crewe. Published by JAE Legacy
          Press. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

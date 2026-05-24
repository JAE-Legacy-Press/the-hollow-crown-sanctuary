#!/usr/bin/env bash
# Generate 1200x630 OG social cards for hollow-crown.com.
# Reads covers from src/assets/, writes finished cards to public/og-*.jpg.
# Requires: ImageMagick 7 (magick). Run from project root.

set -euo pipefail

cd "$(dirname "$0")/.."

BG="#1a261c"          # deep forest field (matches --color-background)
BG_WARM="#212e1f"     # very slightly warmer toward the bottom
EMBER="#c08550"       # ember accent
CREAM="#f0e3cd"       # cream off-white (matches --color-foreground)

W=1200
H=630
COVER_H=510
COVER_X=70
COVER_Y=60
TEXT_X=460
TEXT_RIGHT_PAD=70

SERIF="Cochin"
SERIF_ITALIC="Cochin-Italic"

mkdir -p public

# Reusable: build a vertical gradient background, deep forest at top → faint
# ember warmth at bottom; then composite the supplied cover at the left.
build_base() {
  local cover="$1"
  local out="$2"

  magick \
    -size "${W}x${H}" \
      gradient:"${BG}"-"${BG_WARM}" \
    \( "${cover}" -resize "x${COVER_H}" \) \
      -gravity NorthWest -geometry "+${COVER_X}+${COVER_Y}" \
      -compose Over -composite \
    "${out}"
}

# Annotate a card with eyebrow / title / body / CTA. Uses absolute pixel
# positions (NorthWest gravity, +x+y). y positions are baseline-ish.
annotate_card() {
  local file="$1"
  local eyebrow="$2"
  local title="$3"
  local body1="$4"
  local body2="$5"
  local cta="$6"

  # Eyebrow (small caps, italic, ember)
  magick "${file}" \
    -gravity NorthWest -fill "${EMBER}" -font "${SERIF_ITALIC}" \
      -pointsize 22 -kerning 4 \
      -annotate "+${TEXT_X}+165" "${eyebrow}" \
    "${file}"

  # Title (Cochin regular, large, cream)
  magick "${file}" \
    -gravity NorthWest -fill "${CREAM}" -font "${SERIF}" \
      -pointsize 80 -kerning -1 \
      -annotate "+${TEXT_X}+260" "${title}" \
    "${file}"

  # Hairline rule beneath the title (ember) — clear of the title descenders
  magick "${file}" \
    -gravity NorthWest -fill "${EMBER}" -stroke "${EMBER}" -strokewidth 1 \
      -draw "line ${TEXT_X},335 $((TEXT_X + 80)),335" \
    +stroke "${file}"

  # Body — two lines, Cochin regular, cream
  magick "${file}" \
    -gravity NorthWest -fill "${CREAM}" -font "${SERIF}" \
      -pointsize 30 -kerning 0 \
      -annotate "+${TEXT_X}+395" "${body1}" \
      -annotate "+${TEXT_X}+440" "${body2}" \
    "${file}"

  # CTA (ember italic with trailing chevron), bottom of the text column.
  # Cochin lacks U+2192 (→), so we use the ASCII chevron ›› which renders cleanly.
  magick "${file}" \
    -gravity NorthWest -fill "${EMBER}" -font "${SERIF_ITALIC}" \
      -pointsize 26 -kerning 3 \
      -annotate "+${TEXT_X}+540" "${cta}" \
    "${file}"

  # Site URL — bottom-right, small, faded
  magick "${file}" \
    -gravity SouthEast -fill "#a89b80" -font "${SERIF_ITALIC}" \
      -pointsize 18 -kerning 2 \
      -annotate "+30+25" "hollow-crown.com" \
    "${file}"

  # Final compression
  magick "${file}" -quality 88 -strip "${file}"
}

# --- Homepage card -----------------------------------------------------------
echo "→ og-home.jpg"
build_base "src/assets/book-one.jpg" "public/og-home.jpg"
annotate_card "public/og-home.jpg" \
  "A SERIES BY EDWARD CREWE" \
  "The Hollow Crown" \
  "Four immortal fae courts. One throne hollow" \
  "for eight hundred years. The forest is waking." \
  "READ BOOK ONE — ON AMAZON  ››"

# --- Book One card -----------------------------------------------------------
echo "→ og-book-one.jpg"
build_base "src/assets/book-one.jpg" "public/og-book-one.jpg"
annotate_card "public/og-book-one.jpg" \
  "BOOK ONE · THE HOLLOW CROWN" \
  "The Bone Trials" \
  "A contest no mortal has ever survived." \
  "A prince ordered to kill her. A court afraid." \
  "READ IT NOW — ON AMAZON  ››"

# --- Book Two card -----------------------------------------------------------
echo "→ og-book-two.jpg"
build_base "src/assets/book-two.jpg" "public/og-book-two.jpg"
annotate_card "public/og-book-two.jpg" \
  "BOOK TWO · THE HOLLOW CROWN" \
  "The Wife of War" \
  "The Hollow throne is no longer empty. The" \
  "Tide Court has a question its library can't answer." \
  "READ IT NOW — ON AMAZON  ››"

# --- Book Three card ---------------------------------------------------------
echo "→ og-book-three.jpg"
build_base "src/assets/book-three.jpg" "public/og-book-three.jpg"
annotate_card "public/og-book-three.jpg" \
  "BOOK THREE · THE HOLLOW CROWN" \
  "The Glass Dunes" \
  "The war is over. The compact is redrawn." \
  "A house at the edge of the dunes. A quiet year." \
  "READ IT NOW — ON AMAZON  ››"

echo "✓ OG cards written to public/og-*.jpg"

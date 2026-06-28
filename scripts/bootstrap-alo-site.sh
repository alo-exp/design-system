#!/usr/bin/env bash
# Copy the Ālo site kit into a consumer project and render chrome partials.
set -euo pipefail

usage() {
  echo "Usage: $0 <project-root>" >&2
  echo "  Creates <project-root>/site/ from kit/ and writes site.config.json if missing." >&2
  exit 1
}

[[ $# -ge 1 ]] || usage
TARGET="$(cd "$1" && pwd)"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$SCRIPT_DIR/.." && pwd)"
KIT="$REPO/kit"

mkdir -p "$TARGET/site" "$TARGET/scripts/chrome-templates"
rsync -a --exclude '_chrome' "$KIT/" "$TARGET/site/"
cp "$KIT/_chrome/"*.html "$TARGET/scripts/chrome-templates/"
cp "$SCRIPT_DIR/render-chrome.py" "$SCRIPT_DIR/apply-site-chrome.py" "$TARGET/scripts/"

if [[ ! -f "$TARGET/site.config.json" ]]; then
  cp "$REPO/site.config.example.json" "$TARGET/site.config.json"
  echo "Created $TARGET/site.config.json — edit product_name, logo_path, nav_links_html, etc."
fi

python3 "$TARGET/scripts/render-chrome.py" --project "$TARGET"
echo "Bootstrapped Ālo site kit at $TARGET/site"
echo "Next: add HTML pages under site/, then run: python3 scripts/apply-site-chrome.py --site site"

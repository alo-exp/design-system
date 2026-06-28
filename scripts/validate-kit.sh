#!/usr/bin/env bash
# Validate DESIGN.md + kit regression guards.
set -euo pipefail

REPO="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO"

echo "==> Chrome regression"
bash tests/test-chrome-regression.sh

if command -v npx >/dev/null 2>&1; then
  echo "==> design.md lint"
  npx -y -p @google/design.md designmd lint DESIGN.md
else
  echo "SKIP: npx not available — install Node to run designmd lint"
fi

echo "==> Python syntax"
python3 -m py_compile scripts/render-chrome.py scripts/apply-site-chrome.py

echo "All kit validation passed."

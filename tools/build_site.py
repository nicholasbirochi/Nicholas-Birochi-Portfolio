#!/usr/bin/env python3
"""Build the static site from an explicit allowlist; never include local files."""
import argparse
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[1]
FILES = (
    "CNAME", "_headers", "app.js", "apple-touch-icon.png", "favicon.ico",
    "favicon.svg", "icon-192.png", "icon-512.png", "index.html", "robots.txt",
    "site.webmanifest", "sitemap.xml", "styles.css",
)
DIRECTORIES = ("assets", ".well-known")


def build(output: Path) -> None:
    # An existing destination is refused: no deletion of local content, and
    # no stale deployment assets. CI starts with an absent, ignored dist/.
    output = output.resolve()
    if output.exists() or output.is_symlink():
        raise ValueError("Output already exists; choose a new empty destination.")
    if any(output.is_relative_to(ROOT / name) for name in DIRECTORIES):
        raise ValueError("Output must be outside publication source directories.")
    sources = [ROOT / name for name in FILES + DIRECTORIES]
    for source in sources:
        if not source.exists() or source.is_symlink():
            raise ValueError(f"Missing or linked publication source: {source.name}")
        if source.is_dir() and any(p.is_symlink() for p in source.rglob("*")):
            raise ValueError(f"Linked publication asset: {source.name}")
    output.mkdir(parents=True)
    for name in FILES:
        shutil.copy2(ROOT / name, output / name)
    for name in DIRECTORIES:
        shutil.copytree(ROOT / name, output / name)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", type=Path, default=ROOT / "dist")
    args = parser.parse_args()
    try:
        build(args.output)
    except (ValueError, OSError) as exc:
        parser.exit(2, f"Build failed: {exc}\n")

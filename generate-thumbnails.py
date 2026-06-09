from pathlib import Path

from PIL import Image, ImageOps


ROOT = Path("assets")
THUMB_ROOT = ROOT / "thumbs"
EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
MAX_WIDTH = 760
QUALITY = 76


def make_thumb(src: Path) -> tuple[int, int] | None:
    if not src.is_file() or src.suffix.lower() not in EXTENSIONS:
        return None

    if "thumbs" in src.parts or "ppt-source" in src.parts:
        return None

    rel = src.relative_to(ROOT)
    dst = THUMB_ROOT / rel.with_suffix(".webp")
    dst.parent.mkdir(parents=True, exist_ok=True)

    original_size = src.stat().st_size
    with Image.open(src) as image:
      image = ImageOps.exif_transpose(image)
      if image.mode not in ("RGB", "RGBA"):
          image = image.convert("RGB")

      if image.width > MAX_WIDTH:
          ratio = MAX_WIDTH / image.width
          image = image.resize((MAX_WIDTH, max(1, int(image.height * ratio))), Image.Resampling.LANCZOS)

      if image.mode == "RGBA":
          background = Image.new("RGB", image.size, "#ffffff")
          background.paste(image, mask=image.getchannel("A"))
          image = background

      try:
          image.save(dst, "WEBP", quality=QUALITY, method=6)
      except ValueError:
          dst = dst.with_suffix(".jpg")
          image.save(dst, "JPEG", quality=82, optimize=True)

    return original_size, dst.stat().st_size


def main() -> None:
    count = 0
    original_total = 0
    thumb_total = 0

    if not ROOT.exists():
        return

    for src in ROOT.rglob("*"):
        result = make_thumb(src)
        if result is None:
            continue
        original_size, thumb_size = result
        count += 1
        original_total += original_size
        thumb_total += thumb_size

    print(f"Generated {count} thumbnails.")
    print(f"Original images: {original_total / 1024 / 1024:.2f} MB")
    print(f"Thumbnails: {thumb_total / 1024 / 1024:.2f} MB")


if __name__ == "__main__":
    main()

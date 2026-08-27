from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1] / "src" / "assets" / "images"
OUT = ROOT / "clients"


def dist(a, b):
    return ((a[0] - b[0]) ** 2 + (a[1] - b[1]) ** 2 + (a[2] - b[2]) ** 2) ** 0.5


def flood_knock(im, color, threshold=42):
    im = im.convert("RGBA")
    w, h = im.size
    px = im.load()
    seen = [[False] * w for _ in range(h)]
    q = deque()

    def try_add(x, y):
        if x < 0 or y < 0 or x >= w or y >= h or seen[y][x]:
            return
        r, g, b, a = px[x, y]
        if a == 0 or dist((r, g, b), color) <= threshold:
            seen[y][x] = True
            q.append((x, y))

    for x in range(w):
        try_add(x, 0)
        try_add(x, h - 1)
    for y in range(h):
        try_add(0, y)
        try_add(w - 1, y)

    while q:
        x, y = q.popleft()
        r, g, b, a = px[x, y]
        d = dist((r, g, b), color)
        if d <= threshold * 0.7:
            px[x, y] = (r, g, b, 0)
        elif d <= threshold:
            fade = int(a * (d - threshold * 0.7) / (threshold * 0.3))
            px[x, y] = (r, g, b, fade)
        else:
            continue
        for nx, ny in ((x - 1, y), (x + 1, y), (x, y - 1), (x, y + 1)):
            try_add(nx, ny)
    return im


def crop_alpha(im, pad=6, min_a=18):
    px = im.load()
    w, h = im.size
    left, top, right, bottom = w, h, 0, 0
    found = False
    for y in range(h):
        for x in range(w):
            if px[x, y][3] >= min_a:
                found = True
                left = min(left, x)
                top = min(top, y)
                right = max(right, x)
                bottom = max(bottom, y)
    if not found:
        return im
    return im.crop(
        (
            max(0, left - pad),
            max(0, top - pad),
            min(w, right + 1 + pad),
            min(h, bottom + 1 + pad),
        )
    )


def save(im, name):
    path = OUT / name
    im.save(path, "PNG")
    print("wrote", path, im.size)


wipro = flood_knock(Image.open(ROOT / "clients" / "wipro.png"), (255, 255, 255), 28)
save(crop_alpha(wipro), "wipro-mark.png")

nagarro = flood_knock(Image.open(ROOT / "clients" / "nagarro.png"), (70, 215, 172), 48)
save(crop_alpha(nagarro), "nagarro-mark.png")

edu = crop_alpha(Image.open(ROOT / "Edupravahaa.png").convert("RGBA"))
save(edu, "edupravahaa-mark.png")

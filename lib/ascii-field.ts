function createRandom(seed: number) {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export type Wave = {
  y: number;
  amplitude: number;
  wavelength: number;
  thickness: number;
  speed: number;
  phase: number;
};

type Options = {
  cols: number;
  rows: number;
  seed: number;
  waves: Array<Wave>;
  cellWidth: number;
  cellHeight: number;
};

export const GLYPHS = [
  null,
  { char: "1", alpha: 0.3 },
  { char: "0", alpha: 0.6 },
  { char: "1", alpha: 0.6 },
  { char: "0", alpha: 1 },
  { char: "1", alpha: 1 },
] as const;

export function createSoundwave({
  cols,
  rows,
  seed,
  waves,
  cellWidth,
  cellHeight,
}: Options) {
  const random = createRandom(seed);
  const cellCount = cols * rows;
  const presence = Float32Array.from({ length: cellCount }, () => random());
  const glyph = Float32Array.from({ length: cellCount }, () => random());

  const loudness = (x: number, time: number) =>
    0.65 +
    0.25 * Math.sin(x / 520 + time * 0.25) +
    0.1 * Math.sin(x / 230 - time * 0.4);

  const waveCount = waves.length;
  const centers = new Float32Array(waveCount * cols);
  const halfWidths = new Float32Array(waveCount * cols);
  const brightness = new Float32Array(cols);
  const codes = new Uint8Array(cellCount);

  return function render(time: number, colStart = 0, colEnd = cols) {
    codes.fill(0);
    let top = Infinity;
    let bottom = -Infinity;

    for (let col = colStart; col < colEnd; col++) {
      const px = (col + 0.5) * cellWidth;
      const volume = loudness(px, time);
      brightness[col] = 0.45 + 0.55 * volume;

      for (let w = 0; w < waveCount; w++) {
        const wave = waves[w];
        const angle =
          (px / wave.wavelength - time * wave.speed) * Math.PI * 2 + wave.phase;
        const center =
          wave.y +
          wave.amplitude *
            volume *
            (Math.sin(angle) + 0.3 * Math.sin(angle * 2.3 + wave.phase));
        const halfWidth = (wave.thickness * (0.5 + volume)) / 2;
        centers[w * cols + col] = center;
        halfWidths[w * cols + col] = halfWidth;
        top = Math.min(top, center - halfWidth);
        bottom = Math.max(bottom, center + halfWidth);
      }
    }

    const firstRow = Math.max(0, Math.floor(top / cellHeight));
    const lastRow = Math.min(rows - 1, Math.ceil(bottom / cellHeight));

    for (let row = firstRow; row <= lastRow; row++) {
      const py = (row + 0.5) * cellHeight;
      for (let col = colStart; col < colEnd; col++) {
        let intensity = 0;
        for (let w = 0; w < waveCount; w++) {
          const index = w * cols + col;
          const distance = Math.abs(py - centers[index]) / halfWidths[index];
          if (distance >= 1) continue;
          intensity = Math.max(intensity, Math.sqrt(1 - distance * distance));
        }
        if (intensity === 0) continue;
        intensity *= brightness[col];

        const cell = row * cols + col;
        if (presence[cell] >= 0.08 + 0.72 * intensity) continue;
        if (intensity > 0.72) codes[cell] = glyph[cell] < 0.75 ? 4 : 5;
        else if (intensity > 0.42) codes[cell] = glyph[cell] < 0.5 ? 2 : 3;
        else codes[cell] = 1;
      }
    }

    return codes;
  };
}

export type AsciiText = { bright: string; mid: string; dim: string };

export function codesToText(
  codes: Uint8Array,
  cols: number,
  rows: number,
): AsciiText {
  const layers = {
    bright: [] as Array<string>,
    mid: [] as Array<string>,
    dim: [] as Array<string>,
  };
  for (let row = 0; row < rows; row++) {
    let bright = "";
    let mid = "";
    let dim = "";
    for (let col = 0; col < cols; col++) {
      const code = codes[row * cols + col];
      const char = GLYPHS[code]?.char ?? " ";
      bright += code >= 4 ? char : " ";
      mid += code === 2 || code === 3 ? char : " ";
      dim += code === 1 ? char : " ";
    }
    layers.bright.push(bright.trimEnd());
    layers.mid.push(mid.trimEnd());
    layers.dim.push(dim.trimEnd());
  }
  return {
    bright: layers.bright.join("\n"),
    mid: layers.mid.join("\n"),
    dim: layers.dim.join("\n"),
  };
}

export function cssGradientLine(angle: number, width: number, height: number) {
  const radians = (angle * Math.PI) / 180;
  const dx = Math.sin(radians);
  const dy = -Math.cos(radians);
  const half =
    (Math.abs(width * Math.sin(radians)) +
      Math.abs(height * Math.cos(radians))) /
    2;
  const cx = width / 2;
  const cy = height / 2;
  return {
    x0: cx - dx * half,
    y0: cy - dy * half,
    x1: cx + dx * half,
    y1: cy + dy * half,
  };
}

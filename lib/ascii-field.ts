// Small seeded PRNG so the pattern is identical on every render.
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

// Smooth 2D value noise built on a seeded lattice.
function createNoise(seed: number) {
  const random = createRandom(seed);
  const size = 256;
  const values = Array.from({ length: size * size }, () => random());
  const at = (x: number, y: number) =>
    values[(((y % size) + size) % size) * size + (((x % size) + size) % size)];
  const smooth = (t: number) => t * t * (3 - 2 * t);

  return (x: number, y: number) => {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);
    const sx = smooth(x - x0);
    const sy = smooth(y - y0);
    const top = at(x0, y0) + (at(x0 + 1, y0) - at(x0, y0)) * sx;
    const bottom = at(x0, y0 + 1) + (at(x0 + 1, y0 + 1) - at(x0, y0 + 1)) * sx;
    return top + (bottom - top) * sy;
  };
}

// Layered noise: big soft shapes with finer billows on top.
function fbm(noise: (x: number, y: number) => number, x: number, y: number) {
  let value = 0;
  let amplitude = 0.5;
  let frequency = 1;
  for (let octave = 0; octave < 4; octave++) {
    value += amplitude * noise(x * frequency, y * frequency);
    amplitude /= 2;
    frequency *= 2;
  }
  return value / 0.9375;
}

const smoothstep = (edge0: number, edge1: number, x: number) => {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
};

// Monospace cells are about twice as tall as they are wide.
const CELL_ASPECT = 2;

type Options = {
  cols: number;
  rows: number;
  seed: number;
  scale?: number;
};

// Builds an even field of 0/1 characters whose density drifts gently with
// soft noise, so it reads as one texture rather than separate patches.
export function generateAsciiField({ cols, rows, seed, scale = 40 }: Options) {
  const random = createRandom(seed);
  const noise = createNoise(seed + 1);
  const lines: Array<string> = [];

  for (let y = 0; y < rows; y++) {
    let line = "";
    for (let x = 0; x < cols; x++) {
      const drift = fbm(noise, x / scale, (y * CELL_ASPECT) / scale);
      const density = 0.04 + 0.5 * smoothstep(0.38, 0.72, drift);
      line += random() < density ? (random() < 0.6 ? "1" : "0") : " ";
    }
    lines.push(line.trimEnd());
  }

  return lines.join("\n");
}

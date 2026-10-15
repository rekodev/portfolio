"use client";

import { useEffect, useRef } from "react";

import {
  codesToText,
  createSoundwave,
  cssGradientLine,
  GLYPHS,
  type Wave,
} from "@/lib/ascii-field";

const FONT_SIZE = 11;
const LETTER_SPACING_EM = 0.35;
const CELL_WIDTH = 10.45;
const CELL_HEIGHT = 14;
const COLS = 270;
const ROWS = 49;
const HEIGHT = 680;
const FIELD_WIDTH = COLS * CELL_WIDTH;
const FRAME_INTERVAL = 1000 / 20;
const TINT_ANGLE = 115;

const WAVES: Array<Wave> = [
  {
    y: 340,
    amplitude: 170,
    wavelength: 1300,
    thickness: 40,
    speed: 0.05,
    phase: 0,
  },
  {
    y: 340,
    amplitude: 120,
    wavelength: 900,
    thickness: 28,
    speed: -0.04,
    phase: Math.PI,
  },
  {
    y: 340,
    amplitude: 70,
    wavelength: 600,
    thickness: 18,
    speed: 0.07,
    phase: 1.3,
  },
];

const render = createSoundwave({
  cols: COLS,
  rows: ROWS,
  seed: 11,
  waves: WAVES,
  cellWidth: CELL_WIDTH,
  cellHeight: CELL_HEIGHT,
});

const SNAPSHOT = codesToText(render(0), COLS, ROWS);
const SHADES = ["dim", "mid", "bright"] as const;

const readColors = () => {
  const style = getComputedStyle(document.documentElement);
  return {
    from: style.getPropertyValue("--ascii-from").trim(),
    to: style.getPropertyValue("--ascii-to").trim(),
  };
};

export default function AsciiBackdrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!container || !canvas || !context) return;

    let width = 0;
    let pixelRatio = 1;
    let sprites: Array<HTMLCanvasElement | null> = [];
    let colors = readColors();
    let time = 0;
    let ready = false;
    let advance = CELL_WIDTH;
    let baseline = CELL_HEIGHT / 2;

    const buildSprites = () => {
      const font = `${FONT_SIZE}px ${getComputedStyle(canvas).fontFamily}`;
      context.font = font;
      const metrics = context.measureText("0");
      advance = metrics.width + FONT_SIZE * LETTER_SPACING_EM;
      const ascent = metrics.fontBoundingBoxAscent;
      const descent = metrics.fontBoundingBoxDescent;
      baseline = (CELL_HEIGHT - (ascent + descent)) / 2 + ascent;

      sprites = GLYPHS.map((glyph) => {
        if (!glyph) return null;
        const sprite = document.createElement("canvas");
        sprite.width = Math.ceil(advance * pixelRatio);
        sprite.height = Math.ceil(CELL_HEIGHT * pixelRatio);
        const spriteContext = sprite.getContext("2d");
        if (!spriteContext) return null;
        spriteContext.scale(pixelRatio, pixelRatio);
        spriteContext.font = font;
        spriteContext.textBaseline = "alphabetic";
        spriteContext.fillStyle = `rgb(255 255 255 / ${glyph.alpha})`;
        spriteContext.fillText(glyph.char, 0, baseline);
        return sprite;
      });
    };

    const draw = () => {
      if (!ready) return;
      const originX = FIELD_WIDTH / 2 - width / 2;
      const colStart = Math.max(0, Math.floor(originX / advance));
      const colEnd = Math.min(COLS, Math.ceil((originX + width) / advance));
      const codes = render(time, colStart, colEnd);

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.globalCompositeOperation = "source-over";
      context.clearRect(0, 0, width, HEIGHT);
      for (let row = 0; row < ROWS; row++) {
        for (let col = colStart; col < colEnd; col++) {
          const sprite = sprites[codes[row * COLS + col]];
          if (!sprite) continue;
          const x = Math.round((col * advance - originX) * pixelRatio);
          context.drawImage(
            sprite,
            x / pixelRatio,
            row * CELL_HEIGHT,
            sprite.width / pixelRatio,
            CELL_HEIGHT,
          );
        }
      }

      context.globalCompositeOperation = "source-in";
      const line = cssGradientLine(TINT_ANGLE, width, HEIGHT);
      const tint = context.createLinearGradient(
        line.x0,
        line.y0,
        line.x1,
        line.y1,
      );
      tint.addColorStop(0, colors.from);
      tint.addColorStop(1, colors.to);
      context.fillStyle = tint;
      context.fillRect(0, 0, width, HEIGHT);

      context.globalCompositeOperation = "destination-in";
      const fade = context.createLinearGradient(0, 0, 0, HEIGHT);
      fade.addColorStop(0, "black");
      fade.addColorStop(400 / HEIGHT, "black");
      fade.addColorStop(640 / HEIGHT, "transparent");
      context.fillStyle = fade;
      context.fillRect(0, 0, width, HEIGHT);

      context.globalCompositeOperation = "destination-out";
      const radiusX = width * 0.5;
      const radiusY = 340;
      context.save();
      context.translate(width * 0.38, 300);
      context.scale(1, radiusY / radiusX);
      const dim = context.createRadialGradient(0, 0, 0, 0, 0, radiusX);
      dim.addColorStop(0, "rgb(0 0 0 / 0.4)");
      dim.addColorStop(0.55, "rgb(0 0 0 / 0.4)");
      dim.addColorStop(1, "transparent");
      context.fillStyle = dim;
      context.fillRect(-radiusX, -radiusX, radiusX * 2, radiusX * 2);
      context.restore();
      context.globalCompositeOperation = "source-over";
    };

    const resize = () => {
      width = canvas.clientWidth;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(HEIGHT * pixelRatio);
      buildSprites();
      draw();
    };

    const resizeObserver = new ResizeObserver(resize);
    let onScreen = true;
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
    });
    const themeObserver = new MutationObserver(() => {
      colors = readColors();
      draw();
    });

    let frameId = 0;
    document.fonts.ready.then(() => {
      ready = true;
      resize();
      resizeObserver.observe(canvas);
      intersectionObserver.observe(canvas);
      themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class", "style"],
      });
      container.dataset.live = "true";

      const start = performance.now();
      let lastFrame = 0;
      frameId = requestAnimationFrame(function tick(now) {
        frameId = requestAnimationFrame(tick);
        if (!onScreen || document.hidden || now - lastFrame < FRAME_INTERVAL) {
          return;
        }
        lastFrame = now;
        time = (now - start) / 1000;
        draw();
      });
    });

    return () => {
      ready = false;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      themeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="ascii-backdrop pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1000px] overflow-hidden"
    >
      <div className="ascii-snapshot absolute inset-x-0 top-0 h-[680px] overflow-hidden">
        {SHADES.map((shade) => (
          <pre
            key={shade}
            className={`ascii-${shade} absolute top-0 font-mono text-[11px] leading-[14px] tracking-[0.35em] select-none`}
            style={{
              left: `calc(50% - ${FIELD_WIDTH / 2}px)`,
              width: FIELD_WIDTH,
            }}
            suppressHydrationWarning
          >
            {SNAPSHOT[shade]}
          </pre>
        ))}
      </div>
      <canvas
        ref={canvasRef}
        className="ascii-canvas absolute inset-x-0 top-0 h-[680px] w-full font-mono"
      />
      <div className="ascii-veil absolute inset-0" />
    </div>
  );
}

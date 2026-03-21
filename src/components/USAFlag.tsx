import { useRef, useEffect } from "react";

const FLAG_W = 494;
const FLAG_H = 260;
const STRIPE_H = FLAG_H / 13;
const CANTON_W = FLAG_W * 0.4;
const CANTON_H = STRIPE_H * 7;

const RED = "#B22234";
const WHITE = "#FFFFFF";
const BLUE = "#3C3B6E";

function drawStaticFlag(ctx: CanvasRenderingContext2D) {
  // Stripes
  for (let i = 0; i < 13; i++) {
    ctx.fillStyle = i % 2 === 0 ? RED : WHITE;
    ctx.fillRect(0, i * STRIPE_H, FLAG_W, STRIPE_H);
  }
  // Canton
  ctx.fillStyle = BLUE;
  ctx.fillRect(0, 0, CANTON_W, CANTON_H);
  // Stars
  ctx.fillStyle = WHITE;
  for (let row = 0; row < 9; row++) {
    const cols = row % 2 === 0 ? 6 : 5;
    const ox = row % 2 === 0 ? CANTON_W / 12 : CANTON_W / 6;
    for (let col = 0; col < cols; col++) {
      const cx = ox + col * (CANTON_W / 6);
      const cy = CANTON_H / 10 + row * (CANTON_H / 9.5);
      drawStar(ctx, cx, cy, 5.5, 2.2);
    }
  }
}

function drawStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, or: number, ir: number) {
  ctx.beginPath();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 === 0 ? or : ir;
    const a = Math.PI / 2 + (i * Math.PI) / 5;
    const x = cx + r * Math.cos(a);
    const y = cy - r * Math.sin(a);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fill();
}

const USAFlag = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Draw static flag to offscreen canvas once
    const off = document.createElement("canvas");
    off.width = FLAG_W;
    off.height = FLAG_H;
    const offCtx = off.getContext("2d")!;
    drawStaticFlag(offCtx);
    offscreenRef.current = off;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = FLAG_W * dpr;
    canvas.height = (FLAG_H + 30) * dpr;
    ctx.scale(dpr, dpr);

    let t = 0;
    const animate = () => {
      t += 0.04;
      ctx.clearRect(0, 0, FLAG_W, FLAG_H + 30);

      const amp = 10;
      const freq = 0.025;
      const speed = 2.5;

      for (let x = 0; x < FLAG_W; x++) {
        // Amplitude grows from right (pole) to left (free end) for RTL pole
        const poleProgress = (FLAG_W - x) / FLAG_W; // 0 at right, 1 at left
        const localAmp = amp * Math.pow(poleProgress, 1.5);
        const dy = localAmp * Math.sin(x * freq - t * speed);

        // Slight vertical scale variation for depth
        const derivative = localAmp * freq * Math.cos(x * freq - t * speed);
        const scaleY = 1 + derivative * 0.003;

        ctx.drawImage(
          off,
          x, 0, 1, FLAG_H,       // source: 1px column
          x, 12 + dy, 1, FLAG_H * scaleY  // dest: shifted + scaled
        );
      }

      // Shadow beneath
      ctx.save();
      ctx.globalAlpha = 0.12;
      ctx.filter = "blur(6px)";
      ctx.fillStyle = "#000";
      ctx.fillRect(8, FLAG_H + 10, FLAG_W - 16, 8);
      ctx.restore();

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: FLAG_W, height: FLAG_H + 30, maxWidth: "100%" }}
      className="drop-shadow-2xl"
    />
  );
};

export default USAFlag;

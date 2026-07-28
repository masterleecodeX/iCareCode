import { useEffect, useRef } from "react";

const CHARS = [
  "I",
  "C",
  "A",
  "R",
  "E",
  "O",
  "d",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "<",
  ">",
  "{",
  "}",
  "/",
];

interface Cell {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  char: string;
}

export function BackgroundGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let clientX = -1000;
    let clientY = -1000;
    let mouseX = -1000;
    let mouseY = -1000;

    let targetSpotlightOpacity = 0;
    let currentSpotlightOpacity = 0;
    let lastTouchTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (Date.now() - lastTouchTime < 500) return;
      clientX = e.clientX;
      clientY = e.clientY;
      mouseX = e.pageX;
      mouseY = e.pageY;
      targetSpotlightOpacity = 1;
    };

    const handleTouchMove = (e: TouchEvent) => {
      lastTouchTime = Date.now();
      if (e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
        mouseX = e.touches[0].pageX;
        mouseY = e.touches[0].pageY;
        targetSpotlightOpacity = 1;
      }
    };

    const handleTouchEnd = () => {
      lastTouchTime = Date.now();
      targetSpotlightOpacity = 0;
    };

    const handleScroll = () => {
      if (clientX !== -1000 && clientY !== -1000) {
        mouseX = clientX + window.scrollX;
        mouseY = clientY + window.scrollY;
      }
    };

    const handleMouseLeave = () => {
      targetSpotlightOpacity = 0;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("touchcancel", handleTouchEnd);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseleave", handleMouseLeave);

    const CELL_SIZE = 24;
    let cells: Cell[] = [];

    const initCells = (w: number, h: number) => {
      cells = [];
      const cols = Math.ceil(w / CELL_SIZE);
      const rows = Math.ceil(h / CELL_SIZE);
      for (let y = 0; y <= rows; y++) {
        for (let x = 0; x <= cols; x++) {
          cells.push({
            baseX: x * CELL_SIZE,
            baseY: y * CELL_SIZE,
            x: x * CELL_SIZE,
            y: y * CELL_SIZE,
            char: CHARS[Math.floor(Math.random() * CHARS.length)],
          });
        }
      }
    };

    const handleResize = () => {
      const w = document.documentElement.clientWidth;
      const h = document.documentElement.scrollHeight;
      canvas.width = w;
      canvas.height = h;
      initCells(w, h);
    };

    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    resizeObserver.observe(document.body);

    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    let time = 0;

    const draw = () => {
      time += 0.05;
      currentSpotlightOpacity +=
        (targetSpotlightOpacity - currentSpotlightOpacity) * 0.05;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "12px monospace";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        const dx = mouseX - cell.baseX;
        const dy = mouseY - cell.baseY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const maxDist = 180;

        let targetX = cell.baseX;
        let targetY = cell.baseY;

        // Repel from mouse
        if (dist < maxDist && dist > 0 && currentSpotlightOpacity > 0.01) {
          const force =
            Math.pow((maxDist - dist) / maxDist, 2) * currentSpotlightOpacity; // non-linear force
          const pushX = (dx / dist) * force * 30;
          const pushY = (dy / dist) * force * 30;
          targetX -= pushX;
          targetY -= pushY;
        }

        // Spring back to target
        cell.x += (targetX - cell.x) * 0.15;
        cell.y += (targetY - cell.y) * 0.15;

        // Randomly change characters sometimes
        if (Math.random() < 0.001) {
          cell.char = CHARS[Math.floor(Math.random() * CHARS.length)];
        }

        // Calculate opacity and color
        let opacity = 0.03; // Base very dim opacity for the whole grid
        if (dist < maxDist) {
          opacity = Math.max(
            0.03,
            0.6 * (1 - dist / maxDist) * currentSpotlightOpacity,
          );
        }

        // Draw with blue tech color
        ctx.fillStyle = `rgba(54, 116, 181, ${opacity})`;

        // Add a slight sine wave floating effect to baseY if not near mouse
        const floatY =
          dist > maxDist ? Math.sin(time + cell.baseX * 0.01) * 1 : 0;

        ctx.fillText(cell.char, cell.x, cell.y + floatY);
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("touchcancel", handleTouchEnd);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 pointer-events-none z-0"
    />
  );
}

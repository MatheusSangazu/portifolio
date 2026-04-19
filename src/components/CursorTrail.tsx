"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface Vec2 {
  x: number;
  y: number;
}

interface Asteroid {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  vertices: Vec2[];
  opacity: number;
  hp: number;
  dead: boolean;
  deathParticles: Vec2[];
  deathTimer: number;
}

interface Laser {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  trail: Vec2[];
}

interface ExplosionParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

const MAX_ASTEROIDS = 3;
const ASTEROID_SPAWN_INTERVAL = 3000;
const IDLE_THRESHOLD = 2000;
const LASER_INTERVAL = 400;
const SHIP_SIZE = 14;

function generateAsteroidVertices(size: number): Vec2[] {
  const count = 6 + Math.floor(Math.random() * 4);
  const verts: Vec2[] = [];
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count;
    const r = size * (0.6 + Math.random() * 0.4);
    verts.push({ x: Math.cos(angle) * r, y: Math.sin(angle) * r });
  }
  return verts;
}

function spawnAsteroid(w: number, h: number): Asteroid {
  const x = w * 0.1 + Math.random() * w * 0.8;
  const y = h * 0.1 + Math.random() * h * 0.8;
  const angle = Math.random() * Math.PI * 2;
  const speed = 0.08 + Math.random() * 0.15;
  const size = 10 + Math.random() * 15;

  return {
    x, y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    size,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.01,
    vertices: generateAsteroidVertices(size),
    opacity: 0.2 + Math.random() * 0.2,
    hp: 3,
    dead: false,
    deathParticles: [],
    deathTimer: 0,
  };
}

function drawShip(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number, defenseMode: boolean, color: string = "249, 115, 22") {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  const s = SHIP_SIZE;

  if (defenseMode) {
    ctx.beginPath();
    ctx.moveTo(0, -s * 1.4);
    ctx.lineTo(s * 0.4, -s * 0.6);
    ctx.lineTo(s * 0.3, s * 0.4);
    ctx.lineTo(0, s * 0.2);
    ctx.lineTo(-s * 0.3, s * 0.4);
    ctx.lineTo(-s * 0.4, -s * 0.6);
    ctx.closePath();
    ctx.fillStyle = `rgba(${color}, 0.06)`;
    ctx.fill();
  }

  ctx.beginPath();
  ctx.moveTo(0, -s);
  ctx.lineTo(s * 0.45, s * 0.5);
  ctx.lineTo(s * 0.15, s * 0.35);
  ctx.lineTo(0, s * 0.7);
  ctx.lineTo(-s * 0.15, s * 0.35);
  ctx.lineTo(-s * 0.45, s * 0.5);
  ctx.closePath();

  ctx.strokeStyle = defenseMode ? `rgba(${color}, 0.95)` : `rgba(${color}, 0.7)`;
  ctx.lineWidth = 1.5;
  ctx.stroke();
  ctx.fillStyle = defenseMode ? `rgba(${color}, 0.12)` : `rgba(${color}, 0.05)`;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(0, 0, 2.5, 0, Math.PI * 2);
  ctx.fillStyle = defenseMode ? `rgb(${color})` : `rgba(${color}, 0.8)`;
  ctx.fill();

  if (defenseMode) {
    ctx.beginPath();
    ctx.moveTo(0, -s * 0.9);
    ctx.lineTo(0, -s * 1.6);
    ctx.strokeStyle = `rgba(${color}, 0.5)`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, -s * 1.7, 3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${color}, 0.3)`;
    ctx.fill();
  }

  ctx.restore();
}

export function CursorTrail() {
  const pathname = usePathname();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef<Vec2>({ x: -200, y: -200 });
  const shipRef = useRef<Vec2>({ x: -200, y: -200 });
  const shipAngleRef = useRef(-Math.PI / 2);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const lasersRef = useRef<Laser[]>([]);
  const particlesRef = useRef<ExplosionParticle[]>([]);
  const frameRef = useRef<number>(0);
  const lastMoveRef = useRef(Date.now());
  const lastLaserRef = useRef(0);
  const defenseModeRef = useRef(false);
  const asteroidTimerRef = useRef(0);
  const overBrandRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;

    const resize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      lastMoveRef.current = Date.now();
      defenseModeRef.current = false;

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const style = getComputedStyle(el);
        const color = style.color.toLowerCase();
        const bgColor = style.backgroundColor.toLowerCase();
        const isBrand = (c: string) =>
          c.includes("249, 115, 22") || c.includes("251, 146, 60") || c.includes("194, 65, 12");
        overBrandRef.current = isBrand(color) || isBrand(bgColor) || isBrand(style.borderColor.toLowerCase());
      }
    };

    const handleClick = () => {
      const sx = shipRef.current.x;
      const sy = shipRef.current.y;
      const angle = shipAngleRef.current;
      for (let i = 0; i < 3; i++) {
        const spread = (i - 1) * 0.15;
        lasersRef.current.push({
          x: sx + Math.sin(angle) * SHIP_SIZE * 0.5,
          y: sy - Math.cos(angle) * SHIP_SIZE * 0.5,
          vx: Math.sin(angle + spread) * 8,
          vy: -Math.cos(angle + spread) * 8,
          life: 60,
          trail: [],
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);

    const animate = () => {
      ctx.clearRect(0, 0, W, H);

      const now = Date.now();
      const idleTime = now - lastMoveRef.current;
      const defenseMode = idleTime > IDLE_THRESHOLD;
      defenseModeRef.current = defenseMode;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const dx = mx - shipRef.current.x;
      const dy = my - shipRef.current.y;
      shipRef.current.x += dx * 0.15;
      shipRef.current.y += dy * 0.15;

      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        const targetAngle = Math.atan2(dx, -dy);
        let angleDiff = targetAngle - shipAngleRef.current;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        shipAngleRef.current += angleDiff * 0.12;
      }

      asteroidTimerRef.current += 16.67;
      if (asteroidTimerRef.current > ASTEROID_SPAWN_INTERVAL && asteroidsRef.current.length < MAX_ASTEROIDS) {
        asteroidTimerRef.current = 0;
        asteroidsRef.current.push(spawnAsteroid(W, H));
      }

      for (let i = asteroidsRef.current.length - 1; i >= 0; i--) {
        const a = asteroidsRef.current[i];
        a.x += a.vx;
        a.y += a.vy;
        a.rotation += a.rotSpeed;

        if (a.dead) {
          a.deathTimer++;
          if (a.deathTimer > 30) {
            asteroidsRef.current.splice(i, 1);
          }
          continue;
        }

        if (a.x < -80 || a.x > W + 80 || a.y < -80 || a.y > H + 80) {
          asteroidsRef.current.splice(i, 1);
        }
      }

      if (defenseMode && now - lastLaserRef.current > LASER_INTERVAL) {
        lastLaserRef.current = now;

        const sx = shipRef.current.x;
        const sy = shipRef.current.y;
        const angle = shipAngleRef.current;

        let nearest: Asteroid | null = null;
        let nearestDist = Infinity;
        for (const a of asteroidsRef.current) {
          if (a.dead) continue;
          const d = Math.hypot(a.x - sx, a.y - sy);
          if (d < nearestDist && d < 300) {
            nearestDist = d;
            nearest = a;
          }
        }

        if (nearest) {
          const aimAngle = Math.atan2(nearest.x - sx, -(nearest.y - sy));
          lasersRef.current.push({
            x: sx + Math.sin(aimAngle) * SHIP_SIZE * 0.8,
            y: sy - Math.cos(aimAngle) * SHIP_SIZE * 0.8,
            vx: Math.sin(aimAngle) * 7,
            vy: -Math.cos(aimAngle) * 7,
            life: 50,
            trail: [],
          });
        }
      }

      for (let i = lasersRef.current.length - 1; i >= 0; i--) {
        const l = lasersRef.current[i];
        l.trail.push({ x: l.x, y: l.y });
        if (l.trail.length > 6) l.trail.shift();

        l.x += l.vx;
        l.y += l.vy;
        l.life--;

        if (l.life <= 0 || l.x < -20 || l.x > W + 20 || l.y < -20 || l.y > H + 20) {
          lasersRef.current.splice(i, 1);
          continue;
        }

        for (const a of asteroidsRef.current) {
          if (a.dead) continue;
          if (Math.hypot(l.x - a.x, l.y - a.y) < a.size * 0.8) {
            a.hp--;
            l.life = 0;

            for (let p = 0; p < 4; p++) {
              const pAngle = Math.random() * Math.PI * 2;
              const pSpeed = 0.5 + Math.random() * 1.5;
              particlesRef.current.push({
                x: l.x,
                y: l.y,
                vx: Math.cos(pAngle) * pSpeed,
                vy: Math.sin(pAngle) * pSpeed,
                life: 15 + Math.random() * 10,
                maxLife: 25,
                size: 1 + Math.random() * 1.5,
              });
            }

            if (a.hp <= 0) {
              a.dead = true;
              a.deathTimer = 0;

              for (let p = 0; p < 10; p++) {
                const pAngle = Math.random() * Math.PI * 2;
                const pSpeed = 1 + Math.random() * 3;
                particlesRef.current.push({
                  x: a.x,
                  y: a.y,
                  vx: Math.cos(pAngle) * pSpeed,
                  vy: Math.sin(pAngle) * pSpeed,
                  life: 30 + Math.random() * 25,
                  maxLife: 55,
                  size: 1.5 + Math.random() * 2.5,
                });
              }
            }
            break;
          }
        }
      }

      for (let i = particlesRef.current.length - 1; i >= 0; i--) {
        const p = particlesRef.current[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.life--;
        if (p.life <= 0) {
          particlesRef.current.splice(i, 1);
        }
      }

      for (const a of asteroidsRef.current) {
        ctx.save();
        ctx.translate(a.x, a.y);
        ctx.rotate(a.rotation);

        if (a.dead) {
          const fadeAlpha = a.deathTimer / 30;
          ctx.globalAlpha = (1 - fadeAlpha) * a.opacity * 3;
        } else {
          ctx.globalAlpha = a.opacity;
        }

        ctx.beginPath();
        ctx.moveTo(a.vertices[0].x, a.vertices[0].y);
        for (let v = 1; v < a.vertices.length; v++) {
          ctx.lineTo(a.vertices[v].x, a.vertices[v].y);
        }
        ctx.closePath();
        ctx.strokeStyle = "rgba(249, 115, 22, 0.4)";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = "rgba(249, 115, 22, 0.05)";
        ctx.fill();

        ctx.globalAlpha = 1;
        ctx.restore();
      }

      for (const l of lasersRef.current) {
        if (l.trail.length > 1) {
          ctx.beginPath();
          ctx.moveTo(l.trail[0].x, l.trail[0].y);
          for (let t = 1; t < l.trail.length; t++) {
            ctx.lineTo(l.trail[t].x, l.trail[t].y);
          }
          ctx.lineTo(l.x, l.y);
          ctx.strokeStyle = "rgba(249, 115, 22, 0.2)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(l.x, l.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#F97316";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(l.x, l.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(249, 115, 22, 0.15)";
        ctx.fill();
      }

      for (const p of particlesRef.current) {
        const alpha = p.life / p.maxLife;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${alpha * 0.6})`;
        ctx.fill();
      }

      const shipColor = overBrandRef.current ? "255, 255, 255" : "249, 115, 22";
      drawShip(ctx, shipRef.current.x, shipRef.current.y, shipAngleRef.current, defenseMode, shipColor);

      if (defenseMode) {
        const sx = shipRef.current.x;
        const sy = shipRef.current.y;

        ctx.font = "9px monospace";
        ctx.fillStyle = "rgba(249, 115, 22, 0.4)";
        ctx.textAlign = "center";
        ctx.fillText("[PASSIVE DEFENSE]", sx, sy + SHIP_SIZE + 18);

        const dotPhase = Math.floor(now / 500) % 4;
        const dots = ".".repeat(dotPhase);
        ctx.fillText(dots, sx + 52, sy + SHIP_SIZE + 18);
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const isGame = pathname.startsWith("/game");

  useEffect(() => {
    if (isGame) {
      document.body.classList.remove("cursor-none");
    } else {
      document.body.classList.add("cursor-none");
    }
    return () => {
      document.body.classList.remove("cursor-none");
    };
  }, [isGame]);

  return (
    <div className={`fixed inset-0 z-[100] hidden md:block pointer-events-none ${isGame ? "invisible" : ""}`}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />
    </div>
  );
}

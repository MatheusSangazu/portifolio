"use client";

import { useEffect, useRef, useState, useCallback } from "react";

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
  hp: number;
  dead: boolean;
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

interface Star {
  x: number;
  y: number;
  speed: number;
  size: number;
  opacity: number;
}

const SHIP_SIZE = 16;
const MAX_LIVES = 3;
const INITIAL_SPAWN_INTERVAL = 1800;
const MIN_SPAWN_INTERVAL = 500;
const LASER_INTERVAL = 200;
const INVINCIBILITY_FRAMES = 90;
const IDLE_THRESHOLD = 1500;

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

function spawnAsteroid(w: number, h: number, difficulty: number): Asteroid {
  const edge = Math.floor(Math.random() * 4);
  let x: number, y: number;

  switch (edge) {
    case 0: x = -40; y = Math.random() * h; break;
    case 1: x = w + 40; y = Math.random() * h; break;
    case 2: x = Math.random() * w; y = -40; break;
    default: x = Math.random() * w; y = h + 40; break;
  }

  const centerX = w / 2;
  const centerY = h / 2;
  const angle = Math.atan2(centerY - y, centerX - x) + (Math.random() - 0.5) * 1.2;
  const speed = (0.4 + Math.random() * 0.8) * (1 + difficulty * 0.1);
  const size = 12 + Math.random() * 18 + difficulty * 1.5;

  return {
    x, y,
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    size,
    rotation: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.03,
    vertices: generateAsteroidVertices(size),
    hp: Math.ceil(size / 12),
    dead: false,
    deathTimer: 0,
  };
}

function generateStars(w: number, h: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < 120; i++) {
    stars.push({
      x: Math.random() * w,
      y: Math.random() * h,
      speed: 0.1 + Math.random() * 0.5,
      size: 0.5 + Math.random() * 1.5,
      opacity: 0.2 + Math.random() * 0.6,
    });
  }
  return stars;
}

function drawShip(ctx: CanvasRenderingContext2D, x: number, y: number, angle: number, invincible: boolean, color: string = "249, 115, 22") {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);

  if (invincible && Math.floor(Date.now() / 80) % 2 === 0) {
    ctx.globalAlpha = 0.3;
  }

  const s = SHIP_SIZE;

  ctx.beginPath();
  ctx.moveTo(0, -s * 1.3);
  ctx.lineTo(s * 0.5, s * 0.6);
  ctx.lineTo(s * 0.2, s * 0.4);
  ctx.lineTo(0, s * 0.8);
  ctx.lineTo(-s * 0.2, s * 0.4);
  ctx.lineTo(-s * 0.5, s * 0.6);
  ctx.closePath();

  ctx.strokeStyle = `rgb(${color})`;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = `rgba(${color}, 0.1)`;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(0, 0, 3, 0, Math.PI * 2);
  ctx.fillStyle = `rgb(${color})`;
  ctx.fill();

  ctx.beginPath();
  ctx.moveTo(0, -s * 1.1);
  ctx.lineTo(0, -s * 1.8);
  ctx.strokeStyle = `rgba(${color}, 0.6)`;
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(0, -s * 1.9, 4, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${color}, 0.25)`;
  ctx.fill();

  ctx.globalAlpha = 1;
  ctx.restore();
}

type GameState = "menu" | "playing" | "gameover";

export function SpaceGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameState, setGameState] = useState<GameState>("menu");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(MAX_LIVES);
  const [highScore, setHighScore] = useState(0);
  const [warpIn, setWarpIn] = useState(false);

  const mouseRef = useRef<Vec2>({ x: -200, y: -200 });
  const shipRef = useRef<Vec2>({ x: -200, y: -200 });
  const shipAngleRef = useRef(-Math.PI / 2);
  const asteroidsRef = useRef<Asteroid[]>([]);
  const lasersRef = useRef<Laser[]>([]);
  const particlesRef = useRef<ExplosionParticle[]>([]);
  const starsRef = useRef<Star[]>([]);
  const frameRef = useRef<number>(0);
  const lastLaserRef = useRef(0);
  const lastMoveRef = useRef(Date.now());
  const asteroidTimerRef = useRef(0);
  const scoreRef = useRef(0);
  const livesRef = useRef(MAX_LIVES);
  const invincibilityRef = useRef(0);
  const difficultyRef = useRef(0);
  const gameStateRef = useRef<GameState>("menu");
  const destroyedRef = useRef(0);
  const overBrandRef = useRef(false);

  const WRef = useRef(0);
  const HRef = useRef(0);

  const startGame = useCallback(() => {
    scoreRef.current = 0;
    livesRef.current = MAX_LIVES;
    invincibilityRef.current = 0;
    difficultyRef.current = 0;
    destroyedRef.current = 0;
    asteroidsRef.current = [];
    lasersRef.current = [];
    particlesRef.current = [];
    asteroidTimerRef.current = 0;
    setScore(0);
    setLives(MAX_LIVES);
    gameStateRef.current = "playing";
    setGameState("playing");
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      WRef.current = window.innerWidth;
      HRef.current = window.innerHeight;
      canvas.width = WRef.current;
      canvas.height = HRef.current;
      starsRef.current = generateStars(WRef.current, HRef.current);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      lastMoveRef.current = Date.now();

      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const style = getComputedStyle(el);
        const color = style.color.toLowerCase();
        const bgColor = style.backgroundColor.toLowerCase();
        const isBrand = (c: string) =>
          c.includes("249, 115, 22") || c.includes("251, 146, 60") || c.includes("194, 65, 12");
        overBrandRef.current = isBrand(color) || isBrand(bgColor);
      }
    };

    const handleClick = () => {
      if (gameStateRef.current !== "playing") return;

      lastMoveRef.current = Date.now();

      const sx = shipRef.current.x;
      const sy = shipRef.current.y;
      const angle = shipAngleRef.current;

      for (let i = 0; i < 3; i++) {
        const spread = (i - 1) * 0.12;
        lasersRef.current.push({
          x: sx + Math.sin(angle) * SHIP_SIZE * 0.8,
          y: sy - Math.cos(angle) * SHIP_SIZE * 0.8,
          vx: Math.sin(angle + spread) * 10,
          vy: -Math.cos(angle + spread) * 10,
          life: 50,
          trail: [],
        });
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        window.history.back();
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (gameStateRef.current !== "playing" && e.deltaY < 0) {
        window.history.back();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("wheel", handleWheel, { passive: true });

    const animate = () => {
      const W = WRef.current;
      const H = HRef.current;
      ctx.fillStyle = "rgba(12, 10, 9, 0.85)";
      ctx.fillRect(0, 0, W, H);

      for (const star of starsRef.current) {
        star.y += star.speed;
        if (star.y > H) {
          star.y = 0;
          star.x = Math.random() * W;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${star.opacity * 0.3})`;
        ctx.fill();
      }

      if (gameStateRef.current === "menu") {
        const mx = mouseRef.current.x;
        const my = mouseRef.current.y;
        const dx = mx - shipRef.current.x;
        const dy = my - shipRef.current.y;
        shipRef.current.x += dx * 0.08;
        shipRef.current.y += dy * 0.08;
        if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
          const targetAngle = Math.atan2(dx, -dy);
          let angleDiff = targetAngle - shipAngleRef.current;
          while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
          while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
          shipAngleRef.current += angleDiff * 0.1;
        }
        const shipColor = overBrandRef.current ? "255, 255, 255" : "249, 115, 22";
        drawShip(ctx, shipRef.current.x, shipRef.current.y, shipAngleRef.current, false, shipColor);
        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      if (gameStateRef.current === "gameover") {
        for (const p of particlesRef.current) {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.97;
          p.vy *= 0.97;
          p.life--;
          const alpha = p.life / p.maxLife;
          const radius = Math.max(0.1, p.size * alpha);
          ctx.beginPath();
          ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(249, 115, 22, ${alpha * 0.6})`;
          ctx.fill();
        }
        particlesRef.current = particlesRef.current.filter(p => p.life > 0);

        const mx2 = mouseRef.current.x;
        const my2 = mouseRef.current.y;
        const dx2 = mx2 - shipRef.current.x;
        const dy2 = my2 - shipRef.current.y;
        shipRef.current.x += dx2 * 0.08;
        shipRef.current.y += dy2 * 0.08;
        if (Math.abs(dx2) > 1 || Math.abs(dy2) > 1) {
          const targetAngle2 = Math.atan2(dx2, -dy2);
          let angleDiff2 = targetAngle2 - shipAngleRef.current;
          while (angleDiff2 > Math.PI) angleDiff2 -= Math.PI * 2;
          while (angleDiff2 < -Math.PI) angleDiff2 += Math.PI * 2;
          shipAngleRef.current += angleDiff2 * 0.1;
        }
        drawShip(ctx, shipRef.current.x, shipRef.current.y, shipAngleRef.current, false, overBrandRef.current ? "255, 255, 255" : "249, 115, 22");

        frameRef.current = requestAnimationFrame(animate);
        return;
      }

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      const dx = mx - shipRef.current.x;
      const dy = my - shipRef.current.y;
      shipRef.current.x += dx * 0.08;
      shipRef.current.y += dy * 0.08;

      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        const targetAngle = Math.atan2(dx, -dy);
        let angleDiff = targetAngle - shipAngleRef.current;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        shipAngleRef.current += angleDiff * 0.1;
      }

      if (invincibilityRef.current > 0) invincibilityRef.current--;

      const now = Date.now();
      const isIdle = now - lastMoveRef.current > IDLE_THRESHOLD;

      difficultyRef.current = Math.floor(destroyedRef.current / 5);
      const spawnInterval = Math.max(MIN_SPAWN_INTERVAL, INITIAL_SPAWN_INTERVAL - difficultyRef.current * 150);

      asteroidTimerRef.current += 16.67;
      const maxAsteroids = 4 + difficultyRef.current * 2;
      if (asteroidTimerRef.current > spawnInterval && asteroidsRef.current.length < maxAsteroids) {
        asteroidTimerRef.current = 0;
        asteroidsRef.current.push(spawnAsteroid(W, H, difficultyRef.current));
      }

      if (isIdle && now - lastLaserRef.current > LASER_INTERVAL) {
        lastLaserRef.current = now;

        const sx = shipRef.current.x;
        const sy = shipRef.current.y;
        const angle = shipAngleRef.current;

        let nearest: Asteroid | null = null;
        let nearestDist = Infinity;
        for (const a of asteroidsRef.current) {
          if (a.dead) continue;
          const d = Math.hypot(a.x - sx, a.y - sy);
          if (d < nearestDist && d < 350) {
            nearestDist = d;
            nearest = a;
          }
        }

        if (nearest) {
          const aimAngle = Math.atan2(nearest.x - sx, -(nearest.y - sy));
          lasersRef.current.push({
            x: sx + Math.sin(aimAngle) * SHIP_SIZE,
            y: sy - Math.cos(aimAngle) * SHIP_SIZE,
            vx: Math.sin(aimAngle) * 8,
            vy: -Math.cos(aimAngle) * 8,
            life: 45,
            trail: [],
          });
        }
      }

      for (let i = asteroidsRef.current.length - 1; i >= 0; i--) {
        const a = asteroidsRef.current[i];
        a.x += a.vx;
        a.y += a.vy;
        a.rotation += a.rotSpeed;

        if (a.dead) {
          a.deathTimer++;
          if (a.deathTimer > 25) {
            asteroidsRef.current.splice(i, 1);
          }
          continue;
        }

        if (a.x < -100 || a.x > W + 100 || a.y < -100 || a.y > H + 100) {
          asteroidsRef.current.splice(i, 1);
        }
      }

      if (invincibilityRef.current <= 0) {
        for (const a of asteroidsRef.current) {
          if (a.dead) continue;
          const dist = Math.hypot(shipRef.current.x - a.x, shipRef.current.y - a.y);
          if (dist < a.size * 0.6 + SHIP_SIZE * 0.5) {
            livesRef.current--;
            invincibilityRef.current = INVINCIBILITY_FRAMES;
            setLives(livesRef.current);

            for (let p = 0; p < 20; p++) {
              const pAngle = Math.random() * Math.PI * 2;
              const pSpeed = 1 + Math.random() * 4;
              particlesRef.current.push({
                x: shipRef.current.x,
                y: shipRef.current.y,
                vx: Math.cos(pAngle) * pSpeed,
                vy: Math.sin(pAngle) * pSpeed,
                life: 30 + Math.random() * 30,
                maxLife: 60,
                size: 1.5 + Math.random() * 3,
              });
            }

            a.dead = true;
            a.deathTimer = 0;

            if (livesRef.current <= 0) {
              gameStateRef.current = "gameover";
              setGameState("gameover");
              if (scoreRef.current > highScore) {
                setHighScore(scoreRef.current);
              }
            }
            break;
          }
        }
      }

      for (let i = lasersRef.current.length - 1; i >= 0; i--) {
        const l = lasersRef.current[i];
        l.trail.push({ x: l.x, y: l.y });
        if (l.trail.length > 8) l.trail.shift();

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
              destroyedRef.current++;
              const points = Math.ceil(a.size);
              scoreRef.current += points;
              setScore(scoreRef.current);

              for (let p = 0; p < 12; p++) {
                const pAngle = Math.random() * Math.PI * 2;
                const pSpeed = 1 + Math.random() * 3.5;
                particlesRef.current.push({
                  x: a.x,
                  y: a.y,
                  vx: Math.cos(pAngle) * pSpeed,
                  vy: Math.sin(pAngle) * pSpeed,
                  life: 30 + Math.random() * 30,
                  maxLife: 60,
                  size: 1.5 + Math.random() * 3,
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
          const fadeAlpha = a.deathTimer / 25;
          ctx.globalAlpha = (1 - fadeAlpha) * 0.7;
        } else {
          ctx.globalAlpha = 0.7;
        }

        ctx.beginPath();
        ctx.moveTo(a.vertices[0].x, a.vertices[0].y);
        for (let v = 1; v < a.vertices.length; v++) {
          ctx.lineTo(a.vertices[v].x, a.vertices[v].y);
        }
        ctx.closePath();
        ctx.strokeStyle = "#F97316";
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.fillStyle = "rgba(249, 115, 22, 0.06)";
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
          ctx.strokeStyle = "rgba(249, 115, 22, 0.25)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.beginPath();
        ctx.arc(l.x, l.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = "#F97316";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(l.x, l.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(249, 115, 22, 0.15)";
        ctx.fill();
      }

      for (const p of particlesRef.current) {
        const alpha = p.life / p.maxLife;
        const radius = Math.max(0.1, p.size * alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249, 115, 22, ${alpha * 0.6})`;
        ctx.fill();
      }

      if (gameStateRef.current === "playing") {
        drawShip(ctx, shipRef.current.x, shipRef.current.y, shipAngleRef.current, invincibilityRef.current > 0, overBrandRef.current ? "255, 255, 255" : "249, 115, 22");
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", resize);
    };
  }, [highScore]);

  useEffect(() => {
    if (warpIn) {
      const timer = setTimeout(() => setWarpIn(false), 800);
      return () => clearTimeout(timer);
    }
  }, [warpIn]);

  return (
    <div className={`fixed inset-0 z-[200] bg-background ${warpIn ? "animate-warp-in" : ""}`}>
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-8 z-10 pointer-events-none">
        <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-brand-primary/80">
          SCORE: <span className="text-white font-bold text-sm">{score}</span>
        </div>
        <div className="flex items-center gap-2">
          {Array.from({ length: MAX_LIVES }).map((_, i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full border border-brand-primary transition-all duration-300"
              style={{
                backgroundColor: i < lives ? "#F97316" : "transparent",
                boxShadow: i < lives ? "0 0 8px rgba(249, 115, 22, 0.5)" : "none",
                opacity: i < lives ? 1 : 0.3,
              }}
            />
          ))}
        </div>
        {difficultyRef.current > 0 && (
          <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-text-muted">
            WAVE {difficultyRef.current + 1}
          </div>
        )}
      </div>

      <button
        onClick={() => window.history.back()}
        className="absolute top-6 right-6 z-10 font-mono text-[10px] tracking-[0.3em] uppercase text-text-muted hover:text-brand-primary transition-colors pointer-events-auto"
      >
        [ESC] BACK
      </button>

      {gameState === "menu" && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <div className="font-mono text-[10px] tracking-[0.5em] uppercase text-brand-primary/60 mb-6">
              // UNAUTHORIZED ACCESS
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase text-white mb-4 leading-[0.9]">
              ASTEROID
              <br />
              <span className="text-brand-primary italic font-serif text-[0.85em]">DEFENSE</span>
            </h1>
            <p className="font-mono text-[11px] text-text-muted tracking-wider mb-12 max-w-sm mx-auto leading-relaxed">
              PROTEJA O SETOR. DESTROY ASTEROIDS.
              <br />
              SOBREVIVA ENQUANTO PUDER.
            </p>
            {highScore > 0 && (
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-text-muted/60 mb-8">
                HIGH SCORE: <span className="text-brand-primary">{highScore}</span>
              </div>
            )}
            <button
              onClick={startGame}
              className="font-mono text-sm tracking-[0.4em] uppercase text-brand-primary border border-brand-primary/40 px-10 py-4 hover:bg-brand-primary/10 hover:border-brand-primary transition-all duration-500"
            >
              INICIAR MISSAO
            </button>
            <div className="mt-8 font-mono text-[9px] text-text-muted/40 tracking-wider">
              CLIQUE PARA DISPARAR // CURSOR GUIA A NAVE
            </div>
          </div>
        </div>
      )}

      {gameState === "gameover" && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center">
            <div className="font-mono text-[10px] tracking-[0.5em] uppercase text-red-500/80 mb-6">
              // SYSTEM FAILURE
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white mb-2">
              GAME OVER
            </h2>
            <div className="w-16 h-px bg-brand-primary/40 mx-auto my-6" />
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-text-muted mb-2">
              FINAL SCORE
            </div>
            <div className="text-4xl font-bold text-brand-primary mb-2 font-mono">
              {score}
            </div>
            <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-text-muted/50 mb-10">
              ASTEROIDS DESTROYED: {destroyedRef.current}
            </div>
            {score >= highScore && score > 0 && (
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-primary mb-8 animate-pulse">
                NEW HIGH SCORE!
              </div>
            )}
            <div className="flex flex-col gap-3 items-center">
              <button
                onClick={startGame}
                className="font-mono text-sm tracking-[0.4em] uppercase text-brand-primary border border-brand-primary/40 px-10 py-4 hover:bg-brand-primary/10 hover:border-brand-primary transition-all duration-500"
              >
                TENTAR NOVAMENTE
              </button>
              <button
                onClick={() => window.history.back()}
                className="font-mono text-[10px] tracking-[0.3em] uppercase text-text-muted hover:text-brand-primary transition-colors mt-2"
              >
                VOLTAR AO PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

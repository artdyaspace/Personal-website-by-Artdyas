import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
  size: number;
}

const MouseSplashEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const lastMouse = useRef({ x: 0, y: 0 });

  const colors = [
    '#9747FF',
    '#00A5CA',
    '#B3F2FF',
    '#6362EE',
    '#0BA7D0'
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      lastMouse.current = { ...mouse.current };
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Calculate movement speed
      const speed = Math.sqrt(
        Math.pow(mouse.current.x - lastMouse.current.x, 2) +
        Math.pow(mouse.current.y - lastMouse.current.y, 2)
      );

      // Create particles based on movement speed
      if (speed > 2) {
        const particleCount = Math.min(Math.floor(speed / 2), 5);
        
        for (let i = 0; i < particleCount; i++) {
          particles.current.push({
            x: mouse.current.x + (Math.random() - 0.5) * 20,
            y: mouse.current.y + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            life: 60,
            maxLife: 60,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 2
          });
        }
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current = particles.current.filter(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life--;

        // Gravity effect
        particle.vy += 0.1;

        // Fade out
        const alpha = particle.life / particle.maxLife;
        
        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        );
        gradient.addColorStop(0, particle.color + Math.floor(alpha * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, particle.color + '00');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        // Add inner glow
        ctx.fillStyle = particle.color + Math.floor(alpha * 128).toString(16).padStart(2, '0');
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 0.5, 0, Math.PI * 2);
        ctx.fill();

        return particle.life > 0;
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default MouseSplashEffect;

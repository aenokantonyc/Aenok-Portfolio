import { useEffect, useRef, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isHeroNode: boolean;
}

const NodeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>();
  const [isMobile, setIsMobile] = useState(false);
  const themeRef = useRef<'light' | 'dark'>('light');

  useEffect(() => {
    const checkMobile = () => setIsMobile(!window.matchMedia('(hover: hover)').matches);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateTheme = () => {
      themeRef.current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    };

    const initNodes = () => {
      const heroHeight = window.innerHeight;
      const totalHeight = canvas.height;
      const heroNodeCount = Math.floor((canvas.width * heroHeight) / 15000);
      const restNodeCount = Math.floor((canvas.width * (totalHeight - heroHeight)) / 25000);
      nodesRef.current = [];

      for (let i = 0; i < heroNodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * heroHeight,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 1.5 + 0.5,
          isHeroNode: true,
        });
      }

      for (let i = 0; i < restNodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * canvas.width,
          y: heroHeight + Math.random() * (totalHeight - heroHeight),
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          radius: Math.random() * 1 + 0.5,
          isHeroNode: false,
        });
      }
    };

    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = themeRef.current === 'dark';
      const nodes = nodesRef.current;
      const connectionDistance = 120;
      const heroHeight = window.innerHeight;
      const fadeZone = 300; // pixels over which lines fade in after hero

      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Skip rendering nodes inside hero section
        if (node.y < heroHeight) return;

        // Fade factor: 0 at heroHeight, 1 at heroHeight + fadeZone
        const fadeFactor = Math.min(1, (node.y - heroHeight) / fadeZone);
        
        const alpha = (node.isHeroNode ? 0.4 : 0.25) * fadeFactor;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${alpha})`
          : `rgba(0, 0, 0, ${alpha})`;
        ctx.fill();

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          if (other.y < heroHeight) continue;
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const otherFade = Math.min(1, (other.y - heroHeight) / fadeZone);
            const combinedFade = Math.min(fadeFactor, otherFade);
            const lineAlpha = (1 - dist / connectionDistance) * (node.isHeroNode ? 0.18 : 0.1) * combinedFade;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = isDark
              ? `rgba(255, 255, 255, ${lineAlpha})`
              : `rgba(0, 0, 0, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initNodes();
    animate();

    window.addEventListener('resize', () => { resizeCanvas(); initNodes(); });

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      observer.disconnect();
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default NodeBackground;

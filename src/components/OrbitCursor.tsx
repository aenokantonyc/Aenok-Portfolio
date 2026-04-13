import { useEffect, useRef } from 'react';

const OrbitCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const ringPosRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const isDesktop = window.matchMedia('(hover: hover)').matches;
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement('div');
      ripple.className = 'cursor-ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    const animate = () => {
      ringPosRef.current.x += (mouseRef.current.x - ringPosRef.current.x) * 0.15;
      ringPosRef.current.y += (mouseRef.current.y - ringPosRef.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPosRef.current.x}px`;
        ringRef.current.style.top = `${ringPosRef.current.y}px`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    document.body.style.cursor = 'none';
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);
    animate();

    return () => {
      document.body.style.cursor = '';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover)').matches) {
    return null;
  }

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[10000]"
        style={{
          background: 'hsl(var(--foreground))',
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div
        ref={ringRef}
        className="fixed w-[42px] h-[42px] rounded-full pointer-events-none z-[9999]"
        style={{
          border: '2px solid hsl(var(--foreground) / 0.4)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
};

export default OrbitCursor;

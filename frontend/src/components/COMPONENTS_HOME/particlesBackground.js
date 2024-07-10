import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const columns = Math.floor(w / 20) + 1;
    const yPositions = Array(columns).fill(0);

    const matrixEffect = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = '#0f0';
      ctx.font = '15pt monospace';

      yPositions.forEach((y, index) => {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        const x = index * 20;
        ctx.fillText(text, x, y);
        if (y > 100 + Math.random() * 10000) {
          yPositions[index] = 0;
        } else {
          yPositions[index] = y + 20;
        }
      });
    };

    const interval = setInterval(matrixEffect, 50);

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="matrix-canvas" ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />;
};

export default ParticlesBackground;
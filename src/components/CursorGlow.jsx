import React, { useEffect, useState } from 'react';

// A subtle cursor-follow glow used site-wide
const CursorGlow = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('pointermove', handle, { passive: true });
    return () => window.removeEventListener('pointermove', handle);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[5]"
      aria-hidden
      style={{
        background: `radial-gradient(600px at ${pos.x}px ${pos.y}px, rgba(244, 63, 94, 0.08), transparent 70%)`,
      }}
    />
  );
};

export default CursorGlow;

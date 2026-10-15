import { useEffect, useState } from 'react';

/**
 * Robust, production-grade typewriter role rotator.
 * Cycles smoothly through role titles without resetting on parent re-renders.
 */
const RotatingRole = ({ roles = [], interval = 2500, className = '' }) => {
  const [display, setDisplay] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!roles || roles.length === 0) return undefined;

    const currentText = roles[roleIndex % roles.length];

    let timer;
    if (isDeleting) {
      if (display.length > 0) {
        timer = setTimeout(() => {
          setDisplay((prev) => prev.slice(0, -1));
        }, 30);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 150);
      }
    } else {
      if (display.length < currentText.length) {
        timer = setTimeout(() => {
          setDisplay(currentText.slice(0, display.length + 1));
        }, 60);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, interval);
      }
    }

    return () => clearTimeout(timer);
  }, [display, isDeleting, roleIndex, interval, roles]);

  return (
    <span className={className} aria-live="polite">
      <span>{display}</span>
      <span className="inline-block ml-1 w-0.5 h-5 bg-cyan-300 animate-pulse align-middle" />
    </span>
  );
};

export default RotatingRole;

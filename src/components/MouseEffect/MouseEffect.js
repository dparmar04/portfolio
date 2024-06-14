import React, { useEffect, useRef, useState } from 'react';
import './MouseEffect.css';

const MouseEffect = () => {
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const follower = followerRef.current;

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      follower.style.transform = `translate(${clientX}px, ${clientY}px)`;
    };

    const onMouseOver = (event) => {
      if (event.target.classList.contains('hover-target')) {
        setIsHovering(true);
        event.target.classList.add('hovered');
      }
    };

    const onMouseOut = (event) => {
      if (event.target.classList.contains('hover-target')) {
        setIsHovering(false);
        event.target.classList.remove('hovered');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      className={`mouse-effect ${isHovering ? 'hovering' : ''}`}
    />
  );
};

export default MouseEffect;

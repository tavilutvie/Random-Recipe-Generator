import { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Use actual food images instead of icons
const foodItems = [
  { url: 'https://www.themealdb.com/images/category/beef.png', size: 160 },
  { url: 'https://www.themealdb.com/images/category/chicken.png', size: 180 },
  { url: 'https://www.themealdb.com/images/category/dessert.png', size: 140 },
  { url: 'https://www.themealdb.com/images/category/pasta.png', size: 168 },
  { url: 'https://www.themealdb.com/images/category/seafood.png', size: 152 },
  { url: 'https://www.themealdb.com/images/category/vegetarian.png', size: 160 },
];

export default function FoodAnimation() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create food items
    const elements = foodItems.map(({ url, size }) => {
      const img = document.createElement('img');
      img.src = url;
      img.style.position = 'absolute';
      img.style.width = `${size}px`;
      img.style.height = `${size}px`;
      img.style.opacity = '0.4';
      img.style.transform = 'translate(-50%, -50%)';
      img.style.filter = 'grayscale(0.3)'; // Add slight grayscale for better blend with background
      container.appendChild(img);
      return img;
    });

    // Position elements randomly
    elements.forEach((el) => {
      gsap.set(el, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        rotation: Math.random() * 360
      });
    });

    // Create animations
    elements.forEach((el) => {
      const animate = () => {
        gsap.to(el, {
          duration: 15 + Math.random() * 10, // Slower, more gentle movement
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          rotation: Math.random() * 360,
          ease: "power1.inOut", // Smoother easing
          onComplete: animate
        });
      };

      // Start the animation with a random delay
      gsap.delayedCall(Math.random() * 5, animate);
    });

    // Handle window resize
    const handleResize = () => {
      elements.forEach((el) => {
        if (parseFloat(el.style.left) > window.innerWidth) {
          el.style.left = `${window.innerWidth * Math.random()}px`;
        }
        if (parseFloat(el.style.top) > window.innerHeight) {
          el.style.top = `${window.innerHeight * Math.random()}px`;
        }
      });
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      elements.forEach(el => {
        gsap.killTweensOf(el);
        el.remove();
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* Food images will be added here dynamically */}
    </div>
  );
} 
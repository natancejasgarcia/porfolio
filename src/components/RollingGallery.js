import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";
import "./RollingGallery.css";

const IMGS = [
  require("../assets/12.png"),
  require("../assets/123.png"),
  require("../assets/1234.png"),
  require("../assets/12345.png"),
  require("../assets/123456-1.png"),
  require("../assets/madrid1.png"),
  require("../assets/panoz.png"),
  require("../assets/1234567-1.png"),
];

const RollingGallery = ({ autoplay = true, pauseOnHover = true, images = [] }) => {
  images = images.length > 0 ? images : IMGS;
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(window.innerWidth <= 640);

  // Adjusted parameters for better 3D cylinder effect
  const cylinderWidth = isScreenSizeSm ? 1200 : 2000;
  const faceCount = images.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.4; // Width for items
  const dragFactor = 0.08; // Increased drag factor for more responsive interaction
  const radius = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef();

  // Initialize with a slight rotation to show the 3D effect immediately
  useEffect(() => {
    rotation.set(10);
    controls.start({
      rotateY: 10,
      transition: { duration: 1 },
    });
  }, [controls, rotation]);

  const handleDrag = (_, info) => {
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: { type: "spring", stiffness: 60, damping: 20, mass: 0.3, ease: "easeOut" },
    });
  };

  const transform = useTransform(rotation, (value) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  // Autoplay effect with adjusted timing
  useEffect(() => {
    if (autoplay) {
      // Start with an initial delay to let the page load
      const timer = setTimeout(() => {
        autoplayRef.current = setInterval(() => {
          controls.start({
            rotateY: rotation.get() - (360 / faceCount / 2), // Slower rotation
            transition: { duration: 3, ease: "linear" },
          });
          rotation.set(rotation.get() - (360 / faceCount / 2));
        }, 3000);
      }, 1000);

      return () => {
        clearTimeout(timer);
        clearInterval(autoplayRef.current);
      };
    }
  }, [autoplay, rotation, controls, faceCount]);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pause on hover with smooth transition
  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) {
      clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      controls.start({
        rotateY: rotation.get() - (360 / faceCount / 2),
        transition: { duration: 3, ease: "linear" },
      });
      rotation.set(rotation.get() - (360 / faceCount / 2));

      autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - (360 / faceCount / 2),
          transition: { duration: 3, ease: "linear" },
        });
        rotation.set(rotation.get() - (360 / faceCount / 2));
      }, 3000);
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
          dragConstraints={{ left: -1000, right: 1000 }} // Added constraints for smoother drag
          dragElastic={0.2} // Added elasticity for natural feel
        >
          {images.map((url, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
              }}
            >
              <img src={url} alt={`gallery-${i}`} className="gallery-img" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
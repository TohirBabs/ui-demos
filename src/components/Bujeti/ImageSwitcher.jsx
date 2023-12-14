// ImageSwitcher.js
import React, { useState, useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./ImageSwitcher.css"; // Import the CSS file for styling

const ImageSwitcher = ({ images }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const [currentImage, setCurrentImage] = useState(images[0]);
  const prevInView = useRef(inView);

  useEffect(() => {
    // Check if the section has just come into view
    if (inView && !prevInView.current) {
      // Change the image when the section comes into view
      const currentIndex = images.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentImage(images[nextIndex]);
    }

    prevInView.current = inView;
  }, [inView, currentImage, images]);

  return (
    <div
      ref={ref}
      className="h-screen flex items-center justify-center image-switcher-container"
    >
      <img
        src={currentImage}
        alt="Switched Image"
        className={`max-w-full max-h-full ${inView ? "fade-in" : "fade-out"}`}
      />
    </div>
  );
};

export default ImageSwitcher;

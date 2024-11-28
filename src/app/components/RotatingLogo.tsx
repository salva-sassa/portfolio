"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function RotatingLogo() {
  // Refs for image elements
  const lightLogoRef = useRef(null);
  const darkLogoRef = useRef(null);

  const [isSpinning, setIsSpinning] = useState(false); // State to track if the logo is spinning
  const [rotationDegree, setRotationDegree] = useState(0); // State to track the current rotation degree

  // Function to handle hover and update rotation
  const handleMouseEnter = () => {
    setIsSpinning(true);
    setRotationDegree((prev) => prev + 1080); // Add 1080 degrees each time we hover
  };

  const handleMouseLeave = () => {
    setIsSpinning(false); // Stop spinning when mouse leaves
  };

  // Set up GSAP animation for idle state
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, paused: true });

    // Add a soft floating animation on both logos
    tl.to([lightLogoRef.current, darkLogoRef.current], {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    });

    // Play the idle animation immediately on mount
    tl.play();

    return () => {
      tl.kill(); // Clean up GSAP timeline when the component is unmounted
    };
  }, []);

  // GSAP spin animation when hovering
  useEffect(() => {
    if (isSpinning) {
      gsap.to([lightLogoRef.current, darkLogoRef.current], {
        rotation: rotationDegree,
        duration: 1, // Duration of the spin
        ease: "power3.inOut",
      });
    }
  }, [isSpinning, rotationDegree]);

  return (
    <div
      className="absolute -top-8 -left-16 flex items-center justify-center"
      onMouseEnter={handleMouseEnter} // Trigger the spin on hover
      onMouseLeave={handleMouseLeave} // Stop spinning when mouse leaves
    >
      {/* Light Mode Image */}
      <Image
        alt="Light Icon"
        ref={lightLogoRef}
        className="w-32 h-32 -z-10 object-cover rounded-full dark:hidden"
        src="/logo-light.svg"
        width={64}
        height={64}
      />
      {/* Dark Mode Image */}
      <Image
        alt="Dark Icon"
        ref={darkLogoRef}
        className="w-32 h-32 -z-10 object-cover rounded-full hidden dark:block"
        src="/logo-dark.svg"
        width={64}
        height={64}
      />
    </div>
  );
}

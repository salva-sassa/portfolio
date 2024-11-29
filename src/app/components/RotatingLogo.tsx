"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import gsap from "gsap"
import { useSpinStore } from "@/store/UseSpinStore"

export default function RotatingLogo() {
  const lightLogoRef = useRef(null)
  const darkLogoRef = useRef(null)

  const { isSpinning: isGlobalSpinning, rotationDegree: globalRotationDegree, stopSpin } = useSpinStore()
  const [isHoverSpinning, setIsHoverSpinning] = useState(false)
  const [hoverRotationDegree, setHoverRotationDegree] = useState(0)

  const handleMouseEnter = () => {
    setIsHoverSpinning(true)
    setHoverRotationDegree((prev) => prev + 1080)
  }

  const handleMouseLeave = () => {
    setIsHoverSpinning(false)
    stopSpin() // Stop global spinning when mouse leaves
  }

  // Set up GSAP animation for idle state
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true, paused: true })

    // Add a soft floating animation on both logos
    tl.to([lightLogoRef.current, darkLogoRef.current], {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true,
    })

    // Play the idle animation immediately on mount
    tl.play()

    return () => {
      tl.kill() // Clean up GSAP timeline when the component is unmounted
    }
  }, [])

  // GSAP spin animation
  useEffect(() => {
    if (isGlobalSpinning || isHoverSpinning) {
      gsap.to([lightLogoRef.current, darkLogoRef.current], {
        rotation: isGlobalSpinning ? globalRotationDegree : hoverRotationDegree,
        duration: 1, // Duration of the spin
        ease: "power3.inOut",
      })
    }
  }, [isGlobalSpinning, isHoverSpinning, globalRotationDegree, hoverRotationDegree])

  return (
    <div
      className="absolute -top-8 -left-16 flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
  )
}


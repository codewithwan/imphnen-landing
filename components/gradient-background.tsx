"use client"

import { useEffect, useRef } from "react"

export default function GradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight

    const resizeCanvas = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Colors
    const colors = [
      { r: 10, g: 20, b: 30 }, // Dark blue/black
      { r: 21, g: 101, b: 192 }, // Blue
      { r: 66, g: 165, b: 245 }, // Light blue
    ]

    // Gradient points
    const points = [
      { x: width * 0.1, y: height * 0.1, radius: Math.max(width, height) * 0.3, color: colors[0] },
      { x: width * 0.8, y: height * 0.2, radius: Math.max(width, height) * 0.2, color: colors[1] },
      { x: width * 0.5, y: height * 0.5, radius: Math.max(width, height) * 0.4, color: colors[0] },
      { x: width * 0.2, y: height * 0.8, radius: Math.max(width, height) * 0.2, color: colors[2] },
    ]

    // Animation
    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.001

      // Clear canvas
      ctx.fillStyle = "rgb(0, 0, 0)"
      ctx.fillRect(0, 0, width, height)

      // Update points
      points.forEach((point, i) => {
        point.x = width * (0.3 + 0.4 * Math.sin(time + i * 1.5))
        point.y = height * (0.3 + 0.4 * Math.cos(time + i * 1.5))
      })

      // Draw gradients
      points.forEach((point) => {
        const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, point.radius)

        gradient.addColorStop(0, `rgba(${point.color.r}, ${point.color.g}, ${point.color.b}, 0.3)`)
        gradient.addColorStop(1, `rgba(${point.color.r}, ${point.color.g}, ${point.color.b}, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20" style={{ width: "100%", height: "100%" }} />
}

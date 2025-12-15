import { useState, useEffect } from "react"
import { PiCursorFill, PiCursorClickFill } from "react-icons/pi"


export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseOver = (e: MouseEvent) => {
      if (
        e.target instanceof Element &&
        (e.target.matches("a, button") || e.target.closest("a, button"))
      ) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = (e: MouseEvent) => {
      if (
        e.target instanceof Element &&
        (e.target.matches("a, button") || e.target.closest("a, button"))
      ) {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", updatePosition)
    document.addEventListener("mouseover", handleMouseOver)
    document.addEventListener("mouseout", handleMouseOut)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      document.removeEventListener("mouseover", handleMouseOver)
      document.removeEventListener("mouseout", handleMouseOut)
    }
  }, [])

  const CursorIcon = isHovering ? PiCursorClickFill : PiCursorFill

  return (
    <CursorIcon
      style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        fontSize: "1rem", // 24px
        color: "var(--color-foreground)",
        filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "transform 1000ms ease-in-out",
        transform: isHovering ? "scale(1.5)" : "scale(1)",
      }}
    />
  )
}
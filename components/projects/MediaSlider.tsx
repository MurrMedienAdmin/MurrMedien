"use client"

import { useState } from "react"
import { MediaItem } from "@/types/types"

type MediaSliderProps = {
  items: MediaItem[]
  alt: string
}

export default function MediaSlider({ items, alt }: MediaSliderProps) {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + items.length) % items.length)
  const next = () => setCurrent((c) => (c + 1) % items.length)

  return (
    <div className="relative w-full h-full">
      {items.map((item, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-300 ${i === current ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          {item.type === "video" ? (
            <video
              src={item.url}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <img
              src={item.url}
              alt={alt}
              className="w-full h-full object-cover object-top"
            />
          )}
        </div>
      ))}

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-black/60 z-10 text-lg leading-none"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-black/60 z-10 text-lg leading-none"
      >
        ›
      </button>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  )
}

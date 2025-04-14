"use client"

import { useState, useRef, useEffect } from "react"
import { Volume2, VolumeX, Pause, Play } from "lucide-react"

interface CandidateVideoProps {
  videoSrc?: string
  posterSrc?: string
  className?: string
}

const CandidateVideo = ({ videoSrc, posterSrc, className = "" }: CandidateVideoProps) => {
  const [isMuted, setIsMuted] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Set up video loading optimization
    video.preload = "auto"
    video.playsInline = true
    video.muted = true
    video.loop = true

    // Handle video loading
    const handleCanPlay = () => {
      setIsLoaded(true)
      video.play().catch(error => {
        console.error("Autoplay failed:", error)
      })
    }

    const handleError = (error: Event) => {
      console.error("Video error:", error)
      setIsLoaded(true) // Set loaded to true even on error to show the video element
    }

    // Add event listeners
    video.addEventListener("canplay", handleCanPlay)
    video.addEventListener("error", handleError)

    // If video is already loaded (cached), trigger canplay
    if (video.readyState >= 2) {
      handleCanPlay()
    }

    // Cleanup
    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <div className={`relative ${className}`}>
      {/* Phone frame container */}
      <div className="relative mx-auto w-full max-w-[280px]">
        {/* Phone frame */}
        <div className="relative rounded-[40px] border-[14px] border-black bg-black shadow-xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-32 bg-black rounded-b-xl z-10"></div>

          {/* Video container with phone aspect ratio */}
          <div className="relative aspect-[9/19.5] bg-black overflow-hidden rounded-[18px]">
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src={videoSrc}
              poster={posterSrc}
              playsInline
              autoPlay
              muted
              loop
            />

            {/* Gradient overlay for better button visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none"></div>

            {/* Loading state - only show if video is not loaded */}
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
              </div>
            )}

            {/* Centered animated unmute button */}
            {isLoaded && isMuted && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={toggleMute}
                  className="group relative flex items-center justify-center"
                  aria-label="Attiva l'audio"
                >
                  {/* Rotating gradient ring */}
                  <div className="absolute w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-[spin_6s_linear_infinite] opacity-70 blur-[3px]"></div>

                  {/* Pulsing inner circle */}
                  <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 animate-[pulse_3s_ease-in-out_infinite] opacity-60"></div>

                  {/* Main button with glass effect */}
                  <span className="relative flex items-center justify-center w-14 h-14 bg-white/30 backdrop-blur-md rounded-full shadow-lg border border-white/50 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/50">
                    <Volume2 className="w-7 h-7 text-white drop-shadow-lg" />
                  </span>

                  {/* Italian text label */}
                  <div className="absolute -bottom-10 overflow-hidden">
                    <span className="inline-block bg-gradient-to-r from-pink-500 to-violet-500 text-transparent bg-clip-text font-bold px-4 py-1 rounded-full text-sm animate-[pulse_2s_ease-in-out_infinite] whitespace-nowrap">
                      ATTIVA L'AUDIO
                    </span>
                  </div>
                </button>
              </div>
            )}

            {/* Control buttons when unmuted */}
            {isLoaded && !isMuted && (
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-80 transition-opacity"
                  aria-label={isPlaying ? "Pausa" : "Riproduci"}
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-80 transition-opacity"
                  aria-label="Disattiva l'audio"
                >
                  <VolumeX className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CandidateVideo 
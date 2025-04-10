"use client"

import { useState, useEffect } from "react"

// Election date: May 7-8, 2025
const ELECTION_DATE = new Date("2025-05-07T08:00:00")

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = ELECTION_DATE.getTime() - new Date().getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        // Election day has arrived
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-3 sm:p-4 md:p-6 shadow-lg">
      <h3 className="text-sm sm:text-base md:text-xl font-bold mb-2 md:mb-3 text-center">
        Tempo Rimanente alle Elezioni
      </h3>

      <div className="grid grid-cols-4 gap-1 sm:gap-2 text-center">
        <div className="bg-white/20 rounded-lg p-1 sm:p-2 md:p-3">
          <div className="text-base sm:text-xl md:text-3xl font-bold">{timeLeft.days}</div>
          <div className="text-[8px] sm:text-xs uppercase tracking-wider">Giorni</div>
        </div>

        <div className="bg-white/20 rounded-lg p-1 sm:p-2 md:p-3">
          <div className="text-base sm:text-xl md:text-3xl font-bold">{timeLeft.hours}</div>
          <div className="text-[8px] sm:text-xs uppercase tracking-wider">Ore</div>
        </div>

        <div className="bg-white/20 rounded-lg p-1 sm:p-2 md:p-3">
          <div className="text-base sm:text-xl md:text-3xl font-bold">{timeLeft.minutes}</div>
          <div className="text-[8px] sm:text-xs uppercase tracking-wider">Minuti</div>
        </div>

        <div className="bg-white/20 rounded-lg p-1 sm:p-2 md:p-3">
          <div className="text-base sm:text-xl md:text-3xl font-bold">{timeLeft.seconds}</div>
          <div className="text-[8px] sm:text-xs uppercase tracking-wider">Secondi</div>
        </div>
      </div>

      <div className="mt-2 sm:mt-4 text-center text-xs sm:text-sm">
        <p>Le elezioni si terranno il 7-8 Maggio 2025</p>
      </div>
    </div>
  )
}

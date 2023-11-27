import React, { useEffect } from 'react'
// original code can be found here https://codepen.io/wefiy/pen/WPpEwo, modified a bit for react and the use of emojis
export default function HackerManPage() {
  useEffect(() => {
    // geting canvas by Boujjou Achraf
    const c = document.getElementById('c') as HTMLCanvasElement
    const ctx = c.getContext('2d') as CanvasRenderingContext2D | null
    if (!c || !ctx) return
    //making the canvas full screen
    c.height = window.innerHeight
    c.width = window.innerWidth

    // Emojis
    const emojis: string[] = [
      '😀',
      '🚀',
      '🎉',
      '💻',
      '🔥',
      '🌈',
      '👾',
      '🤖',
      '👽',
      '🤯',
      '🤣',
      '😂',
    ]
    const font_size = 20
    const columns = c.width / font_size //number of columns for the rain
    //an array of drops - one per column
    const drops: number[] = []
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (let x = 0; x < columns; x++) drops[x] = 1

    //drawing the characters
    function draw() {
      //Black BG for the canvas
      //translucent BG to show trail
      if (!ctx) return
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, c.width, c.height)

      ctx.fillStyle = '#00ff00' //green text
      ctx.font = font_size + 'px Arial'
      //looping over drops
      for (let i = 0; i < drops.length; i++) {
        //a random emoji to print
        const emoji = emojis[Math.floor(Math.random() * emojis.length)]
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(emoji, i * font_size, drops[i] * font_size)

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
          drops[i] = 0

        //incrementing Y coordinate
        drops[i]++
      }
    }

    const intervalId = setInterval(draw, 35)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId)
  }, []) // Empty dependency array to run the effect only once

  return (
    <main className="bg-slate-950">
      <canvas id="c" className="block"></canvas>
    </main>
  )
}

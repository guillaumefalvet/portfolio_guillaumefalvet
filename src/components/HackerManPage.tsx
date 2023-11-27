import React, { useEffect } from 'react'
// original code can be found here https://codepen.io/wefiy/pen/WPpEwo, modified a bit for react and the use of emojis
// credit to Boujjou Achraf 🙏
export default function HackerManPage() {
  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D | null
    if (!canvas || !ctx) return
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

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
    const columns = canvas.width / font_size //number of columns for the rain
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
      ctx.fillRect(0, 0, canvas.width, canvas.height)

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
        if (drops[i] * font_size > canvas.height && Math.random() > 0.975)
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
      <canvas id="canvas" className="block"></canvas>
    </main>
  )
}

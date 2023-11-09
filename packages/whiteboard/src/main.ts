import { foo } from '@packages/utils'

interface Point {
  x: number
  y: number
}

let points: Point[] = []

class Board {
  public startDraw(x: number, y: number) { }
  public upateDraw(x: number, y: number) { }
  public endDraw(x: number, y: number) { }
}

function main() {
  foo()
  const board = new Board()
  initCanvas()
  initEventHandler(board)
  initRenderer(board)
}

main()

function initCanvas() {
  const canvas = getCanvas()
  const container = canvas.parentElement!
  window.addEventListener('resize', resizeCanvas)

  function resizeCanvas() {
    const { width, height } = container.getBoundingClientRect()
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`

    canvas.width = width * window.devicePixelRatio
    canvas.height = height * window.devicePixelRatio
  }

  resizeCanvas()
}

function initEventHandler(board: Board) {
  let isMouseDown = false
  const canvas = getCanvas()
  canvas.addEventListener('mousedown', (ev) => {
    isMouseDown = true
    points = []
  })

  canvas.addEventListener('mousemove', (ev) => {
    if (!isMouseDown) {
      return
    }

    points.push({
      x: ev.clientX,
      y: ev.clientY,
    })
  })

  canvas.addEventListener('mouseup', (ev) => {
    isMouseDown = false
  })

}

function initRenderer(board: Board) {
  const canvas = getCanvas()
  const ctx = canvas.getContext('2d')!

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.save()
    ctx.fillStyle = 'rgba(24, 160, 251, 0.25)'
    ctx.strokeStyle = 'rgba(24, 160, 251, 1.0)'
    // ctx.strokeStyle = '#ff0000'
    ctx.lineWidth = 4
    ctx.beginPath()
    for (let i = 0; i < points.length; i++) {
      const pt = points[i]
      if (i === 0) {
        ctx.moveTo(pt.x, pt.y)
      } else {
        ctx.lineTo(pt.x, pt.y)
      }
    }
    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    ctx.restore()

    requestAnimationFrame(() => render())
  }

  requestAnimationFrame(() => render())
}

function getCanvas(): HTMLCanvasElement {
  const canvas = document.querySelector('canvas')!
  return canvas
}



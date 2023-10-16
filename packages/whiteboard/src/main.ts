import { foo } from '@packages/utils'

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
  })

  canvas.addEventListener('mousemove', (ev) => {
    if (!isMouseDown) {
      return
    }


  })

  canvas.addEventListener('mouseup', (ev) => {
    isMouseDown = false
  })

}

function initRenderer(board: Board) {
  const canvas = getCanvas()
  const ctx = canvas.getContext('2d')!

  function render() { }

  requestAnimationFrame(() => render())
}

function getCanvas(): HTMLCanvasElement {
  const canvas = document.querySelector('canvas')!
  return canvas
}



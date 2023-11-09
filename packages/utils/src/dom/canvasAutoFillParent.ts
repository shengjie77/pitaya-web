
/**
 * canvas 自动填充满父元素
 * 
 * @param canvas 
 * @returns 
 */
export function canvasAutoFillParent(canvas: HTMLCanvasElement) {
  if (!canvas.parentElement) {
    console.error('canvas has no parent')
    return
  }

  const container = canvas.parentElement
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

function get2DCanvasContext() {
    const w = window.innerWidth;
    const h = window.innerHeight;;
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
  return canvas.getContext('2d');
}

const context = get2DCanvasContext();

export default context;

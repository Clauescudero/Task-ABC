function RandomColor() {
  const colors = ['green', 'blue', 'red'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

function cambiarColores(element) {
  const colores = [RandomColor(), RandomColor(), RandomColor()];
  element.style.color = colores[0];
}

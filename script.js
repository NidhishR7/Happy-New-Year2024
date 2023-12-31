function wishHappyNewYear() {
  const name = prompt("Enter your name:");

  if (name !== null && name.trim() !== '') {
    const newYearWish = document.getElementById('newYearWish');
    const fireworks = document.createElement('div');
    fireworks.setAttribute('id', 'fireworks');

    newYearWish.innerText = `Happy New Year, ${name}! 🎉🎆, Have a Wonderful 2024!`;
    document.body.appendChild(fireworks);
    startFireworksAnimation();
  }
}

function startFireworksAnimation() {
  const fireworks = document.getElementById('fireworks');

  // Create SVG element for fireworks
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('xmlns', svgNS);
  svg.setAttribute('class', 'fireworks-svg');

  // Add fireworks shapes (circles for this example)
  for (let i = 0; i < 50; i++) {
    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', Math.random() * 100 + '');
    circle.setAttribute('cy', Math.random() * 100 + '');
    circle.setAttribute('r', Math.random() * 3 + '');
    circle.style.fill = 'rgb(' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    svg.appendChild(circle);
  }

  fireworks.appendChild(svg);
}
window.onload = wishHappyNewYear; // Call the function when the page loads

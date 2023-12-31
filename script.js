function wishHappyNewYear() {
  const name = prompt("Enter your name:");

  if (name !== null && name.trim() !== '') {
    const newYearWish = document.getElementById('newYearWish');
    const fireworks = document.getElementById('fireworks');

    newYearWish.innerText = `Happy New Year, ${name}! 🎉🎆, Have a Wonderful 2024!`;
    fireworks.style.display = 'block';
    startFireworksAnimation();
  }
}

function startFireworksAnimation() {
  const fireworks = document.getElementById('fireworks');

  for (let i = 0; i < 25; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    firework.style.left = `${randomX}px`;
    firework.style.top = `${randomY}px`;
    fireworks.appendChild(firework);
  }
}

window.onload = wishHappyNewYear; // Call the function when the page loads

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('balloonContainer');
  const loveColors = ['pink', 'white', 'red', 'violet', 'hotpink', '#ffc0cb', '#ffb6c1'];

  function createLove() {
    const el = document.createElement('div');
    el.classList.add('float');

    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (Math.random() * 2 + 3) + 's';
    el.style.fontSize = `${Math.random() * 10 + 20}px`;

    el.innerText = '♥'; // Simbol love yang bisa diwarnai
    el.style.color = loveColors[Math.floor(Math.random() * loveColors.length)];

    container.appendChild(el);

    setTimeout(() => el.remove(), 6000);
  }

  // Buat love terus-menerus
  setInterval(() => {
    createLove();
  }, 150);
});

document.getElementById("left-scroll-zone").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const scrollZone = document.getElementById("left-scroll-zone");
let lastScrollY = window.scrollY;
let lastTime = Date.now();

window.addEventListener("scroll", () => {
  const now = Date.now();
  const currentScrollY = window.scrollY;
  const deltaY = currentScrollY - lastScrollY;
  const deltaTime = now - lastTime;

  // Скорость в px/ms
  const speed = Math.abs(deltaY) / deltaTime;

  // Порог скорости (например, 0.3 px/ms = 30 px/100ms)
  const speedThreshold = 0.3;

  if (currentScrollY > 300) {
    scrollZone.style.pointerEvents = "auto";
  } else {
    scrollZone.style.pointerEvents = "none";
    scrollZone.style.opacity = "0";
  }

  // Подсветка при быстром скролле вниз
  if (speed > speedThreshold && deltaY > 0) {
    scrollZone.style.opacity = "0.6";
  } else {
    scrollZone.style.opacity = "0";
  }

  lastScrollY = currentScrollY;
  lastTime = now;
});

window.addEventListener('scroll', function () {
  const navButtons = document.querySelector('.nav-buttons');
  const scrollTop = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollTop + windowHeight >= documentHeight) {
    navButtons.classList.add('visible');
  } else {
    navButtons.classList.remove('visible');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const poem = document.querySelector('.poem-text');
  if (!poem) return;

  const wrapper = document.createElement('div');
  wrapper.style.cssText = `
    display: flex;
    justify-content: flex-end;
    margin-top: 8px;
    margin-bottom: 16px;
  `;

  const button = document.createElement('button');
  button.textContent = '❏';
  button.className = 'copy-button';
  button.style.cssText = `
    background: transparent;
    color: #888;
    border: 1px solid #444;
    padding: 4px 8px;
    font-size: 0.9em;
    cursor: pointer;
    border-radius: 4px;
  `;

  button.addEventListener('click', () => {
    const text = poem.innerText;
    navigator.clipboard.writeText(text).then(() => {
      button.textContent = '□';
      setTimeout(() => {
        button.textContent = '❏';
      }, 2000);
    }).catch(() => {
      button.textContent = 'Ошибка';
    });
  });

  wrapper.appendChild(button);
  poem.after(wrapper);
});

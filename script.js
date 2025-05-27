const scrollZone = document.getElementById("left-scroll-zone");
const navButtons = document.querySelector('.nav-buttons');

let scrollTimeout;
let lastScrollY = 0;

scrollZone.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", function () {
  const scrollTop = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (scrollTop > 300) {
    scrollZone.style.opacity = "0.5";
    scrollZone.style.pointerEvents = "auto";
  } else {
    scrollZone.style.opacity = "0";
    scrollZone.style.pointerEvents = "none";
  }

  if (scrollTop + windowHeight >= documentHeight) {
    navButtons.classList.add('visible');
  } else {
    navButtons.classList.remove('visible');
  }

  if (scrollTop > lastScrollY + 10) {
    scrollZone.style.transition = 'opacity 0.3s ease';
    scrollZone.style.opacity = '0.9';
  }

  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    scrollZone.style.opacity = scrollTop > 300 ? '0.5' : '0';
  }, 200);

  lastScrollY = scrollTop;
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

const root = document.documentElement;
const motionOk = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function updateScrollProgress() {
  const max = document.body.scrollHeight - window.innerHeight;
  const amount = max > 0 ? window.scrollY / max : 0;
  root.style.setProperty("--scroll", Math.max(0, Math.min(1, amount)).toFixed(4));
}

function animateVisuals(time) {
  if (!motionOk) return;

  const seconds = time / 1000;
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card, index) => {
    const depth = Math.sin(seconds * 0.7 + index * 0.72) * 3;
    card.style.setProperty("--lift", `${depth.toFixed(2)}px`);
  });

  requestAnimationFrame(animateVisuals);
}

function wireCards() {
  const cards = document.querySelectorAll(".project-card");
  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const box = card.getBoundingClientRect();
      const x = ((event.clientX - box.left) / box.width - 0.5) * 8;
      const y = ((event.clientY - box.top) / box.height - 0.5) * -8;
      card.style.transform = `translateY(var(--lift, 0px)) rotateX(${y.toFixed(2)}deg) rotateY(${x.toFixed(2)}deg)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "translateY(var(--lift, 0px))";
    });
  });
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);

updateScrollProgress();
wireCards();

if (motionOk) {
  requestAnimationFrame(animateVisuals);
}

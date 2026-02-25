(() => {
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());

  // Improve horizontal scrolling with trackpad + keyboard (no UI prompts, no click targets).
  const rail = document.querySelector('.xpRail');
  if (!rail) return;

  rail.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') rail.scrollBy({ left: 520, behavior: 'smooth' });
    if (e.key === 'ArrowLeft') rail.scrollBy({ left: -520, behavior: 'smooth' });
  });
})();
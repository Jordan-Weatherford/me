const heroVideos = document.querySelectorAll('.hero-video');

// Keep only videos near the viewport playing to reduce decoding and memory use.
if ('IntersectionObserver' in window) {
  const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) target.play().catch(() => {});
      else target.pause();
    });
  }, { threshold: 0.25 });
  heroVideos.forEach((video) => videoObserver.observe(video));
} else {
  heroVideos.forEach((video) => video.play().catch(() => {}));
}

document.getElementById('year').textContent = new Date().getFullYear();

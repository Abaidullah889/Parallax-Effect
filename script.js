window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  document.querySelector(".layer-1").style.transform = `translateY(${scrolled * 0.25}px)`;
  document.querySelector(".layer-2").style.transform = `translateY(${scrolled * 0.5}px)`;


  document.querySelector(".rock-1").style.transform = `translateY(${scrolled * -0.5}px)`;
  document.querySelector(".rock-2").style.transform = `translateY(${scrolled * -0.3}px)`;
  document.querySelector(".rock-3").style.transform = `translateY(${scrolled * -0.2}px)`;
  document.querySelector(".rock-4").style.transform = `translateY(${scrolled * -0.4}px)`;
});

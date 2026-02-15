document.addEventListener("DOMContentLoaded", () => {

  // select readable content inside post
  const blocks = document.querySelectorAll(
    ".post p, .post blockquote, .post h1, .post h2, .post h3, .post li"
  );

  if (!blocks.length) return;

  // hide initially
  blocks.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(16px)";
  });

  // reveal sequentially
  blocks.forEach((el, index) => {
    const delay = 400 + index * 260;

    setTimeout(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, delay);
  });

});

document.addEventListener("DOMContentLoaded", () => {

  const source = document.querySelector(".post");
  const terminal = document.getElementById("terminal");

  // get markdown-rendered text
  const text = source.innerText.replace(source.querySelector(".post-title").innerText, "").trim();

  // clear original
  terminal.innerHTML = '<span class="cursor"></span>';

  let i = 0;
  const speed = 18;

  function type() {
    if (i < text.length) {
      terminal.innerHTML =
        text.slice(0, i++) + '<span class="cursor"></span>';

      window.scrollTo(0, document.body.scrollHeight);
      setTimeout(type, speed);
    }
  }

  type();
});

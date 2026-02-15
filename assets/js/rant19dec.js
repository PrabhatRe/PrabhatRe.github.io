document.addEventListener("DOMContentLoaded", () => {

  const source = document.getElementById("source");
  const terminal = document.getElementById("terminal");

  if (!source || !terminal) return;

  const text = source.innerText.trim();

  let i = 0;

  function type() {
    if (i <= text.length) {
      terminal.innerHTML =
        text.slice(0, i++) + '<span class="cursor"></span>';

      window.scrollTo(0, document.body.scrollHeight);
      setTimeout(type, 18);
    }
  }

  type();
});

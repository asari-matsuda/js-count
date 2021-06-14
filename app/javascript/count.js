function count() {
  const form = document.getElementById("post_text").value;
  const sum = form.length;
  const numText = document.getElementById("num-content");
  const HTML = `
    <div id="num-content">
      ${sum}文字
    </div>`;
  numText.insertAdjacentHTML("afterend", HTML);
  numText.remove();
}

window.addEventListener("keyup", count);

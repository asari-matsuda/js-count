function post() {
  const submit = document.getElementById("submit-id");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById("form-id"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      const content = XHR.response.post;
      const list = document.getElementById("list");
      const formText = document.getElementById("post_text");
      const numText = document.getElementById("num-content");
      const HTML = `
        <div class="message">
          ${content.text}
          <button class="delete-button">delete</button>
        </div>`;

      const numberHTML = `
        <div id="num-content">
          0文字
        </div>`;

      list.insertAdjacentHTML("afterbegin", HTML);
      formText.value = "";
      numText.insertAdjacentHTML("afterend", numberHTML)
      numText.remove();


      if (XHR.status =! 200) {
        alert(`エラー ${XHR.status}: ${XHR.statusText}`);
      } else {
        return null;
      }
    }
    XHR.onerror = function() {
      alert(`リクエストが失敗しました`);
    };
  })
}
window.addEventListener("load", post)

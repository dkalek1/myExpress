const idInput = document.querySelector("#id");
const passwordInput = document.querySelector("#password");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  req = {
    id: idInput.value,
    password: passwordInput.value,
  };
  fetch("/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req),
  })
    .then(res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/home";
      } else {
        alert(res.msg);
      }
    })
    .catch(console.error);
});

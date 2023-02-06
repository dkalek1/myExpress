const nameInput = document.querySelector("#name");
const idInput = document.querySelector("#id");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");
const submitBtn = document.querySelector("button");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (confirmPasswordInput.value !== passwordInput.value)
    return alert("비밀번호가 달라요");
  if (!idInput.value) return alert("아이디 입력하세요");
  const req = {
    id: idInput.value,
    name: nameInput.value,
    password: passwordInput.value,
  };
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error(new Error("회원가입중 에러발생"));
    });
});

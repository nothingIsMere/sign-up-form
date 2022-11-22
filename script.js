let pwd = document.getElementById("pwd");
let pwdConfirm = document.getElementById("pwd-confirm");
let createAcctBtn = document.getElementById("create-acct");

createAcctBtn.addEventListener("click", () => {
  if(pwd.value != pwdConfirm.value) {
    alert("Passwords do not match");
    // pwd.classList.add("invalid");
    // pwdConfirm.classList.add("invalid"); 
  }
})

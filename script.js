const btn = document.querySelector(".btn");
let passwords = document.querySelectorAll(".password");

btn.addEventListener("click", () => {
  passwords.forEach((pw) => (pw.textContent = generatePassword()));
  passwords.forEach((pw) => pw.classList.add("active"));
});

passwords.forEach((pw) =>
  pw.addEventListener("click", function () {
    copyPw(pw);
    removeClickedClass(pw);
    addClickedClass(pw);
  })
);
// generates random password
function generatePassword() {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let pwLength = 7;
  let pw = "";
  for (var i = 0; i <= pwLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    pw += chars.substring(randomNumber, randomNumber + 1);
  }
  removeClickedClass(pw);
  hideText();
  return pw;
}
// copy pw to clipboard
function copyPw(that) {
  var inp = document.createElement("input");
  document.body.appendChild(inp);
  inp.value = that.textContent;
  inp.select();
  document.execCommand("copy", false);
  inp.remove();
  showText();
}
// add clicked class which adds shadow to the box
function removeClickedClass(pw) {
  for (let pw of passwords) {
    pw.classList.remove("clicked");
  }
}
// remove clicked class which adds shadow to the box
function addClickedClass(pw) {
  pw.classList.add("clicked");
}

// display copied message
function showText() {
  document.getElementById("copiedTextAlert").style.display = "block";
  setTimeout("hideText()", 1000);
}
// hide copied message
function hideText() {
  document.getElementById("copiedTextAlert").style.display = "none";
}

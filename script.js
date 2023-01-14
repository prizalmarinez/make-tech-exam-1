const form = document.getElementById("form");

const forms = document.querySelectorAll("form");
const forms2 = forms[0];

form.addEventListener("submit", (e) => {
  let errMsg = "";
  let err = false;
  Array.from(forms2.elements).forEach((input) => {
    console.log(input.placeholder);
    console.log(input.value);

    if (input.type !== "submit") {
      if (input.value === "" || input.value === null) {
        err = true;
        console.log("Required:" + input.placeholder);
        errMsg = errMsg.concat("Required:" + input.placeholder + "\n");
      }
    }
  });
  if (err) {
    console.log(errMsg);
    alert(errMsg);
  }
  e.preventDefault();
});

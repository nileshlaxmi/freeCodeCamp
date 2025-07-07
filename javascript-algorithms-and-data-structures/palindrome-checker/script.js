const textInput = document.getElementById("text-input");

window.onload = () => {
  textInput.focus();
};

const palindrome = () => {
  let str = document.getElementById("text-input")?.value;
  let output;
  let temp = str;

  if (str.length == 0) {
    alert("Please input a value");
    return;
  }

  temp = temp?.toLowerCase()?.replace(/[\s_,.()|:-]/g, "");
  let newStr = temp?.split("")?.reverse()?.join("");

  if (newStr === temp) {
    output = `${str} is a palindrome`;
  } else {
    output = `${str} is not a palindrome`;
  }

  document.getElementById("result").innerHTML = output;
};

const clearFields = () => {
  document.getElementById("text-input").value = "";
  document.getElementById("result").innerHTML = "";
};

document
  .getElementById("text-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      palindrome();
    }

    if (event.key === "Enter" && event.shiftKey) {
      clearFields();
    }
  });

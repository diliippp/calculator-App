let string = "";
let buttons = document.querySelectorAll('input[type="button"]');

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.value === "=") {
        string = eval(string);
        document.getElementById("result").value = string;
      } else if (e.target.value == "DEL") {
        string = string.slice(0, -1);
        document.getElementById("result").value = string;
      } else if (e.target.value === "AC") {
        string = "";
        document.getElementById("result").value = string;
      } else {
        string = string + e.target.value;
        document.getElementById("result").value = string;
      }
    } catch {
      document.getElementById("result").value = "Error";
    }
  });
});

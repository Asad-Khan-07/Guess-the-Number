let tak = document.getElementById("donor");
let num = Math.floor(Math.random() * 100);
let Btn = document.getElementById("btn");
let rev = document.getElementById("show");
let Atm = 10;
let Etm = document.getElementById("atm");
let BTn = document.getElementById("Btn");

console.log(num);
Etm.innerHTML = `${Atm} Attempts`;

function rep() {
  num = Math.floor(Math.random() * 100);
  rev.innerHTML = "Result";
  Atm = 10;
  Etm.innerHTML = `${Atm} Attempts`;
  tak.value = "";
}

BTn.addEventListener("click", () => {
  the = setTimeout(rep, 100);
});

Btn.addEventListener("click", () => {
  if (+tak.value === num) {
    rev.innerHTML = `Conguratulation! your number is 	&#128515; ${num} `;
    rev.classList.add("scale");
    Etm.innerHTML = `${Atm} Attempts`;
  } else {
    Etm.innerHTML = `${(Atm -= 1)} Attempts`;
  }

  if (tak.value > num) {
    rev.innerHTML = `Too High`;
  }
  if (tak.value < num) {
    rev.innerHTML = `Too Low`;
  }

  if (tak.value === "") {
    rev.innerHTML = `Please Enter the Number!`;
    Atm = 10;
  }

  if (Atm == 0) {
    rev.innerHTML = `you lost &#128555;`;
    setTimeout(rep, 1000);
  }
});

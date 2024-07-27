const num1 = Number(prompt("Enter no of rows you want: "));
const num2 = Number(prompt("Enter no of coulmns you want: "));

let main = document.getElementById("content");
console.log(main);

let tb = document.createElement("table");
tb.className = "rows";
main.appendChild(tb);
console.log(tb);

let num = 1;
for (let i = 1; i <= num1; i++) {
  let tr1 = document.createElement("tr");
  tb.appendChild(tr1);

  for (let j = 1; j <= num2; j++) {
    let td1 = document.createElement("td");
    tr1.appendChild(td1);
    console.log(tr1.children);
    td1.textContent = num;
    td1.style.backgroundColor = "brown";
    num++;
  }
}

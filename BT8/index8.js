let a = Number(prompt("nhap so a"));
let b = Number(prompt("nhap so b"));
let mark = prompt("phep tinh");
let c
switch (mark) {
  case "+":
    c = a + b;
    alert(`ket qua phep tinh ${a} ${mark} ${b} = ${c}`)
    break;
  case "-":
    c = a-b;
    alert(`ket qua phep tinh ${a} ${mark} ${b} = ${c}`)
    break;
  case "*":
    c = a*b;
    alert(`ket qua phep tinh ${a} ${mark} ${b} = ${c}`)
    break;
  case "/":
    c = a/b;
    alert(`ket qua phep tinh ${a} ${mark} ${b} = ${c}`)
    break;
}

let a = Number(prompt("nhap so a"))
let b = Number(prompt("nhap so a"))
let c = Number(prompt("nhap so a"))
let Max; 
let Min;
if (a >= b && a >= c) {
  if (b >= c) {
    Max = a;
    Min = c;
  } else {
    Min = c;
  }
} else {
  if (a < b) {
    Max = b;
    Min = c;
  } else {
    Max = c;
    Min = b;
  }
}
alert(`gia tri Max = ${Max}`)
alert(`gia tri Min = ${Min}`)

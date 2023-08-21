let diem = Number(prompt("moi nhap diem TB"))
switch (true) {
  case diem >= 75:
    console.log("Loai A");
    break;
  case diem < 75 && diem >= 65:
    console.log("Loai B");
    break;
  case diem < 65 && diem >= 40:
    console.log("Loai C");
    break;
}
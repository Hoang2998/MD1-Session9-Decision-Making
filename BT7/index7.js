let month = Number(prompt("moi nhap thang?"));
switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert(`thang ${month} co 31 ngay`);
    break;
  case 2:
    alert("thang 2 co 28 ngay");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert(`thang ${month} co 30 ngay`);
    break;
}

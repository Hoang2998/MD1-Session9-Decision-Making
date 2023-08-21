let Day = Number(prompt("moi nhap ngay sinh"));
let month = Number(prompt("moi nhap thang sinh"));
switch (month) {
  case 1:
    if (20 <= Day && Day <= 31) {
      console.log("Bao Binh");
    } else if (1 <= Day && Day <= 19) {
      console.log("Ma Ket");
    }
    break;
  case 2:
    if (1 <= Day && Day <= 18) {
      console.log("Bao Binh");
    } else if (Day <= 31) {
      console.log("Song Ngu");
    }
    break;
  case 3:
    if (1 <= Day && Day <= 20) {
      console.log("Song ngu");
    } else if (21 <= Day && Day <= 31) {
      console.log("Bach Duong");
    }
    break;
  case 4:
    if (1 <= Day && Day <= 19) {
      console.log("Bach duong");
    } else if (1 <= Day && Day <= 20) {
      console.log("kim nguu");
    }
    break;
  case 5:
    if (1 <= Day && Day <= 20) {
      console.log("Kim nguu");
    } else if (21 <= Day && Day <= 30) {
      console.log("Song Tu");
    }
    break;
  case 6:
    if (1 <= Day && Day <= 21) {
      console.log("Song Tu");
    } else if (22 <= Day && Day <= 30) {
      console.log("Cu Giai");
    }
    break;
  case 7:
    if (1 <= Day && Day <= 22) {
      console.log("Cu giai");
    } else if (23 <= Day && Day <= 31) {
      console.log("Su Tu");
    }
    break;
  case 8:
    if (1 <= Day && Day <= 22) {
      console.log("Su Tu");
    } else if (23 <= Day && Day <= 31) {
      console.log("Xu Nu");
    }
    break;
  case 9:
    if (1 <= Day && Day <= 22) {
      console.log("Xu Nu");
    } else if (23 <= Day && Day <= 30) {
      console.log("Thien Binh");
    }
    break;
  case 10:
    if (1 <= Day && Day <= 23) {
      console.log("Thien Binh");
    } else if (24 <= Day && Day <= 31) {
      console.log("Ho Cap");
    }
    break;
  case 11:
    if (1 <= Day && Day <= 21) {
      console.log("Ho Cap");
    } else if (22 <= Day && Day <= 30) {
      console.log("Nhan ma");
    }
    break;
  case 12:
    if (1 <= Day && Day <= 21) {
      console.log("Nhan Ma");
    } else if (22 <= Day && Day <= 31) {
      console.log("Ma Ket");
    }
    break;
}

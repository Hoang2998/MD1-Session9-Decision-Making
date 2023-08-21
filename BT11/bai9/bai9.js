let mark = +(prompt("nhap diem mon toan"))
let physicle = +(prompt("nhap diem mon toan"))
let kemistry = +(prompt("nhap diem mon toan"))
let tong = mark + physicle + kemistry;
let TB = tong/3 
alert(`diem tb cong la ${TB} `)
if(8<=TB && TB<=10){
    alert("gioi")
}
else if(6.5<=TB && TB<=7.9){
    alert("kha")
}
else if(5<=TB && TB<=6.4){
    alert("Trung binh")
}
else if( TB<=5){
    alert("Yeu")
}
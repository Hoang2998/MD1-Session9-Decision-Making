let height = +prompt("moi nhap chieu cao")
let weight = +prompt("moi nhap can nang")
let bmi = weight/(height^2);
if(bmi<18.5){
    alert("gay")
}else if(bmi<=24,9){
    alert("Normal")
}else{
    alert("osbse")
}
let userName = prompt("Who's there?", '');

if (userName == "Admin") {
  //code vào đây
  let pass = prompt("Password?", "");

  // Bước 6: Kiểm tra pass
  if (pass == "TheMaster") {
    alert("Welcome!");
  } else if (pass == null) {
    alert("Canceled.");
  } else {
    alert("Wrong password");
  }
} else if (userName == null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}
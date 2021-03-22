var stringers = [3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];
var div = document.createElement("div");
var objects = {};

for(var i = 0; i < stringers.length; i++) {
  objects[i] = new line(stringers[i]);
} 

document.body.appendChild(div);

function line(data) {
  var p = document.createElement("p");
  p.innerHTML += "The value is " + data + " and ";
  if(data < 10) {
    p.innerHTML += "it is a number below 10<br>";
  } else if(data.length > 5) {
    p.innerHTML += "the string's character length is more than 5<br>";
  } else if(data == 15) {
    p.innerHTML += "the number is exactly 15<br>";
  } else {
    p.innerHTML += "normal<br>";
  }
  p.addEventListener("click", function() {
    p.style.color = "blue";
  });
  div.appendChild(p);
}
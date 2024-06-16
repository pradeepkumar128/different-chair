function blueColor() {
setTimeout(()=>{
     document.body.style.backgroundColor = "#247aa1";
     document.getElementById("imgbox").src = "images/blue.png";
     document.getElementById("chairName").innerText = "Blue Chair";
     document.body.style.color = "#fff";
},1000)
}

function redColor() {
     setTimeout(()=>{
  document.body.style.backgroundColor = "#80003c";
  document.getElementById("imgbox").src = "images/maroon.png";
  document.getElementById("chairName").innerText = "Maroon Chair";
  document.body.style.color = "#fff";
},1000)
}

function blackColor() {
     setTimeout(()=>{
  document.body.style.backgroundColor = "#000";
  document.getElementById("imgbox").src = "images/black.png";
  document.getElementById("chairName").innerText = "Black Chair";
  document.body.style.color = "#fff";
},1000)
}

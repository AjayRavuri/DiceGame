var num1 =Math.floor(Math.random()*6)+1;

var imageno1="images/dice"+num1+".png";

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",imageno1);

var num2 =Math.floor(Math.random()*6)+1;

var imageno2="images/dice"+num2+".png";

var img2=document.querySelectorAll("img")[1];

img2.setAttribute("src",imageno2);

if (num1>num2)
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
else if (num1<num2)
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
else
  document.querySelector("h1").innerHTML = "Match Drawn!!";

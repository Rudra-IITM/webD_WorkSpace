var randN1=Math.floor(Math.random()*6)+1;
var img1="./images/dice"+randN1+".png";
document.querySelector(".img1").setAttribute("src",img1);
var randN2=Math.floor(Math.random()*6)+1;
var img2="./images/dice"+randN2+".png";
document.querySelector(".img2").setAttribute("src",img2);
var win;
if (randN1>randN2) win="Player 1 Wins! 🚩"
else if (randN1<randN2) win="Player 2 Wins! 🚩";
else win="Draw";
document.querySelector("h1").textContent=win;
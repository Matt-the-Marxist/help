const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');



let lastHole;
let timeUp = false;
let score = 0;


function randomTime(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}


function randomHole(holes) {
	const idx = Math.floor(Math.random() * holes.length);
	const hole = holes[idx];

	if (hole === lastHole) {
		console.log('Ah nah thats the same one bud');
		return randomHole(holes);
    }
	lastHole = hole;
	return hole;
}
function peep() {
var imgs = ["yes.png", "Final Hare.png"];
var i = Math.floor(Math.random() * imgs.length);
var raccoon = document.getElementById('raccoon.png');


const time = randomTime(200, 1000);
const hole = randomHole(holes);

console.log(time, hole);
var mole = hole.querySelector(".mole");
mole.style.background = "url('" + imgs[i] + "') bottom center no-repeat";
mole.style.backgroundSize = "60%";

hole.classList.add('up');

setTimeout(() => {
	hole.classList.remove('up');

  if (!timeUp) peep();
}, time);
}
function startGame() {
scoreBoard.textContent = 0;
timeUp = false;
score = 0;
peep();

setTimeout(() => timeUp = true, 15000)






var sec = 15;
var timer = setInterval(function(){
document.getElementById('TimerDisplay').innerHTML='00:'+sec;
sec--;
if (sec < 0) {
clearInterval(timer);
}

}, 1000);


}
function bonk(e) {

if(!e.isTrusted) return; 
score++;
this.parentNode.classList.remove('up');
scoreBoard.textContent = score;
}
moles.forEach(mole => mole.addEventListener('click', bonk));
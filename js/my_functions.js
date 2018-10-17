var myString = "IAN CHUCK-YIN";
var myArray = myString.split("");

function typeAnimateName(){
	if (myArray.length > 0){
		document.getElementById('name-title').innerHTML += myArray.shift();
	}
	else {
		clearTimeOut(loopTimer);
	}
	loopTimer = setTimeout('typeAnimateName()', 80)
}
//
var myString2 = "Health Informatics and Computer Science";
var myArray2 = myString2.split("");

function typeAnimate2(){
	if (myArray2.length > 0){
		document.getElementById('animate2').innerHTML += myArray2.shift();
	}
	else {
		clearTimeOut(loopTimer2);
	}
	loopTimer2 = setTimeout('typeAnimate2()', 65)
}
var myString0 = "Welcome to my webpage. Let's begin.";
var myArray0 = myString0.split("");

function typeAnimate0(){
	if (myArray0.length > 0){
		document.getElementById('animate3').innerHTML += myArray0.shift();
	}
	else {
		clearTimeOut(loopTimer0);
	}
	loopTimer0 = setTimeout('typeAnimate0()', 55)
}
//
var myString3 = "About Me";
var myArray3 = myString3.split("");

function typeAnimate3(){
	if (myArray3.length > 0){
		document.getElementById('aboutAnimate').innerHTML += myArray3.shift();
	}
	else {
		clearTimeOut(loopTimer3);
	}
	loopTimer3 = setTimeout('typeAnimate3()', 80)
}
//
var myString4 = "Projects";
var myArray4 = myString4.split("");

function typeAnimate4(){
	if (myArray4.length > 0){
		document.getElementById('projectsAnimate').innerHTML += myArray4.shift();
	}
	else {
		clearTimeOut(loopTimer4);
	}
	loopTimer4 = setTimeout('typeAnimate4()', 100)
}
//
var myString5 = "Resume";
var myArray5 = myString5.split("");

function typeAnimate5(){
	if (myArray5.length > 0){
		document.getElementById('resumeAnimate').innerHTML += myArray5.shift();
	}
	else {
		clearTimeOut(loopTimer5);
	}
	loopTimer5 = setTimeout('typeAnimate5()', 120)
}
//
var myString6 = "Contact";
var myArray6 = myString6.split("");

function typeAnimate6(){
	if (myArray6.length > 0){
		document.getElementById('contactAnimate').innerHTML += myArray6.shift();
	}
	else {
		clearTimeOut(loopTimer6);
	}
	loopTimer6 = setTimeout('typeAnimate6()', 140)
}
//
var myString7 = "Skill Set";
var myArray7 = myString7.split("");

function typeAnimate7(){
	if (myArray7.length > 0){
		document.getElementById('skillsetAnimate').innerHTML += myArray7.shift();
	}
	else {
		clearTimeOut(loopTimer7);
	}
	loopTimer7 = setTimeout('typeAnimate7()', 120)
}
//
function fadeOut(element){
	var op = 1;
	var timer = setInterval(function(){
		if (op <= 0.1){
			clearInterval(timer);
			element.style.display = 'none';
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op -= op * 0.1;
	}, 50);
}

function fadeIn(element){
	var op = 0.1;
	element.style.display = 'list-inline';
	var timer = setInterval(function(){
		if (op >= 1){
			clearInterval(timer);
		}
		element.style.opacity = op;
		element.style.filter = 'alpha(opacity=' + op * 100 + ")";
		op += op * 0.1;
	}, 70);
}



function hide(element){
	document.getElementById('element').style.display = none;
}
function show(element){
	document.getElementById('element').style.display = block;
}

var slideIndex = -1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex = n)
}

function showSlides(n){

	var i;
	var slides = document.getElementsByClassName('mySlides');
	var icons = document.getElementsByClassName('dot');
	var images = document.getElementsByClassName('myImageSlides');

	for (i = 0;i < slides.length; i++){

		slides[i].style.display = "none";
	}

	for (i = 0; i < images.length; i++){

		images[i].style.display = "none";

	}

	for (i = 0;i < icons.length; i++){

		icons[i].className = icons[i].className.replace(" active", "");
	}

	slides[slideIndex].style.display = "block";
	images[slideIndex].style.display = "block";
	icons[slideIndex].className += "active";
}

var skillsIndex = -1;
skillSlides(skillsIndex);

function plusSkills(n){
	skillSlides(skillsIndex = n);
}

function skillSlides(n){
	var j;
	var skills = document.getElementsByClassName('skills-text');

	for (j = 0; j < skills.length; j++){
		skills[j].style.display = "none";
	}

	skills[skillsIndex].style.display = "block";
}
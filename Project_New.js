var img=document.getElementById('image');
img.addEventListener('mouseover',myname);
img.addEventListener('mouseout',myname1);
function myname(){
    document.getElementById('name').style.visibility='visible';
    document.getElementById('name').style.textShadow='0 0 3px #FF0000, 0 0 5px #0000FF';
    document.getElementById('name').style.animation='Name 5s'
    document.getElementById('image').style.visibility='hidden';
    
}
function myname1(){
    document.getElementById('image').style.visibility='visible';  
    document.getElementById('name').style.visibility='hidden';
}
var Menu=document.getElementById('menu');
var Vmenu=document.getElementById('Vnav');
var Hmenu=document.getElementById('Hnav');
Menu.addEventListener('click',ShowVertical);
function ShowVertical(){
     Vmenu.style.display='block';
     Hmenu.style.display='none';
}
Vmenu.addEventListener('mouseover',displayVertical);
Vmenu.addEventListener('mouseout',HideVertical);
function displayVertical(){
    Hmenu.style.display='none';
    Vmenu.style.display='block';
}
function HideVertical(){
    Vmenu.style.display='none';
    Hmenu.style.display='block';
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
var Fac=document.getElementById('Fac');
Fac.addEventListener('click',faculty);
function faculty(){
  document.getElementById('ldiv').style.display='none';
  document.getElementById('mdiv').style.display='none';
  document.getElementById('rdiv').style.display='none';
  document.getElementById('faculty').style.display='block';
  document.getElementById('Student').style.display='none';
  document.getElementById('registration').style.display='none';
}
var stu=document.getElementById('Stu');
stu.addEventListener('click',student);
function student(){
  document.getElementById('ldiv').style.display='none';
  document.getElementById('mdiv').style.display='none';
  document.getElementById('rdiv').style.display='none';
  document.getElementById('faculty').style.display='none';
  document.getElementById('Student').style.display='block';
  document.getElementById('registration').style.display='none';
}
var home=document.getElementById('Home');
home.addEventListener('click',Home);
function Home(){
  document.getElementById('ldiv').style.display='block';
  document.getElementById('mdiv').style.display='block';
  document.getElementById('rdiv').style.display='block';
  document.getElementById('faculty').style.display='none';
  document.getElementById('Student').style.display='none';
  document.getElementById('registration').style.display='none';
}
var Exam=document.getElementById('Exams');
Exam.addEventListener('click',Examdisplay);
function Examdisplay(){
  document.getElementById('ldiv').style.display='none';
  document.getElementById('mdiv').style.display='none';
  document.getElementById('rdiv').style.display='none';
  document.getElementById('faculty').style.display='none';
  document.getElementById('Student').style.display='none';
  document.getElementById('registration').style.display='block';
}
function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("li")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
const menuClick = document.querySelector('.menu')
const navBar = document.querySelector('.navMenu')
let showMenu = false;
menuClick.addEventListener("click",()=> {
  if(!showMenu){
navBar.classList.remove('close')
navBar.classList.add("open");
showMenu = true; }
else{
  navBar.classList.remove('open');
  navBar.classList.add("close");

  showMenu = false;
}})

$('document').ready(function(){
  $('.selectionsButtonsIndoor').on('click',function(){
    $('.indoor').show();
    $('.outdoor').hide()
  })

$('.selectionsButtonsAll').on('click', function(){
$('.indoor').show();
$('.outdoor').show();
})

})

$('document').ready(function(){
  $('.selectionsButtonsOutdoor').on('click',function(){
    $('.outdoor').show();
    $('.indoor').hide()
  })})

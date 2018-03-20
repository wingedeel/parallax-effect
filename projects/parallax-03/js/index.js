// Similar to: https://codepen.io/ravenwilde/pen/ehiny	

// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}
 
var back = document.getElementById('back'); // mobile-content
var fore= document.getElementById('fore');	// mobile-phone
 
function parallaxScroll(){
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
 // back.style.top = -scrolltop * .2 + 'px' // move image at 20% of scroll rate
 // fore.style.top = -scrolltop * .5 + 'px' // move image at 50% of scroll rate
 back.style.top = (0-(scrolltop*.2)) + 'px'
 fore.style.top = (0-(scrolltop*.1)) + 'px'
}
 
window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxScroll) // call parallaxbubbles() on next available screen paint
}, false)
 

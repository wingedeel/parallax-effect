// Based on
// Similar to: https://codepen.io/ravenwilde/pen/ehiny	

// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}
 
var bubble1 = document.getElementById('bubbles1')
var bubble2 = document.getElementById('bubbles2')
 
function parallaxbubbles(){
	console.log('parallax bubbles');
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
 bubble1.style.top = -scrolltop * .2 + 'px' // move bubble1 at 20% of scroll rate
 bubble2.style.top = -scrolltop * .5 + 'px' // move bubble2 at 50% of scroll rate
}
 
window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)
 
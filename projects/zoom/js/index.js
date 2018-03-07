var theWindow = $(window);
var winHeight = theWindow.height();
var img = document.getElementsByTagName("img")[0];


theWindow.scroll(function() {
	zoom();
});

function zoom(){
	var scrollPos = theWindow.scrollTop();
	if (scrollPos>30 && scrollPos<40){
		img.style.transform = "scale(1.2)";
	}
}
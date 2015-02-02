$(document).ready(function() {


	//Fullpage

    $('#fullpage').fullpage({

    	resize : false,
    	verticalCentered: true,

    	// Custom functions

    	onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });


});
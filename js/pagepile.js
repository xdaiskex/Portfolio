$(document).ready(function() {
	$('#pagepiling').pagepiling({
      	direction: 'horizontal',
		menu: '#menu',
		anchors: ['page1', 'page2', 'page3', 'page4'],
	    sectionsColor: ['#022D41', '#D2D7D3', '#022D41', '#D2D7D3'],
	    navigation: {
	    	'position': 'right',
	   		'tooltips': ['About', 'Skills', 'Projects', 'Contact']
	   	},
	    afterRender: function(){
	    	$('#pp-nav').addClass('custom');
	    },
	    afterLoad: function(anchorLink, index){
	    	if(index>1){
	    		$('#pp-nav').removeClass('custom');
	    	}else{
	    		$('#pp-nav').addClass('custom');
	    	}
	    }
	});
	/*var hash = window.location.hash;
    var pageNumber = hash.substr(hash.length - 1);
    if(pageNumber <= 1){
        pageNumber = 1;
    }else if (pageNumber == ''){
        pageNumber = 1
    }
    console.log("Page: " + pageNumber);
	$.fn.pagepiling.moveTo(pageNumber);*/
});
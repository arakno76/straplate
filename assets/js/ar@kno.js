jQuery(document).ready(function($) {

	try{
		/* WOW */
		new WOW().init();
		
	}catch(e){
		console.log(e)
	}
	
	try{
		 /* SLIDER */
		 $("#owl-slider").owlCarousel({
			 animateOut: 'fadeOutLeft',
			 animateIn: 'FadeInLeft',
			 items: 1,
			 loop:true,
			 nav:true,
			 navText: ["<i class='fa  fa-arrow-circle-left'></i>", "<i class='fa  fa-arrow-circle-right'></i>"],
			 lazyLoad: true,
			 autoplay: true,
			 autoplaySpeed: 3000,
		 });
		 $("#owl-slider").mouseover(function() {
			  //console.log( "slider!" );
			 $(".owl-prev, .owl-next").css("opacity", "0.4");
			 
		 }).mouseout(function() {
			  //console.log( "slider!" );
			 $(".owl-prev, .owl-next").css("opacity", "0");
		 });
		
	}catch(e){
		console.log(e)
	}
	
	 
  
	 
	 /*MAP (CONTACT)*/
	 var $map = document.getElementById('map');
	 if($map){
		// console.log("div mappa presente");
		 renderMap();
	 }
	 
	 
	 /* SPINNER JS */
	 	var $target = document.getElementById('grid-container');
	 	if($target){
	 		var $opts = {
	 				  lines: 17 // The number of lines to draw
	 				, length: 36 // The length of each line
	 				, width: 14 // The line thickness
	 				, radius: 52 // The radius of the inner circle
	 				, scale: 1 // Scales overall size of the spinner
	 				, corners: 1 // Corner roundness (0..1)
	 				, color: '#000' // #rgb or #rrggbb or array of colors
	 				, opacity: 0.25 // Opacity of the lines
	 				, rotate: 62 // The rotation offset
	 				, direction: 1 // 1: clockwise, -1: counterclockwise
	 				, speed: 1.1 // Rounds per second
	 				, trail: 67 // Afterglow percentage
	 				, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
	 				, zIndex: 2e9 // The z-index (defaults to 2000000000)
	 				, className: 'spinner' // The CSS class to assign to the spinner
	 				, top: '50%' // Top position relative to parent
	 				, left: '50%' // Left position relative to parent
	 				, shadow: false // Whether to render a shadow
	 				, hwaccel: false // Whether to use hardware acceleration
	 				, position: 'absolute' // Element positioning
	 				}
	 		var $spinner = new Spinner($opts).spin($target);
	 		$('.grid-item').css("visibility", "hidden");
	 		
	 		 /* MASONRY JS */
		    var $grid = $('.grid').masonry({
				columnWidth: '.grid-sizer',
			    itemSelector: '.grid-item',
			    percentPosition: true,
			    initLayout: false,
			  });
			$grid.masonry( 'on', 'layoutComplete', function() {
				  console.log('layout is complete');
				});
			
			setTimeout(function() {
				doMasonry($grid, $spinner, $);
			},3000);
	 		
	 	}
		
		
		
	 

}(jQuery));



function doMasonry($grid, $spinner, $){
	 $spinner.stop();
	 $('.grid-item').css("visibility", "visible");
	$grid.masonry();
	console.log('layout is ordered');
}


function renderMap(){
	
	var layers = [];

	  layers.push(new ol.layer.Tile({
		 source: new ol.source.MapQuest({layer: 'osm'})
		
	  }));
	 
	  

	var map = new ol.Map({
	  layers: layers,
	  // Improve user experience by loading tiles while dragging/zooming. Will make
	  // zooming choppy on mobile or slow devices.
	  loadTilesWhileInteracting: true,
	  target: 'map',
	  view: new ol.View({
	   center: ol.proj.transform([9.175803,  39.214890], 'EPSG:4326', 'EPSG:3857'),	
	    zoom: 11
	  })
	});
}




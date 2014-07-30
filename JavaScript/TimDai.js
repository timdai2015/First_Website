// JavaScript Document

// adding a datepicker
$(document).ready(function() {
			
			$("#myDatePicker").datepicker();
		});
		
		
// make the hover over effect for main-story2		
$(document).ready(function(){
		
			$(".main-story2").on("mouseenter", function(){
				
				$(this).css({"opacity" : "1"});
				
				});
				
			$(".main-story2").on("mouseleave", function(){
				
				$(this).css({"opacity" : "1"});
				
				});

		});
		
		
$(document).ready(function() {
  $(".buttonPush").on("click", "a", function() { 
    $("#skill").slideToggle();
	/*$(".main-story2").slideToggle();*/
  });
});
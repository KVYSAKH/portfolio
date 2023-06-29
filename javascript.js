$(document).ready(function(){

	// home 
	$(".messages").hide();
	

	$(".bttt").click(function(){

    $(".messages").toggle(2000);
    $(".html,.css,.js").slideUp(1000).slideDown(1000);
    $("p").hide(3000).show(3000);


	});

	$("#send").click(function(){
		
		$(".messages").toggle(100);
		$("p");
		

	});


	// end home 


	
});
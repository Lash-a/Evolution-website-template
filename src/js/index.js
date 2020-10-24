// this function checks if user scrolled enough to make
// navbar transparent again 
const scroll = () => {
    $(window).scroll(function(){
		let scroll = $(window).scrollTop();
		if (scroll > 350) {
		  $(".navbar").css({"background-color": "#07060b", "transition": "0.7s"});
		}
		else{
			$(".navbar").css("background" , "transparent");  	
		}
		if (scroll > 350) {
		  $(".blog-single-navbar").css({"background-color": "#07060b", "transition": ".7s"});
		}
		else{
			$(".blog-single-navbar").css("background" , "transparent");  	
		}
});
}
scroll();

// modals
const modal = () => {
	$('#myModal').on('shown.bs.modal', function () {
		$('#myInput').trigger('focus')
	  })
};
modal();
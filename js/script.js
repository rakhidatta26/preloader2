
$(document).ready(function(){
	 $.imgPreloader.preLoad(function() {
      setTimeout(function() {
        $('#loading').fadeOut()
        $('#content').slideDown()
      }, 3000)
    }, function() {
    })
});


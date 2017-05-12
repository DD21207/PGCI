window.onresize = function() {
                var height = Math.max(document.documentElement.clientHeight,document.body.offsetHeight);
                document.getElementById('container').style.height = height - 180 + 'px';
                $(".content").css('height',height-220+'px')

                
        }

$(function(){
		var height = Math.max(document.documentElement.clientHeight,document.body.offsetHeight);
        document.getElementById('container').style.height = height - 180 + 'px';
        $(".content").css('height',height-220+'px');
        $("#box").css('margin-top')
        
            		
})

       
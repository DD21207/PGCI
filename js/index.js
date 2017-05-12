window.onresize = function() {
                var height = Math.max(document.documentElement.clientHeight,document.body.offsetHeight);
                document.getElementById('container').style.height = height - 180 + 'px';
              

                
        }

        $(function(){
                var height = Math.max(document.documentElement.clientHeight,document.body.offsetHeight);
                document.getElementById('container').style.height = height - 180 + 'px';

               $(".box").hover(function(){
                    $(this).children().children(".1").fadeOut(1000);
                    $(this).children().children(".2").slideDown(1000);
               },
               function(){
                    $(this).children().children(".1").fadeIn(1000);
                   $(this).children().children(".2").slideUp(1000) 
               })
               
                        
        })

        function clickss() {
                  alert("Access Denied Or Under Construction.\r\rWe're sorry, this page is restricted. Please contact R&D Team if you need more information, thanks.");
              }   
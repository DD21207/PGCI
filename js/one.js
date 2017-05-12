        window.onresize = function() {
                var height = Math.max(document.documentElement.clientHeight,document.body.offsetHeight);
                document.getElementById('container').style.height = height - 142 + 'px';  
        }

        $(function(){
                var height = Math.max(document.documentElement.clientHeight,document.body.offsetHeight);
                document.getElementById('container').style.height = height - 142 + 'px'; 

       
        var url = "container.html";
        $("#centerFrame").attr("src", url);


        $('#M').hover(function() {
            $('#ullM').show();
        }, function() {
            $('#ullM').hide();
        });
        $('#ullM').hover(function() {
            $('#ullM').show();
        }, function() {
            $('#ullM').hide();
        });
        $('#D').hover(function() {
            $('#ullD').show();
        }, function() {
            $('#ullD').hide();
        });
        $('#ullD').hover(function() {
            $('#ullD').show();
        }, function() {
            $('#ullD').hide();
        });
        $('#E').hover(function() {
            $('#ullE').show();
        }, function() {
            $('#ullE').hide();
        });
        $('#ullE').hover(function() {
            $('#ullE').show();
        }, function() {
            $('#ullE').hide();
        });
        $('#F').hover(function() {
            $('#ullF').show();
        }, function() {
            $('#ullF').hide();
        });
        $('#ullF').hover(function() {
            $('#ullF').show();
        }, function() {
            $('#ullF').hide();
        });

        $('#Score').hover(function(){
          $(this).css('background','#EEEEEE')
          $('#ullScore').show()
        },function(){
          $(this).css('background','white')
          $('#ullScore').hide();
        })
         $('#ullScore').hover(function(){
          $('#ullScore').show()
           $('#Score').css('background','#EEEEEE')
        },function(){
          $('#ullScore').hide();
          $('#Score').css('background','white')

        })

        $('#Competitive').hover(function(){
          $(this).css('background','#EEEEEE')
          $('#ullCompetitive').show()
        },function(){
          $(this).css('background','white')
          $('#ullCompetitive').hide();
        })
         $('#ullCompetitive').hover(function(){
          $('#ullCompetitive').show()
           $('#Competitive').css('background','#EEEEEE')
        },function(){
          $('#ullCompetitive').hide();
          $('#Competitive').css('background','white')

        })

         $('#Intelligence').hover(function(){
          $(this).css('background','#EEEEEE')
          $('#ullIntelligence').show()
        },function(){
          $(this).css('background','white')
          $('#ullIntelligence').hide();
        })
         $('#ullIntelligence').hover(function(){
          $('#ullIntelligence').show()
           $('#Intelligence').css('background','#EEEEEE')
        },function(){
          $('#ullIntelligence').hide();
          $('#Intelligence').css('background','white')

        })
          
              

          $('#Delivery').hover(function(){
          $(this).css('background','#EEEEEE')
          $('#ullDelivery').show()
        },function(){
          $(this).css('background','white')
          $('#ullDelivery').hide();
        })
         $('#ullDelivery').hover(function(){
          $('#ullDelivery').show()
           $('#Delivery').css('background','#EEEEEE')
        },function(){
          $('#ullDelivery').hide();
          $('#Delivery').css('background','white')

        })             
        })

var net = "https://www.starcompass.net"

function setData(menu, obj) {
    $(".nav_hq_s").attr("class", "nav_hq_s");
    obj.attr("class", "nav_hq_s nav_hq_on");
    /*  var ip = "192.168.1.20";
       var port = "8080"; */
    if (menu == 1) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!01_Market Intelligence!2f!01_01 Corporate Topline.db"
        $("#centerFrame").attr("src", url);
    } else if (menu == 2) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!01_Market Intelligence!2f!01_02 One Report_by Brand.db";
        $("#centerFrame").attr("src", url);

    } else if (menu == 3) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!01_Market Intelligence!2f!01_03 Business Market Performance.db";
        $("#centerFrame").attr("src", url);

    } else if (menu == 4) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!02_Brand Analytics!2f!02_01 Category Landscape.db";
        $("#centerFrame").attr("src", url);

    } else if (menu == 5) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!02_Brand Analytics!2f!02_02 Brand Scorecard!2f!BrandSCHC.db";
        $("#centerFrame").attr("src", url);

    } else if (menu == 6) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!02_Brand Analytics!2f!02_02 Brand Scorecard!2f!BrandSCBC.db";
        $("#centerFrame").attr("src", url);

    } else if (menu == 7) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!02_Brand Analytics!2f!02_02 Brand Scorecard!2f!Laundry scorecard!2f!BrandSCLC.db";
        $("#centerFrame").attr("src", url);

    } else if (menu == 8) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!02_Brand Analytics!2f!02_02 Brand Scorecard!2f!Oralcare scorecard!2f!BrandSCOC.db";
        $("#centerFrame").attr("src", url);

    } else if (menu == 9) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!02_Brand Analytics!2f!02_03 Competitive Analytics!2f!02_03_01 Competitive Performance.db";
        $("#centerFrame").attr("src", url);

    } else if (menu == 10) {

        // var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=ABI^2f^Data^20^Bank^2f^03_3^20^OOH^20^Detail.db";
        $("#centerFrame").attr("src", url);

    } else if (menu == 11) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!02_Brand Analytics!2f!02_04 Intelligence!2f!02_04_01 Newsletter.db";
        $("#centerFrame").attr("src", url);

    } else if (menu == 12) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!02_Brand Analytics!2f!02_04 Intelligence!2f!02_04_02 Sharing Studies.db";
        $("#centerFrame").attr("src", url);

    } else if (menu == 13) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!03_ISP Performance!2f!03_01 TV Delivery.db";
        $("#centerFrame").attr("src", url);

    }else if (menu == 14) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!03_ISP Performance!2f!03_02 OTT Delivery.db";
        $("#centerFrame").attr("src", url);

    }else if (menu == 15) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!03_ISP Performance!2f!03_03 Digital Delivery!2f!03_03_01 Daily Tracking.db";
        $("#centerFrame").attr("src", url);

    }else if (menu == 16) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!03_ISP Performance!2f!03_03 Digital Delivery!2f!03_03_02 Monthly Tracking.db";
        $("#centerFrame").attr("src", url);

    }else if (menu == 17) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!03_ISP Performance!2f!03_03 Digital Delivery!2f!03_03_03 Digital Post buy.db";
        $("#centerFrame").attr("src", url);

    }else if (menu == 18) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!04_Media Detail!2f!04_01 TV GRP SOV.db";
        $("#centerFrame").attr("src", url);

    }else if (menu == 19) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!04_Media Detail!2f!04_02 ISP Media Reach.db";
        $("#centerFrame").attr("src", url);

    }else if (menu == 20) {

        var url = net + "/bi/Viewer?proc=1&action=viewer&hback=true&db=PGCI-2017!2f!04_Media Detail!2f!04_03 Media Monitor Spending.db";
        $("#centerFrame").attr("src", url);

    }
};
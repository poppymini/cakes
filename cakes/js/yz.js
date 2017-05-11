     $(function(){
           $(".forget").click(function(){
               $(".container-e").css("display","none");
               $(".full-screen").css("display","block");
           })
           var H = $(".header").height();
            $(window).scroll(function () {
                var docSccrollTop = $(document).scrollTop();
                if(docSccrollTop > H){
                }else{ $(".top_nav").css({"position":"static"});  /*静态定位*/
                }
            });
             $(".sb-search-submit").click(function(){
          $(".sb-search-input").slideToggle("slow");
        });
        $(".logo").click(function(){
          $(".logos").css("display","block");
          $(".logo").css("display","none");
          $(".header_top").css("display","block");
        });
        $(".logos").click(function(){
          $(".logos").css("display","none");
          $(".logo").css("display","block");
          $(".header_top").css("display","none");
        });
         $(".login_tit li").mouseenter(function(){
               var index=$(this).index();
               $(".login_tit li").removeClass("active");
               $(".login-form-group ul").removeClass("selected");
               $(this).addClass("active");
                $(".login-form-group ul").eq(index).addClass("selected");
               
           })
        })
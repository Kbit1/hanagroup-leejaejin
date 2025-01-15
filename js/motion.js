let count = 1; 
let ag = setInterval("autoSlide()",3000); //셋인터벌 3초//

function autoSlide(){

    $(".slide").stop().animate({ marginLeft:"-100%" },function(){
        $(".slide li:first").appendTo(".slide");
        $(".slide").css({ marginLeft:0 });
    });

    count += 1;
    if( count <= 1 ){
        $(".slideBtn span").text("1/2");
    }else{
        $(".slideBtn span").text("2/2");
        count = 0;
    };


};

function autoSlide_re(){

    $(".slide li:last").prependTo(".slide");
    $(".slide").css({ marginLeft:"-100%" });
    $(".slide").stop().animate({ marginLeft: 0 });

    count -= 1;
    if( count >= 1 ){
        $(".slideBtn span").text("1/2");
    }else{
        $(".slideBtn span").text("2/2");
        count = 2;
    };
};


$(function(){

        //5.slide조작-next 
        $(".slideBtn button:eq(2)").click(function(){
            clearInterval(ag);
            autoSlide();
        });
        //5.slide조작-prev
        $(".slideBtn button:eq(1)").click(function(){
            clearInterval(ag);
            autoSlide_re();
        });

        //5.slide조작-일시 정지&재생
        var slideState = 0;
        $(".slideBtn button:eq(0)").click(function(){

            if(slideState == 0){ //멈춤

                clearInterval(ag);
                $(".slideBtn button:eq(0) img").attr("src","img/next-btn.png");
                slideState = 1;

            }else{ //재생
                autoSlide();
                ag = setInterval("autoSlide()",3000);
                $(".slideBtn button:eq(0) img").attr("src","img/pause-btn.png");
                slideState = 0;
            };
            
        });


        let bw = $(window).width(); 
        $(window).resize(function(){

            bw = $(window).width();  // 리사이즈 된 브라우저의 너비값을 bw변수에 재할당.
            if(bw >1200){  //만약에 bw의 너비값인 1400 이상일 경우 <<< 이상
                $("nav").css({ marginRight: 0 });
                $(".gnb>li>ul").css({ marginRight:0 });

            }else{  //만약에 bw의 너비값인 1400 이하일 경우  <<<< 이하
                $("nav").css({ marginRight: "-100%" });
                $(".gnb>li>ul").css({ marginRight:"-100%" });
            };
        });

        //스크롤탑 이벤트
        $(".topBtn").hide();
        $(document).scroll(function(){
            if( $(document).scrollTop() >2000){  //2000보다 크면!!
                $(".topBtn").show();
            }else{
                $(".topBtn").hide();
            };
        });


        //header 슬라이드(데스크탑)
        $(".gnb>li>a").mouseover(function(){
            if(bw>1199){
                $("#header").stop().animate({ height:"200px" },"fast");
            };         
        });
        $("#header").mouseleave(function(){
            $("#header").stop().animate({ height:"90px" },"fast");
        });


        $(".util li:last a").click(function(){
            $("nav").stop().animate({ marginRight:0});
        });

        $(".tmNav button").click(function(){
            $("nav").stop().animate({ marginRight: "-100%"  });
            $(".gnb>li>ul").css({ marginRight:"-100%"});
        });


        $(".gnb>li>a").click(function(){
            if(bw<1200){
                $(".gnb>li>ul").css({ marginRight:"-100%"});
                $(this).next().css({ marginRight: 0 });
                return false; 
            };            
        });

        //top버튼 클릭시 페이지 상단으로 이동
        $(".topBtn").click(function(){
            $("html").stop().animate({ scrollTop: 0 });
        });

        $(".foundationTab li").click(function(){

                //div표시,비표시
                $(".foundationTabDiv>div").hide();
                $(".foundationTabDiv>div:eq("+ $(this).index() +")").css({ display:"flex"});     
                
                //버튼 인터렉션(상호작용) 효과
                $(".foundationTab li").css({ 
                        borderTop:"1px solid #d9d9d9",
                        borderLeft:"1px solid #d9d9d9",
                        borderBottom:"1px solid #d9d9d9",
                        background:"none"
                });
                $(".foundationTab li button").css({ color: "#000", fontWeight:"normal" });
                $(".foundationTab li:first").css({ borderRight:"none" });


                $(".foundationTab li:eq("+ $(this).index() +")").css({ borderRight:"1px solid #0c8570" });
                $(".foundationTab li:not(:eq("+ $(this).index() +"))").css({ borderRight:"none" });
                $(".foundationTab li:last").css({ borderRight:"1px solid #d9d9d9" });

                $(".foundationTab li:eq("+ $(this).index() +")").css({ 
                    border:"1px solid #0c8570", background:"#eff7f8"
                });

                $(".foundationTab li:eq("+ $(this).index() +") button").css({ 
                    color:"#0c8570", fontWeight:"bold"
                });
                

        });


        //sub(뉴스리스트)
        $(".focusTab li").click(function(){

            $(".focusVideoList>div>ul li").hide();

            var a = $(this).index();

            if( a == 0 ){ $(".focusVideoList>div>ul li").show();  }
            if( a == 1 ){ $(".n").show();  }
            if( a == 2 ){ $(".c").show();  }
            if( a == 3 ){ $(".e").show();  }

        });

        let fv = [    //array를 활용해보자!! 유튜브 링크 18개 즉 0~17
            "https://www.youtube.com/embed/5i-cKlmCWiQ",
            "https://www.youtube.com/embed/lcmoyD3m89c",
            "https://www.youtube.com/embed/01BtLyxHtZ4",
            "https://www.youtube.com/embed/5i-cKlmCWiQ",
            "https://www.youtube.com/embed/lcmoyD3m89c",
            "https://www.youtube.com/embed/01BtLyxHtZ4",
            "https://www.youtube.com/embed/5i-cKlmCWiQ",
            "https://www.youtube.com/embed/lcmoyD3m89c",
            "https://www.youtube.com/embed/01BtLyxHtZ4",
            "https://www.youtube.com/embed/5i-cKlmCWiQ",
            "https://www.youtube.com/embed/lcmoyD3m89c",
            "https://www.youtube.com/embed/01BtLyxHtZ4",
            "https://www.youtube.com/embed/5i-cKlmCWiQ",
            "https://www.youtube.com/embed/lcmoyD3m89c",
            "https://www.youtube.com/embed/01BtLyxHtZ4",
            "https://www.youtube.com/embed/5i-cKlmCWiQ",
            "https://www.youtube.com/embed/lcmoyD3m89c",
            "https://www.youtube.com/embed/01BtLyxHtZ4"   
        ];

        $(".focusVideoList>div>ul>li").click(function(){
            $(".layerPopup iframe").attr("src", fv[$(this).index()]);
            $(".layerPopup>div").fadeIn("fast");
            return false;
        });

        $(".layerPopup button").click(function(){
            $(".layerPopup>div").fadeOut("fast");
        });

        $(".focusVideoList>div>ul>li:gt(8)").hide();

        $(".focusVideoList>div>button").click(function(){
            $(".focusVideoList>div>ul>li:gt(8)").show();
            $(this).hide();
        });

});


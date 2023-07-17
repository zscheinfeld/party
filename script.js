$( document ).ready(function() {

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

  var wheelheight = $(".wheel").height()
  var wheelcontainerheight= $(".wheel-container").height()
  var arrowtop = (($(".wheel-container").height() - $(".wheel").height())/2) - $(".arrow-down").height()/2

  $(".arrow-down").css("top",`${arrowtop}px`)

  var width = $(window).width();
  var wheeltop;

  function mobileswitch(){
  width = $(window).width();
  wheeltop= $(".intro").height() + $(".nav-container").height() + 30
    if (width < 720){
      console.log("helll" + wheeltop)
      $(".wheel-container").css('top',`${wheeltop}px`) 
    }
    else{
      $(".wheel-container").css('top',`90px`) 
    }
  }
  
  mobileswitch();

  $(window).on('resize', function(){
    wheelheight = $(".wheel").height()
    wheelcontainerheight= $(".wheel-container").height()
    arrowtop = (($(".wheel-container").height() - $(".wheel").height())/2) - $(".arrow-down").height()/2
    $(".arrow-down").css("top",`${arrowtop}px`)
    welcomheight = $(".welcome-section").prop("scrollHeight")
    scheduleheight = $(".schedule-section").prop("scrollHeight")
    travelheight = $(".travel-section").prop("scrollHeight")
    transportheight = $(".transport-section").prop("scrollHeight")
    dressheight = $(".dress-section").prop("scrollHeight")
    registryheight = $(".registry-section").prop("scrollHeight")
    rsvpheight = $(".rsvp-section").prop("scrollHeight")
    mobileswitch();
});
  

  

  
    var end = new Date('06/02/2024 2:0 PM');

    function randomIntFromInterval(min, max) { // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min)
    }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    var varleft =[]
    var varscale =[]
    var vartime =[]
    var vartop =[]
    var varrot=[]
    var imgarray=[]
    var imgarrayshuff = []
    
    var imageroot = document.querySelector(':root');

    for (x=0; x<152 ; x++){
      imgarray[x] = x
    }

    

    function newimgplacement(){
      
      if (width < 720){
        imgarrayshuff = shuffle(imgarray)
        for (x=0; x <16; x++){
          $(`.img${x}`).children().attr('src', `wildcard/0${imgarrayshuff[x]}.png`)
          varleft = randomIntFromInterval(-40, 40);
          imageroot.style.setProperty(`--animation-left-${x}`, varleft +'vw');
      
          vartop[x] = randomIntFromInterval(-40, 40);
          imageroot.style.setProperty(`--animation-top-${x}`, vartop[x] +'vh');
      
          varrot[x] = randomIntFromInterval(-45, 45);
          imageroot.style.setProperty(`--animation-rotation-${x}`, varrot[x] +'deg');
    
          varscale[x] = randomIntFromInterval(10, 50);
          imageroot.style.setProperty(`--animation-scale-${x}`, varscale[x] +'%');
        }
      }
      
      else{
        imgarrayshuff = shuffle(imgarray)
        for (x=0; x <16; x++){
          $(`.img${x}`).children().attr('src', `wildcard/0${imgarrayshuff[x]}.png`)
          varleft = randomIntFromInterval(-40, 40);
          imageroot.style.setProperty(`--animation-left-${x}`, varleft +'vw');
      
          vartop[x] = randomIntFromInterval(-20, 20);
          imageroot.style.setProperty(`--animation-top-${x}`, vartop[x] +'vh');
      
          varrot[x] = randomIntFromInterval(-45, 45);
          imageroot.style.setProperty(`--animation-rotation-${x}`, varrot[x] +'deg');
    
          varscale[x] = randomIntFromInterval(10, 50);
          imageroot.style.setProperty(`--animation-scale-${x}`, varscale[x] +'%');
        }
      }


    }

    newimgplacement()

   



    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);
        document.getElementById('days').innerHTML = days;
        document.getElementById('Hours').innerHTML = hours;
        document.getElementById('Minutes').innerHTML = minutes;
        // document.getElementById('countdown').innerHTML += seconds + 'secs';
    }

    timer = setInterval(showRemaining, 1000);

    var wheelrot = 0
    var scrollheight = $(document).height() 
    var welcomheight = $(".welcome-section").prop("scrollHeight") + 30
    var scheduleheight = $(".schedule-section").prop("scrollHeight") 
    var travelheight = $(".travel-section").prop("scrollHeight") 
    var transportheight = $(".transport-section").prop("scrollHeight") 
    var dressheight = $(".dress-section").prop("scrollHeight") 
    var registryheight = $(".registry-section").prop("scrollHeight") 
    var rsvpheight = $(".rsvp-section").prop("scrollHeight") 
    console.log(".welcome-height" + welcomheight)
    var sectiontotal;


    $(document).scroll(function(){

      $(".wheel").removeClass("wheel-spin")
      // console.log($(window).scrollTop())
      if ($(window).scrollTop() < welcomheight){
        console.log("welcome")
        sectiontotal = welcomheight 
        wheelrot = scale($(window).scrollTop(), 0, sectiontotal, 3, 407)
      
        $(".wheel").css({"transform":`rotate(${wheelrot}deg)`, "transition-duration":"0",
      })
      }

      else if ($(window).scrollTop() < welcomheight + scheduleheight){
        sectiontotal = welcomheight + scheduleheight
        wheelrot = scale($(window).scrollTop(), welcomheight, sectiontotal, 407, 812)
        $(".wheel").css({"transform":`rotate(${wheelrot}deg)`, "transition-duration":"0"})
     
      }

      else if ($(window).scrollTop() < welcomheight + scheduleheight + travelheight){
        sectiontotal = welcomheight + scheduleheight + travelheight
        wheelrot = scale($(window).scrollTop(), welcomheight + scheduleheight, sectiontotal, 812, 1217)
        $(".wheel").css({"transform":`rotate(${wheelrot}deg)`, "transition-duration":"0"})

      }

      else if ($(window).scrollTop() < welcomheight + scheduleheight + travelheight + transportheight){
        sectiontotal = welcomheight + scheduleheight + travelheight + transportheight
        wheelrot = scale($(window).scrollTop(), welcomheight + scheduleheight + travelheight, sectiontotal, 1217, 1622)
        $(".wheel").css({"transform":`rotate(${wheelrot}deg)`, "transition-duration":"0"})

      }

      else if ($(window).scrollTop() < welcomheight + scheduleheight + travelheight + transportheight + dressheight){
        sectiontotal = welcomheight + scheduleheight + travelheight + transportheight + dressheight
        wheelrot = scale($(window).scrollTop(), welcomheight + scheduleheight + travelheight + transportheight, sectiontotal, 1622, 2027)
        $(".wheel").css({"transform":`rotate(${wheelrot}deg)`, "transition-duration":"0"})
   
      }

      else if ($(window).scrollTop() < welcomheight + scheduleheight + travelheight + transportheight + dressheight + registryheight){
        sectiontotal = welcomheight + scheduleheight + travelheight + transportheight + dressheight + registryheight
        wheelrot = scale($(window).scrollTop(), welcomheight + scheduleheight + travelheight + transportheight + dressheight, sectiontotal, 2027, 2432)
        $(".wheel").css({"transform":`rotate(${wheelrot}deg)`, "transition-duration":"0"})

      }

      else if ($(window).scrollTop() < welcomheight + scheduleheight + travelheight + transportheight + dressheight + registryheight + rsvpheight){
      
      }
        
        
  
      });

    var cursor = $(".cursor");

    // $(window).mousemove(function(e) {
    //     cursor.css({
    //         top: e.clientY - cursor.height() / 2,
    //         left: e.clientX - cursor.width() / 2
    //     });
    // });

    // $("div").mousedown(function(){
    //     // $(".cursor-type").attr("src", "img/Cursor-Rainbow-3.svg")
    //     $(".cursor").addClass("cursor-click")
    //   });

    // $("div").mouseup(function(){
    //     // $(".cursor-type").attr("src", "img/Cursor-Black.svg")
    //     $(".cursor").removeClass("cursor-click")
    //   });


      // $(".welcome").hover(function(){
      //   $(this).children().addClass("slice-type-hover");
      //   $(this).children().before().addClass("slice-hover");
      //   $(this).children().after().addClass("slice-hover");

      //   }, function(){
      //   $(this).children().removeClass("slice-type-hover");
      //   $(this).children().before().removeClass("slice-hover");
      //   $(this).children().after().removeClass("slice-hover");
      // });

      // $(".label").hover(function(){
      //   console.log("hover")
      //   $(this).addClass("label-hover");
      //   }, function(){
      //   // $(this).children().removeClass("slice-type-hover");
      //   // $(this).children().before().removeClass("slice-schedule-hover-b");
      //   // $(this).children().after().removeClss("slice-schedule-hover-a");
      // });

      var jennaon = 0;
      var zachon = 0;

      function bgjennaswitch(){
        zachon = 0;
        $(".nav").removeClass("zach-nav")
        $(".nav-container").removeClass("zach-nav")
        $(".background-jenna-on").removeClass("background-zach-gradient")
        console.log("remove blue , add pink")
        $(".background-jenna-on").addClass("background-jenna-gradient")
        $(".header-jenna-bg").removeClass("header-zach-gradient")
        if (jennaon == 0){
          $(".nav-container").addClass("jenna-nav")
          $(".nav").addClass("jenna-nav")
          $(".footer-container").addClass("footer-jenna")
          $(".footer").addClass("footer-jenna")
          $(".background-jenna").addClass("background-jenna-on-opacity")
          $(".header-jenna-oppacity").addClass("background-jenna-on-opacity")
          $(".header-jenna-bg").addClass("header-jenna-gradient")
          jennaon = 1
        }
        else{
          $(".background-jenna-on").removeClass("background-jenna-gradient")
          $(".nav-container").removeClass("jenna-nav")
          $(".nav").removeClass("jenna-nav")
          $(".footer-container").removeClass("footer-jenna")
          $(".footer").removeClass("footer-jenna")
          $(".background-jenna").removeClass("background-jenna-on-opacity")
          $(".header-jenna-bg").removeClass("header-jenna-gradient")
          $(".header-jenna-oppacity").removeClass("background-jenna-on-opacity")
          // $(".footer-jenna").css("background-color","rgba(255,255,255,1)")
          jennaon = 0
        }
      }

      function zachswitch(){
        jennaon = 0;
        console.log("remove pink , add blue")
        $(".nav").removeClass("jenna-nav")
        $(".nav-container").removeClass("jenna-nav")
        $(".background-jenna-on").removeClass(".background-jenna-gradient")
        $(".header-jenna-bg").removeClass("header-jenna-gradient")
        $(".background-jenna-on").addClass("background-zach-gradient")
        $(".footer").removeClass("footer-jenna")
        $(".footer-container").removeClass("footer-jenna")
        if (zachon == 0){
          $(".nav-container").addClass("zach-nav")
          $(".nav").addClass("zach-nav")
          $(".background-jenna").addClass("background-jenna-on-opacity")
          $(".header-jenna-oppacity").addClass("background-jenna-on-opacity")
          $(".header-jenna-bg").addClass("header-zach-gradient")
          
          // $(".footer-container").addClass("footer-zach")
          // $(".footer").addClass("footer-zach")
          // $(".background-zach").addClass("background-zach-on-opacity")
          // $(".header-zach-oppacity").addClass("background-zach-on-opacity")
          zachon = 1
        }
        else{
          $(".nav-container").removeClass("zach-nav")
          $(".nav").removeClass("zach-nav")
          $(".background-jenna").removeClass("background-jenna-on-opacity")
          $(".header-jenna-bg").removeClass("header-zach-gradient")
          $(".header-jenna-oppacity").removeClass("background-jenna-on-opacity")
          // $(".footer-container").removeClass("footer-zach")
          // $(".footer").removeClass("footer-zach")
          // $(".background-zach").removeClass("background-zach-on-opacity")
          // $(".header-zach-oppacity").removeClass("background-zach-on-opacity")
          zachon = 0
        }
      }

      $(".nav-left").click(function(){
        // $(".footer-jenna").css("background-color","rgb(246,232,110)")
        // $(".background-jenna-on").css("background","linear-gradient(0deg, rgba(246,232,110,1) 0%, rgba(255,208,231,1) 100%)")
        // $(".footer-jenna").css("background-color","rgba(246,232,110,1)")
        bgjennaswitch();
      });

      $(".nav-right").click(function(){
        
        // bgjennaswitch();
        
        zachswitch();
      });

      $(".registry").click(function(){
        $('html,body').animate({
            scrollTop: welcomheight + scheduleheight + travelheight + transportheight + dressheight
         }, 1500);
      })

      $(".schedule").click(function(){
        console.log(($(".schedule-section").offset().top))
        $('html,body').animate({
            scrollTop: welcomheight 
         }, 1500);
      })

      $(".transport").click(function(){
        console.log($(".transport-section").offset().top)
        $('html,body').animate({
            scrollTop: welcomheight + scheduleheight + travelheight
         }, 1500);
      })

      $(".dress").click(function(){
        $('html,body').animate({
            scrollTop: welcomheight + scheduleheight + travelheight + transportheight
            
         }, 1500);
      })

      $(".welcome").click(function(){
        $('html,body').animate({
            scrollTop: $(".welcome-section").offset().top - 120
         }, 1500);
      })

      $(".travel").click(function(){
        $('html,body').animate({
            scrollTop: welcomheight + scheduleheight
         }, 1500);
      })

      $(".rsvp").click(function(){
        $('html,body').animate({
            scrollTop: welcomheight + scheduleheight + travelheight + transportheight + dressheight + registryheight
         }, 1500);
      })

      var __dx;
      var __dy;
      var __scale=0.5;
      var __recoupLeft, __recoupTop;

      $(".wildcardpic").draggable({
         //revert: true,
    zIndex: 100,
    drag: function (event, ui) {
        //resize bug fix ui drag `enter code here`
        __dx = ui.position.left - ui.originalPosition.left;
        __dy = ui.position.top - ui.originalPosition.top;
        //ui.position.left = ui.originalPosition.left + ( __dx/__scale);
        //ui.position.top = ui.originalPosition.top + ( __dy/__scale );
        ui.position.left = ui.originalPosition.left + (__dx);
        ui.position.top = ui.originalPosition.top + (__dy);
        //
        ui.position.left += __recoupLeft;
        ui.position.top += __recoupTop;
        $(this).css({
          "z-index":`${zindextrack}`
        })
    },
    start: function (event, ui) {
        //resize bug fix ui drag
        var left = parseInt($(this).css('left'), 10);
        left = isNaN(left) ? 0 : left;
        var top = parseInt($(this).css('top'), 10);
        top = isNaN(top) ? 0 : top;
        __recoupLeft = left - ui.position.left;
        __recoupTop = top - ui.position.top;
    },
    // stop: function (event, ui) {
    //     //alternate to revert (don't use revert)
    //     $(this).animate({
    //         left: $(this).attr('oriLeft'),
    //         top: $(this).attr('oriTop')
    //     }, 1000)
    // },
    create: function (event, ui) {
        $(this).attr('oriLeft', $(this).css('left'));
        $(this).attr('oriTop', $(this).css('top'));
    }
      });

      zindextrack = 100

      $(".wildcardpic").mousedown(function(){
        console.log("z-iindex")
        zindextrack = zindextrack + 1
        $(this).css({
          "z-index":`${zindextrack}`
        })
      })


      $(".wildcard").click(function(){
        newimgplacement()
        $(".wildcardpic").show()
        $(".wildcard-close").show()
        $(".wildcardpic:nth-child(1)").addClass("wildcardpic-move-1-start")
        $(".wildcardpic:nth-child(2)").addClass("wildcardpic-move-2-start")
        $(".wildcardpic:nth-child(3)").addClass("wildcardpic-move-3-start")
        $(".wildcardpic:nth-child(4)").addClass("wildcardpic-move-4-start")
        $(".wildcardpic:nth-child(5)").addClass("wildcardpic-move-5-start")
        $(".wildcardpic:nth-child(6)").addClass("wildcardpic-move-6-start")
        $(".wildcardpic:nth-child(7)").addClass("wildcardpic-move-7-start")
        $(".wildcardpic:nth-child(8)").addClass("wildcardpic-move-8-start")
        $(".wildcardpic:nth-child(9)").addClass("wildcardpic-move-9-start")
        $(".wildcardpic:nth-child(10)").addClass("wildcardpic-move-10-start")
        $(".wildcardpic:nth-child(11)").addClass("wildcardpic-move-11-start")
        $(".wildcardpic:nth-child(12)").addClass("wildcardpic-move-12-start")
        $(".wildcardpic:nth-child(13)").addClass("wildcardpic-move-13-start")
        $(".wildcardpic:nth-child(14)").addClass("wildcardpic-move-14-start")
        $(".wildcardpic:nth-child(15)").addClass("wildcardpic-move-15-start")
      })

      // $(".img1").click(function(){
      //   $(".wildcardpic:nth-child(1)").removeClass("wildcardpic-move-1-start")
      //   $(".wildcardpic:nth-child(1)").addClass("wildcardpic-move-1-end")
      // })

      $(".wildcard-close").click(function(){
        $(".wildcard-close").hide()
        $(".wildcardpic").hide()
        // $(".wildcardpic:nth-child(3)").removeClass("wildcardpic-move")
      })



});
$(document).ready((function(){var n=$("#player--video");n[0].removeAttribute("controls"),$(".control").show().css({opacity:1}),$(".loading").fadeIn(500),$(".caption").fadeIn(500),$(".mainControl a").on("click",(function(){return!1})),n.on("loadedmetadata",(function(){$(".caption").animate({opacity:0},300),s(0,.75),setTimeout(t,150),$(".videoContainer").append('<div id="init"></div>').on("click",(function(){$("#init").remove(),$(".btnPlay").addClass("paused"),$(this).unbind("click"),n[0].play()})).hover((function(){$(".control").stop().animate({opacity:1},500),$(".caption").stop().animate({opacity:1},500)}),(function(){c||($(".control").stop().animate({opacity:0},500),$(".caption").stop().animate({opacity:0},500))})),$("#init").fadeIn(200)}));var t=function(){var o=n[0].buffered.end(0),a=n[0].duration,e=100*o/a;$(".bufferBar").css("width",e+"%"),o<a&&setTimeout(t,500)};n.on("timeupdate",(function(){var t=100*n[0].currentTime/n[0].duration;$(".timeBar").css("width",t+"%")})),$(".btnPlay").on("click",(function(){o()}));var o=function(){n[0].playbackRate=1,n[0].paused||n[0].ended||!$(".btnPlay").hasClass("paused")?($(".btnPlay").addClass("paused"),n[0].play()):($(".btnPlay").removeClass("paused"),n[0].pause())};$(".btnBck").on("click",(function(){a(this,-2)})),$(".btnFwd").on("click",(function(){a(this,2)}));var a=function(t,o){$(".btnPlay").removeClass("paused"),n[0].playbackRate=o,n[0].play()};$(".btnStop").on("click",(function(){e(this)})),$(".btnEnd").on("click",(function(){e(this,$(".progress").width())}));var e=function(t,o){o||(o=0);var a=$(".progress").offset().left+o;u(a),$(".btnPlay").removeClass("paused"),n[0].pause()};$(".sound").click((function(){n[0].muted=!n[0].muted,$(this).toggleClass("muted"),$(".volumeBar").toggleClass("volumeoff")})),n.on("canplay",(function(){$(".loading").fadeOut(100)}));var i=!1;n.on("canplaythrough",(function(){i=!0})),n.on("ended",(function(){$(".btnPlay").removeClass("paused"),n[0].pause()})),n.on("seeking",(function(){i||$(".loading").fadeIn(200)})),n.on("seeked",(function(){})),n.on("waiting",(function(){$(".loading").fadeIn(200)}));var c=!1;$(".progress").mousedown((function(n){c=!0,u(n.pageX)})),$(document).mouseup((function(n){c&&(c=!1,u(n.pageX))})),$(document).mousemove((function(n){c&&u(n.pageX)}));var u=function(t){var o=$(".progress"),a=n[0].duration,e=100*(t-o.offset().left)/o.width();e>100&&(e=100),e<0&&(e=0),$(".timeBar").css("width",e+"%"),n[0].currentTime=a*e/100};$(".volumeCover").on("mousedown",(function(n){s(n.pageX)}));var s=function(t,o){var a,e=$(".volume");o?a=100*o:a=100*(t-e.offset().left)/e.width();a=25*Math.ceil(a/25),$(".volumeBar").css("width",a+"%"),n[0].volume=a/100}}));
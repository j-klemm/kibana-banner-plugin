import $ from 'jquery';
import './bannerstylesheet.css';
var securityheader = "<div id='securityheader' class='securitybanner'><h1 class='securitybannertext'>SECURITY BANNER TEXT</h1></div>";
var securityfooter = "<div id='securityfooter' class='securitybanner'><h1 class='securitybannertext'>SECURITY BANNER TEXT</h1></div>";

$(document).ready(function() {
  $(document.body).append(securityheader)
  $(document.body).append(securityfooter)
  $(".app-wrapper").css("top", "20px")
  $(".app-wrapper").css("bottom", "20px")
  $(".kbnGlobalNav").css("top", "20px")
  $(".kbnGlobalNav").css("bottom", "20px")
});

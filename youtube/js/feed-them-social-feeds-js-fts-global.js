function slickremixImageResizing(){var e=jQuery(".fts-instagram-inline-block-centered"),t=jQuery(".slicker-instagram-placeholder"),s=e.attr("data-ftsi-columns"),r=e.attr("data-ftsi-margin"),a=2*parseFloat(r),i=e.width(),o=e.attr("data-ftsi-force-columns");if("1"===s||"2"===s||"3"===s||"4"===s||"5"===s||"6"===s||"7"===s||"8"===s){if(i<="376"&&"no"===o)var l="calc(100% - "+a+"px)";else if(i<="736"&&"no"===o)l="calc(50% - "+a+"px)";else if("8"===s)l="calc(12.5% - "+a+"px)";else if("7"===s)l="calc(14.28571428571429% - "+a+"px)";else if("6"===s)l="calc(16.66666666666667% - "+a+"px)";else if("5"===s)l="calc(20% - "+a+"px)";else if("4"===s)l="calc(25% - "+a+"px)";else if("3"===s)l="calc(33.33333333333333% - "+a+"px)";else if("2"===s)l="calc(50% - "+a+"px)";else if("1"===s)l="calc(100% - "+a+"px)";t.css({width:l});var n=t.width();t.css({width:l,height:n,margin:r})}else{var c=e.attr("data-ftsi-width")?e.attr("data-ftsi-width"):"325px";t.css({width:c,height:c,margin:r})}t.width()<180?(jQuery(".fts-instagram-inline-block-centered .slicker-date, .fts-instagram-inline-block-centered .fts-insta-likes-comments-grab-popup").hide(),jQuery(".slicker-instagram-placeholder").addClass("fts-smallerthan-180")):(jQuery(".fts-instagram-inline-block-centered .slicker-date, .fts-instagram-inline-block-centered .fts-insta-likes-comments-grab-popup").show(),jQuery(".slicker-instagram-placeholder, .slicker-youtube-placeholder").removeClass("fts-smallerthan-180"))}function slickremixImageResizingFacebook(){var e=jQuery(".fts-facebook-inline-block-centered"),t=jQuery(".slicker-facebook-placeholder"),s=e.attr("data-ftsi-columns"),r=e.attr("data-ftsi-margin"),a=1*parseFloat(r);e.width();if("2"===s||"3"===s){if("3"===s)var i="calc(33.0777777% - "+a+"px)";else if("2"===s)i="calc(49.777777% - "+a+"px)";t.css({width:i});var o=t.width();t.css({width:i,height:o,margin:r})}else{var l=e.attr("data-ftsi-width")?e.attr("data-ftsi-width"):"325px";t.css({width:l,height:l,margin:r})}t.width()<180?(jQuery(".fts-facebook-inline-block-centered .slicker-date, .fts-facebook-inline-block-centered .fts-insta-likes-comments-grab-popup").hide(),jQuery(".slicker-facebook-placeholder").addClass("fts-smallerthan-180")):(jQuery(".fts-facebook-inline-block-centered .slicker-date, .fts-facebook-inline-block-centered .fts-insta-likes-comments-grab-popup").show(),jQuery(".slicker-facebook-placeholder, .slicker-youtube-placeholder").removeClass("fts-smallerthan-180"))}function slickremixImageResizingFacebook2(){var e=jQuery(".fts-more-photos-2-or-3-photos a"),t="calc(49.88888888% - 1px)";e.css({width:t});var s=e.width();e.css({width:t,height:s,margin:"1px"})}function slickremixImageResizingFacebook3(){var e=jQuery(".fts-more-photos-4-photos a"),t="calc(33.192222222% - 1px)";e.css({width:t});var s=e.width();e.css({width:t,height:s,margin:"1px"})}function slickremixImageResizingYouTube(){var e=jQuery(".fts-youtube-inline-block-centered"),t=jQuery(".slicker-youtube-placeholder"),s=jQuery(".fts-youtube-popup-gallery"),r=jQuery(".fts-yt-large"),a=jQuery(".fts-youtube-scrollable.fts-youtube-thumbs-wrap, .fts-youtube-scrollable.fts-youtube-thumbs-wrap-left, .youtube-comments-wrap-premium, .youtube-comments-wrap.fts-youtube-thumbs-wrap-right, .youtube-comments-wrap.fts-youtube-thumbs-wrap-left"),i=e.attr("data-ftsi-columns"),o=e.attr("data-ftsi-margin"),l=2*parseFloat(o),n=e.width(),c=e.attr("data-ftsi-force-columns");if("1"===i||"2"===i||"3"===i||"4"===i||"5"===i||"6"===i){if(n<="376"&&"no"===c)var u="calc(100% - "+l+"px)";else if(n<="736"&&"no"===c)u="calc(50% - "+l+"px)";else if("6"===i)u="calc(16.66666666666667% - "+l+"px)";else if("5"===i)u="calc(20% - "+l+"px)";else if("4"===i)u="calc(25% - "+l+"px)";else if("3"===i)u="calc(33.33333333333333% - "+l+"px)";else if("2"===i)u="calc(50% - "+l+"px)";else if("1"===i)u="calc(100% - "+l+"px)";var f=r.height();a.css({height:f+"px"}),t.css({width:u}),s.css({padding:o});var d=t.width()-"150";t.css({width:u,height:d,margin:o})}t.width()<180?(jQuery(".slicker-youtube-placeholder").addClass("fts-youtube-smallerthan-180"),jQuery(".fts-yt-large, .fts-youtube-scrollable").css("width","100% !important")):jQuery(".slicker-youtube-placeholder").removeClass("fts-youtube-smallerthan-180"),jQuery(".fts-master-youtube-wrap").width()<550?jQuery(".fts-yt-large, .fts-youtube-scrollable, .youtube-comments-wrap").addClass("fts-youtube-smallerthan-550-stack"):jQuery(".fts-yt-large, .fts-youtube-scrollable, .youtube-comments-wrap").removeClass("fts-youtube-smallerthan-550-stack")}function fts_external_link_meta_content(){return jQuery(".fts-tweeter-wrap").each(function(){var e=jQuery(this).find(".fts-twitter-external-url-wrap");if(e[0]){var t=e.attr("data-twitter-security"),s=e.attr("data-twitter-time"),r=e.attr("data-twitter-url"),a=e.attr("data-image-exists-check"),i=e.attr("data-no-video-image-check"),o=e.attr("data-twitter-popup");console.log("url: "+r+" Image exists: "+a+" No video image exists: "+i),jQuery.ajax({data:{action:"fts_twitter_share_url_check",fts_security:t,fts_time:s,fts_url:r,fts_image_exists:a,fts_no_video_image:i,fts_popup:o},type:"POST",url:fts_twitter_ajax.ajax_url,success:function(t){fts_twitter=t,e.removeAttr("class data-twitter-security data-twitter-time"),console.log("FTS Twitter external link success"),"missing_info"===t?jQuery(e).attr("data-error","Do not return any content, image, title or description missing").hide():jQuery(e).html(t),ftsRetweetHeight(),jQuery(".fts-slicker-twitter-posts")[0]&&(jQuery(".fts-slicker-twitter-posts").masonry("reloadItems"),setTimeout(function(){jQuery(".fts-slicker-twitter-posts").masonry("layout")},500))},error:function(e,t,s){console.log(e),console.log("AJAX errors: "+s)}})}}),!0}function ftsRetweetHeight(){if(jQuery("div").hasClass("fts-tweeter-wrap")){var e=jQuery(".fts-tweeter-wrap");"475"<e.width()?(console.log("Wrap width: "+e.width()),jQuery(".fts-twitter-div").addClass("fts-twitter-wrap-below-width-450"),jQuery("span.fts-twitter-external-backg-image").css({"background-size":"cover"})):(jQuery(".fts-twitter-div").removeClass("fts-twitter-wrap-below-width-450"),jQuery("span.fts-twitter-external-backg-image").css({"background-size":"0"})),jQuery(".fts-twitter-quoted-text").each(function(){var e=jQuery(this).height()+20;jQuery(this).parent().find(".fts-twitter-external-backg-image").css({height:e+"px"})})}}jQuery(document).ready(function(){fts_external_link_meta_content(),jQuery(".fts-youtube-scrollable, .youtube-comments-wrap-premium, .youtube-comments-thumbs").hover(function(){jQuery("body").css("overflow","hidden")},function(){jQuery("body").css("overflow","auto")}),jQuery(document).on("keydown",function(e){27===e.keyCode&&(jQuery(".fts-youtube-scrollable").removeClass("fts-scrollable-function"),jQuery(".youtube-comments-thumbs").hide(),jQuery(".fts-youtube-scrollable, .fts-fb-autoscroll-loader").show(),jQuery(".fts-youtube-thumbs-gallery-master .youtube-comments-thumbs").html(""),slickremixImageResizing())}),jQuery.fn.ftsShare=function(){jQuery(".fts-share-wrap").each(function(){var e=jQuery(this);e.find(".ft-gallery-link-popup").unbind().bind("click",function(){e.find(".ft-gallery-share-wrap").toggle()})})},jQuery.fn.ftsShare&&jQuery.fn.ftsShare(),navigator.userAgent.indexOf("Firefox")>0||jQuery(".fts-instagram-popup-half video, .fts-simple-fb-wrapper video, .fts-slicker-facebook-posts video, .fts-fluid-videoWrapper-html5 video").click(function(){jQuery(this).trigger(this.paused?(this.paused,"play"):"pause")}),jQuery.fn.masonry&&jQuery(".fts-slicker-instagram").masonry({itemSelector:".fts-masonry-option"})}),jQuery.trim(jQuery(".fts-jal-fb-group-display").html()).length||jQuery(".fts-jal-fb-group-display").append('<div class="fts-facebook-add-more-posts-notice"><p>Please go to the <strong>Facebook Options</strong> page of our plugin and look for the "<strong>Change Post Limit</strong>" option and add the number <strong>7</strong> or more. You can also hide this notice on the Facebook Options page if you want.</p>If you are trying to add a Personal Facebook feed and you are seeing this message too, please note: <strong>Personal Facebook Accounts generally do not work with our plugin.</strong></div>'),jQuery(window).on("load",function(){jQuery.fn.masonry&&setTimeout(function(){jQuery(".fts-pinterest-wrapper.masonry").masonry("layout")},200)}),jQuery(document).ready(slickremixImageResizing),jQuery(window).on("resize",slickremixImageResizing),jQuery(document).ready(slickremixImageResizingFacebook,slickremixImageResizingFacebook2,slickremixImageResizingFacebook3),jQuery(window).on("resize",slickremixImageResizingFacebook,slickremixImageResizingFacebook2,slickremixImageResizingFacebook3),jQuery(document).ready(slickremixImageResizingYouTube),jQuery(window).on("resize",slickremixImageResizingYouTube),jQuery(document).ready(ftsRetweetHeight),jQuery(window).on("resize",ftsRetweetHeight);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */
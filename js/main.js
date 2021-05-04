    jQuery(function(){
        var headerHight = 74;//ヘッダーの高さ
        jQuery('a[href^="#"]').click(function() {
        var speed = 800;
        var href= jQuery(this).attr("href");
        var target = jQuery(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        jQuery('body,html').animate({scrollTop:position}, speed);
       });
    });
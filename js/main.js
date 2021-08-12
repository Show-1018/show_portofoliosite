    jQuery(function(){
        var headerHight = 74;//ヘッダーの高さ

        $(document).on('click', 'a[href^="#"]', function() {
        var speed = 800;
        var href= jQuery(this).attr("href");
        var target = jQuery(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight;
        jQuery('body,html').animate({scrollTop:position}, speed);
       });
    });

    $(function () {
        var urlHash = location.hash;
        if (urlHash) {
          $('body,html').scrollTop(0);
          setTimeout(function(){
            var headerHight = 74;//ヘッダーの高さ
            var target = $(urlHash);
            var position = target.offset().top - headerHight;
            $('body,html').animate({scrollTop:position}, 400);
        }, 800);
      }
      });

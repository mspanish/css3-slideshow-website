﻿(function($) {

    window.app = {

        init: function() {
            this.is_ipad = navigator.userAgent.indexOf('iPad') > -1;
            this.is_iphone = navigator.userAgent.indexOf('iPhone') > -1;
            return true;
        },

        spritely: {

            init: function() {

                // spritely methods...
                $('#bird')
                    .sprite({fps: 9, no_of_frames: 3})
                    .isDraggable({
                        start: function() {
                            if (!$.browser.msie) {
                                $('#bird').fadeTo('fast', 0.7);
                            }
                        },
                        stop: function() {
                            if (!$.browser.msie) {
                                $('#bird').fadeTo('slow', 1);
                            }
                        }
                    })
                                if (document.location.href.indexOf('/tools') == -1) {
                                    $('#bird')
                    .activeOnClick()
                    .active();
                                }
            

                $('html').flyToTap();
                if (!window.app.is_ipad && (window.Touch || document.location.hash.indexOf('iphone') > -1)) {
                    // iPhone/iPad
                  //  $('body').addClass('platform-iphone');
                    // bird constraint is slightly smaller
                    $('#bird').spRandom({top: -10, left: -10, right: 150, bottom: 100, speed: 3500, pause: 5000});
                                       if (document.location.hash.indexOf('iphone') > -1) {
                    //    $('body').addClass('platform-iphone');
                    }
                } else {
                    // non-iPhone
                    // bird constraint is slightly wider
                    var stage_left = (($('body').width() - 866) / 2);
                    var stage_top = 30;
                    $('#bird').spRandom({top: stage_top - 20, left: stage_left - 20, right: 400, bottom: 140, speed: 3500, pause: 5000});
                  
                }

                 
                }
            }

  


    $(document).ready(function() {

        window.app.init();
        window.app.spritely.init();
    });


})(jQuery);




(function () {
    $(document).ready(function () {
        var animate, item, items, mobile, _i, _len;
        $(".nav ul li a").click(function () {
            return $('html, body').animate({
                scrollTop: $("#" + ($(this).attr('class'))).offset().top
            }, 1500);
        });
        $(".chevron .down").click(function () {
            return $('html, body').animate({
                scrollTop: $("#about").offset().top
            }, 1500);
        });

        {
            var coded = "5tKqu@gq5qLjqgq.0ubt"
            var hash = "wq4RblMEV8Bg9rhnc0Wz1kI6vyeOTHdFG5Zu3xm2oLPajXfpASYJQsN7UCKitD"
            var shift = coded.length
            var link = ""
            for (i = 0; i < coded.length; i++) {
                if (hash.indexOf(coded.charAt(i)) == -1) {
                    ltr = coded.charAt(i)
                    link += (ltr)
                }
                else {
                    ltr = (hash.indexOf(coded.charAt(i)) - shift + hash.length) % hash.length
                    link += (hash.charAt(ltr))
                }
            }
            $("#ctctct").replaceWith("<a class='contact' href='mailto:" + link + "'>E-mail me<i class='flaticon-speech39'></i></a>" +
                "<p>or use my vCard</p>" + "<img src='/site/images/vCard.svg' width='140px' />");
        }

        mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        if ($("html").hasClass("cssanimations") && !mobile) {
            animate = function (animation) {
                return $(animation[0]).addClass("concealed").viewportChecker({
                    classToAdd: "visible animated " + (animation[1].trim()),
                    offset: 200
                });
            };
            items = [['#about p', 'fadeInUp'], ['.column', 'fadeInUp'], ['.item', 'fadeInDown'], ['.bar', 'fadeInRight'], ['.paperplane', 'bounceInDown'], ['#quote .container', 'fadeIn'], ['#quote .icon', 'fadeInDown']];
            for (_i = 0, _len = items.length; _i < _len; _i++) {
                item = items[_i];
                animate(item);
            }
        }
        return $("#footer ul li").hover(function () {
            return $(this).find('p').stop(true, true).fadeIn(800);
        }, function () {
            return $(this).find('p').stop(true, true).fadeOut(800);
        });
    });

}).call(this);

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
            const hash = "wq4RblMEV8Bg9rhnc0Wz1kI@vyeOTHdFG5Zu.xm2oLPajXfpASYJQsN7UCKitD"
            function decode(encoded) {
                const shift = encoded.length
                let text = ""
                for (const symbol of encoded) {
                    const position_in_hash = (hash.indexOf(symbol) - shift + hash.length) % hash.length
                    text += hash.charAt(position_in_hash)
                }
                return text
            }

            function encode(text) {
                const shift = text.length
                let encoded = ""
                for (const symbol of text) {
                    const position_in_hash = (hash.indexOf(symbol) + shift + hash.length) % hash.length
                    encoded += hash.charAt(position_in_hash)
                }
                return encoded
            }


            $("#ctctct").replaceWith("<a class='contact' href='mailto:" + decode('GiCwZPBwGwoawBw7uiC') + "'>E-mail me<i class=\"fa fa-paper-plane-o\"></i></a>" +
                "<p>or use my vCard</p>" + "<img src='/site/images/vCard.png' width='140px' />");
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

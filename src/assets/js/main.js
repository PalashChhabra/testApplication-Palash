(function($) {
    "use strict";
    $(window).on('load', function() {
        $(".loader").fadeOut(1000);
    });
    $(document).ready(function() {
        $(window).on("scroll", function() {
            var header = $('header');
            var topmenu = $('.topbar');
            var windowheight = $(this).scrollTop();
            var menuheight = header.outerHeight();
            var firstlogo = $('.first-logo');
            var secondlogo = $('.second-logo');
            var topmenuheight = 0;
            if (topmenu.length) {
                var topmenuheight = topmenu.outerHeight();
            }
            var fixedheight = topmenuheight;
            if (header.length) {
                if ((windowheight > fixedheight) && header.hasClass("sticky-header")) {
                    header.addClass('header-fixed-top').delay(200);
                    if (!header.hasClass("transparent-header")) {
                        header.next("*").css("margin-top", menuheight);
                    }
                    if (header.hasClass("sticky-header")) {
                        header.addClass("scroll-header");
                    }
                    firstlogo.css("display", "none");
                    secondlogo.css("display", "block");
                } else {
                    header.removeClass("header-fixed-top");
                    if (!header.hasClass("transparent-header")) {
                        header.next("*").css("margin-top", "0");
                    }
                    if (header.hasClass("sticky-header")) {
                        header.removeClass("scroll-header");
                    }
                    if (!header.hasClass('mobile-header')) {
                        firstlogo.css("display", "block");
                        secondlogo.css("display", "none");
                    }
                }
            }
        });

        function mmenuInit() {
            var screenwidth = $(window).width();
            var header = $('header');
            var main_menu = $('#main-menu');
            var mobile_menu = $('#mobile-menu');
            var menu_toggler = $("#toggle-menu-button");
            var menubreakpoint = $('header').data("menutoggle");
            var dropdown = $('.dropdown');
            var biglogo = $('.big-logo');
            var mobilelogo = $('.mobile-logo');
            var menuside = 'right';
            if (screenwidth <= menubreakpoint) {
                $("#main-menu ul").clone().addClass("mmenu-init").prependTo(mobile_menu).removeAttr('id').removeClass('navbar-nav mx-auto').find('a').siblings('ul.dropdown-menu').removeAttr('class');
                header.addClass('mobile-header');
                header.removeClass('vertical-header , open-header');
                main_menu.css({
                    "display": "none"
                });
                biglogo.css({
                    "display": "none"
                });
                mobilelogo.css({
                    "display": "block"
                });
                mobile_menu.mmenu({
                    extensions: ['position-' + menuside, "fx-menu-slide", ],
                }, {
                    offCanvas: {
                        pageSelector: ".wrapper"
                    },
                    classNames: {
                        fixedElements: {
                            fixed: ['topbar', 'header', ]
                        }
                    }
                });
                var menu_API = mobile_menu.data("mmenu");
                menu_toggler.on("click", function() {
                    menu_API.open();
                    menu_API.close();
                });
                header.on("click", function() {
                    menu_API.close();
                });
                menu_API.bind("open:finish", function() {
                    setTimeout(function() {
                        menu_toggler.addClass("open");
                    });
                });
                menu_API.bind("close:finish", function() {
                    setTimeout(function() {
                        menu_toggler.removeClass("open");
                    });
                });
            } else {
                header.removeClass('mobile-header');
                main_menu.css({
                    "display": "block"
                });
                biglogo.css({
                    "display": "block"
                });
                mobilelogo.css({
                    "display": "none"
                });
                if (header.hasClass('vertical-header')) {
                    $('header').insertBefore('.wrapper');
                    $('header > div').removeClass('container');
                    if (header.hasClass('open-header')) {
                        $('body').addClass('has-vertical-header-open');
                        menu_toggler.css({
                            "display": "none"
                        });
                    } else {
                        $('body').addClass('has-vertical-header');
                    }
                    menu_toggler.on("click", function() {
                        header.toggleClass('open-header');
                        menu_toggler.toggleClass('open');
                        $('body').toggleClass('has-vertical-header-open');
                    });
                }
                dropdown.on({
                    mouseenter: function() {
                        $(this).addClass("open");
                    },
                    mouseleave: function() {
                        $(this).removeClass('open');
                        $('.submenu').removeClass('submenu-left');
                    }
                });
            }
            header.addClass("loaded-header");
        }
        mmenuInit();
        $(window).resize(function() {
            mmenuInit();
        });
        $(function() {
            var spinner = $('.spinner');
            var spinnerplus = $('.spinner .btn:first-of-type')
            var spinnerminus = $('.spinner .btn:last-of-type');
            $(spinnerplus).on('click', function() {
                var btn = $(this);
                var input = btn.closest(spinner).find('input');
                if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {
                    input.val(parseInt(input.val(), 10) + 1, 10);
                } else {
                    btn.next("disabled", true);
                }
            });
            $(spinnerminus).on('click', function() {
                var btn = $(this);
                var input = btn.closest(spinner).find('input');
                if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {
                    input.val(parseInt(input.val(), 10) - 1, 10);
                } else {
                    btn.prev("disabled", true);
                }
            });
        })
        var disabledDates = function(date) {
            var formatted = date.format('DD/MM/YYYY');
            return ["20/04/2019", "24/04/2019"].indexOf(formatted) > -1;
        }
        $('.datepicker').daterangepicker({
            locale: {
                format: 'DD-MM-YYYY',
            },
            "startDate": moment(),
            "endDate": moment().add(5, 'day'),
            "minDate": moment(),
            "isInvalidDate": disabledDates
        }, function(start, end, label) {});
        $(".calendar.left .daterangepicker_input").before("<div class='calendar-title'>Arrival Date</div>");
        $(".calendar.right .daterangepicker_input").before("<div class='calendar-title'>Departure Date</div>");
        $('.panel-dropdown .guestspicker').on('click', function(event) {
            $('.panel-dropdown').toggleClass('active');
            event.preventDefault();
        });
        $(window).click(function() {
            $('.panel-dropdown').removeClass('active');
        });
        $('.panel-dropdown').on('click', function(event) {
            event.stopPropagation();
        });

        function guestsSum() {
            var arr = $('.booking-guests');
            var guests = 0;
            for (var i = 0; i < arr.length; i++) {
                if (parseInt(arr[i].value, 10))
                    guests += parseInt(arr[i].value, 10);
            }
            if (guests > 0) {
                var cardQty = document.querySelector(".gueststotal");
                cardQty.innerHTML = guests;
            }
        }
        guestsSum();
        $(function() {
            $(".plus, .minus").on("click", function() {
                var button = $(this);
                var oldValue = button.parent().find("input").val();
                if (button.hasClass('plus')) {
                    var newVal = parseFloat(oldValue) + 1;
                } else {
                    if (oldValue > 0) {
                        var newVal = parseFloat(oldValue) - 1;
                    } else {
                        newVal = 0;
                    }
                }
                button.parent().find("input").val(newVal);
                guestsSum();
            });
        });
        new WOW().init();
        $('[data-toggle="popover"]').popover({
            html: true,
            offset: '0 10px'
        });
        $('[data-toggle="tooltip"]').tooltip({
            animated: 'fade',
            container: 'body',
            offset: '0 5px'
        });
        $('select').selectpicker({
            style: 'btn-info',
            size: 8
        });
        var owl = $('.rooms-owl');
        owl.owlCarousel({
            loop: false,
            margin: 30,
            nav: true,
            dots: false,
            navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>", "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 3
                }
            }
        });
        var owl = $('.services-owl');
        owl.owlCarousel({
            thumbs: true,
            thumbsPrerendered: true,
            items: 1,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            loop: true,
            autoplay: true,
            dots: false,
            nav: false,
            mouseDrag: false,
        });
        if ($("#room-main-image").length) {
               let duration = 300;
            $("#room-main-image").owlCarousel({
                items: 1,
                dots: false,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                autoplay: true,
                mouseDrag: false
            }).on('changed.owl.carousel', function(e) {
                var syncedPosition = syncPosition(e.item.index);
                if (syncedPosition != "stayStill") {
                    $("#room-thumbs").trigger('to.owl.carousel', [syncedPosition, duration, true]);
                }
            });
            $("#room-thumbs").on('initialized.owl.carousel', function() {
                addClassCurrent(0);
            }).owlCarousel({
                dots: false,
                responsive: {
                    0: {
                        items: 4
                    },
                    600: {
                        items: 4
                    },
                    960: {
                        items: 5
                    },
                    1200: {
                        items: 6
                    }
                }
            }).on('click', '.owl-item', function() {
                $("#room-main-image").trigger('to.owl.carousel', [$(this).index(), duration, true]);
            });

            function addClassCurrent(index) {
                $("#room-thumbs").find(".owl-item").removeClass("active-item").eq(index).addClass("active-item");
            }

            function syncPosition(index) {
                addClassCurrent(index);
                var itemsNo = $("#room-thumbs").find(".owl-item").length;
                var visibleItemsNo = $("#room-thumbs").find(".owl-item.active").length;
                if (itemsNo === visibleItemsNo) {
                    return "stayStill";
                }
                var visibleCurrentIndex = $("#room-thumbs").find(".owl-item.active").index($("#room-thumbs").find(".owl-item.active-item"));
                if (visibleCurrentIndex == 0 && index != 0) {
                    return index - 1;
                }
                if (visibleCurrentIndex == (visibleItemsNo - 1) && index != (itemsNo - 1)) {
                    return index - visibleItemsNo + 2;
                }
                return "stayStill";
            }
        }
        if ($(".big-images").length) {
                let duration = 300;
            $(".big-images").owlCarousel({
                items: 1,
                dots: false,
            }).on('changed.owl.carousel', function(e) {
                var syncedPosition = syncPosition(e.item.index);
                if (syncedPosition != "stayStill") {
                    $('.thumbs').trigger('to.owl.carousel', [syncedPosition, duration, true]);
                }
            });
            $('.thumbs').on('initialized.owl.carousel', function() {
                addClassCurrent(0);
            }).owlCarousel({
                dots: false,
                margin: 10,
                responsive: {
                    0: {
                        items: 3
                    },
                    600: {
                        items: 3
                    },
                    960: {
                        items: 4
                    },
                    1200: {
                        items: 4
                    }
                }
            }).on('click', '.owl-item', function() {
                $(".big-images").trigger('to.owl.carousel', [$(this).index(), duration, true]);
            });

            function addClassCurrent(index) {
                $('.thumbs').find(".owl-item").removeClass("active-item").eq(index).addClass("active-item");
            }

            function syncPosition(index) {
                addClassCurrent(index);
                var itemsNo = $('.thumbs').find(".owl-item").length;
                var visibleItemsNo = $('.thumbs').find(".owl-item.active").length;
                if (itemsNo === visibleItemsNo) {
                    return "stayStill";
                }
                var visibleCurrentIndex = $('.thumbs').find(".owl-item.active").index($('.thumbs').find(".owl-item.active-item"));
                if (visibleCurrentIndex == 0 && index != 0) {
                    return index - 1;
                }
                if (visibleCurrentIndex == (visibleItemsNo - 1) && index != (itemsNo - 1)) {
                    return index - visibleItemsNo + 2;
                }
                return "stayStill";
            }
        }
        var amountScrolled = 500;
        var backtotop = $('.back-to-top');
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > amountScrolled) {
                backtotop.addClass('active');
            } else {
                backtotop.removeClass('active');
            }
        });
        backtotop.on('click', function() {
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            return false;
        });

        $("#booking-form").on('submit', function(e) {
            e.preventDefault();
            var booking_name = $("input[name=booking-name]").val();
            var booking_email = $("input[name=email]").val();
            var booking_phone = $("input[name=booking-phone]").val();
            var booking_roomtype = $("select[name=roomtype]").val();
            var booking_startdate = $("input[name=daterangepicker_start]").val();
            var booking_enddate = $("input[name=daterangepicker_end]").val();
            var booking_adults = $("input[name=booking-adults]").val();
            var booking_children = $("input[name=booking-children]").val();
            var booking_country = $("select[name=booking-country]").val();
            var booking_comments = $("textarea[name=booking-comments]").val();
            var output;
                var notification = $("#booking-notification");
                var bookingform = $("#booking-form");
                if(booking_email=='' || booking_roomtype=='' || booking_adults=='0') {
                    output = '<p class="notification-text">' + 'Please Enter Appropriate Details' + '</div>';
                    notification.addClass('scale-out error');
                    notification.removeClass('success');
                    bookingform.addClass("booking-notification-open");
                } else {
                    output = '<p class="notification-text">' + 'Request Submitted' + '</div>';
                    notification.addClass('scale-out success');
                    notification.removeClass('error');
                    $('input,textarea').val('');
                    $('.gueststotal').text('');
                    $("input.booking-guests").val('0');
                    $('select').val('');
                    $('select').val('').selectpicker('refresh');
                    $('.datepicker').daterangepicker({
                        locale: {
                            format: 'DD-MM-YYYY',
                        },
                        "startDate": moment(),
                        "endDate": moment().add(5, 'day'),
                        "minDate": moment(),
                        "isInvalidDate": disabledDates
                    }, function(start, end, label) {});
                }
                notification.html(output);
                notification.delay(15000).queue(function(next) {
                    $(this).removeClass("scale-out");
                    bookingform.removeClass("booking-notification-open");
                    next();
                });
                notification.on("click", function() {
                    $(this).removeClass("scale-out");
                    bookingform.removeClass("booking-notification-open");
                });
                $('#booking-form .form-control, #booking-form .bootstrap-select button, #booking-form .guestspicker').on("click", function() {
                    notification.removeClass("scale-out");
                    bookingform.removeClass("booking-notification-open");
                });
        });
    });
})(jQuery);
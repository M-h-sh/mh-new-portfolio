(function ($) {
    'use strict';

    $(document).ready(function () {
        // main elements
        var $body = $('body');
        var $win = $(window);

        // remove page load screen on load
        $win.on('load', function () {
            $('#pageLoad')
                .remove();
        });

        // scroll to top  
        $win.scroll(function () {
            if ($(this).scrollTop() > 1000) {
                $('#scroll-to-top').fadeIn();
            } else {
                $('#scroll-to-top').fadeOut();
            }
        });

        $('#scroll-to-top').click(function () {
            $("html, body").animate({
                scrollTop: 0
            }, 600);
            return false;
        });

        // initialize WOW animation
        new WOW()
            .init();

        // sticky header setup
        $win.scroll(function () {
            if ($(this).scrollTop() > 42) {
                $('#waituk-main-header').addClass("sticky-nav");
            } else {
                $('#waituk-main-header').removeClass("sticky-nav");
            }
        });

        // owl carousel slide set up
        $(".group-slide").owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            items: 1,
            nav: false,
            navText: ['<span class="icon-angle-left"></span>', '<span class="icon-angle-right"></span>'],
            responsive: {
                767: {
                    items: 2,
                    nav: false,
                },
                991: {
                    items: 3,
                    nav: true,
                    loop: false,
                }
            }
        });

        // Full Width No Gutter Owl Slider
        $("#waituk-owl-slide-1").owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            items: 1,
            nav: false,
            dots: true,
            responsive: {
                767: {
                    items: 3,
                    nav: false,
                },
                991: {
                    items: 4,
                    nav: false,
                    loop: false,
                }
            }
        });

        // Single Owl Slider
        $("#waituk-owl-slide-2").owlCarousel({
            loop: true,
            responsiveClass: true,
            items: 1,
            nav: false,
            navText: ['<span class="icon-angle-left"></span>', '<span class="icon-angle-right"></span>'],
            dots: false,
            autoplay: true,
            responsive: {
                768: {
                    nav: false
                },
                992: {
                    nav: true,
                    loop: false
                }
            }
        });

        // Testimonial Owl Slider
        $("#waituk-owl-slide-3").owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            items: 1,
            nav: false,
            center: true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            navText: ['<span class="icon-angle-left"></span>', '<span class="icon-angle-right"></span>'],
            smartSpeed: 450,
            responsive: {
                768: {
                    items: 3,
                    nav: false
                },
                1024: {
                    items: 3,
                    nav: true
                }
            }
        });

        // Partner Logo Owl Slider
        $("#waituk-owl-slide-4").owlCarousel({
            loop: true,
            margin: 76,
            autoplay: true,
            autoplayTimeout: 5000,
            responsiveClass: true,
            items: 2,
            nav: false,
            responsive: {
                768: {
                    items: 3
                },
                1024: {
                    items: 6
                }
            }
        });

        // Counter Section
        var $counter = $('.number');
        if ($counter.length) {
            $counter.counterUp({
                delay: 10,
                time: 2000
            });
        }

        // Image Resize on Window Resize
        $('.bg-stretch').each(function () {
            ImageStretcher.add({
                container: this,
                image: 'img'
            });
        });

        // Rating plugin setup 
        $(function () {

            $("#rateYo").rateYo({
                rating: 3.6
            });
            // Multi color Rating plugin setup 
            $("#rateYo-multi").rateYo({

                rating: 1.6,
                spacing: "5px",
                multiColor: {}
            });
            // More Numbers Rating plugin setup  
            $("#rateYo-more").rateYo({
                numStars: 10
            });
            // Single Rating plugin setup  
            $("#rateYo-single").rateYo({
                maxValue: 1,
                numStars: 1,
                starWidth: "40px"
            });
            // small Rating plugin setup 
            $("#rateYo-small, #rateYo-small1, #rateYo-small2").rateYo({
                rating: 3.5,
                spacing: "2px",
                starWidth: "15px"
            });
        });

        // date time picker plugin setup  
        $(function () {
            $('.datepicker-text-input').datepicker();
            $('.input-daterange').datepicker();
            $('.embeded div').datepicker({
                todayHighlight: true
            });

        });

        // Progressbar animation  
        $(function () {
            $('.progress .progress-bar').css("width",
                function () {
                    return $(this).attr("aria-valuenow") + "%";
                }
            )
        });
        // Progressbar animation  
        $(function () {
            // With JQuery
            $('#ex1, #ex2').slider({
                formatter: function (value) {
                    return 'Current value: ' + value;
                }
            });
            $("#ex3").slider({});
            $("#ex4").slider({
                ticks: [0, 100, 200, 300, 400],
                ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
                ticks_snap_bounds: 30
            });
            $("#ex5").slider({
                min: 0,
                max: 10,
                value: 0,
                orientation: 'vertical',
                tooltip_position: 'left'
            });

        });

        // Range Slider  
        $(function () {
            $('#ex1, #ex2').slider({
                formatter: function (value) {
                    return 'Current value: ' + value;
                }
            });
            $("#ex3").slider({});
            $("#ex4").slider({
                ticks: [0, 100, 200, 300, 400],
                ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
                ticks_snap_bounds: 30
            });
            $("#ex5").slider({
                min: 0,
                max: 10,
                value: 0,
                orientation: 'vertical',
                tooltip_position: 'left'
            });

        });

        // select picker  
        $(function () {
            $('.selectpicker').selectpicker();

        });

        /**
         * search screen plugin
         * @param {object} options
         */
        function Search(options) {
            this.options = $.extend({
                container: null,
                hideOnClickOutside: false,
                menuActiveClass: 'nav-active',
                menuOpener: '.nav-opener',
                menuDrop: '.nav-drop',
                toggleEvent: 'click.search',
                outsideClickEvent: 'click.search touchstart.search pointerdown.search MSPointerDown.search'
            }, options);
            this.initStructure();
            this.attachEvents();
        }

        Search.prototype = {
            initStructure: function () {
                this.page = $('html');
                this.container = $(this.options.container);
                this.opener = this.container.find(this.options.menuOpener);
                this.drop = this.container.find(this.options.menuDrop);
            },
            attachEvents: function () {
                var self = this;
                if (activateResizeHandler) {
                    activateResizeHandler();
                    activateResizeHandler = null;
                }
                this.outsideClickHandler = function (e) {
                    if (self.isOpened()) {
                        var target = $(e.target);
                        if (!target.closest(self.opener)
                            .length && !target.closest(self.drop)
                                .length) {
                            self.hide();
                        }
                    }
                };
                this.openerClickHandler = function (e) {
                    e.preventDefault();
                    self.toggle();
                };
                this.opener.on(this.options.toggleEvent, this.openerClickHandler);
            },
            isOpened: function () {
                return this.container.hasClass(this.options.menuActiveClass);
            },
            show: function () {
                this.container.addClass(this.options.menuActiveClass);
                if (this.options.hideOnClickOutside) {
                    this.page.on(this.options.outsideClickEvent,
                        this.outsideClickHandler);
                }
            },
            hide: function () {
                this.container.removeClass(this.options.menuActiveClass);
                if (this.options.hideOnClickOutside) {
                    this.page.off(this.options.outsideClickEvent,
                        this.outsideClickHandler);
                }
            },
            toggle: function () {
                if (this.isOpened()) {
                    this.hide();
                } else {
                    this.show();
                }
            },
            destroy: function () {
                this.container.removeClass(this.options.menuActiveClass);
                this.opener.off(this.options.toggleEvent, this.clickHandler);
                this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
            }
        };

        var activateResizeHandler = function () {
            var win = $win,
                doc = $('html'),
                resizeClass = 'resize-active',
                flag, timer;
            var removeClassHandler = function () {
                flag = false;
                doc.removeClass(resizeClass);
            };
            var resizeHandler = function () {
                if (!flag) {
                    flag = true;
                    doc.addClass(resizeClass);
                }
                clearTimeout(timer);
                timer = setTimeout(removeClassHandler, 500);
            };
            win.on('resize orientationchange', resizeHandler);
        };

        $.fn.search = function (options) {
            return this.each(function () {
                var params = $.extend({}, options, {
                    container: this
                }),
                    instance = new Search(params);
                $.data(this, 'Search', instance);
            });
        };

        // apply search plugin
        $body.search({
            hideOnClickOutside: true,
            menuActiveClass: 'search-active',
            menuOpener: '.nav-search-link',
            menuDrop: '.holder'
        });

        // side Panel
        $body.search({
            hideOnClickOutside: true,
            menuActiveClass: 'nav-active',
            menuOpener: '.nav-trigger a',
            menuDrop: '.nav-wrap'
        });


        // Map Holder disable scroll on wheel
        $('.map-holder')
            .click(function () {
                $(this).find('iframe').addClass('clicked')
            })
            .mouseleave(function () {
                $(this).find('iframe').removeClass('clicked')
            });

        // ripple effect for button
        var $ripple = $('.js-ripple');

        $ripple.on('click.ui.ripple', function (e) {

            var $this = $(this);
            var $offset = $this.parent().offset();
            var $circle = $this.find('.c-ripple__circle');

            var x = e.pageX - $offset.left;
            var y = e.pageY - $offset.top;

            $circle.css({
                top: y + 'px',
                left: x + 'px'
            });

            $this.addClass('is-active');

        });

        $ripple.on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', function () {
            $(this).removeClass('is-active');
        });

    });

}(jQuery));

// Numbers counter
$(window).scroll(function () {
    var a = 0;
    var oTop = $('#counter').offset().top - window.innerHeight;
    // console.log($('#counter').offset().top);
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        a = 1;
    }
});

//Filterable Gallery 2
$('.js-filter').on('click', function () {

    var $color = $(this).attr('data-filter');

    if ($color == 'all') {
        $('.js-filterable').removeClass('is-hidden active');
    } else {
        $('.js-filterable').addClass('is-hidden active');
        $('.js-filterable[data-filter=' + $color + ']').removeClass('is-hidden');
    }
});

//Filters add active class 

const listItems = document.querySelectorAll('.filters__item');
let activeListItem = null;

listItems.forEach((item) => {
    item.addEventListener('click', () => {
        if (activeListItem) {
            activeListItem.classList.remove('active');
        }
        item.classList.add('active');
        activeListItem = item;
    });
});

//Preloader to close on mobile fix
function hideLoader() {
    $('.preloader').fadeOut('slow');
}

//Bootstrap 5 navbar to automatically close when using scrollspy
$('.nav-link').click(function () {
    $('.navbar-toggler').click();
});
   

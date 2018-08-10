
var animate, scale;
animate = (function (_this) {
    return function (element, delay) {
        var func;
        if (element) {
            func = function (entries) {
                return entries.forEach(function (e) {
                    if (e.intersectionRatio > 0.9) {
                        return setTimeout(function () {
                            return $(element).addClass('animate');
                        }, delay);
                    }
                });
            };
            return (new IntersectionObserver(func, {
                rootMargin: '0px',
                threshold: 1.0
            })).observe(element);
        }
    };
})(this);

$('.navbar-nav .nav-link').click(function(){
    setTimeout(function () {
        return $('.section_welcome .iphone').addClass('animate');
        }, 200);
    animate($('.section_automate .flag')[0], 500);
    animate($('.diagram.openrates .messenger')[0], 500);
    animate($('.diagram.openrates .mail')[0], 1000);
    animate($('.diagram.click .messenger')[0], 1500);
    animate($('.diagram.click .mail')[0], 2000);
});

var App = (function () {
        var self = this;
        this.module_name = 'App';
        var animate, scale;
        $((function (_this) {
            return function () {
                if ($('html').width() >= 544) {
                    $(window).load(function () {
                        return window.requestAnimationFrame(function () {
                            return setTimeout(function () {
                                return $('.section_welcome .iphone').addClass('animate');
                            }, 200);
                        });
                    });
                } else {
                        $('.section_welcome .iphone .phone').css({
                            'transition': 'none',
                            'opacity': 1,
                            'transform': 'translateY(0) translateZ(1px)'
                        });
                        $('.navbar.navbar-light.navbar-expand-lg').removeClass('fixed-top');

                }
                    animate($('.section_automate .flag')[0], 500);
                    animate($('.diagram.openrates .messenger')[0], 500);
                    animate($('.diagram.openrates .mail')[0], 1000);
                    animate($('.diagram.click .messenger')[0], 1500);
                    animate($('.diagram.click .mail')[0], 2000);
                    if ($('html').width() < 544) {
                        animate($('.facts .item.users')[0], 800);
                        animate($('.facts .item.average')[0], 800);
                        animate($('.facts .item.ctr')[0], 1200);
                    } else {
                        animate($('.facts .item.users')[0], 2500);
                        animate($('.facts .item.average')[0], 3000);
                        animate($('.facts .item.ctr')[0], 3500);
                    }
                    if ($('html').width() < 544) {
                        animate($('.section_templates>.overflow')[0], 0);
                        return animate($('.section_clients>.overflow')[0], 0);
                    }
            };
        })(this));

        $((function (_this) {
            return function () {
                return $(window).scroll(function () {
                  var all, avail, dy, result, scrollTop, st;
                  scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
                  dy = -128 * scrollTop / screen.availHeight;
                  $('.iphone .appicon').css('transform', 'translateY(' + dy + 'px)');
                  if(location.pathname === '/' || location.pathname.indexOf('index.html') !== -1) {
                      st = scrollTop;
                      all = $('html')[0].scrollHeight;
                      avail = screen.availHeight;
                      result = 1;
                      if(st < 400) {
                          result = 0;
                      }
                      if(st >= 400 && st < 600) {
                          result = (st - 400) / 200;
                      }
                      if((all - st -avail) > 400 && (all - st - avail) < 600) {
                          result = (all - st - avail - 400) / 200;
                      }
                      if((all - st - avail) < 400) {
                          result = 0;
                      }
                      $('.btn-button.mobilefacebook').css('opacity', result);
                  } else {
                      st = scrollTop;
                      all = $('html')[0].scrollHeight;
                      avail = screen.availHeight;
                      result = 1;
                      if(st < 400) {
                          result = 0;
                      }
                      if(st >= 400 && st < 600) {
                          result = (st - 400) / 200;
                      }
                      if ((all - st - avail) > 400 && (all - st - avail) < 600) {
                          result = 1;
                      }
                      if ((all - st - avail) < 400) {
                          result = 1;
                      }
                      $('.btn-button.mobilefacebook').css('opacity', result);
                  }
                  return true;
               });
            };
        })(this));

        animate = (function (_this) {
            return function (element, delay) {
                var func;
                if (element) {
                    func = function (entries) {
                        return entries.forEach(function (e) {
                            if (e.intersectionRatio > 0.9) {
                                return setTimeout(function () {
                                    return $(element).addClass('animate');
                                }, delay);
                            }
                        });
                    };
                    return (new IntersectionObserver(func, {
                        rootMargin: '0px',
                        threshold: 1.0
                    })).observe(element);
                }
            };
        })(this);

        scale = (function (_this) {
            return function () {
                var s, w;
                w = $('html').width();
                if (w < 1024) {
                    if (w < 544) {
                        s = w / 320;
                        return $('.scale').css('transform', 'scale(' + s + ')');
                    } else {
                        s = w / 1024;
                        return $('.scale').css('transform', 'scale(' + s + ')');
                    }
                } else {
                    return $('.scale').css('transform', '');
                }
            }
        })(this);

        $(window).resize((function (_this) {
            return function () {
                var w = $('html').width();
                if(w < 996) {
                    $('.navbar.navbar-light.navbar-expand-lg').removeClass('fixed-top');
                }else {
                    var check = $('.navbar.navbar-light.navbar-expand-lg').hasClass('fixed-top');
                    if(!check) $('.navbar.navbar-light.navbar-expand-lg').addClass('fixed-top');
                }
                return scale();
            };
        })(this));

        $((function (_this) {
            return function () {
                return scale();
            }
        })(this));


        $((function (_this) {
            var overlay = $('.overlay');
            var mainPopUp = $('.main-popup');
            var signIn = $('#sign-in');
            var register = $('#register');
            var formSignIn = $('form.sign-in');
            var formRegister = $('form.register');

            $('.btn-sign').on('click', function () {
               overlay.addClass('visible');
               mainPopUp.addClass('visible');
               signIn.addClass('active');
               register.removeClass('active');
               formRegister.removeClass('move-left');
               formSignIn.removeClass('move-left');
            });

            overlay.on('click', function () {
               $(this).removeClass('visible');
               mainPopUp.removeClass('visible');
            });

            $('#popup-close-button a').on('click', function (e) {
                e.preventDefault();
                overlay.removeClass('visible');
                mainPopUp.removeClass('visible');
            });

            signIn.on('click', function () {
                signIn.addClass('active');
                register.removeClass('active');
                formSignIn.removeClass('move-left');
                formRegister.removeClass('move-left');
            });

            register.on('click', function(){
                signIn.removeClass('active');
                register.addClass('active');
                formSignIn.addClass('move-left');
                formRegister.addClass('move-left');
            });

            $('input').on('submit', function(e){
                e.preventDefault(); //used to prevent submission of form...remove for real use
            });

        })(this));return this}).call(App || {});
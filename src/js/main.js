window.onload = function() {
    ////////////////  mobile--menu  /////////////
    $('.menu__icon-btn').on('click', function() {
        $('.navigation__menu').slideToggle(500);
        $('.menu__list').css({
            'display': 'flex', 'flex-direction': 'column'
        });
        if($('.menu__icon-btn').html() == '<i class="fas fa-bars"></i>') {
            $(this).html('<i class="fas fa-times"></i>')
        }else {
            $(this).html('<i class="fas fa-bars"></i>')
        }
    });

    ////////////////// tabs ////////////////////////
    let jsTriggers = document.querySelectorAll('.js-btn');

    jsTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            let id = this.getAttribute('data-filter'),
                content = document.querySelector('.js-tab-content[data-filter="'+id+'"]'),
                activeTrigger = document.querySelector('.js-btn.active'),
                activeContent = document.querySelector('.js-tab-content.active-content');

            activeTrigger.classList.remove('active');
            trigger.classList.add('active');

            activeContent.classList.remove('active-content');
            content.classList.add('active-content');
        });
    });

    ////////////// добавление инпута по клику вместо иконки search/////////////////////////
    let iconSearch = document.getElementById('fa-search');
    let input = document.getElementById('search');
    iconSearch.onclick = function() {
        this.style.opacity = 0;
        input.style.opacity = 1;
        input.focus();

        input.onblur = function() {
            iconSearch.style.opacity = 1;
            input.style.opacity = 0;
            input.value = '';
        };
    };

    ///////////////////////// плавная прокрутка элементов к якорю  //////////////////////////////
    $('.menu__list li a').on('click', function () {
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 2000);
        return false;
    });


    /////////////////////  кнопка наверх ///////////////////////////
    $(window).on('scroll', function () {
        if($(this).scrollTop() > 800) {  // если прокрутка больше 800
            $('#toTop').fadeIn(); //  показать  кнопку
        } else  {
            $('#toTop').fadeOut();
        } // убрать  кнопку
    });

    ////////////////////  при клике на кнопку     /////////////////
    $('#toTop').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        },1000);
    });



    /////////////// parallax  image  ////////////////////
    const parallax = () => {
        let wScroll = $(window).scrollTop(); // записываем в переменную  прокрутку сверху
        $('.parallax--bg').css('background-position', 'center ' + (wScroll *0.75) + 'px'); //прокручиваем картинку по х: center | y = (wScroll *0.75);
    };

    $(window).scroll(() => {  // при прокрутке вызываем функцию parallax
        parallax();

        if ($(window).scrollTop()>750 ) { //  если есть прокрутка
             $(".header").addClass('active-header');  //  добавляем класс
        }
        else { $(".header").removeClass('active-header'); }  // удаляем класс
    });


   ///////  settings  for   plugin   slick - slider - js //////////
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style',

        responsive: [{

            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });


    ///////////// intialize  plugin   lax.js  /////////////////
        lax.setup(); // init

        const updateLax = () => {
            lax.update(window.scrollY);
            window.requestAnimationFrame(updateLax);
        };
        window.requestAnimationFrame(updateLax);

    ////////////  initialize  plugin  wow - js ///////////////////////
        new WOW().init();
};
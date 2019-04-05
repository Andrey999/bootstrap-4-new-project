window.onload = function() {
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

    /////////////// parallax  image  ////////////////////
    const parallax = () => {
        let wScroll = $(window).scrollTop(); // записываем в переменную  прокрутку сверху
        $('.parallax--bg').css('background-position', 'center ' + (wScroll *0.75) + 'px'); //прокручиваем картинку по х: center | y = (wScroll *0.75);
    };

    $(window).scroll(() => {  // при прокрутке вызываем функцию parallax
        parallax();

        if ($(window).scrollTop()) { //  если есть прокрутка
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
        dotsClass: 'dots-style'
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







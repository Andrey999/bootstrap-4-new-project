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

 


   ///////  settings  for  slick - slider  //////////
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        dotsClass: 'dots-style'
    });



};







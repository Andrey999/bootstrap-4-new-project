window.onload = function() {
    var jsTriggers = document.querySelectorAll('.js-btn');

    jsTriggers.forEach(function(trigger) {
        trigger.addEventListener('click', function() {
            var id = this.getAttribute('data-filter'),
                content = document.querySelector('.js-tab-content[data-filter="'+id+'"]'),
                activeTrigger = document.querySelector('.js-btn.active'),
                activeContent = document.querySelector('.js-tab-content.active-content');

            activeTrigger.classList.remove('active');
            trigger.classList.add('active');

            activeContent.classList.remove('active-content');
            content.classList.add('active-content');
        });
    });
};



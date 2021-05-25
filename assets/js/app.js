$(document).ready(function(){
    const toggler = document.getElementById('toggler');
    const navlinks = document.querySelector('.navbar__links');


    $(".owl-carousel").owlCarousel({
        items:1,
        loop: true,
        autoplay: true
    });

    toggler.addEventListener('click', e => {
        navlinks.classList.toggle('active');
        // toggler.classList.toggle('vortex');
    })

    // scroll magic
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({triggerElement: "#solutions"})
					.setClassToggle("#navbar", "scroll") // add class toggle
					.addTo(controller);
    
    new ScrollMagic.Scene({triggerElement: "#portfolio"})
					.setClassToggle("#navbar", "scroll") // add class toggle
					.addTo(controller);
    new ScrollMagic.Scene({triggerElement: "#brief"})
					.setClassToggle("#navbar", "scroll") // add class toggle
					.addTo(controller);
    AOS.init({
        duration: 1000,
        easing: "ease-out",
    });
});
$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        300:{
            items:2
        },
        600:{
            items:3
        },
        800:{
            items:4
        },
        1000:{
            items:5
        }
    }
})

$('#wanda').click(function(){
    document.getElementById("info").className = "info5"
    document.getElementById("info2").className = "filme-info2"
});

$('#fsi').click(function(){
    document.getElementById("info2").className = "info5"
    document.getElementById("info").className = "filme-info"
});
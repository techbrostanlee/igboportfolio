const styleSwitcherToggler = document.querySelector('.style-switcher-toggler');
styleSwitcherToggler.addEventListener('click', () =>{
    document.querySelector('.style-switcher').classList.toggle('open');

});

//hid style switcher on scroll
window.addEventListener('scroll',() => {
    if(document.querySelector('.style-switcher').classList.contains('open'))
    {
        document.querySelector('.style-switcher').classList.remove('open');
    }
} )

/*theme color */
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled');
        }
        else{
            style.setAttribute('disabled', 'true');
        }
    })
}

/*theme light and dark */
const dayNight = document.querySelector('.day-night');
dayNight.addEventListener('click', () => {
    dayNight.querySelector('i').classList.toggle('fa-sun');
    dayNight.querySelector('i').classList.toggle('fa-moon');
    document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
    if (document.body.classList.contains('dark')){
        dayNight.querySelector('i').classList.add('fa-sun');
    }
    else{
        dayNight.querySelector('i').classList.add('fa-moon');
    }
})


/*typing*/
var typed = new Typed('.typing', {
	strings: ['Web Developer','Freelancer','Youtuber','Digital Marketer'],
	typeSpeed: 150,
	backSpeed: 150, 
	loop: true
})
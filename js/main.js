const sections = document.querySelectorAll('section[ID]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
            const sectionId = current.getAttribute('id');

            if(scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*='+sectionId+']').classList.add('active__link');
            } else {
                document.querySelector('.nav__menu a[href*='+sectionId+']').classList.remove('active__link');
            }
    });
}

window.addEventListener('scroll', scrollActive);
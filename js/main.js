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
// Theme
const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const slider = document.getElementById('btheme');

const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

slider.addEventListener('click', ()  => {
    let switchToTheme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    setTheme(switchToTheme);
});

setTheme(localStorage.getItem('theme') || preferedColorScheme);
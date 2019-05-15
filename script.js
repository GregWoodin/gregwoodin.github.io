const headerResize = function(){
    const header = document.querySelector('.header');
    const headerContent = header.querySelector('.header__content');
    const headerTitle = header.querySelector('.header__branding');
    let prevScrollPos = window.pageYOffset;

    window.addEventListener('scroll', () => {
        if (window.innerWidth > 1060){
            if (window.scrollY > 50){
                headerContent.classList.add("header__content--shrink");
                headerTitle.classList.add("header__branding--shrink");
            } else if (window.scrollY < 50){
                headerContent.classList.remove("header__content--shrink");
                headerTitle.classList.remove("header__branding--shrink");
            }
        }

        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos < 500){
            return;
        }
        if (prevScrollPos > currentScrollPos){
            header.classList.remove("header--hidden");
        } else {
            header.classList.add("header--hidden");
        }
        prevScrollPos = currentScrollPos;

    })
}();

const awardsScroller = function(){
    const awardYears = document.querySelectorAll('.awards__year');
    const awardsContent = document.querySelector('.awards__list');
    const scrollHeight = document.querySelector('.awards__inner').clientHeight;
    let lastSelection = 0

    for (let i = 0; i < awardYears.length; i++){
        awardYears[i].addEventListener("click", () =>{
            awardYears[lastSelection].classList.remove('awards__year--active');
            awardYears[i].classList.add('awards__year--active');
            lastSelection = i;

            awardsContent.style.transform = "translateY(" + -i*scrollHeight + "px";
        });
    }
}();

const mobileMenuToggle = function(){
	const hamburgerBtn = document.querySelector('#nav__hamburger');
    const nav = document.querySelector('.nav');
    const navItems = nav.querySelectorAll('.nav__item');
		hamburgerBtn.addEventListener('click', function(){
            hamburgerBtn.classList.toggle('is-active');
            nav.classList.toggle('nav--active'); 
            navItems.forEach(item => {
                item.classList.toggle('nav__item--active');
            });
        });

        navItems.forEach(item => item.addEventListener("click", () =>{
            nav.classList.remove('nav--active');
            navItems.forEach(navItem => navItem.classList.remove('nav__item--active'));
            hamburgerBtn.classList.remove('is-active');
        }));
    
}();

const scrollReveal = function(){
    const sections = document.querySelectorAll('section:not(:first-child');
    sections.forEach(section => section.classList.add('hidden'));

    const isInViewport = (elem) => {
        return elem.top <= window.innerHeight;
    }

    window.addEventListener("scroll", () =>{
        sections.forEach(section => {
            if (isInViewport(section.getBoundingClientRect())){
                section.classList.add('visible');
                section.classList.remove('hidden');
            }
        })
    })
}();
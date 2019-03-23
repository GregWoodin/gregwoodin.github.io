
// ----- AWARDS YEAR SORTING ----- //

let awardsYear = document.querySelectorAll('.awards-year');
let awardsContent = document.querySelector('.awards-content-inner-container');
let lastYear = 0;
for(let i = 0; i < awardsYear.length; i++){
    awardsYear[i].addEventListener("click", () =>{
        awardsYear[lastYear].classList.remove('active-year');
        awardsYear[i].classList.add('active-year');
        lastYear = i;

        awardsContent.style.transform = "translateY(" + -i*400 + "px)";
    });
}

// ----- HAMBURGER MENU ----- //

function mobileMenuToggle(){
	let hamburgerMenu = document.getElementById('hamburger-menu');
	let mobileMenu = document.querySelector('nav');
		hamburgerMenu.addEventListener('click', function(){
			if (hamburgerMenu.classList.contains('is-active')){
				hamburgerMenu.classList.remove('is-active');
                mobileMenu.style.width = 0;
                hamburgerMenu.style.left = "0";

			} else {
                hamburgerMenu.classList.add('is-active');
                
                if (document.querySelector('body').clientWidth > 601){
                    hamburgerMenu.style.left = "30px";
                }
                mobileMenu.style.width = '200px';
                let sidemenuItems = document.querySelectorAll('nav ul li');
                sidemenuItems.forEach(item => item.addEventListener("click", () =>{
                    hamburgerMenu.classList.remove('is-active');
				    mobileMenu.style.width = 0;
                }));
			}
		});
};
mobileMenuToggle();

// ----- DYNAMIC MAIN START POINT ----- //
function setWelcomeSectionHeight(){
	let headerHeight = document.querySelector('header').clientHeight;
	document.querySelector('main').style.paddingTop = headerHeight + "px";
}
setWelcomeSectionHeight();

function fixNavBug () {
    window.addEventListener('resize', () =>{
        if (document.querySelector('body').clientWidth > 920){
            document.querySelector('nav').style.width = "auto";
        }
        if (document.querySelector('body').clientWidth < 920){
            document.querySelector('nav').style.width = "0";
        }
    })
}

fixNavBug();

// ----- SCROLL VISIBILITY FUNCTION ----- //

window.addEventListener('scroll', function() {
    console.log(window.scrollY);
	let triggeredHonors;
    if(window.scrollY > 50 && triggeredHonors !== true) {
        document.querySelector('#awards').style.opacity = "1";
        triggeredHonors = true;
    }
    if (window.scrollY > 50){
        document.querySelector('header').classList.add("header-shrink");
        document.querySelector('.header-content').classList.add("header-content-shrink");
        document.querySelector('h1').classList.add("h1-shrink");
        //setWelcomeSectionHeight();
    }
    if (window.scrollY < 50){
        document.querySelector('header').classList.remove("header-shrink");
        document.querySelector('.header-content').classList.remove("header-content-shrink");
        document.querySelector('h1').classList.remove("h1-shrink");
        console.log("Hello");
        //setWelcomeSectionHeight();
    }
        
});


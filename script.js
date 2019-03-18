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

			} else {
				hamburgerMenu.classList.add('is-active');
                mobileMenu.style.width = '200px';
			}
		});
};

mobileMenuToggle();

window.addEventListener('scroll', function() {
	let triggeredHonors;
    if(window.scrollY > 150 && triggeredHonors !== true) {
        document.querySelector('#awards').style.opacity = "1";
        triggeredHonors = true;
    }

});
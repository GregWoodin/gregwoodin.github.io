
// ----- AWARDS YEAR SORTING ----- //
function awardsScroller(){
    let awardsYear = document.querySelectorAll('.awards-year');
    let awardsContent = document.querySelector('.awards-content-inner-container');
    let lastYear = 0;
    for(let i = 0; i < awardsYear.length; i++){
        awardsYear[i].addEventListener("click", () =>{
            awardsYear[lastYear].classList.remove('active-year');
            awardsYear[i].classList.add('active-year');
            lastYear = i;

            awardsContent.style.transform = "translateY(" + -i*600 + "px)";
        });
    }
}
awardsScroller();

// ----- HAMBURGER MENU ----- //

function mobileMenuToggle(){
	let hamburgerMenu = document.getElementById('hamburger-menu');
	let mobileMenu = document.querySelector('nav');
		hamburgerMenu.addEventListener('click', function(){
			if (hamburgerMenu.classList.contains('is-active')){
				hamburgerMenu.classList.remove('is-active');
                mobileMenu.style.width = 0;
                hamburgerMenu.style.left = "0";
                hamburgerMenu.style.backgroundColor = "#CFE6E0"

			} else {
                hamburgerMenu.classList.add('is-active');
                hamburgerMenu.style.backgroundColor = "transparent"
                mobileMenu.style.width = '200px';
                
                //- Moves icon on wide screens
                if (document.querySelector('body').clientWidth > 601){
                    hamburgerMenu.style.left = "30px";
                }
                

                //- Closes menu if an navigation item is clicked
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
    //console.log(window.scrollY);
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
        //setWelcomeSectionHeight();
    }
        
});

//----- HIDE NAV ON SCROLL DOWN, SHOW ON SCROLL UP -----//

function scrollHide () {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = function(){
        let currentScrollPos = window.pageYOffset;
        if (currentScrollPos < 500){
            return false;
        }
        if (prevScrollPos > currentScrollPos) {
            document.querySelector("header").classList.remove('hide-header');
          } else {
            document.getElementById("header").classList.add('hide-header');
          }
          prevScrollPos = currentScrollPos;
        }
    
}

scrollHide();

//----- OPEN EXPANDED INFO ABOUT PUBLICATIONS ----- //

function expandPublications(){
    const publicationItems = document.querySelectorAll('.publication-item');
    const publicationExpanded = document.querySelectorAll('.expanded-publication');
    for (let i = 0; i < publicationItems.length; i ++){
        publicationItems[i].addEventListener("mouseenter", () =>{
            publicationExpanded[i].classList.add('expanded-active');

            publicationItems[i].addEventListener("mouseleave", () =>{
                publicationExpanded[i].classList.remove('expanded-active');
            })
        })

        
    }
}

expandPublications();

//----- EXPAND CONTACT ME -----//
document.querySelector('#contact-btn').addEventListener("click", (e) => {
    let contactExpanded = document.querySelector('.contact-expanded');
    console.log(contactExpanded);
    contactExpanded.classList.toggle('contact-expanded-active');
    console.log(contactExpanded.classList);
});


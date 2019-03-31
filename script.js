
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
            let scrollHeight = document.querySelector('.awards-content-inner').clientHeight;
            console.log(scrollHeight);

            awardsContent.style.transform = "translateY(" + -i*scrollHeight + "px)";
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

window.addEventListener("resize", () =>{
    setWelcomeSectionHeight();
});

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
// --- SET SECTIONS TO OPACITY: 0 --- //
function invisibleSections(){
    const invisSections = document.querySelectorAll('main>section:not(:first-child');
    invisSections.forEach(section => {
        section.classList.add('invisible');
    });
}

invisibleSections();
// ----- SCROLL VISIBILITY FUNCTION ----- //
function scrollFunction(){
    const sections = document.querySelectorAll('main>section:not(:first-child');
    
    let isInViewport = function (elem){
        return (
            elem.top <= window.innerHeight
        );
    };
    
    

    window.addEventListener('scroll', function() {
        let sectionObj = [];
        sections.forEach(section => sectionObj.push({
            "section": section,
            "bounding": section.getBoundingClientRect()
        }));

        sectionObj.forEach(section => {
            if (isInViewport(section.bounding)){
                section.section.classList.add('visible');
            }
        });

        if (window.scrollY > 50){
            document.querySelector('header').classList.add("header-shrink");
            document.querySelector('.header-content').classList.add("header-content-shrink");
            document.querySelector('h1').classList.add("h1-shrink");
        }
        if (window.scrollY < 50){
            document.querySelector('header').classList.remove("header-shrink");
            document.querySelector('.header-content').classList.remove("header-content-shrink");
            document.querySelector('h1').classList.remove("h1-shrink");
        }
            
    });
}

scrollFunction();

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
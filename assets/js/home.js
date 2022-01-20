{

    const navBar = document.querySelector(".header"); 
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll" , () => {
        if( lastScrollY < window.scrollY){
          console.log("we are going down");
          navBar.classList.add("nav-hidden")
        }
            else{
                console.log("we are going up");
                navBar.classList.remove("nav-hidden")
            }

            lastScrollY = window.scrollY;
    });
    }
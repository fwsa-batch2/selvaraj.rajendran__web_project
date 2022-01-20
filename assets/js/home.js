
// navbar hiding while scrolling
{
    const navBar = document.querySelector(".header"); 
    let lastScrollY = window.scrollY;
    window.addEventListener("scroll" , () => {
        if( lastScrollY < window.scrollY){
          console.log("we are going down");
          navBar.classList.add("nav-hidden");
        }
            else{
                console.log("we are going up");
                navBar.classList.remove("nav-hidden");
            }

            lastScrollY = window.scrollY;
    });
    }

    //search button and 
    {
        const searchBtn = document.querySelector(".search-btn");
        const searchBox = document.querySelector(".search-box");
        const searchInput = document.querySelector(".search-input");
        const cancelBtn = document.querySelector(".cancel");
        const searchData = document.querySelector(".search-data");

        searchBtn.onclick = () =>{
            searchBox.classList.add("active");
            searchInput.classList.add("active");
            searchBtn.classList.add("active");
            cancelBtn.classList.add("active");

            if(searchInput.value != "" ){
                let values = searchInput.value;
                searchData.classList.remove("active");
                searchData.innerHTML = "<img src='./../assets/images/oso.gif' alt='orange' height='100px' width='100px'>"  + "Sorry, there were no results for " + "&quot;" + values + "&quot;";

            }else{
                searchData.innerHTML = ""
            }
        }
        cancelBtn.onclick = () =>{
            searchBox.classList.remove("active");
            searchInput.classList.remove("active");
            searchBtn.classList.remove("active");
            cancelBtn.classList.remove("active");
            searchData.classList.add("active");
            searchInput.value = "";
        }



    }

 

// navbar hiding while scrolling and  closing search while scrolling

function init()
{
    const navBar = document.querySelector(".header"); 
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll" , () => {
        if( lastScrollY < window.scrollY){
          console.log("we are going down");
          navBar.classList.add("nav-hidden");
          searchBox.classList.remove("active");
          searchInput.classList.remove("active");
          searchBtn.classList.remove("active");
          cancelBtn.classList.remove("active");
          searchData.classList.add("active");
          searchInput.value = "";
        }
            else{
                console.log("we are going up");
                navBar.classList.remove("nav-hidden");
            }

            lastScrollY = window.scrollY;
    });
    

    //search button 

    const searchBtn = document.querySelector(".search-btn");
    const searchBox = document.querySelector(".search-box");
    const searchInput = document.querySelector(".search-input");
    const cancelBtn = document.querySelector(".cancel");
    const searchData = document.querySelector(".search-data");

    const bikes = [ {bikeName:"A", price:100}, {bikeName:"B", price:200}]
    
        searchBtn.onclick = () =>{
            searchBox.classList.add("active");
            searchInput.classList.add("active");
            searchBtn.classList.add("active");
            cancelBtn.classList.add("active");

            // "  n  " => "n"
            if(searchInput.value.trim() != "" ){
                let values = searchInput.value;
                searchData.classList.remove("active");
                searchData.innerHTML = `<img src='./../assets/images/oso.gif' alt='orange' height='100px' width='100px'>"
                  + "Sorry, there were no results for " + "&quot;" + values + "&quot;`;
            } else{
                const filteredBikes = bikes.filter(obj=> obj.bikeName.contains(searchInput.value.trim()));
                //todo foreach bikes = table
                searchData.innerHTML = "";
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
    

    init();
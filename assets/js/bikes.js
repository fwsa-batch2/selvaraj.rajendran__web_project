//list data
let cycleDataList ="";

let bikes = JSON.parse(localStorage.getItem("cycleList"));
for(let i of bikes){
    let bicycleName = i.cycleName;
    let bicycleType = i.cycleType;
    let bicyclePrice = i.price;
    let bicycleImg = i.image;

    cycleDataList +=
    `<div class="container" id="cyclebox">
    <div class="image">
        <img src=\"${bicycleImg}\" alt="cycle" height="200px" width="150px">
        <div class="data1">
            <p>
                 ${bicycleName}
            </p>
            <p>
                 ${bicycleType}
            </p>
            <p>
                RS.${bicyclePrice}/-only
            </p>
        </div>
    </div>
    
</div>`
}

let div = document.getElementById("cyclebox");
div.innerHTML = cycleDataList;
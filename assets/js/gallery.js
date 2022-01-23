
let image_array = [
    'g2.jpg',
    'g3.jpg',
    'g4.jpg',
    'g5.jpg',
    'g6.jpg',
    'g7.jpg',
    
  ]
  
  function randomimage(){
    let random_index = Math.floor(Math.random() * image_array.length);
    console.log(random_index);
   let selected_image = image_array[random_index];
    console.log(selected_image);
  
    document.getElementById('imageview').src = `./../assets/images/${selected_image}`;
    document.getElementById('bgimg').src = `./../assets/images/${selected_image}`;
    
  }

  setInterval(randomimage,  1200)


  function onpageload(){
    document.getElementById('imageview').src = `./../assets/images/ogback.jpg`;

  }
  
  onpageload();


function btn(x){

  if (x == "all") {
            document.getElementById("bikes").style.display = "";
            document.getElementById("Ride").style.display = "";
            document.getElementById("inim").style.display = "";
            document.getElementById("works").style.display = "";
            console.log('all');
           
        }
        else if( x == "bike"){
          document.getElementById("bikes").style.display = "block";
            document.getElementById("Ride").style.display = "none";
            document.getElementById("inim").style.display = "none";
            document.getElementById("works").style.display = "none";
            console.log('bike');

        }
        else if( x == "ride"){
          document.getElementById("bikes").style.display = "none";
            document.getElementById("Ride").style.display = "block";
            document.getElementById("inim").style.display = "none";
            document.getElementById("works").style.display = "none";
            document.getElementById("friend").style.display = "none";
            console.log('ride');

        }
        else if( x == "inim"){
          document.getElementById("bikes").style.display = "none";
            document.getElementById("Ride").style.display = "none";
            document.getElementById("inim").style.display = "block";
            document.getElementById("works").style.display = "none";
            document.getElementById("friend").style.display = "none";
            console.log('nim');

        }
        else if( x == "work"){
          document.getElementById("bikes").style.display = "none";
            document.getElementById("Ride").style.display = "none";
            document.getElementById("inim").style.display = "none";
            document.getElementById("works").style.display = "block";
            document.getElementById("fri").style.display = "none";
            console.log('work');

        } 
        else{
            console.log('else');
          
        }
}
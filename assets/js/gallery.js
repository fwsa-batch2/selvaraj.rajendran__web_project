
image_array = [
    'acc.jpg',
    'cobi.webp',
    'flye.jpg',
    'edited.jpg'
  ]
  
  function randomimage(){
    random_index = Math.floor(Math.random() * image_array.length);
    console.log(random_index);
    selected_image = image_array[random_index];
    console.log(selected_image);
  
    document.getElementById('imageview').src = `./../assets/images/${selected_image}`
  }


  function onpageload(){
    document.getElementById('imageview').src = `./../assets/images/ogback.jpg`

  }
  onpageload();
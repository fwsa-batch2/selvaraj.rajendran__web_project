let array = [];

function getdata() {
  event.preventDefault();
  let username = document.getElementById('NAME').value;
  let email = document.getElementById('mail').value;
  let password = document.getElementById('password').value;
  let confirmPassword = document.getElementById('Confirm').value;

  let customerDetail = {
    "name": username,
    "email": email,
    "password": password,
    "confirmPassword": confirmPassword
  }
  array.push(customerDetail);
  const detailInString = JSON.stringify(array);
  localStorage.setItem("customerList", detailInString);

  // window.location.href = "/home/selvarajrajendran/orangecycleshowroomapp-ui/index.html"
}
function render() {

  const users = localStorage.getItem("customerList");
  const customerList = JSON.parse(users);

  if (customerList) {
    array = customerList;
  }
  
}

render();
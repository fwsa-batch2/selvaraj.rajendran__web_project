let array = [];

function getdata() {
  event.preventDefault();
   let data =  JSON.parse(localStorage.getItem("customerList"));
   if(data == null){
     localStorage.setItem("customerList" , JSON.stringify([]))
   }
   
  let username = document.getElementById("NAME").value;
  let email = document.getElementById("mail").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("Confirmpass").value;

  let customerDetail = {
    "name": username,
    "email": email,
    "password": password,
    "confirmPassword": confirmPassword
  }

  const mail = mailChecking(email);
  console.log(mail);

  if (mail) {
    alert("Email already exits");
    return
  }

  const isMatch = passwordChecking();


  if (isMatch) {
    array.push(customerDetail);
    let detailInString = JSON.stringify(array);
    let ab = localStorage.setItem("customerList", detailInString);
    console.log("passwords matched");
    window.location.href = "login.html"
  } else {
    alert("password doen't match")
    pasclr();
  }


}
function render() {

  const users = localStorage.getItem("customerList");
  const customerList = JSON.parse(users);

  if (customerList) {
    array = customerList;
  }

}

render();



function passwordChecking() {

  let isMatch = false;


  const pw = document.getElementById("password").value;
  const cpw = document.getElementById("Confirmpass").value;



  if (pw == cpw) {
    isMatch = true;
  } else {
    isMatch = false;
  }
  return isMatch;
}

function clr() {
  let username = document.getElementById("NAME").value = ""
  let email = document.getElementById("mail").value = ""
  let password = document.getElementById("password").value = ""
  let confirmPassword = document.getElementById("Confirmpass").value = ""
}

function pasclr() {
  let confirmPassword = document.getElementById("Confirmpass").value = ""
  return confirmPassword;
}

function passshow() {
  const checkbox = document.getElementById("box");
  if (checkbox.checked) {
    document.getElementById("password").type = "text";
    document.getElementById("Confirmpass").type = "text";
    console.log("visible")
  } else {
    document.getElementById("password").type = "password";
    document.getElementById("Confirmpass").type = "password";
    console.log("!visible")
  }

}


function mailChecking(current_mail) {

  const datalo = localStorage.getItem("customerList");
  const checking  = JSON.parse(datalo);
  console.log(checking);

  let isExist = false;

  for (let i = 0; i < checking.length; i++) {
    const data1 = checking[i];
    
    console.log(data1)
    
    const checkemail = data1.email;

    console.log(checkemail)

    if (current_mail == checkemail) {
      isExist = true;
      break;
    }
  }
  console.log(isExist)
  return isExist;
}
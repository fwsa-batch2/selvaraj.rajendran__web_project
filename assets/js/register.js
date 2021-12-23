let selva = [];
function onpageLoad(){
  console.group("onpageLoad")
  const customerList = JSON.parse(localStorage.getItem("customerList"));                   // customerList = null
    console.log(customerList)
  if(customerList != null){                                           // false 
       selva = customerList;
       console.log(selva);
       console.groupEnd("onpageLoad");
  }
}
onpageLoad();

function getdata() {
  console.group("getdata");
  event.preventDefault();
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
    selva.push(customerDetail);
    let detailInString = JSON.stringify(selva);
    let ab = localStorage.setItem("customerList", detailInString);
    console.log("passwords matched");
    window.location.href = "login.html"
  } else {
    alert("password doen't match")
    pasclr();
  }
console.groupEnd();

}
function render() {
console.group("render");
  const users = localStorage.getItem("customerList");
  const customerList = JSON.parse(users);
console.table(customerList);
  if (customerList) {
    selva = customerList;
  }
console.groupEnd();
}

render();



function passwordChecking() {
console.group("passwordChecking");
  let isMatch = false;


  const pw = document.getElementById("password").value;
  const cpw = document.getElementById("Confirmpass").value;
 console.log(pw);
 console.log(cpw);

  if (pw == cpw) {
    isMatch = true;
    console.log("password matched");
  } else {
    isMatch = false;
    console.log("password mismatch");

  }
  console.groupEnd();
  return isMatch;
  
}

function clr() {
  let username = document.getElementById("NAME").value = ""
  let email = document.getElementById("mail").value = ""
  let password = document.getElementById("password").value = ""
  let confirmPassword = document.getElementById("Confirmpass").value = ""
}

function pasclr() {
  console.group("pasclr");
  console.log("confirm password cleared automatically" )
  let confirmPassword = document.getElementById("Confirmpass").value = ""
  console.groupEnd()
  return confirmPassword;
}

function passshow() {
  const checkbox = document.getElementById("box");
  if (checkbox.checked) {
    document.getElementById("password").type = "text";
    document.getElementById("Confirmpass").type = "text";
  } else {
    document.getElementById("password").type = "password";
    document.getElementById("Confirmpass").type = "password";
  }
console.groupEnd();
}


function mailChecking(current_mail) {
console.group("mailChcking");
  // const datalo = localStorage.getItem("customerList"); // datalo = null
  // const selva  = JSON.parse(datalo);                // checking = null
  console.log(selva);                                // null

  let isExist = false;

  for (let i = 0; i < selva.length; i++) {                 // i = 0 length
    const data1 = selva[i];
    
    console.log(data1)
    
    const checkemail = data1.email;

    console.log(checkemail)

    if (current_mail == checkemail) {
      isExist = true;
      break;
    }
  }
  console.log(isExist)
  console.groupEnd();
  return isExist;
}


// function onpageLoad(){
//     const users = localStorage.getItem("customerList");        //localstoarge = null
//     const customerList = JSON.parse(users);                   // customerList = null
//       console.log(customerList)
//     if(users != null){                                           // false 
//          array = users;
//          console.log(array)
//     } else{
//       localStorage.setItem("customerList",JSON.stringify([]));      // local storage key(customerlist) = []
//     }
//   }
//   onpageLoad();

// // function loginHandler(){
// //     event.preventDefault();
// //     let userEmail = document.getElementById("mail").value;           //usermail = user input
// //     let password = document.getElementById("password").value;       // password  =  user input 
// //     const users = localStorage.getItem("customerList");  
// //     const customerList = JSON.parse(users);  
// //     let len = customerList.length;


// // }

// function loginCheck(){
//  let loginCheck = false;
//  let userEmail = document.getElementById("mail").value;           
//  let userPassword = document.getElementById("password").value;
//  const users = localStorage.getItem("customerList");        
//     const customerList = JSON.parse(users);  
// console.log(customerList)



// let len = customerList.length;

// for ( let i = 0;i < len; i++){
//     let email = customerList[i].email;
//     let password = customerList[i].password;


//     if( userEmail === email && userPassword === password){
//         loginCheck = true;
//         break;
//     } else {
//         alert("invalid")
//     }

// }



// }










function submitHandler() {


    event.preventDefault();
    let loginMail = document.getElementById("mail").value;                //input from user
    let loginPassword = document.getElementById("password").value;         //input from user

    console.log(loginMail);
    console.log(loginPassword);


    let customerDetail = JSON.parse(localStorage.getItem("customerList"));       //data from local storage


    if (customerDetail != null) {

        console.log(customerDetail)
        len = customerDetail.length;
        for (i = 0; i < len; i++) {
            let mail = customerDetail[i].email;
            let pass = customerDetail[i].password;

            console.log(mail);
            console.log(pass);

            if (loginMail == mail && loginPassword == pass) {
                console.log(loginMail);
                console.log(loginPassword);
                alert("logged in successfully");
                window.location.href ="./../index.html";

            } else{
                alert("invalid user id and password")
            }

        }
    }else{
        alert("invalid user")
    }

}









function submitHandler(event) {


    event.preventDefault();
    let loginMail = document.getElementById("mail").value;                //input from user
    let loginPassword = document.getElementById("password").value;         //input from user

    console.log(loginMail);
    console.log(loginPassword);


    let customerDetail = JSON.parse(localStorage.getItem("customerList"));       //data from local storage


    if (customerDetail != null) {

        console.log(customerDetail)
       let len = customerDetail.length;

       let userExist =  false;
        for (let i = 0; i < len; i++) {
            let mail = customerDetail[i].email;
            let pass = customerDetail[i].password;

            console.log(mail);
            console.log(pass);

            if (loginMail == mail && loginPassword == pass) {
                console.log(loginMail);
                console.log(loginPassword);
                userExist = true;
                break; 
            } 

        } if(userExist){
            localStorage.setItem("loginDetails",loginMail)
            alert("logged in successfully");
            window.location.href ="./../index.html";
        } else{
            alert("invalid user id and password");
            return null;
        }



    }
    
    else{
        alert("invalid user")
    }

}







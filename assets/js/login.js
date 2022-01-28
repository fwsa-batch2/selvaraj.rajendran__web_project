
function submitHandler(event) {


    event.preventDefault();

    //step 1: 
    let loginMail = document.getElementById("mail").value;                //input from user
    let loginPassword = document.getElementById("password").value;         //input from user

    console.log(loginMail);
    console.log(loginPassword);


    //customerDetails (or) customerList
    let customerDetail = JSON.parse(localStorage.getItem("customerList"));       //data from local storage


    if (customerDetail != null) {

        console.log(customerDetail)
       let len = customerDetail.length;

       let userExist =  false;
        for (let i = 0; i < len; i++) {
            //let obj = customerDetail[i];
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
            //const userObj = { email: "n@gmail.com", role:"USER", name:"N"}; /// Welcome ${name} ; if (user.role)=='ROLE' then show Add Bike
            //JSON.stringify(userObj)
            //Avoid storing password for the loggedin user

            localStorage.setItem("loginDetails",loginMail)   //==> loginDetails: "n@gmail.com"
            //
            alert("logged in successfully");
            //if(user.role == "USER") then go to ""bike.html
            window.location.href ="./../index.html";
        } else{
            alert("invalid user id / password");
            return null;
        }

        // const userExist = [].some(obj=> obj.email == loginMail && obj.password == loginPassword)


    }
    
    else{
        alert("invalid user")
    }

}






